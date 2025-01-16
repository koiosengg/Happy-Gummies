import React from "react";
import Navbar from "../Navbar";
import BannerButton from "../Buttons/BannerButton";
import BannerBalloon from "../../assets/Home/Banner Balloon.png";
import BannerCloud1 from "../../assets/Home/Banner Cloud 1.png";
import BannerCloud2 from "../../assets/Home/Banner Cloud 2.png";

function Banner() {
  return (
    <div className="home-banner">
      <div className="home-banner-container">
        <div className="heading">
          <h1>CATCH YOUR FLAVOUR</h1>
          <p>
            Let our gummies take you on a joyride bursting with happiness and
            cloud-like softness in every bite
          </p>
        </div>
        <BannerButton toLink="/#products"  text="Explore" />
      </div>
      <img src={BannerBalloon} className="home-banner-balloon-1" />
      <img src={BannerBalloon} className="home-banner-balloon-2" />
      <img src={BannerBalloon} className="home-banner-balloon-3" />
      <img src={BannerBalloon} className="home-banner-balloon-4" />
      <img src={BannerCloud1} className="home-banner-cloud-1" />
      <img src={BannerCloud1} className="home-banner-cloud-2" />
      <img src={BannerCloud1} className="home-banner-cloud-3" />
      <img src={BannerCloud1} className="home-banner-cloud-4" />
      <img src={BannerCloud2} className="home-banner-cloud-5" />
      <img src={BannerCloud2} className="home-banner-cloud-6" />
      <img src={BannerCloud2} className="home-banner-cloud-7" />
      <img src={BannerCloud2} className="home-banner-cloud-8" />
    </div>
  );
}

export default Banner;
