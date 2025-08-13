import React from "react";
import "./LogoutPage.css"; // Import the CSS file
import { Link } from "react-router-dom";
const LogoutPage = () => {
  const handleLogout = () => {
    console.log("User logged out!");
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h2 className="title">Goodbye!</h2>
        <p className="subtitle">You have successfully logged out.</p>
        <Link to="/"><button onClick={handleLogout} className="logout-btn">
          Log In Again
        </button></Link>
      </div>
    </div>
  );
};

export default LogoutPage;
