import React from "react";
import AdultsProduct from "../../assets/Kids/Product Images/Product Image.png";
import AppleCider from "../../assets/Home/Upcoming Products/Apple Cider Vinegar Gummies.png";
import MelatoninSleepAid from "../../assets/Home/Upcoming Products/Melatonin Sleep Aid.png";
import ComingSoon from "../Buttons/ComingSoon";
import ProductButton from "../Buttons/ProductButton";

function UpcomingProducts() {
  return (
    <div className="section-container">
      <div className="heading">
        <h2>Similar Products You Might Like</h2>
        <p>Where Health Meets Happiness in Every Bite</p>
      </div>
      <div className="products">
        <div className="products-card">
          <img
            src={AdultsProduct}
            alt="Happy Gummies Kids Multivitamin Gummies"
          />
          <div className="product-details">
            <h3>Kids Multivitamin Gummies</h3>
            <ProductButton toLink="/kids" text="View Product" />
          </div>
        </div>
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
