import { SOCIALS_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-lg">Social Media</h1>
      <div className="flex items-center gap-5">
        {SOCIALS_LINKS.map((item) => (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.icon}
            className="cursor-pointer"
          >
            <Image
              src={item.icon}
              alt="social"
              width={20}
              height={20}
              className="rounded-full"
            />
          </Link>
        ))}
      </div>
      <h1 className="text-lg font-bold capitalize mt-8">Invite friends</h1>
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="text"
          placeholder="Email"
          className="h-10 px-2 focus:outline-none border-2 border-[#8064a2] w-full md:w-auto text-gray-500 sm:rounded-lg lg:rounded-l-lg "
        />
        <button className="bg-[#8064a2] px-4 py-2 md:w-auto w-full text-white sm:mt-5 md:mt-0 font-semibold sm:rounded-lg lg:rounded-r-lg">
          Invite
        </button>
      </div>
    </div>
  );
};

export default Social;
