import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import AvailableAppointment from './AvailableAppointment';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions,setAppointmentOptions] = useState(null);
    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
        
    },[])
    const [treatment,setTreatment] = useState([]);
    
    return (
        <section>
            <h1 className='text-center text-teal-500 font-semibold text-2xl p-16'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions &&
                    appointmentOptions.map(appointmentOption => <AvailableAppointment key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment}></AvailableAppointment>)
                }
            </div>
            {
                treatment &&
                <BookingModal 
                treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}>
                </BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;

