"use client";

import React from "react";
import NextLink from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
} from "@nextui-org/react";
import {CircleUserRound, Search, ShoppingCart} from "lucide-react";
import NavItems from "./NavItems";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Collections", "About", "Contact"];

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      maxWidth="lg"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NextLink href="/">
            <p className="font-bold text-inherit font-integral lg:text-2xl">
              NextWear
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 font-satoshi uppercase"
        justify="center"
      >
        <NavItems />
      </NavbarContent>
      <NavbarContent justify="end">
        <NextLink href="/collections">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10 hidden lg:flex",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search"
            size="sm"
            startContent={<Search size={18} />}
            type="search"
          />
        </NextLink>

        <NavbarItem className="">
          <Link href="#">
            <ShoppingCart />
          </Link>
        </NavbarItem>
        <NavbarItem className="">
          <Link href="#">
            <CircleUserRound />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col justify-center items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full uppercase font-integral text-4xl my-4"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
