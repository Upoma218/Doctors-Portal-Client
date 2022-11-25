import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
// import Loading from '../../../Shared/Loading/Loading';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
console.log(stripePromise)

const Payment = () => {

    const booking = useLoaderData();
    const navigation = useNavigation();
    // console.log('booking', booking)
    // const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }

    if(navigation.state === 'looking'){
        <Loading></Loading>
    }

    return (
        <div className='p-14 bg-teal-50'>
            <h1 className='text-2xl mb-6'>Payment for {treatment}</h1>
            <p className='bg-white p-10 rounded font-semibold text-2xl text-yellow-900'>Please pay <strong>$ {price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 p-4 my-6 shadow-xl bg-white rounded-lg'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking = {booking}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;