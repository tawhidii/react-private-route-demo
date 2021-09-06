import React from 'react';
import { useContext } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    console.log('Children !!',children)
    console.log('Rest',rest)
    let [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <Route {...rest} 
        render={({ location }) => loggedInUser.email ? 
        (children):(
            <Redirect
            to={{
                pathname:'/login',
                state:{from:location}
            }}
            />
        )}
        /> 
    );
};

export default PrivateRoute;


