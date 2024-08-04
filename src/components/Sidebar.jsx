import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">HORIZON FREE</div>
      <Link to="/" className="sidebar-link">Dashboard</Link>
      <Link to="/nft" className="sidebar-link">NFT Marketplace</Link>
      <Link to="/tables" className="sidebar-link">Tables</Link>
      <Link to="/profile" className="sidebar-link">Profile</Link>
      <Link to="/signin" className="sidebar-link">Sign In</Link>
    </div>
  );
};

export default Sidebar;
