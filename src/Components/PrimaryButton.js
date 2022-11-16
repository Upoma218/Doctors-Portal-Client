import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r border-none from-cyan-500 to-teal-500 text-white">{children}</button>
    );
};

export default PrimaryButton;