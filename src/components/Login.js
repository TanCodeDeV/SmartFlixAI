import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { LOGIN_BSCKGROUND_IMG } from "../utils/Constants";

const Login = () => {
  return (
    <div className=" relative">
      <Header />
      <div className="absolute">
        <img src={LOGIN_BSCKGROUND_IMG} alt="netflix-bag"></img>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
