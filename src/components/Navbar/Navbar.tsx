import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBookmark, FaBell, FaShoppingCart } from "react-icons/fa";

import Navt from "./Navt";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white w-full max-w-screen-xl fixed top-0 md:left-auto left-0 py-3 md:py-5 z-50 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/">
            <Image
              src="/assets/navLogo.png"
              width={180}
              height={14}
              alt="logo"
              className="w-36 lg:w-auto"
            />
          </Link>
          <div className="hidden lg:flex">
            <input
              type="text"
              placeholder="Search Here..."
              className="h-8 px-2 focus:outline-none border text-gray-500 rounded-l-lg"
            />
            <div className="bg-[#8064a2] flex items-center justify-center w-8 rounded-tr rounded-br">
              <CiSearch className="text-white text-lg" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden md:flex">
            <Navt />
          </div>
          <div className="hidden md:flex">
            <FaBookmark className="text-lg text-[#8064a2]" />
          </div>
          <div className="hidden md:flex">
            <FaBell className="text-lg text-[#8064a2]" />
          </div>
          <div className="hidden md:flex">
            <FaShoppingCart className="text-lg text-[#8064a2]" />
          </div>
          <div className="hidden md:flex">
            <Button
              variant="outline"
              title="Sign In"
              className="text-[#8064a2] w-18 lg:w-auto font-medium"
            >
              Sign In
            </Button>
          </div>
          <div className="block md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
