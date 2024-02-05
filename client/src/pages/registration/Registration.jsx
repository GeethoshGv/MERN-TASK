import React from "react";
import { Link } from "react-router-dom";
import "./registration.scss";

const Registration = () => {
  return (
    <>
      <section className="registration_section">
        <Link className="backbutton" to="..">
          {" "}
          Back
        </Link>
        <div className="registration-main-div">
          <h1>Registration Page</h1>
        </div>
      </section>
    </>
  );
};

export default Registration;
