import React from "react";
import Background from "../../assets/Home/Ingredients Background.png";

function Ingredients() {
  return <div className="ingredients">
    <img src={Background} />
    <div className="ingredients-info">
        <div className="heading">
            <h2>HAPPINESS IN EVERY BITE </h2>
            <h3>Deliciously Crafted for Kids and Adults</h3>
        </div>
        <p>Happy Gummies are thoughtfully designed for kids and adults alike. Made with natural ingredients, they’re low in sugar, non-sticky, and packed with essential nutrients to boost your mood and health. Making wellness tasty, fun, and effortless!</p>
    </div>
  </div>;
}

export default Ingredients;
