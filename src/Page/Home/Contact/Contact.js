import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton';
const Contact = () => {
    return (
        <section className='w-full mt-32 py-16 pb-' style={{ backgroundImage: `url(${appointment})` }}>
            <h3 className='text-teal-400 font-bold text-xl mb-2 text-center'>Contact Us</h3>
            <h1 className='text-5xl text-white font-semibold text-center '>Stay connected with us</h1>
            <form className='mt-10 mb-16 lg:mx-96 mx-20'>
                <input type="text" placeholder="Email Address" className="input w-full min-w-xs  mb-5" /><br />
                <input type="text" placeholder="Subject" className="input w-full min-w-xs mb-5" /><br />
                <textarea  type="submit" className="textarea  w-full min-w-xs  mb-9"placeholder="Your Message" /><br />
                <input type="text" value="Submit" className="btn bg-gradient-to-r border-none from-cyan-500 to-teal-500 lg:mx-48 md:mx-32 sm:mx-44 mx-4 mb-5" />
                
            </form>
        </section>
    );
};

export default Contact;