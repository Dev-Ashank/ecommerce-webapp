import React from "react";
import "./Product.css";

function Product({id, title, image, price, rating }) {
  return (
    <div className="product">
      <img src= {image} alt="" />
      <div className="product_info">
        <p> {title} </p>
      </div>
      <div className="product_price">
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐️</p>
          ))}
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
