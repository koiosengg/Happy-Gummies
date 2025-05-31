import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import Menu from "../assets/menu.png";
import MenuCancel from "../assets/menu cancel.png";

function MobileNavbar({ onCartClick }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  const handleCartClick = () => {
    onCartClick();
    toggleMobileNav();
  };

  return (
    <div className="mobile-navbar mobile">
      <Link to="/" onClick={handleLinkClick}>
        <img src={Logo} className="mobile-navbar-logo" />
      </Link>
      <div className="mobile-navbar-button" onClick={toggleMobileNav}>
        <img
          src={Menu}
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        />
        <img
          src={MenuCancel}
          style={{
            display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
          }}
        />
      </div>
      <div
        className={`mobile-navbar-container mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <nav>
          <Link to="/kids" onClick={toggleMobileNav}>
            Kids
          </Link>
          <Link to="/adults" onClick={toggleMobileNav}>
            Adults
          </Link>
          <a onClick={handleCartClick}>Cart</a>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;
