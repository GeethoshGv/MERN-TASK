import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginuser = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="login_section">
        <Link className="backbutton" to="..">
          {" "}
          Back
        </Link>
        <div className="login-main-div">
          <h1>Login Page</h1>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
                value={data.email}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                id="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
            </div>
            <div className="button-div">
              <button type="button">Login</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
