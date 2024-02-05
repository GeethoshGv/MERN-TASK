import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <>
      <section className="login_section">
        <Link className="backbutton" to="..">
          {" "}
          Back
        </Link>
        <div className="login-main-div">
          <h1>Login Page</h1>
        </div>
      </section>
    </>
  );
};

export default Login;
