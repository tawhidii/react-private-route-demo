
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext()


function App() {
  const [userLoggedIn,setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn,setUserLoggedIn]}>
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
           <HomePage/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/products/:Id">
            <ProductDetails/>
          </PrivateRoute>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
