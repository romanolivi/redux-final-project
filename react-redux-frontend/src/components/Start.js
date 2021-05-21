import React from 'react';
import {Link} from 'react-router-dom';

const Start = () => {
    return (
        <div>
            <h1 className="title">Redux Final Project</h1>
            <Link className="login-btn" to={'/login'}>
                Login
            </Link>

            <Link className="signup-btn" to={'/signup'}>
                Signup
            </Link>
        </div>
    )
}

export default Start;