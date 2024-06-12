import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import Form from "../Hero/components/Form";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/hamburger.svg"
          alt="hamburger"
          width={36}
          height={36}
          className="block md:hidden"
        />
      </SheetTrigger>
      <SheetContent>
        <Form />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
