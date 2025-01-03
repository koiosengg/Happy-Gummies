import React from "react";
import Banner from "./Home/Banner";
import Features from "./Home/Features";
import Products from "./Home/Products";
import Ingredients from "./Home/Ingredients";
import UpcomingProducts from "./Home/UpcomingProducts";
import WhyChoose from "./Home/WhyChoose";
import Testimony from "./Testimony";

function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Products />
      <Ingredients />
      <WhyChoose />
      <UpcomingProducts />
      <Testimony />
    </>
  );
}

export default Home;
