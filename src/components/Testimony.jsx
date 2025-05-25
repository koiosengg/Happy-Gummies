import React from "react";
import Img1 from "../assets/Testimony/Testimony Img 1.png";
import Img2 from "../assets/Testimony/Testimony Img 2.png";
import Img3 from "../assets/Testimony/Testimony Img 3.png";
import FullStar from "../assets/Testimony/Full Star.svg";
import HollowStar from "../assets/Testimony/Hollow Star.svg";

function Testimony() {
  return (
    <div className="section-container" id="Reviews">
      <div className="heading">
        <h2>Happy Gummy’s Happy Customers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ut viverra lorem ipsum
          ultrices ultrices amet et lacus lectus.
        </p>
      </div>
      <div className="testimony">
        <div className="testimony-card">
          <div className="testimony-img-container">
            <div className="testimony-img">
              <img src={Img1} />
            </div>
          </div>
          <div className="ratings-stars">
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={HollowStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut viverra lorem ipsum
            ultrices ultrices amet et lacus lectus.
          </p>
          <h3>Lorem Ipsum</h3>
        </div>
        <div className="testimony-card">
          <div className="testimony-img-container">
            <div className="testimony-img">
              <img src={Img2} />
            </div>
          </div>
          <div className="ratings-stars">
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={HollowStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut viverra lorem ipsum
            ultrices ultrices amet et lacus lectus.
          </p>
          <h3>Lorem Ipsum</h3>
        </div>
        <div className="testimony-card">
          <div className="testimony-img-container">
            <div className="testimony-img">
              <img src={Img3} />
            </div>
          </div>
          <div className="ratings-stars">
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={FullStar} />
            <img src={HollowStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut viverra lorem ipsum
            ultrices ultrices amet et lacus lectus.
          </p>
          <h3>Lorem Ipsum</h3>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
