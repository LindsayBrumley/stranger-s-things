import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import PostsDiv from "./posts";
import SignInForm from "./Components/SignInForm";
import useAuth from "./useAuth";
import "./App.css";
import UserProfile from "./Components/UserProfile";
import LoginForm from "./Components/Login";
import { MyProfile } from "./Components/MyProfile";

function App() {
  const { token, setToken, user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <h1>Stranger's Things</h1>
        {token ? <p>Welcome, {user.username}</p> : null}
        <nav>
          <Link to="/">Posts</Link>
          {!token ? <Link to="/sign-up">Sign Up</Link> : null}
          {token ? <Link to="/my-account"> My Account</Link> : null}
          {!token ? <Link to="/login">Login</Link> : null}
          {token ? (
            <button
              onClick={() => {
                setToken(null);
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Log Out
            </button>
          ) : null}
        </nav>
      </header>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<PostsDiv />} />
          <Route path="/sign-up" element={<SignInForm />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/my-account" element={<MyProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
