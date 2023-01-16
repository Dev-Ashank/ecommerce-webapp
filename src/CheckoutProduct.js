import React from "react";
import "./CheckoutProduct.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove item from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
      title: title,
    });
  };
  return (

    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small> <strong>{price}</strong>
        </p>
      </div>

      <div className="checkoutProduct_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐️</p>
          ))}
      </div>

      <button onClick={removeFromCart}>Remove from cart</button>
    </div>

  );
}

export default CheckoutProduct;
