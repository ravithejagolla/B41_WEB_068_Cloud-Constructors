


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header>
      <nav className="navbar">

        <div className="logo">
          <button onClick={() => handleNavigation("/")}>Match Me👌</button>
        </div>


        <button onClick={() => handleNavigation("/")}>Homepage</button>
        <button onClick={() => handleNavigation("/about")}>About</button>


        <div className="auth-buttons">

          <button
            className="login"
            onClick={() => {
              setIsLoggedIn((prev) => !prev);
              handleNavigation("/login");
            }}
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>


          <button
            className="signup"
            onClick={() => {
              setIsSignedUp((prev) => !prev);
              handleNavigation("/signup");
            }}
          >
            {isSignedUp ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


