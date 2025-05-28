import React, { useState } from "react";
import { Link } from "react-router-dom";
import Kids from "../assets/Kids/Product Images/Product Image.png";
import Adults from "../assets/Adults/Product Images/Product Image.png";
import EmptyCart from "../assets/Empty Cart.png";

function Cart({ onClose }) {
  return (
    <div className="cart">
      <div className="cart-header">
        <h2>2 Items in your Bag</h2>
        <div className="cart-hide-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_502_1509"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_502_1509)">
              <path
                d="M5.45301 15.8333L4.16699 14.5473L8.72942 9.98488L4.16699 5.45269L5.45301 4.16667L10.0154 8.7291L14.5476 4.16667L15.8337 5.45269L11.2712 9.98488L15.8337 14.5473L14.5476 15.8333L10.0154 11.2709L5.45301 15.8333Z"
                fill="#121212"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="cart-list">
        <div className="cart-list-set">
          <img src={Kids} />
          <div className="cart-list-set-info">
            <div className="cart-list-set-info-text">
              <section>
                <h3>Kids Multivitamin Gummies</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                  amet .consectetur
                </p>
              </section>
              <p>$25</p>
            </div>
            <div className="cart-list-set-info-quantity">
              <section>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="9"
                    width="14"
                    height="2"
                    rx="1"
                    fill="#606060"
                  />
                </svg>
                <p>1</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H9V4C9 3.44772 9.44772 3 10 3C10.5523 3 11 3.44772 11 4V9Z"
                    fill="#606060"
                  />
                </svg>
              </section>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="cart-list-set">
          <img src={Adults} />
          <div className="cart-list-set-info">
            <div className="cart-list-set-info-text">
              <section>
                <h3>Adult Multivitamin Gummies</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                  amet .consectetur
                </p>
              </section>
              <p>$25</p>
            </div>
            <div className="cart-list-set-info-quantity">
              <section>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="9"
                    width="14"
                    height="2"
                    rx="1"
                    fill="#606060"
                  />
                </svg>
                <p>1</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H9V4C9 3.44772 9.44772 3 10 3C10.5523 3 11 3.44772 11 4V9Z"
                    fill="#606060"
                  />
                </svg>
              </section>
              <button>Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-cart-list">
        <img src={EmptyCart} />
        <section>
          <h3>No Product</h3>
          <p>Go find the products you like.</p>
        </section>
      </div>
      <div className="cart-sub-total">
        <section>
          <h2>Subtotal</h2>
          <h2>$50</h2>
        </section>
        <div className="cart-place-order-button">
          <Link to="/checkout" onClick={onClose} className="ProductButton">Place Order</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
