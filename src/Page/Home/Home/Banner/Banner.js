import React from 'react';
import HeroImg from '../../../../assets/images/chair.png';
import BgImg from '../../../../assets/images/bg.png';
import PrimaryButton from '../../../../Components/PrimaryButton';


const Banner = () => {
    return (
        <div className="hero mx-auto"style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroImg} className="rounded-lg lg:w-1/2 lg:pt-36 lg:pb-40"alt='' />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;