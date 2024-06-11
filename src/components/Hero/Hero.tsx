"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import Form from "./Form";

const Hero = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <main className="flex max-w-screen-xl bg-[#f7f5f9] h-screen mt-24">
      <div className="w-[60%] flex items-center justify-evenly flex-col">
        <div className="text-left">
          <h1 className="px-5 text-[36px] font-semibold font-[#Poppins] italic">
            Explore your <span className="text-[#0096c8]">hobby </span>
            or
            <span className="text-[#8064a2]"> passion</span>
          </h1>
          <p className="text-[14px] p-6 font-light w-[95%] font[#Poppins] tracking-wide leading-8">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="text-[14px] px-6 font-light font[#Poppins] tracking-wide leading-8">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/assets/group.png"
            alt="group"
            width={1000}
            className="w-full"
            height={10}
          />
        </div>
      </div>
      <div className="w-[40%] pt-28 signin-up flex flex-col items-center justify-start">
        <Form />
      </div>
    </main>
  );
};

// const SignUpForm = () => (
//   <form className="flex flex-col items-center">
//     <h2 className="text-2xl mb-4">Sign Up</h2>
//     {/* Add your sign-up form fields here */}
//     <input
//       type="text"
//       placeholder="Username"
//       className="mb-2 px-4 py-2 border rounded"
//     />
//     <input
//       type="email"
//       placeholder="Email"
//       className="mb-2 px-4 py-2 border rounded"
//     />
//     <input
//       type="password"
//       placeholder="Password"
//       className="mb-2 px-4 py-2 border rounded"
//     />
//     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//       Sign Up
//     </button>
//   </form>
// );

// const SignInForm = () => (
//   <form className="flex flex-col items-center">
//     <h2 className="text-2xl mb-4">Sign In</h2>
//     {/* Add your sign-in form fields here */}
//     <input
//       type="email"
//       placeholder="Email"
//       className="mb-2 px-4 py-2 border rounded"
//     />
//     <input
//       type="password"
//       placeholder="Password"
//       className="mb-2 px-4 py-2 border rounded"
//     />
//     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//       Sign In
//     </button>
//   </form>
// );

export default Hero;
