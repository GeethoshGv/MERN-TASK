import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registration.scss";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registeruser = async (e) => {
    e.preventDefault();
    const { name, email, password, conformpassword } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        conformpassword,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("login successful");
        navigate("./login");
      }
    } catch (error) {
      console.log(error);
    }
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
