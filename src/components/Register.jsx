import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

function Register() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://happy-gummies.onrender.com/api/user/register",
        formData
      );

      const token = res.data.token;
      login(token);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="login">
      <div className="login-form-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M5.33398 24C5.33398 22.5855 5.89589 21.229 6.89608 20.2288C7.89628 19.2286 9.25283 18.6667 10.6673 18.6667H21.334C22.7485 18.6667 24.105 19.2286 25.1052 20.2288C26.1054 21.229 26.6673 22.5855 26.6673 24C26.6673 24.7072 26.3864 25.3855 25.8863 25.8856C25.3862 26.3857 24.7079 26.6667 24.0007 26.6667H8.00065C7.29341 26.6667 6.61513 26.3857 6.11503 25.8856C5.61494 25.3855 5.33398 24.7072 5.33398 24Z"
            stroke="black"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M16 13.3333C18.2091 13.3333 20 11.5425 20 9.33333C20 7.12419 18.2091 5.33333 16 5.33333C13.7909 5.33333 12 7.12419 12 9.33333C12 11.5425 13.7909 13.3333 16 13.3333Z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <h2>Create an account</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <section>
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </section>
          <section>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </section>
          <section>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </section>

          <button className="ProductButton" type="submit">
            Sign Up
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
