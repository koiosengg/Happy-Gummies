import React from "react";
import Kids from "../../assets/Home/Products/Kids.png";
import Adults from "../../assets/Home/Products/Adults.png";
import FullStar from "../../assets/Home/Products/Full Star.png";
import HollowStar from "../../assets/Home/Products/Hollow Star.png";
import ProductButton from "../Buttons/ProductButton";

function Products() {
  return (
    <div className="section-container">
      <div className="heading">
        <h2>Our Gummies, Your Joyful Journey</h2>
        <p>Where Health Meets Happiness in Every Bite</p>
      </div>
      <div className="products">
        <div className="products-card">
          <img src={Kids} alt="Happy Gummies Kids Product" />
          <div className="product-details">
            <h3>Kids Multivitamin Gummies</h3>
            <p>$00.0</p>
            <div className="product-ratings">
              <div className="ratings-stars">
                <img src={FullStar} />
                <img src={FullStar} />
                <img src={FullStar} />
                <img src={FullStar} />
                <img src={HollowStar} />
              </div>
              <span>10 Reviews</span>
            </div>
            <ProductButton toLink="/kids" />
          </div>
        </div>
        <div className="products-card">
          <img src={Adults} alt="Happy Gummies Adults Product" />
          <div className="product-details">
            <h3>Adult Multivitamin Gummies</h3>
            <p>$00.0</p>
            <div className="product-ratings">
              <div className="ratings-stars">
                <img src={FullStar} />
                <img src={FullStar} />
                <img src={FullStar} />
                <img src={FullStar} />
                <img src={HollowStar} />
              </div>
              <span>10 Reviews</span>
            </div>
            <ProductButton toLink="/adults" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
