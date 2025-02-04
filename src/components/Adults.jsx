import React from "react";
import Banner from "./Adults/Banner";
import Marquee from "./Adults/Marquee";
import ProductMain from "./Adults/ProductMain";
import ProductAbout from "./Adults/ProductAbout";
import ProductDescription from "./Adults/ProductDescription";
import ProductImgs from "./Adults/ProductImgs";
import ProductInfo from "./Adults/ProductInfo";
import UpcomingProducts from "./Adults/UpcomingProducts";
import Testimony from "./Testimony";
import Feedback from "./Feedback";

function Adults() {
  return (
    <>
      <Banner />
      <Marquee />
      <div className="product-container">
        <ProductMain />
        <ProductAbout />
        <ProductDescription />
        <ProductImgs />
        <ProductInfo />
      </div>
      <UpcomingProducts />
      <Testimony />
      <Feedback />
    </>
  );
}

export default Adults;
