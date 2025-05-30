import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "./Checkout/OrderSummary";
import SelectAddress from "./Checkout/SelectAddress";
import NewAddress from "./Checkout/NewAddress";
import Payment from "./Checkout/Payment";
import OrderConfirmation from "./Checkout/OrderConfirmation";

function Checkout4() {
  return (
    <>
      {/* <div className="checkout">
        <Link to="/" className="checkout-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <g clipPath="url(#clip0_648_3053)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.48453 9.1875H19.6872C20.0353 9.1875 20.3692 9.32578 20.6153 9.57192C20.8614 9.81806 20.9997 10.1519 20.9997 10.5C20.9997 10.8481 20.8614 11.1819 20.6153 11.4281C20.3692 11.6742 20.0353 11.8125 19.6872 11.8125H4.48453L10.5102 17.8382C10.7567 18.0845 10.8952 18.4186 10.8953 18.767C10.8954 19.1154 10.7572 19.4496 10.5109 19.696C10.2646 19.9425 9.9305 20.081 9.58209 20.0811C9.23368 20.0813 8.89948 19.943 8.65303 19.6967L0.384282 11.4279C0.138226 11.1818 0 10.848 0 10.5C0 10.152 0.138226 9.81819 0.384282 9.57206L8.65303 1.30331C8.89966 1.05703 9.23402 0.918814 9.58255 0.91906C9.93109 0.919306 10.2653 1.058 10.5115 1.30462C10.7578 1.55125 10.896 1.88561 10.8958 2.23415C10.8955 2.58268 10.7568 2.91685 10.5102 3.16312L4.48453 9.1875Z"
                fill="#585858"
              />
            </g>
            <defs>
              <clipPath id="clip0_648_3053">
                <rect width="21" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <div className="checkout-container">
          <OrderSummary />
          <SelectAddress />
          <NewAddress />
          <Payment />
        </div>
      </div> */}
      <OrderConfirmation />
    </>
  );
}

export default Checkout4;
