import React from 'react';
import './Login.css'
import googlePng from '../../icons/search.png'
import microsoftPng from '../../icons/microsoft.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="login-form">

                <form action="">
                    <h4>Login</h4>
                    <input type="text" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <input className="post-btn" type="submit" value="Login" />
                </form>       
            </div>
            
            <div className="social-login">
                <h6>Or</h6>
                <button><img src={googlePng} alt="google" /> Continue with Google</button>
                <button><img src={microsoftPng} alt="google" /> Continue with Microsoft</button>
                <br />
                <div className="subtext">
                    <h6>Need an account?</h6> <Link to="/register"><h6> Click here !!</h6></Link>
                </div>
            </div>
        </div>

     
    );
};

export default Login;