import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling
import LoginSignup from "./LoginSignup";

function Home() {
  return (
    <nav>
      <div className="navbar">
        <a>Dev@Deakin</a>
        <div className="search-box">
          <input type="text" name="search" id="Search" placeholder="Search" />
        </div>
        <div>
      <h1>Welcome to My App</h1>
      <LoginSignup />
    </div>
      </div>
    </nav>
  
  );
}

export default Home;