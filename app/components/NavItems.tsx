import {NavbarItem} from "@nextui-org/react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <>
      <NavbarItem isActive={pathname === "/"}>
        <Link color="foreground" href="/">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem isActive={pathname === "/collections"}>
        <Link color="foreground" href="/collections">
          Collections
        </Link>
      </NavbarItem>
      <NavbarItem isActive={pathname === "/about"}>
        <Link color="foreground" href="/about">
          About
        </Link>
      </NavbarItem>
      <NavbarItem isActive={pathname === "/contact"}>
        <Link color="foreground" href="/contact">
          Contact
        </Link>
      </NavbarItem>
    </>
  );
};

export default NavItems;
