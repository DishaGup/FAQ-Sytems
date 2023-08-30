import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/Auth/authActions";


const initialState = {
  name: "",
  password: "",
  email: "",
};

const RegisterPage = () => {
  const [showpass1, setShowpass1] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setPasswordsMatch(
      name === "password"
        ? value === formData.confirmpassword
        : formData.password === value
    );
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(formData));

    setFormData(initialState);
  };

  return (
    <div className="center">
      <div className="registeration-container">
        <h2 className="login-heading">Create New Account</h2>
      <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="form-control">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter Your email"
           
              title="Please enter a email"
            />
          </div>

          <div className="form-control">
            <label className="form-label">Password</label>
            <div className="password-input">
              <input
                type={showpass1 ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Type Strong Password"
              />
              <button
                className="password-toggle"
                onClick={() => setShowpass1((prev) => !prev)}
              >
            
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="login-button"
          
          >
             Register
          </button>
          <p className="link-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;