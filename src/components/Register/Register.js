import React from 'react';
import './Register.css'

import googlePng from '../../icons/search.png'
import microsoftPng from '../../icons/microsoft.png'
import { useState } from 'react';
import firebaseConfig from '../../firebase.config';
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider } from "firebase/auth";

initializeApp(firebaseConfig)
const auth = getAuth()

const Register = () => {
    // Intialize state or user obj
    const [user,setUser] = useState({
        isSignIn:false,
        email:"",
        fullName:"",
        password:"",
        confirmPassword:"",
        photo:"",
        success:false,
        message:"",

    })
    // Handle data submit 
    const handleOnBlur = (event) => {
        const newUserInfo = {...user}
        newUserInfo[event.target.name] = event.target.value
        setUser(newUserInfo)
    }
    // Handle form Submit 
    const handleSubmit = (event) =>{
        createUser(user.email,user.confirmPassword)
        event.preventDefault()
        event.target.reset()
        

    }
    // Normal User creation 
    const createUser = (email,password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(response=>{
            let newUserInfo = {...user}
            newUserInfo.success = true
            setUser(newUserInfo)
            updateUserProfile(newUserInfo.fullName)

        })
        .catch(error=>{
            let newUserInfo = {...user}
            newUserInfo.message = error.code
            setUser(newUserInfo)
            
        })
    }
    
    // Upadate User profile (anytime)
    const updateUserProfile = name =>{
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(response=>{
            console.log(response)
            console.log('Updated Successfully')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    // Social authentication (with google and microsoft)
    const socialAuth = providerName =>{
        if(providerName === 'google'){
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth,provider)
            .then(result=>{
                console.log(result.user)
                const {displayName,email,photoURL} = result.user
                const userInfo = {
                    isSignIn:true,
                    email:email,
                    fullName:displayName,
                    photo:photoURL,
        
                }
                setUser(userInfo)
            })
            .catch(error=>{
                console.log(error.message)
            })

        }
        if(providerName === 'microsoft'){
            console.log('Msn calling')
        }
    }

    console.log('User info ==> ',user)
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
                    {
                        user.success ? <p style={{color:"green"}}>Registration Sucessful</p> : 
                                    <p style={{color:'red'}}>{user.message}</p>  
                    }
                    
                </form>       
            </div>
            
            <div className="social-login">
                
                <button onClick={()=>socialAuth('google')} type="submit"><img src={googlePng} alt="google"/> Continue with Google</button>
                <button onClick={()=>socialAuth('microsoft')}type="submit"><img src={microsoftPng} alt="microsoft" onClick={()=>socialAuth('microsoft')} /> Continue with Microsoft</button>
            </div>
          
        </div>
    );
};

export default Register;