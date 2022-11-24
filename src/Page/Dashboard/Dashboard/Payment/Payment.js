import React, {  useContext, useEffect } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
// import Loading from '../../../Shared/Loading/Loading';

const Payment = () => {

    const booking = useLoaderData();
    console.log('booking',booking)
    // const navigation = useNavigation();
    // const { treatment, price, appointmentDate, slot } = booking;
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }



    return (
        <div className='p-14 bg-teal-50'>
            <h1 className='text-2xl mb-6'>Payment</h1>
        </div>
    );
};

export default Payment;