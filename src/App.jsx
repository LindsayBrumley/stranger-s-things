import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import postsDiv from "./posts";
import SignInForm from "./SignInForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Stranger's Things</h1>
        <Link to="/">Posts</Link>
        <Link to="/sign-in">Sign In</Link>
      </header>
      <div id="main-section">
        <Routes>
          <Route path="/" element={postsDiv} />
          <Route path="/sign-in" element={SignInForm} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
