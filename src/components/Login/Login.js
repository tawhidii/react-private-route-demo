import React from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle,faMicrosoft} from '@fortawesome/free-brands-svg-icons'
const Login = () => {
    return (
        <div className="login-container">
        <div className='login'>
            <input type="text"  placeholder="Enter Email Address"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </div>
        <div className="social-auth">
            <button className="google"> <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>  Continue with Google </button>
            <button className="microsoft"><FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon> Continue with Microsoft </button>
        </div>
       </div>
    );
};

export default Login;