"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import { navLinks } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  const currentPath = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu size={25} />
      </SheetTrigger>
      <SheetContent className="w-[300px] flex justify-center items-center ">
        <SheetDescription>
          <div className="flex flex-col gap-7">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className={cn("text-7xs font-medium hover:text-buttonColor", {
                  "text-primaryText": !currentPath.startsWith(item.route),
                  "text-buttonColor": currentPath.startsWith(item.route),
                })}
              >
                {item.label.toLowerCase().startsWith("contact") ? (
                  <button className="text-primaryText hover:text-buttonColor">
                    Contact
                  </button>
                ) : (
                  <Link href={item.route}>{item.label}</Link>
                )}
              </div>
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
