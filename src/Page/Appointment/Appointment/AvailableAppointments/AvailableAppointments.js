import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../../BookingModal/BookingModal';
import AvailableAppointment from './AvailableAppointment';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    // const [appointmentOptions,setAppointmentOptions] = useState(null);
    const date = format(selectedDate,'PP');

    const { data: appointmentOptions = [],refetch,isLoading } = useQuery({
        queryKey: ['appointmentOptions',date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-phi-six.vercel.app/v2/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data;
        }
        })

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-phi-six.vercel.app/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))

    // },[])
    if(isLoading){
        return <Loading></Loading>
    }

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
                    treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}
                    refetch={refetch}
                    >
                </BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;

