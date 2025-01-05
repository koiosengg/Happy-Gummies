import React from "react";

function ProductInfo() {
  return (
    <div className="product-info">
      <div className="product-section">
        <h2>Important Information</h2>
        <p>
          Give your kids the essential nutrients they need with Happy Gummies
          Kids Multivitamin! These delicious, strawberry, orange, and
          cherry-flavored gummies provide a full spectrum of vitamins and
          minerals to support their growth and development. With no artificial
          colors, soy, non-GMO, gluten-free, and dairy-free, these gummies are a
          safe and tasty choice for kids with dietary restrictions. Enjoy a
          two-month supply in one convenient bottle, perfect for busy families
          on the go. These non-sticky gummies make taking vitamins a fun and
          enjoyable experience for your little ones.
        </p>
      </div>
      <div className="product-section">
        <div className="product-sub-section">
          <h3>Ingredients</h3>
          <p>
            Beta Carotene, Purple Carrot Juice concentrate, vegetable oil (with
            Carnaube wax), Natural Orange flavor, Natural Strawberry flavor,
            Natural Cherry flavor, Pectin, Citric Acid, Sodium Citrate, Glucose,
            Sucrose, Glucose Syrup.
          </p>
        </div>
        <div className="product-sub-section">
          <h3>Directions</h3>
          <p>For Children, to be used under adult supervision.</p>
        </div>
        <div className="product-sub-section">
          <h3>Legal Disclaimer</h3>
          <p>
            Statements regarding dietary supplements have not been evaluated by
            the FDA and are not intended to diagnose, treat, cure, or prevent
            any disease or health condition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
