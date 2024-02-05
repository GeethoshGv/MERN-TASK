import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <Link className="backbutton" to="..">
          {" "}
          Back
        </Link>
        <h1>Login Page</h1>
      </section>
    </>
  );
};

export default Login;
