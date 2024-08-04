import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Main Dashboard</h1>
      <div className="header-right">
        <input type="text" placeholder="Search..." />
        <div className="profile-icon">Profile</div>
      </div>
    </div>
  );
};

export default Header;
