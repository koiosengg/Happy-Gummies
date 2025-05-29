import React from "react";
import Kids from "../../assets/Kids/Product Images/Product Image.png";
import Adults from "../../assets/Adults/Product Images/Product Image.png";

function OrderSummary() {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="order-summary-list">
        <div className="order-summary-list-set">
          <img src={Kids} />
          <section>
            <h3>Kids Multivitamin Gummies</h3>
            <p>$0000</p>
          </section>
        </div>
        <div className="order-summary-list-set">
          <img src={Adults} />
          <section>
            <h3>Adult Multivitamin Gummies</h3>
            <p>$0000</p>
          </section>
        </div>
      </div>
      <div className="order-summary-details">
        <div className="order-summary-coupon">
          <h2>Gift Card / Discount code</h2>
          <form>
            <input />
            <button className="AddToCartButton">Apply</button>
            <button className="AddToCartButton green">Applied</button>
          </form>
        </div>
        <div className="order-summary-price">
          <div className="order-summary-price-set">
            <h3>Subtotal</h3>
            <p>$00.00</p>
          </div>
          <div className="order-summary-price-set">
            <h3>Estimated Tax</h3>
            <p>$00.00</p>
          </div>
          <div className="order-summary-price-set">
            <h3>Shipping Fee</h3>
            <p>$00.00</p>
          </div>
          <div className="order-summary-price-set">
            <h3>Total </h3>
            <p>$00.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
