import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import Menu from "../assets/menu.png";
import MenuCancel from "../assets/menu cancel.png";

function MobileNavbar() {
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

  return (
    <div className="mobile-navbar mobile">
      <Link to="/" onClick={handleLinkClick}>
        <img src={Logo} className="mobile-navbar-logo" />
      </Link>
      <div className="mobile-navbar-button" onClick={toggleMobileNav}>
        <img
          src={Menu}
          alt="Fourstor Mobile navbar open"
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        />
        <img
          src={MenuCancel}
          alt="Fourstor Mobile navbar close"
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
          <Link to="/" onClick={toggleMobileNav}>
            Home
          </Link>
          <Link to="/kids" onClick={toggleMobileNav}>
            Kids
          </Link>
          <Link to="/adults" onClick={toggleMobileNav}>
            Adults
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;
