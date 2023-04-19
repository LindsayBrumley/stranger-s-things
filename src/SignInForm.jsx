import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./signInForm.css";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
    setUsername("");
    setPassword("");
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignInForm;
