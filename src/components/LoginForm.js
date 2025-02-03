import React, { useRef, useState } from "react";
import { checkValidation } from "./Validate";

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMesssage] = useState(null);

  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
    console.log(isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);

  const CheckFormValidation = () => {
    console.log("Button clicked");
    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    let result = checkValidation(emailVal, passwordVal);
    setErrorMesssage(result);
    console.log(result);
  };

  return (
    <div className="absolute w-[100rem] ml-[36rem] mt-[10rem] items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black/75 p-12 absolute w-3/12 text-white"
      >
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
          ref={email}
          type="input"
          placeholder="Email or mobile number"
          className="p-4 m-2 border-2 border-gray-500 rounded-sm bg-black w-[100%] h-auto"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 border-2 border-gray-500 rounded-sm bg-black w-[100%]"
        ></input>
        <label className="text-red-500 m-2">{errorMessage}</label>
        <button
          onClick={CheckFormValidation}
          className="p-2 m-2 rounded-sm  bg-red-600 w-[100%] mt-4 mb-4"
        >
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
