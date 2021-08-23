import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductList from '../ProductList/ProductList';
import './HomePage.css'

const HomePage = () => {
    // Setting a state of product object 
    const [products,setProducts] = useState([])

    // fecting product data from products api endpoint 
    useEffect(function(){
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="container">
            {
                products.map(prod=><ProductList product={prod} key={prod.id}></ProductList>)
            }
           
        </div>
    );
};

export default HomePage;