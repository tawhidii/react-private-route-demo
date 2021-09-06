import React, { useState } from 'react';
import './Login.css'
import googlePng from '../../icons/search.png'
import twitterPng from '../../icons/twitter.png'
import { Link,useHistory, useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App'

const Login = () => {
    const auth = getAuth()

    // Load User Context API
    const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
    // Load history 
    let history = useHistory()
    // Load loaction 
    let location = useLocation()
    // Track where from came 
    let { from } = location.state || {from: { pathname:'/'}}
    console.log('from .....',from)    
   

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

    const handleSubmit = (event) => {
        handleSigIn(user.email,user.password)
        event.preventDefault()
        event.target.reset()
    }

    // Sigin with firebase login
    const handleSigIn = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user

            setUserLoggedIn(user)
            history.replace(from)
        })
        .catch(error=>{
            const newUserInfo = {...user}
            newUserInfo.message = error.message
            newUserInfo.success = false
            setUser(newUserInfo)
        })
    }

    const handleOnBlur = (event) => {
        const newUserInfo = {...user}
        newUserInfo[event.target.name] = event.target.value
        setUser(newUserInfo)
    }
    console.log(userLoggedIn)
    return (
        <div>
            <div className="login-form">

                <form action="" onSubmit={handleSubmit}>
                    <h4>Login</h4>
                    <input name="email" type="text" placeholder="Enter Email" onBlur={handleOnBlur}/>
                    <input name="password" type="password" placeholder="Enter Password" onBlur={handleOnBlur}/>
                    <input className="post-btn" type="submit" value="Login" />
                    {
                        !user.success ? <p style={{color:'red'}}>{user.message}</p> : <p></p>
                    }
                </form>       
            </div>
              
            <div className="social-login">
    
                <button><img src={googlePng} alt="google" /> Continue with Google</button>
                <button><img src={twitterPng} alt="twitter" /> Continue with Twitter</button>
                <br />
                <div className="subtext">
                    <h6>Need an account?</h6> <Link to="/register"><h6> Click here !!</h6></Link>
                </div>
            </div>
        </div>

     
    );
};

export default Login;