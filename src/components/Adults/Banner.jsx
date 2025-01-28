import React from "react";
import BannerBackground from "../../assets/Adults/Banner Background.png";
import BannerBackgroundMobile from "../../assets/Adults/Banner Background Mobile.png";
import Navbar from "../Navbar";

function Banner() {
  return (
    <div className="kids-banner">
      <img src={BannerBackground} className="kids-banner-background desktop" />
      <img
        src={BannerBackgroundMobile}
        className="kids-banner-background mobile"
      />
      <div className="home-banner-container">
        <div className="heading">
          <h1>ADULTS ADORE IT !!</h1>
          <p>
            Let our gummy bears take you on a joyride bursting with happiness
            and cloud-like softness in every bite
          </p>
        </div>
        <a href="https://a.co/d/2SsEdSw" target="_blank" className="BannerButton">
          <p>Order Now </p>
        </a>
      </div>
    </div>
  );
}

export default Banner;
