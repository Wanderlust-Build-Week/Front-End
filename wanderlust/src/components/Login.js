import React, { useState, useContext } from "react";
import axios from "axios";
import {UserDataProvider} from '../components/context/userdataContext'



const Login = (props) => {

  // const { userData, setUserData } = useContext(UserDataProvider)

  const [inputField, setInputField] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        'https://wanderlust-shouts.herokuapp.com/api/auth/login',
        inputField
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // setUserData({
        //   id: res.data.id,
        //   username: res.data.username,
        //   accountType: res.data.accountType
        // })
        console.log(res.data);
      })
      .then(props.history.push("/"))

      .catch(err => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={SubmitHandler}>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={inputField.username}
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