import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import validation from "./signupvalidation";
import axios from "axios";
import "./signup.css";
const url= 'http://localhost:3306/signup'
function Signup() {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const history = useHistory();
  const { email, username, password } = data;
  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validation(data));
    // if (errors.email !== '' && errors.password !== "" && errors !== "") {
      axios
        .post(url, data)
        .then((res) => {
          history("/");
          console.log('submitted');
        })
        .catch((err) => console.log(err));
      // }
  };
  return (
    <div className="maincontainer d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>
          <strong> Signup</strong>
        </h2>
        <form action="" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control rounded0"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={changeHandler}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              className="form-control rounded0"
              placeholder="Enter username"
              name="username"
              value={username}
              onChange={changeHandler}
            />
            {errors.username && (
              <span className="text-danger">{errors.username}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control rounded0"
              name="password"
              value={password}
              onChange={changeHandler}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
            //onSubmit={submitHandler}
          >
            <strong>signup</strong>
          </button>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0"
          >
            <strong>Login</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
