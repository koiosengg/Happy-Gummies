import React from "react";
import AppleCider from "../../assets/Home/Upcoming Products/Apple Cider Vinegar Gummies.png";
import MelatoninSleepAid from "../../assets/Home/Upcoming Products/Melatonin Sleep Aid.png";
import ComingSoon from "../Buttons/ComingSoon";

function UpcomingProducts() {
  return (
    <div className="section-container">
      <div className="heading">
        <h2>Our Upcoming Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ut viverra lorem ipsum
          ultrices ultrices amet et lacus lectus.
        </p>
      </div>
      <div className="products">
        <div className="products-card">
          <img
            src={AppleCider}
            alt="Happy Gummies Apple Cider Vinegar Gummies"
          />
          <div className="product-details">
            <h3>Apple Cider Vinegar Gummies</h3>
            <ComingSoon />
          </div>
          <div className="comingsoon-marquee-container">
            <div className="comingsoon-wrapper">
              <div className="comingsoon-marquee">
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="products-card">
          <img
            src={MelatoninSleepAid}
            alt="Happy Gummies Melatonin Sleep Aid"
          />
          <div className="product-details">
            <h3>Melatonin Sleep Aid</h3>
            <ComingSoon />
          </div>
          <div className="comingsoon-marquee-container">
            <div className="comingsoon-wrapper">
              <div className="comingsoon-marquee">
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
                <p>Upcoming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingProducts;
