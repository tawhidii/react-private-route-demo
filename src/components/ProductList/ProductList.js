import React from 'react';
import './ProductList.css'
const ProductList = (props) => {
    const {title,image,price} = props.product
    return (
        <div className="products-list">
            <img src={image} alt="" />
            <p>{title}</p>
            <p>Price: {price}$</p>
        <div className="p-button">
            <button>Buy Now</button>
            <button>Details</button>
        </div>
        </div>
    );
};

export default ProductList;