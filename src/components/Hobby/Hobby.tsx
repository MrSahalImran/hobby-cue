import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hobby = () => {
  return (
    <section className="h-full w-full mt-20 md:mt-0">
      <div className="flex flex-col gap-3  md:p-24">
        <div>
          <h1 className="capitalize font-medium mb-7 md:mb-14 text-2xl md:text-4xl italic">
            your <span className="text-[#8064a2]">hobby</span>, your
            <span className="text-[#0096C8]"> community...</span>
          </h1>
          <Button className="bg-[#8064a2]">Get Started</Button>
        </div>
        <Image
          src="/assets/group2.png"
          width={800}
          className="w-full mt-10 md:mt-20"
          height={10}
          alt="group"
        />
      </div>
    </section>
  );
};

export default Hobby;
