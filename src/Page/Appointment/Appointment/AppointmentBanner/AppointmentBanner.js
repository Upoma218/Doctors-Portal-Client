import React, { useState } from 'react';
import BgImg from '../../../../assets/images/bg.png';
import HeroImg from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    // let footer = <p>Please pick a day.</p>;
    // if (selectedDate) {
    //   footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    // }
    return (
        <div className="hero mx-auto" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroImg} className="rounded-lg lg:w-1/2 lg:pt-52 lg:pb-40" alt='Dentist chair' />
                <div className='lg:ml-44 lg:mt-20 lg:mr-32  rounded-2xl shadow-lg'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        // footer={footer}
                    />
                    <p className='p-6'>You have selected date: {format(selectedDate, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;