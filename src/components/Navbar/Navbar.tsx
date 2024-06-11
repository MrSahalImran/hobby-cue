import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { FaBookmark, FaBell, FaShoppingCart } from "react-icons/fa";

import Navt from "./Navt";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white w-[79%] max-w-screen-xl fixed py-5 flex top-0 items-center justify-between">
        <div>
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image
                src="/assets/navLogo.png"
                width={256}
                height={20}
                alt="logo"
              />
            </Link>
            <div className="flex">
              <input
                type="text"
                placeholder="Search Here..."
                className="h-10 px-2 focus:outline-none border text-gray-500 rounded-l-lg"
              />
              <div className="bg-[#8064a2] flex items-center justify-center w-12 rounded-tr rounded-br ">
                <CiSearch className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <Navt />
          <div className="flex items-center gap-10">
            <FaBookmark className="text-xl text-[#8064a2]" />
            <FaBell className="text-xl text-[#8064a2]" />
            <FaShoppingCart className="text-xl text-[#8064a2]" />
          </div>
        </div>
        <div>
          <Button
            variant="outline"
            title="Sign In"
            className="text-[#8064a2] font-medium"
          >
            Sign In
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
