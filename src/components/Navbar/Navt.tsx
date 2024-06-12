"use client";
import { FaCompass } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navt() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-1 text-base lg:text-xl">
            <FaCompass color="#8064a2" className="text-lg lg:text-2xl" />
            Explore
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex font-Poppins flex-col w-56">
              <ListItem
                href=""
                title="People-Community"
                className="text-6D747A border-b border-6D747A"
              ></ListItem>
              <ListItem
                href=""
                title="Places-Venues"
                className="text-6D747A border-b border-6D747A"
              ></ListItem>
              <ListItem
                href=""
                title="Programs-Events"
                className="text-6D747A border-b border-6D747A"
              ></ListItem>
              <ListItem
                href=""
                title="Products-Store"
                className="text-6D747A border-b border-6D747A"
              ></ListItem>
              <ListItem
                href=""
                title="Blogs"
                className="text-6D747A border-b border-6D747A"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="text-base
           lg:text-xl"
          >
            <MdStars color="#8064a2" className="text-lg lg:text-2xl" />
            Hobbies
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex font-Poppins flex-col w-48">
              <ListItem
                href=""
                title="Hobby1"
                className="text-6D747A border-b border-6D747A"
              ></ListItem>
              <ListItem
                href=""
                title="Hobby2"
                className="text-6D747A border-b border-6D747A"
              ></ListItem>
              <ListItem
                href=""
                title="Hobby3"
                className="text-6D747A border-b border-6D747A"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none md:text-base">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navt;
