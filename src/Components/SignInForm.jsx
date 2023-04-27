import React, { useState } from "react";
import ReactDOM from "react-dom";
import { loginUser, registerUser } from "../api";
import useAuth from "../useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import "../signInForm.css";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, user } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let result;
      if (pathname === "/login") {
        result = await loginUser(username, password);
      } else {
        result = await registerUser(username, password);
      }
      console.log(result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
      navigate("/my-account");
    } catch (error) {
      console.error(error);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>{pathname === "/login" ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button>{pathname === "/login" ? "Login" : "Register"}</button>
      </form>
    </div>
  );
};

export default SignInForm;
