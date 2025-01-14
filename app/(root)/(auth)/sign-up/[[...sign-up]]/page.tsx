import {SignUp} from "@clerk/nextjs";
import React from "react";

const SignupPage = () => {
  return (
    <div className="w-full my-20 flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default SignupPage;
