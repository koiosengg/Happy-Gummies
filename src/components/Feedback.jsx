import React from "react";
import FeedbackBackground from "../assets/Feedback Background.png";

function Feedback() {
  return (
    <div className="feedback">
      <form className="feedback-container">
        <div className="product-sub-section">
          <h3>Review this Product</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut viverra lorem ipsum
            ultrices ultrices amet et lacus lectus.
          </p>
        </div>
        <textarea placeholder="Comment here" />
        <button type="submit"  className="ProductButton">Send</button>
      </form>
      <img src={FeedbackBackground} className="feedback-background" />
    </div>
  );
}

export default Feedback;
