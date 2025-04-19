import React from "react";
import { Link } from "react-router-dom";

function AddToCartButton(props) {
  return (
    <Link to={props.toLink} className="AddToCartButton">
      {props.text}
    </Link>
  );
}

export default AddToCartButton;
