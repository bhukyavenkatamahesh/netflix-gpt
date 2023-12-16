import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <div>
        <form className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-md">
          <h1 className="font-bold text-3xl py-4 m-1">
            {IsSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!IsSignInForm && (
            <input
              type="text"
              placeholder="First Name"
              className="p-3 my-4 w-full rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="p-3 my-4 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-3 my-4 w-full rounded-md"
          />
          <button className="p-3 my-4 bg-red-700 w-full rounded-md">
            {IsSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-3 cursor-pointer" onClick={toggleSignInForm}>
            {IsSignInForm
              ? "New to Netflix? Sign up now."
              : " Already Registered? Sign In now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
