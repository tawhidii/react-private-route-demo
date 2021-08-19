import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
         <div className='login'>
             <input type="text"  placeholder="Enter Email Address"/>
             <input type="text" placeholder="Name"/>
             <input type="password" placeholder="Password"/>
             <input type="password" placeholder="Confirm password"/>
             <input type="submit" value="Submit" />
         </div>
        </div>
    );
};

export default Login;