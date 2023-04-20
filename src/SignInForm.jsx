import React, { useState } from "react";
import ReactDOM from "react-dom";
import { registerUser } from "./api";
import useAuth from "./useAuth";
import "./signInForm.css";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log(result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sign up: </h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignInForm;
