import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light nav-custom">
            <Link className="navbar-brand" to="/">Fake Store</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item nav-login">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>

        </div>
    </nav>
    );
};

export default Header;