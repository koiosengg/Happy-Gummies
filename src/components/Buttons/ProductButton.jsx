import React from "react";

function ProductButton(props) {
  return (
    <a href={props.toLink} className="ProductButton">
      {props.text}
    </a>
  );
}

export default ProductButton;
