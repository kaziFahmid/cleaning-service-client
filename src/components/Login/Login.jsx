import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {  useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 characters')
    .required('Password is Required'),
});

export default function Login() {
  
    let navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
    const {signInUser}=useAuth()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
        signInUser(values.email,values.password)
        .then((userCredential) => {

            const user = userCredential.user;

            navigate(from, { replace: true });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    },
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg bg-[url('https://img.freepik.com/free-vector/water-wave-bubbles-with-sun-rays-background_1017-18135.jpg?w=740&t=st=1687607421~exp=1687608021~hmac=64740d188b2d6f0b21eb68172b04913c0fa98b892ccb5cf9d1daca51ea69ad68')]"></div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-red-600">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******************"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="text-red-600">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                <label className="text-sm" htmlFor="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/signup">
                  Create an Account!
                </Link>
              </div>
              <div className="text-center">
                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
