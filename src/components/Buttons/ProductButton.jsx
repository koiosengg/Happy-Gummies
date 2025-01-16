import React from "react";
import { Link } from "react-router-dom";

function ProductButton(props) {
  return (
    <Link to={props.toLink} className="ProductButton">
      {props.text}
    </Link>
  );
}

export default ProductButton;
