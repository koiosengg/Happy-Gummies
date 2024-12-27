import React from "react";

function ProductButton(props) {
  return (
    <a href={props.toLink} className="ProductButton">
    Know More
    </a>
  );
}

export default ProductButton;
