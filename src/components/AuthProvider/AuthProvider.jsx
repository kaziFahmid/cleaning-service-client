import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../../firebase.config';
import axios from 'axios';
const auth = getAuth(app)
export const AuthContext=createContext(null)

export default function AuthProvider({children}) {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
   
        return signOut(auth)
    }
    const handleGoogleSignin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)

            if(currentUser){
                axios.post('/jwt',{email:currentUser.email})
                .then(res=>{
                  localStorage.setItem('access-token',res.token)
             
                })
            }
            else{
                localStorage.removeItem('access-token')

            }
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
        
    },[])
    const userInfo={
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        handleGoogleSignin,
       
    }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}
