import React from 'react';
import './Product.css';
function Product() {
    return (
        <div
        className='product'>
            <div
            className="product__info">
                <p>Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>697.30</strong>
                </p>
                <div
                className="product__rating">
                    <p>⭐⭐⭐⭐</p>
                </div>
            </div>
            <img
            className="product__image"
            src="https://images-na.ssl-images-amazon.com/images/I/71z2dc%2BXnrL._AC_SX679_.jpg"
            alt="Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy"
           ></img>
           <button>Add to cart</button>
        </div>
    )
}

export default Product

