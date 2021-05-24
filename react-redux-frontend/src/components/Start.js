import React from 'react';
import {Link} from 'react-router-dom';
import LogIn from './LogIn';

const Start = () => {
    return (
        <div className="card">
            <h1>Goal Monster</h1>
            <h3>Create and Keep Track of Your Goals</h3>
            
            <LogIn />
        </div>
    )
}

export default Start;