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
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="footer-map-icon"
              >
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#FF7346"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 11.892 4.402 13.13 5.5 14.5L12 22L18.5 14.5C19.598 13.13 20 11.892 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2Z"
                  stroke="#FF7346"
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
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="footer-phone-icon"
              >
                <path
                  d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.331 14.903 16.2256 14.886 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3755 15.9303 8.06966 13.6245 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69132 6.41789 8.4989 5.21274 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                  fill="#FF7346"
                />
              </svg>
              +91 98765 43210
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="footer-mail-icon"
              >
                <path
                  d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                  fill="#FF7346"
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
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="#FF7346"
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
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 11C3 7.229 3 5.343 4.172 4.172C5.344 3.001 7.229 3 11 3H13C16.771 3 18.657 3 19.828 4.172C20.999 5.344 21 7.229 21 11V13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H11C7.229 21 5.343 21 4.172 19.828C3.001 18.656 3 16.771 3 13V11Z"
                stroke="#FF7346"
                strokeWidth="2"
              />
              <path
                d="M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z"
                fill="#FF7346"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#FF7346"
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
