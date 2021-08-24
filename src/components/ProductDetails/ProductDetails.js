import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDeatils.css'
const ProductDetails = () => {
    let {Id} = useParams()
    const [singleProduct,setSingleProduct] = useState({})
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${Id}`)
        .then(response=>response.json())
        .then(data=>setSingleProduct(data))
    },[Id])
    const {title,price,image,description} = singleProduct
    return (
        <div className="container product-details">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-12">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="col-lg-5 col-md-12 col-12 details">
                    <h4>{title}</h4>
                    <p>Price : {price}</p>
                    <p>{description}</p>
                    <button>Buy !!</button>
                </div> 
            </div>
        </div>
    );
};

export default ProductDetails;