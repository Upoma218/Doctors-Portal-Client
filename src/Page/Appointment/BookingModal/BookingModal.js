import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    // treatment and appointmentOption are same..but we can't use the same name at a time,,that's why ,we have declared a different state
    const date = format(selectedDate, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            slot,
            patient:name,
            email,
            phone
        }
        /* 
        TODO: send data to the server and once data is saved then close the modal and display the toast
         */

        console.log(booking);
        setTreatment(null)
    }
    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} className="input w-full min-w-xs my-3 bg-base-300 font-semibold" readOnly />
                        <select name='slot' className="select  w-full min-w-xs bg-base-300">
                            {
                                slots &&
                                slots.map((slot,i) => <option key={i} selected value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full min-w-xs my-3" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full min-w-xs my-3" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full min-w-xs my-3" />
                        <input  type="submit" className="input input-bordered w-full min-w-xs my-3 btn bg-slate-900 border-none text-white" value='SUBMIT' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
