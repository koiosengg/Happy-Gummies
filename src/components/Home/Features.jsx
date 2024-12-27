import React from "react";
import Line from "../../assets/Home/Features/Line.png";
import NonSticky from "../../assets/Home/Features/Non - Sticky.png";
import SoyaFree from "../../assets/Home/Features/Soy Free.png";
import GlutenFree from "../../assets/Home/Features/Gluten Free.png";
import DiaryFree from "../../assets/Home/Features/Diary Free.png";
import NonGMO from "../../assets/Home/Features/Non - GMO.png";
import NoArtificialColors from "../../assets/Home/Features/No Artificial Colors.png";
import NoEgg from "../../assets/Home/Features/No Egg.png";
import NoYeast from "../../assets/Home/Features/No Yeast.png";

function Features() {
  return (
    <div className="section-container">
      <div className="heading">
        <h2>Bite-sized Treats</h2>
        <p>
          Elevate your health journey crafted with care and packed with goodness
        </p>
      </div>
      <div className="features">
        <div className="features-container">
          <div className="features-card">
            <div className="features-card-img">
              <img src={NonSticky} alt="Non - Sticky" />
              <img src={Line} className="features-line" />
            </div>
            <h3>Non - Sticky</h3>
          </div>
          <div className="features-card">
            <div className="features-card-img">
              <img src={SoyaFree} alt="Soy Free" />
              <img src={Line} className="features-line" />
            </div>
            <h3>Soy Free</h3>
          </div>
          <div className="features-card">
            <div className="features-card-img">
              <img src={GlutenFree} alt="Gluten Free" />
              <img src={Line} className="features-line" />
            </div>
            <h3>Gluten Free</h3>
          </div>
          <div className="features-card">
            <div className="features-card-img">
              <img src={DiaryFree} alt="Diary Free" />
              <img src={Line} className="features-line" />
            </div>
            <h3>Diary Free</h3>
          </div>
        </div>
        <div className="features-container">
          <div className="features-card">
            <div className="features-card-img">
              <img src={NonGMO} alt="Non - GMO" />
              <img src={Line} className="features-line" />
            </div>
            <h3>Non - GMO</h3>
          </div>
          <div className="features-card">
            <div className="features-card-img">
              <img src={NoArtificialColors} alt="No Artificial Colors" />
              <img src={Line} className="features-line" />
            </div>
            <h3>No Artificial Colors</h3>
          </div>
          <div className="features-card">
            <div className="features-card-img">
              <img src={NoEgg} alt="No Wheat , Fish , Egg" />
              <img src={Line} className="features-line" />
            </div>
            <h3>No Wheat , Fish , Egg </h3>
          </div>
          <div className="features-card">
            <div className="features-card-img">
              <img src={NoYeast} alt="No yeast , Sodium , Nuts" />
              <img src={Line} className="features-line" />
            </div>
            <h3>No yeast , Sodium , Nuts</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
