import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className=" relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="netflix-bag"
        ></img>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
