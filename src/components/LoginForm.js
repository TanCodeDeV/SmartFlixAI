import React, { useState } from "react";

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
    console.log(isSignIn);
  };

  return (
    <div className="absolute w-[100rem] ml-[36rem] mt-[10rem] items-center">
      <form className="bg-black/75 p-12 absolute w-3/12 text-white">
        <h1 className="font-bold text-4xl mb-4 ml-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="input"
            placeholder="Enter Full Name"
            className="p-4 m-2 border-2 border-gray-500 rounded-sm bg-black w-[100%] h-auto"
          ></input>
        )}
        <input
          type="input"
          placeholder="Email or mobile number"
          className="p-4 m-2 border-2 border-gray-500 rounded-sm bg-black w-[100%] h-auto"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 border-2 border-gray-500 rounded-sm bg-black w-[100%]"
        ></input>
        <button className="p-2 m-2 rounded-sm  bg-red-600 w-[100%] mt-4 mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-gray-300 text-center m-4">OR</div>
        <button className="p-2 m-2 rounded-sm  bg-gray-300/30 trasnparent w-[100%]">
          Use a sign-in code
        </button>
        <p className="p-4 m-2 cursor-pointer" onClick={toggleSignForm}>
          New to Netflix? Sign up now.
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
