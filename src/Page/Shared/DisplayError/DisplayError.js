import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const {logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <p className='text-red-700 p-40 text-5xl font-bold'>Opps!! Something went wrong</p>
            <p className='text-red-700 p-8 text-xl font-bold'>{error.statusText || error.message}</p>
            <h3 className='text-blue-500 p-8 text-3xl font-bold'> <button className='btn btn-info' onClick={handleLogOut}>Logout</button></h3>
        </div>
    );
};

export default DisplayError;