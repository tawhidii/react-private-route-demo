import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import salad from '../../media/images/salad.png'
import burger from '../../media/images/hamburger.png'
import pizza from '../../media/images/pizza.png'
import steak from '../../media/images/steak.png'
import drink from '../../media/images/drink.png'
const Home = () => {
    return (
    <div className="home-container">
        <Link to='/salad'>
        <div className="food-item">
            <img src={salad} alt="" />
            <h3>Salad</h3>
        </div>
        </Link>

        <Link to='/burger/'>
        <div className="food-item">
            <img src={burger} alt="" />
            <h3>Burger</h3>
        </div>
        </Link>

        <Link to='/pizza'>
        <div className="food-item">
            <img src={pizza} alt="" />
            <h3>Pizza</h3>
        </div>
        </Link>
        <Link to='/steaks'>
        <div className="food-item">
            <img src={steak} alt="" />
            <h3>Steak</h3>
        </div>
        </Link>
        <Link to="/drinks">
        <div className="food-item">
            <img src={drink} alt="" />
            <h3>Drinks</h3>
        </div>
        </Link>
    </div>
    );
};

export default Home;