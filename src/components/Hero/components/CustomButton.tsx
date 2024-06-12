import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";

interface ButtonProps {
  img?: string;
  text?: string;
  sign?: boolean;
}

const CustomButton = ({ img, text, sign }: ButtonProps) => {
  return (
    <>
      <Button
        className={` ${
          text && img
            ? "bg-white text-black border-[#8064a2] border-2 text-xs font-semibold hover:bg-white"
            : "bg-[#8064a2]"
        } rounded-lg`}
      >
        {text && img ? (
          <div className="flex items-center w-full justify-between">
            <Image src={img} width={20} height={20} alt="logo" />
            Continue with {text}
            <pre> </pre>
          </div>
        ) : sign ? (
          "Continue"
        ) : (
          "Agree and Continue"
        )}
      </Button>
    </>
  );
};

export default CustomButton;
