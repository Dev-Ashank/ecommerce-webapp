import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, Navigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

import instance from "./axios";
import { db } from "./firebase";
import axios from "axios";
fetch(
  "http://127.0.0.1:5001/ecommerce-webapp-7919f/us-central1/api/payments/create",
  {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }
);
function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [successeded, setSuccesseded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      try {
        const total = getCartTotal(cart) * 100;
        const response = await axios.post("/payments/create", { total });
        console.log(response.data.clientSecret);
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        setError("Error in getClientSecret ", error.message);
      }
    };
    getClientSecret();
  }, [cart]);

  console.log("CLIENT SECRET CODE _____-----", clientSecret);

  const handleSubmit = async (event) => {
    //stripe handling
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // store order data in firebasestore

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          })
          .then(() => {
            console.log("Order successfully written!");
          })
          .catch((error) => {
            console.error("Error writing order: ", error);
          });
        setSuccesseded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_CART",
        });
        Navigate("/orders", { replace: true });
      });
  };
  const handleChange = (event) => {
    //handle changes in card
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment_container">
      <h1>
        Checkout (<Link to={"/checkout"}> {cart?.length} items </Link>)
      </h1>
      {/* {address} */}
      <div className="payment_section">
        <div className="payment_title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment_address">
          <p>{user?.email}</p>
          <p>Patna,Bihar</p>
          <p>800001</p>
        </div>
      </div>
      {/* {review items} */}
      <div className="payment_section">
        <div className="payment_title">
          <h3>Review Items</h3>
        </div>
        <div className="payment_items">
          {cart.map((item) => (
            <CheckoutProduct
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      {/* {Payment method} */}
      <div className="payment_section">
        <div className="payment_title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment_details">
          {
            /* {Stripe} */
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Total price : {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || successeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error on card method */}

              {error && <div>{error}</div>}
            </form>
          }
        </div>
      </div>
    </div>
  );
}

export default Payment;
