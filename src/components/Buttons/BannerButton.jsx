import React from "react";

function BannerButton(props) {
  return (
    <a href={props.toLink} className="BannerButton">
      <p>Explore</p>
    </a>
  );
}

export default BannerButton;
