import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostsDiv from "./posts";
import SignInForm from "./Components/SignInForm";
import useAuth from "./useAuth";
import "./App.css";
import UserProfile from "./Components/UserProfile";
import LoginForm from "./Components/Login";

function App() {
  const { token, user } = useAuth();
  return (
    <div className="App">
      <header>
        <h1>Stranger's Things</h1>
        <Link to="/">Posts</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/my-account"> My Account</Link>
      </header>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<PostsDiv />} />
          <Route path="/sign-up" element={<SignInForm />} />
          <Route path="/my-account" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
