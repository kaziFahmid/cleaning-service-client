import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useMyAppoinments from '../../hooks/useMyAppoinments';
import { Button, message } from 'antd';


 

export default function CheckoutForm({_id,rate,cleaningName,firstName,lastName}){
  const stripe = useStripe();
  const elements = useElements();
const [cardError,setCardError]=useState('')
const [clientSecret, setClientSecret] = useState("");
const [processing, setProcessing] = useState(false);
const [transactionId, setTransactionid] = useState('');
const [refetch,myappoinments]=useMyAppoinments()
const{user}=useAuth()
const [messageApi, contextHolder] = message.useMessage();
useEffect(() => {

    axios.post("/create-payment-intent",{rate})
    .then(res=>{
        setClientSecret(res.clientSecret)
    })
    }, []);

  const handleSubmit = async (event) => {

    event.preventDefault();
   
    
    if (!stripe || !elements) {

      return;
    }


  
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
        setCardError('')
    ;

    }
    setProcessing(true)
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
                email: user?.email||'unknown',
              name: user?.displayName||'anonymous',

            },
          },
        },
      );
if(confirmError){
    console.log(confirmError)
}
setProcessing(false)
if(paymentIntent.status==='succeeded'){
    setTransactionid(paymentIntent.id)
    const transactionId=paymentIntent.id
    const payment={
        email:user?.email,
        transactionId,
        rate:parseInt(rate),
        cleaningName,
        name:firstName+' '+lastName,
        status:"Paid",
        serviceId:_id,

    }
    axios.post('/payments',payment)
    .then(res=>{
        console.log(res.result)
        if(res.result.insertedId){
            refetch()
            messageApi.open({
                type: 'success',
                content: 'Your Payment has been completed Successfully',
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
              });
        }
    })
}









  };

  return (
 <>
  {contextHolder}
 <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn bg-blue-500 text-white mt-9' type="submit" disabled={!stripe||!clientSecret||processing}>
        Pay
      </button>
    </form>

    {cardError&&<p className='text-red-600'>{cardError}</p>}
 
 {transactionId&&<p className='text-green-400'>Transaction Completed with transactionId {transactionId}</p>}
 
 
 
 </>
  );
};