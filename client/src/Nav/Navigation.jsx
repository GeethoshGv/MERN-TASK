import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Navigation = () => {
  return (
    <>
      <div className="nav-div">
        <div>
          <NavLink
            to="login"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
              };
            }}
          >
            <h1>Login</h1>
          </NavLink>
          <NavLink
            to="register"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
              };
            }}
          >
            <h1>Register</h1>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
