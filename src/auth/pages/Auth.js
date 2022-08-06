import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    if (!isLoginMode) setIsLoginMode(true);
    else setIsLoginMode(false);
  };

  const isEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      fetch("http://localhost:5000/users/login", {
        method: "POST",
        body: JSON.stringify(inputs),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            localStorage.setItem("loing-token", res.token);
            console.log(res.message);
          }
        });
    } else {
      fetch("http://localhost:5000/users/create", {
        method: "POST",
        body: JSON.stringify(inputs),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            localStorage.setItem("loing-token", res.token);
            console.log(res.message);
          }
        });
    }
  };

  return (
    <>
      {isLoginMode ? <h1>로그인</h1> : <h1>회원가입</h1>}
      <button onClick={switchModeHandler}>
        {isLoginMode ? "회원가입" : "로그인"}
      </button>
      <form onSubmit={submitHandler}>
        <label>
          EMAIL
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <br />
        <label>
          PASSWORD
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <br />
        {isEmail(email) && password.length >= 8 ? (
          <input type="submit" />
        ) : (
          <input type="submit" disabled />
        )}
      </form>
    </>
  );
};

export default Auth;
