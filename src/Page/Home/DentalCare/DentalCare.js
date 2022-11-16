import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../Components/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen lg:my-28 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='lg:ml-24'>
                    <h1 className="text-5xl font-bold text-gray-800">Exceptional Dental<br /> Care,on Your Terms</h1>
                    <p className="py-4">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content here, content <br /> here', making it look like readable English. Many desktop <br /> publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;