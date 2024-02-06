import React from "react";
import { Link } from "react-router-dom";
import "./registration.scss";
import { useState } from "react";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registeruser = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="registration_section">
        <Link className="backbutton" to="..">
          {" "}
          Back
        </Link>
        <div className="registration-main-div">
          <h1>Registration Page</h1>
          <form className="register-form">
            <div className="form-name">
              <label>Name:</label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>
            <div className="form-email">
              <label>Email:</label>
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
            </div>
            <div className="form-password">
              <label>Password:</label>
              <input
                type="password"
                id="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
            </div>
            <div className="form-c-password">
              <label>Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={data.confirmPassword}
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
                required
              />
            </div>
            <div className="button-div">
              <button type="button">Register</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Registration;
