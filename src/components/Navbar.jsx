import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/logo.png";

function Navbar() {
  const location = useLocation(); // Get the current location

  return (
    <header className="desktop">
      <section>
        <img src={Logo} alt="Happy Gummies Logo" />
        <nav>
          <Link
            to="/"
            className={location.pathname === "/" ? "activeNavLink" : ""}
          >
            Home
          </Link>
          <Link
            to="/kids"
            className={location.pathname === "/kids" ? "activeNavLink" : ""}
          >
            Kids
          </Link>
          <Link
            to="/adults"
            className={location.pathname === "/adults" ? "activeNavLink" : ""}
          >
            Adults
          </Link>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
