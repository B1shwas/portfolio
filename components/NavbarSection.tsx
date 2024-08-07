"use client";
import { navLinks } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { NavLink } from "@/constants/types/types";
import { handleContactClick } from "@/utils/malitoMail";

const NavbarSection: React.FC = () => {
  const currentPath = usePathname();

  return (
    <nav className="px-[30px] py-[24px] md:px-[60px]">
      <div className="hidden gap-9 justify-end md:flex">
        {navLinks.map((item: NavLink) => (
          <div
            key={item.label}
            className={cn("text-7xs hover:text-buttonColor", {
              "text-black": !currentPath.startsWith(item.route),
              "text-buttonColor": currentPath.startsWith(item.route),
            })}
          >
            {item.label.toLowerCase().startsWith("contact") ? (
              <button
                className="text-black hover:text-buttonColor"
                onClick={handleContactClick}
              >
                Contact
              </button>
            ) : (
              <Link href={item.route}>{item.label}</Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex md:hidden justify-end">
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavbarSection;
