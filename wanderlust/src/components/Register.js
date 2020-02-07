import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar/NavBar"
import { StyledRegister } from '../Styles/StyledRegister';

const Register = (props) => {
  const [inputField, setInputField] = useState({
    username: "",
    password: "",
    accountType:""
  });

  const changeHandler = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        "https://wanderlust-shouts.herokuapp.com/api/auth/register",
        inputField
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
      })
      .then(props.history.push('/tourguide/newTourForm'))
      .catch(err => {
        console.log("err", err);
      });
  };
  console.log(inputField);
  return (
    <StyledRegister>
    <div>
      <NavBar />
      <div className="form-wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={SubmitHandler} >
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={inputField.username}
          onChange={changeHandler}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={inputField.password}
          onChange={changeHandler}
        />
        <input
        name="accountType"
        type="text"
        placeholder="User/Guide"
        value={inputField.accountType}
        onChange={changeHandler}
        />

        <button typeof="submit">Sign Up</button>
      </form>
      </div>
    </div>
    </StyledRegister>
  );
};

export default Register;
