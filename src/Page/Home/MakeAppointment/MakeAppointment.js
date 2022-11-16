import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton';

const MakeAppointment = () => {
    return (
      <section className='w-full' style={{ backgroundImage: `url(${appointment})` }}>
          <div className="hero lg:my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="-mt-32 -mb-4 lg:w-1/2 hidden lg:block md:block" alt='' />
                <div className='lg:ml-8'>
                    <h3 className='text-teal-400 font-bold text-xl mb-2'>Appointment</h3>
                    <h1 className="text-5xl text-white font-bold">Box Office News!</h1>
                    <p className="py-4 text-white">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content here, content <br /> here', making it look like readable English. Many desktop <br /> publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
      </section>
    );
};

export default MakeAppointment;