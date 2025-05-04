import React, { useState } from "react";
import FeedbackBackground from "../assets/Feedback Background.png";

function Feedback() {
  const [rating, setRating] = useState(0);

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= rating;
        return (
          <svg
            key={index}
            onClick={() => setRating(starIndex)}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill={isFilled ? "#FF6100" : "none"}
            style={{ cursor: "pointer", transition: "fill 0.2s" }}
          >
            <path
              d="M19.2734 11.6953L19.3906 11.9727L19.6904 11.998L28.1133 12.7295L21.7393 18.2559L21.5117 18.4531L21.5801 18.7461L23.4795 26.9609L16.2588 22.6055L16 22.4502L15.7422 22.6055L8.51953 26.9619L10.4209 18.7461L10.4883 18.4531L10.2607 18.2559L3.88574 12.7295L12.3105 11.998L12.6104 11.9727L12.7275 11.6953L16 3.9502L19.2734 11.6953Z"
              stroke="#FF6100"
            />
          </svg>
        );
      });
  };

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
        <div className="feedback-star-section">
          <p>How many Stars did we get?</p>
          <section>{renderStars()}</section>
          <input type="hidden" name="rating" value={rating} />
        </div>
        <textarea placeholder="Comment here" />
        <button type="submit" className="ProductButton">
          Send
        </button>
      </form>
      <img src={FeedbackBackground} className="feedback-background" />
    </div>
  );
}

export default Feedback;
