import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/AuthContext";

function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://happy-gummies.onrender.com/api/user/login",
        {
          email,
          password,
        }
      );

      login(res.data.token);
      alert("Login successful!");

      window.location.href = "/";
    } catch (err) {
      alert("Login failed.");
      console.error(err);
    }
  };

  return (
    <div className="login">
      <div className="login-form-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <path
            d="M15.167 9.33333L13.3003 11.2L16.767 14.6667H3.16699V17.3333H16.767L13.3003 20.8L15.167 22.6667L21.8337 16L15.167 9.33333ZM27.167 25.3333H16.5003V28H27.167C28.6337 28 29.8337 26.8 29.8337 25.3333V6.66667C29.8337 5.2 28.6337 4 27.167 4H16.5003V6.66667H27.167V25.3333Z"
            fill="black"
          />
        </svg>
        <h2>Log In to Continue</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <section>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </section>
          <section>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              type="password"
            />
          </section>

          <button className="ProductButton" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
