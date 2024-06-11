import React, { useState } from "react";
import { Button } from "../ui/button";

const Form = () => {
  const [sign, setSign] = useState(true);
  return (
    <div className="flex w-full px-10 flex-col font-[#Poppins]">
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className={`${
            sign ? "text-[#8064a2]" : "text-gray-500"
          } text-lg font-semibold hover:text-[#8064a2]`}
          onClick={() => setSign(true)}
        >
          Sign In
        </Button>
        <Button
          variant="ghost"
          className={`${
            !sign ? "text-[#8064a2]" : "text-gray-500"
          } text-lg font-semibold hover:text-[#8064a2]`}
          onClick={() => setSign(false)}
        >
          Join In
        </Button>
      </div>
      <div className="flex gap-y-5 mt-8 flex-col">
        <input
          type="text"
          className="px-4 py-3 focus:outline-none border border-[#ebedf0] rounded-md bg-[#ebedf0] "
          placeholder="Username"
        />
        <input
          type="text"
          className="px-4 py-3 focus:outline-none border border-[#ebedf0] rounded-md bg-[#ebedf0] "
          placeholder="Email"
        />
        {!sign && (
          <input
            type="text"
            className="px-4 py-3 focus:outline-none border border-[#ebedf0] rounded-md bg-[#ebedf0] "
            placeholder="Password"
          />
        )}
        <Button className="bg-[#8064a2] rounded-full">Continue</Button>
      </div>
    </div>
  );
};

export default Form;
