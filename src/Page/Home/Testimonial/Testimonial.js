import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestCard from './TestCard';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            place: 'California'
        },
        {
            id: 2,
            name: 'Tom Cruse',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            place: 'California'
        },
        {
            id: 3,
            name: 'Alaina Jery',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            place: 'California'
        },
    ]
    return (
        <div className='mt-32'>
            <div className='flex justify-between'>
                <div><h3 className='text-teal-400 font-bold text-xl mb-2'>Testimonial</h3>
                    <h1 className='text-gray-800 font-normal text-4xl mb-20'>What Our Patients Says</h1>
                </div>
                <img src={quote} alt="" className='lg:w-48 sm:w-24 h-40' />
            </div>
            <div className=' grid md:grid-cols-1 lg:grid-cols-3 gap-6 mt-20'>
                {
                    reviews.map(review => <TestCard key={review.id} review={review}></TestCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;