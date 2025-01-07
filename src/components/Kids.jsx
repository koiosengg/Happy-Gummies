import React from "react";
import Banner from "./Kids/Banner";
import Marquee from "./Kids/Marquee";
import ProductMain from "./Kids/ProductMain";
import ProductAbout from "./Kids/ProductAbout";
import ProductDescription from "./Kids/ProductDescription";
import ProductImgs from "./Kids/ProductImgs";
import ProductInfo from "./Kids/ProductInfo";
import UpcomingProducts from "./Kids/UpcomingProducts";
import Testimony from "./Testimony";
import Feedback from "./Feedback";

function Kids() {
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

export default Kids;
