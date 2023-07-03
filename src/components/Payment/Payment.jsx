import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51NEswgCkTlza3PsZYkJZeN1MVRfeFiME6AuW1KdUT5H0RMRdEPbhGDp7H7RwDu1mb2jXc4Fe2zu8z54D93P1zQtF00x4cLL2WN');
export default function Payment() {

  const data=useLoaderData()

  return (
    <div>

      <h1 className='text-center text-4xl mt-5'>Payment </h1>

      <h1 className='text-black text-3xl font-semibold mb-5'>{data.rate}</h1>
     <Elements stripe={stripePromise}>
      <CheckoutForm {...data} />
    </Elements>
  
    </div>
  )
}
