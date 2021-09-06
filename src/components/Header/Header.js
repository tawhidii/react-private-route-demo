import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
    const [loggedInuser] = useContext(UserContext)
    const {displayName} = loggedInuser
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-custom  sticky-top">
            <Link className="navbar-brand" to="/">Fake Store</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    {
                        displayName ? <h5 style={{color:'greenyellow'}}>{displayName}</h5>:<li className="nav-item nav-login">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    }
                 
                </ul>

        </div>
    </nav>
    );
};

export default Header;