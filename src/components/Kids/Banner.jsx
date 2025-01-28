import React from "react";
import BannerBackground from "../../assets/Kids/Banner/Banner Background.png";
import BannerTopRight from "../../assets/Kids/Banner/Banner Top Right.png";
import Navbar from "../Navbar";
import Bear1 from "../../assets/Kids/Banner/Bear 1.png";
import Kid1 from "../../assets/Kids/Banner/Kid 1.png";
import Bear2 from "../../assets/Kids/Banner/Bear 2.png";
import Kid2 from "../../assets/Kids/Banner/Kid 2.png";
import Bear3 from "../../assets/Kids/Banner/Bear 3.png";
import Kid3 from "../../assets/Kids/Banner/Kid 3.png";
import Bear4 from "../../assets/Kids/Banner/Bear 4.png";
import Kid4 from "../../assets/Kids/Banner/Kid 4.png";

function Banner() {
  return (
    <div className="kids-banner">
      <img src={BannerBackground} className="kids-banner-background" />
      <img src={BannerTopRight} className="kids-banner-top-right" />
      <img src={Bear4} className="banner-bear-4 banner-bear" />
      <img src={Kid4} className="banner-kid-4 banner-kid" />
      <img src={Bear1} className="banner-bear-1 banner-bear" />
      <img src={Kid1} className="banner-kid-1 banner-kid" />
      <img src={Bear2} className="banner-bear-2 banner-bear" />
      <img src={Kid2} className="banner-kid-2 banner-kid" />
      <img src={Bear3} className="banner-bear-3 banner-bear" />
      <img src={Kid3} className="banner-kid-3 banner-kid" />
      <div className="home-banner-container">
        <div className="heading">
          <h1>KIDS LOVE IT !!</h1>
          <p>
            Let our gummy bears take you on a joyride bursting with happiness
            and cloud-like softness in every bite
          </p>
        </div>
        <a
          href="https://a.co/d/bK2hzZK"
          target="_blank"
          className="BannerButton"
        >
          <p>Order Now </p>
        </a>
      </div>
    </div>
  );
}

export default Banner;
