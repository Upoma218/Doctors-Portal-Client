import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgColor} = card;
    return (
        <div className={`card card-side shadow-xl ${bgColor} text-white py-12 px-8 flex-col lg:flex-row`}>
            <figure><img src={icon} alt='' className='w-20 '/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;