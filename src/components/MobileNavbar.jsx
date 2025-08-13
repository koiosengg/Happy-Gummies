import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // import your auth hook
import Logo from "/logo.png";
import Menu from "../assets/menu.png";
import MenuCancel from "../assets/menu cancel.png";

function MobileNavbar({ onCartClick }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const { token, logout } = useAuth(); // auth values
  const navigate = useNavigate();

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

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      logout();
      navigate("/");
      alert("Logout successful!");
      toggleMobileNav();
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
          {token ? (
            <a onClick={handleLogout}>Logout</a>
          ) : (
            <Link to="/login" onClick={toggleMobileNav}>
              Login / Register
            </Link>
          )}
          <a onClick={handleCartClick}>Cart</a>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;
