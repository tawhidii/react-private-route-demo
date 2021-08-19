import React from 'react';
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle,faMicrosoft} from '@fortawesome/free-brands-svg-icons'
 

const Register = () => {
    return (
        <div className="register-container">
         <div className='register'>
             <input type="text"  placeholder="Enter Email Address"/>
             <input type="text" placeholder="Name"/>
             <input type="password" placeholder="Password"/>
             <input type="password" placeholder="Confirm password"/>
             <button type="submit">Register</button>
         </div>
         <div className="social-auth">
             <button className="google"> <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>   Continue with Google </button>
             <button className="microsoft"><FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon> Continue with Microsoft</button>
         </div>
        </div>
    );
};

export default Register;