import React from "react";
import productImg1 from "../../assets/Kids/Product Images/Product Img 1.png";
import productImg2 from "../../assets/Kids/Product Images/Product Img 2.png";
import productImg3 from "../../assets/Kids/Product Images/Product Img 3.png";

function ProductImgs() {
  return (
    <div className="product-imgs">
      <img src={productImg1} alt="Happy Gummies Kids Product Image 1" />
      <img src={productImg2} alt="Happy Gummies Kids Product Image 2" />
      <img src={productImg3} alt="Happy Gummies Kids Product Image 3" />
    </div>
  );
}

export default ProductImgs;
