import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProductList.css'
const ProductList = (props) => {
    const {id,title,image,price} = props.product
    const history = useHistory()
    const handleProductDetail = (id) => {
        history.push(`products/${id}`)

    }
    return (
        <div className="products-list">
            <img src={image} alt="" />
            <p>{title}</p>
            <p>Price: {price}$</p>
        <div className="p-button">
            <button>Buy Now</button>
            <button onClick={()=>handleProductDetail(id)}>Details</button>
        </div>
        </div>
    );
};

export default ProductList;