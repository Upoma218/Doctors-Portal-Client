import React from 'react';

const TestCard = ({ review }) => {
    const { name, description, img, place } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className='flex mx-8 mb-8'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className='ml-4'>
                    <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
                    <p className='text-base'>{place}</p>
                </div>
            </div>
        </div>
    );
};

export default TestCard;