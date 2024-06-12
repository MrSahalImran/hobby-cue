import Image from "next/image";
import React from "react";
import { TESTIMONIALS as test } from "@/constants";
const Testimonial = () => {
  return (
    <section className="bg-[#f7f5f9] md:px-20  w-full h-[50rem] md:h-[35rem] ">
      <div
        className={`flex flex-col gap-10 justify-between m-2 rounded-lg  md:p-10 h-[270px] group`}
      >
        <div className="flex gap-x-3 items-center justify-center md:justify-start">
          <Image
            src="/assets/testimonials.svg"
            alt="icon"
            width={40}
            height={30}
          />
          <h1 className="font-semibold capitalize text-2xl ">{test.title}</h1>
        </div>
        <p className={`text-gray-700`}>{test.content}</p>
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full">
          <Image
            src="/assets/audiotrack.png"
            alt="audio"
            width={650}
            height={10}
            className="order-2 md:order-1 h-20"
          />
          <div className="flex gap-5 items-center order-1 md:order-1 my-5">
            <Image
              src="/assets/profile.png"
              alt="profile"
              width={90}
              height={90}
              className="w-[70px] h-[70px] md:w-[85px] md:h-[85px]"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg text-[#8064a2]">
                Shuba Nagrajan
              </h1>
              <p className="text-blue-500 text-sm font-normal">
                Classical Dancer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
