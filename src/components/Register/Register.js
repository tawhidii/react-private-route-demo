import React from 'react';
import './Register.css'
import googlePng from '../../icons/search.png'
import microsoftPng from '../../icons/microsoft.png'
import { useState } from 'react';
const Register = () => {
    // Intialize state or user obj
    const [user,setUser] = useState({
        isSignIn:false,
        email:"",
        fullName:"",
        password:"",
        confirmPassword:"",
        photo:"",
    })
    // Handle data submit 
    const handleOnBlur = (event) => {
        const newUserInfo = {...user}
        newUserInfo[event.target.name] = event.target.value
        setUser(newUserInfo)
    }
    // Handle form Submit 
    const handleSubmit = (event) =>{
        createUser(user.email,user.password)
        event.preventDefault()
        event.target.reset()
        

    }
    // Normal User creation 
    const createUser = (name,email) =>{
        console.log(name,email)
    }


    return (
        <div>
            <div className="login-form">

                <form onSubmit={handleSubmit}>
                    <h4>Register</h4>
                    <input name="email" type="email"  onBlur={handleOnBlur} placeholder="Enter Email" required/>
                    <input name="fullName" type="text" onBlur={handleOnBlur} placeholder="Full Name" required/>
                    <input name="password" type="password" onBlur={handleOnBlur} placeholder="Enter Password" required/>
                    <input name="confirmPassword" onBlur={handleOnBlur} type="password" placeholder="Re-type Password" required/>
                    <input className="post-btn" type="submit" value="Register" />
                </form>       
            </div>
            
            <div className="social-login">
                <h6>Or</h6>
                <button><img src={googlePng} alt="google" /> Continue with Google</button>
                <button><img src={microsoftPng} alt="google" /> Continue with Microsoft</button>
            </div>
        </div>
    );
};

export default Register;