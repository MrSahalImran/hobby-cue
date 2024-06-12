"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  title: string;
  img: string;
  content: string;
  btnTitle: string;
  borderColor?: string;
  hoverAllowed?: boolean;
}

const Card = ({
  title,
  img,
  content,
  btnTitle,
  borderColor,
  hoverAllowed = true,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (hoverAllowed) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverAllowed) {
      setIsHovered(false);
    }
  };

  const cardStyle = {
    borderColor: borderColor,
    backgroundColor: hoverAllowed && isHovered ? borderColor : "transparent",
    color: hoverAllowed && isHovered ? "white" : "initial",
  };

  return (
    <div
      style={cardStyle}
      className={`flex flex-col justify-between m-2 rounded-lg py-10 px-8 border-2 h-[300px] lg:h-[270px] group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-x-3 items-center justify-center md:justify-start flex-wrap">
        <Image
          src={img}
          alt="icon"
          width={40}
          height={30}
          className={hoverAllowed ? "group-hover:fill-white" : ""}
        />
        <h1 className="font-semibold capitalize text-2xl text-center md:text-left">
          {title}
        </h1>
      </div>
      <p
        className={`text-gray-700 leading-5 ${
          hoverAllowed ? "group-hover:text-white" : ""
        } text-center md:text-left mt-2`}
      >
        {content}
      </p>
      <Button
        className={`w-full md:w-28 border my-3 md:mb-0 font-semibold border-[#8064a2] text-[#8064a2] capitalize ${
          hoverAllowed ? "group-hover:bg-[#8064a2] group-hover:text-white" : ""
        }`}
        variant="outline"
      >
        {btnTitle}
      </Button>
    </div>
  );
};

export default Card;
