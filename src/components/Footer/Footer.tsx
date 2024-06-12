import { FOOTER_TITLES } from "@/constants";
import React from "react";
import Social from "./component/Social";

const Footer = () => {
  return (
    <footer className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto md:grid-rows-1 gap-8 md:gap-16 lg:gap-24 mt-20 md:mt-10">
      {FOOTER_TITLES.map((item) => (
        <div key={item.title} className="flex flex-col gap-5 mb-8 md:mb-0">
          <h2 className="font-bold text-lg md:text-xl">{item.title}</h2>
          <ul>
            {item.links.map((link) => (
              <li key={link} className="mb-2 text-base md:text-lg font-normal">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Social />
    </footer>
  );
};

export default Footer;
