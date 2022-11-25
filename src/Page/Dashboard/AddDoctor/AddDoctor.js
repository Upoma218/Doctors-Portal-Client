import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();
    
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-phi-six.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                // console.log(imgData.data.url);
                const doctor = {
                    name: data.name, 
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }

                // save doctor information to the database
                fetch('https://doctors-portal-server-phi-six.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name}  added successfully`);
                    navigate('/dashboard/manageDoctors')
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='p-14 bg-base-200'>
            <h1 className='text-2xl mb-6'>All Users</h1>
            <div>
                <div className='w-96 p-7 rounded-2xl bg-white'>
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Enter Your Name' />
                            {errors.name && <p className='text-red-600 py-3'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email"{...register('email', {
                                required: "Email is required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Enter Your email' />
                            {errors.email && <p className='text-red-600 py-3'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Specialty</span></label>
                            <select {...register("specialty", {
                                required: "Specialty is Required"
                            })} className="input input-bordered w-full min-w-xs">
                                {
                                    specialties &&
                                    specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full min-w-xs mt-5">
                            <label className="label"> <span className="label-text"></span></label>
                            <input type='file' {...register("image", {
                                required: "Photo is Required"
                            })} className="input input-bordered border-dashed w-full min-w-xs p-2" placeholder='Upload Your Photo' />
                            {errors.image && <p className='text-red-600 py-3'>{errors.image.message}</p>}
                        </div>
                        <input className='btn mt-5 w-full text-white' value="Add" type="submit" />
                        {/* {signUpError && <p className='text-red-600 py-3'>{signUpError}</p>} */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;

/**Three places to store images
 * third party image hosting server
 * File system of your server
 * mongodb(database)
 */