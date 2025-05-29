import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/Order Confirmation.png";

function OrderConfirmation() {
  return (
    <div className="order-confirmation">
      <h2>Thank You For Your Purchase</h2>
      <img src={Img} />
      <h1>Order #123RGR231567Y Confirmed</h1>
      <Link to="/" className="ProductButton">
        Go back to Homepage
      </Link>
    </div>
  );
}

export default OrderConfirmation;
