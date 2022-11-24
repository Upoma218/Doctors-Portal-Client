import React from 'react';

const AvailableAppointment = ({ appointmentOption, setTreatment }) => {
    const { name, slots, price } = appointmentOption;
    return (
        <div className="card shadow-2xl">
            <div className="card-body items-center text-center">
                <h3 className='text-teal-400 font-bold text-xl mb-2'>{name}</h3>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <label
                        disabled={slots.length === 0}
                        className="btn bg-gradient-to-r border-none from-cyan-500 to-teal-500 text-white"
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal" >
                        BOOK APPOINTMENT
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;