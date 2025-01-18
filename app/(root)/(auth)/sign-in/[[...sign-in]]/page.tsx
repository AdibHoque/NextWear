import {SignIn} from "@clerk/nextjs";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full my-10 flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default LoginPage;
