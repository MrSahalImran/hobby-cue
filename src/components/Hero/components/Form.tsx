"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const Form = () => {
  const [sign, setSign] = useState(true);
  return (
    <section className="flex w-full px-4 md:px-10 flex-col font-[#Poppins]">
      <div className="flex  gap-1 md:flex-row lg:gap-4 items-center justify-center">
        <Button
          variant="ghost"
          className={`${
            sign ? "text-[#8064a2] underline" : "text-gray-500"
          } text-lg md:text-xl font-semibold hover:text-[#8064a2]`}
          onClick={() => setSign(true)}
        >
          Sign In
        </Button>
        <Button
          variant="ghost"
          className={`${
            !sign ? "text-[#8064a2] underline" : "text-gray-500"
          } text-lg md:text-xl font-semibold hover:text-[#8064a2]`}
          onClick={() => setSign(false)}
        >
          Join In
        </Button>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <CustomButton img="/assets/google.svg" text="Google" />
        <CustomButton img="/assets/facebook.svg" text="Facebook" />
      </div>

      <div className="flex items-center justify-center mb-4">
        <div className="flex-1 border-t-2 border-gray-300"></div>
        <div className="px-2 md:px-4 font-semibold text-sm md:text-base">
          Or connect with
        </div>
        <div className="flex-1 border-t-2 border-gray-300"></div>
      </div>

      <div className="flex gap-y-2 mt-2 flex-col">
        {!sign && <CustomInput placeholder="Username" textSize="text-base" />}
        <CustomInput placeholder="Email" type="email" textSize="text-base" />
        <CustomInput
          placeholder="Password"
          type="password"
          textSize="text-base"
        />

        {!sign && (
          <p className="text-xs md:text-sm text-gray-500 mt-3">
            By continuing, you agree to our{" "}
            <span className="text-black font-medium"> Terms of Service </span>{" "}
            and <span className="text-black font-medium">Privacy Policy</span>.
          </p>
        )}
        <CustomButton sign={sign} />
      </div>
    </section>
  );
};

export default Form;
