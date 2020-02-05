import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: ""
  });

  const changeHandler = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        
        inputField
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={SubmitHandler}>
        <input
          name="email"
          type="text"
          placeholder="email"
          value={inputField.email}
          onChange={changeHandler}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={inputField.password}
          onChange={changeHandler}
        />
        <button typeof="submit">LogIn</button>
      </form>
    </div>
  );
};

export default Login;