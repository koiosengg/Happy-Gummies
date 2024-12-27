import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-up">
        <div className="footer-up-left">
          <img src={Logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur. Et eu diam viverra sit urna.
            Blandit aliquam fusce.
          </p>
        </div>
        <div className="footer-up-right">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/adults">Adults</Link>
          </nav>
          <nav>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 13.2476C13.6569 13.2476 15 11.9044 15 10.2476C15 8.5907 13.6569 7.24756 12 7.24756C10.3431 7.24756 9 8.5907 9 10.2476C9 11.9044 10.3431 13.2476 12 13.2476Z"
                  stroke="#111111"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2.24756C9.87827 2.24756 7.84344 3.09041 6.34315 4.5907C4.84285 6.091 4 8.12583 4 10.2476C4 12.1396 4.402 13.3776 5.5 14.7476L12 22.2476L18.5 14.7476C19.598 13.3776 20 12.1396 20 10.2476C20 8.12583 19.1571 6.091 17.6569 4.5907C16.1566 3.09041 14.1217 2.24756 12 2.24756Z"
                  stroke="#111111"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Lorem ipsum
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M6.54 5.24756C6.6 6.13756 6.75 7.00756 6.99 7.83756L5.79 9.03756C5.38 7.83756 5.12 6.56756 5.03 5.24756H6.54ZM16.4 17.2676C17.25 17.5076 18.12 17.6576 19 17.7176V19.2076C17.68 19.1176 16.41 18.8576 15.2 18.4576L16.4 17.2676ZM7.5 3.24756H4C3.45 3.24756 3 3.69756 3 4.24756C3 13.6376 10.61 21.2476 20 21.2476C20.55 21.2476 21 20.7976 21 20.2476V16.7576C21 16.2076 20.55 15.7576 20 15.7576C18.76 15.7576 17.55 15.5576 16.43 15.1876C16.331 15.1506 16.2256 15.1336 16.12 15.1376C15.86 15.1376 15.61 15.2376 15.41 15.4276L13.21 17.6276C10.3755 16.1779 8.06967 13.8721 6.62 11.0376L8.82 8.83756C9.1 8.55756 9.18 8.16756 9.07 7.81756C8.69132 6.66545 8.4989 5.4603 8.5 4.24756C8.5 3.69756 8.05 3.24756 7.5 3.24756Z"
                  fill="#111111"
                  fillOpacity="0.7"
                />
              </svg>
              +91 98765 43210
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4 20.2476C3.45 20.2476 2.97933 20.0519 2.588 19.6606C2.19667 19.2692 2.00067 18.7982 2 18.2476V6.24756C2 5.69756 2.196 5.22689 2.588 4.83556C2.98 4.44423 3.45067 4.24823 4 4.24756H20C20.55 4.24756 21.021 4.44356 21.413 4.83556C21.805 5.22756 22.0007 5.69823 22 6.24756V18.2476C22 18.7976 21.8043 19.2686 21.413 19.6606C21.0217 20.0526 20.5507 20.2482 20 20.2476H4ZM12 13.2476L4 8.24756V18.2476H20V8.24756L12 13.2476ZM12 11.2476L20 6.24756H4L12 11.2476ZM4 8.24756V6.24756V18.2476V8.24756Z"
                  fill="#111111"
                  fillOpacity="0.7"
                />
              </svg>
              info@happygummies.in
            </a>
          </nav>
        </div>
      </div>
      <div className="footer-down">
        <p>© {currentYear} • Happy Gummies. All rights reserved</p>
        <nav className="footer-social">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M18 2.24756H15C13.6739 2.24756 12.4021 2.77434 11.4645 3.71202C10.5268 4.64971 10 5.92148 10 7.24756V10.2476H7V14.2476H10V22.2476H14V14.2476H17L18 10.2476H14V7.24756C14 6.98234 14.1054 6.72799 14.2929 6.54045C14.4804 6.35292 14.7348 6.24756 15 6.24756H18V2.24756Z"
                stroke="#111111"
                strokeOpacity="0.6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M3 11.2476C3 7.47656 3 5.59056 4.172 4.41956C5.344 3.24856 7.229 3.24756 11 3.24756H13C16.771 3.24756 18.657 3.24756 19.828 4.41956C20.999 5.59156 21 7.47656 21 11.2476V13.2476C21 17.0186 21 18.9046 19.828 20.0756C18.656 21.2466 16.771 21.2476 13 21.2476H11C7.229 21.2476 5.343 21.2476 4.172 20.0756C3.001 18.9036 3 17.0186 3 13.2476V11.2476Z"
                stroke="#111111"
                strokeOpacity="0.6"
                strokeWidth="2"
              />
              <path
                d="M16.5 9.24756C17.3284 9.24756 18 8.57599 18 7.74756C18 6.91913 17.3284 6.24756 16.5 6.24756C15.6716 6.24756 15 6.91913 15 7.74756C15 8.57599 15.6716 9.24756 16.5 9.24756Z"
                fill="#111111"
                fillOpacity="0.6"
              />
              <path
                d="M12 15.2476C13.6569 15.2476 15 13.9044 15 12.2476C15 10.5907 13.6569 9.24756 12 9.24756C10.3431 9.24756 9 10.5907 9 12.2476C9 13.9044 10.3431 15.2476 12 15.2476Z"
                stroke="#111111"
                strokeOpacity="0.6"
                strokeWidth="2"
              />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
