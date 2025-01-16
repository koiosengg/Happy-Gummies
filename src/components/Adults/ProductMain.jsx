import React from "react";
import ProductImg from "../../assets/Adults/Product Images/Product Image.png";
import FullStar from "../../assets/Testimony/Full Star.svg";
import HollowStar from "../../assets/Testimony/Hollow Star.svg";

function ProductMain() {
  return (
    <div className="product-main">
      <div className="product-main-img">
        <img src={ProductImg} alt="Happy Gummies Kids" />
      </div>
      <div className="product-main-info">
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
          <a href="#" className="ProductButton">
            Buy Now
          </a>
        </div>
        <div className="product-main-details">
          <div className="product-main-details-set">
            <h4>Brand</h4>
            <p>Happy Gummies</p>
          </div>
          <div className="product-main-details-set">
            <h4>Item Form</h4>
            <p>Gummy</p>
          </div>
          <div className="product-main-details-set">
            <h4>Primary Supplement Type</h4>
            <p>
              Vitamin A , Vitamin C , Vitamin D , Vitamin E , Vitamin B6 ,
              Vitamin B12 , Folate , Biotin , Calcium , Choline , Iodine , Zinc
              , Inositol
            </p>
          </div>
          <div className="product-main-details-set">
            <h4>Diet Type</h4>
            <p>Gluten Free</p>
          </div>
          <div className="product-main-details-set">
            <h4>Flavor</h4>
            <p>Strawberry , Cherry , Orange</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMain;
