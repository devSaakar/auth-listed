import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignInForm = () => {
  return (
    <section className="flex flex-col w-96">
      <div className="SIGN__IN__FORM__TITLE">
        <p className="text-4xl font-bold">Sign In</p>
        <p className="text-base my-1">Sign in to your account</p>
      </div>
      <div className="SIGN__IN__FORM-THIRD__PARTY flex gap-1 justify-between my-4">
        <button
          onClick={signIn}
          className="rounded-lg bg-white text-btn-primary flex justify-around items-center px-5 gap-2 text-xs py-1.5 cursor-pointer"
        >
          <FcGoogle />
          Sign in with Google
        </button>
        <button className="rounded-lg bg-white text-btn-primary flex justify-around items-center px-5 gap-2 text-xs cursor-pointer">
          <FaApple />
          Sign in with Apple
        </button>
      </div>
      <form className="w-full bg-white p-4">
        <label className="flex flex-col">
          Email address <input type="text" className="bg-neutral-100" />
        </label>
        <label className="flex flex-col">
          Password <input type="password" className="bg-neutral-100" />
        </label>
      </form>
    </section>
  );
};

export default SignInForm;
