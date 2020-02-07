import React, { useState, useContext } from "react";
import axios from "axios";
import {UserDataProvider} from '../components/context/userdataContext'
import NavBar from '../components/NavBar/NavBar'
import { StyledLogin } from '../Styles/StyledLogin';

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
        localStorage.setItem('user', JSON.stringify(res.data.users))
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
    
    <StyledLogin>
      <NavBar />
    <div className="login-wrapper">
      <h1 className="loginTitle">Login</h1>
      <form onSubmit={SubmitHandler} className="loginForm">
        <input
          name="username"
          type="text"
          placeholder="username"
          value={inputField.username}
          onChange={changeHandler}
          ClassName="userInput"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={inputField.password}
          onChange={changeHandler}
          ClassName="passwordInput"
        />
        <button typeof="submit" ClassName="loginButton">LogIn</button>
      </form>
    </div>
    </StyledLogin>
  );
};

export default Login;