import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Logo from "/logo.png";
import Menu from "../assets/menu.png";
import MenuCancel from "../assets/menu cancel.png";

function MobileNavbar({ onCartClick }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const { token, logout } = useAuth();
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
      <div className="mobile-navbar-section">
        <div className="mobile-navbar-cart" onClick={handleCartClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M22.6666 24C23.3738 24 24.0521 24.2809 24.5522 24.781C25.0523 25.2811 25.3333 25.9594 25.3333 26.6667C25.3333 27.3739 25.0523 28.0522 24.5522 28.5523C24.0521 29.0524 23.3738 29.3333 22.6666 29.3333C21.9593 29.3333 21.2811 29.0524 20.781 28.5523C20.2809 28.0522 19.9999 27.3739 19.9999 26.6667C19.9999 25.1867 21.1866 24 22.6666 24ZM1.33325 2.66666H5.69325L6.94659 5.33332H26.6666C27.0202 5.33332 27.3593 5.4738 27.6094 5.72385C27.8594 5.9739 27.9999 6.31303 27.9999 6.66666C27.9999 6.89332 27.9332 7.11999 27.8399 7.33332L23.0666 15.96C22.6132 16.7733 21.7333 17.3333 20.7333 17.3333H10.7999L9.59992 19.5067L9.55992 19.6667C9.55992 19.7551 9.59504 19.8398 9.65755 19.9024C9.72006 19.9649 9.80485 20 9.89325 20H25.3333V22.6667H9.33325C8.62601 22.6667 7.94773 22.3857 7.44763 21.8856C6.94754 21.3855 6.66658 20.7072 6.66658 20C6.66658 19.5333 6.78658 19.0933 6.98658 18.72L8.79992 15.4533L3.99992 5.33332H1.33325V2.66666ZM9.33325 24C10.0405 24 10.7188 24.2809 11.2189 24.781C11.719 25.2811 11.9999 25.9594 11.9999 26.6667C11.9999 27.3739 11.719 28.0522 11.2189 28.5523C10.7188 29.0524 10.0405 29.3333 9.33325 29.3333C8.62601 29.3333 7.94773 29.0524 7.44763 28.5523C6.94754 28.0522 6.66658 27.3739 6.66658 26.6667C6.66658 25.1867 7.85325 24 9.33325 24ZM21.3333 14.6667L25.0399 7.99999H8.18658L11.3333 14.6667H21.3333Z"
              fill="#121212"
            />
          </svg>
        </div>
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
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;
