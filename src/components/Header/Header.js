import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="main-head">
            <div className="navbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <button><Link to='/login'>Login</Link></button>
            </div>
        </div>
    );
};

export default Header;