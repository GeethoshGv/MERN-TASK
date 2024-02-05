import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Navigation = () => {
  return (
    <>
      <div className="nav-div">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default Navigation;
