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
  Input,
  Button,
} from "@nextui-org/react";
import {DollarSign, Search, X} from "lucide-react";
import NavItems from "./NavItems";
import {usePathname} from "next/navigation";
import CartIcon from "./CartIcon";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [notiOpen, setNotiOpen] = React.useState(true);

  const menuItems = ["Home", "Collections", "About", "Contact"];

  return (
    <>
      {notiOpen ? (
        <span className="bg-black">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-5">
            <X className="text-black size-5" />
            <p className="text-center text-white font-mono font-thin text-xs md:text-sm my-2">
              Use code <span className="font-bold">ADIB20</span> for 20% off any
              order.
              <span className="font-normal max-sm:hidden"> Shop Now!</span>
            </p>
            <X
              className="text-white size-5 cursor-pointer delay-1000 animate-appearance-in"
              onClick={() => {
                setNotiOpen(!notiOpen);
              }}
            />
          </div>
        </span>
      ) : (
        ""
      )}
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
        isMenuOpen={isMenuOpen}
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
          {pathname !== "/collections" && (
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
          )}

          <NavbarItem className="">
            <NextLink href="/cart">
              <CartIcon />
            </NextLink>
          </NavbarItem>
          <NavbarItem className="">
            <SignedOut>
              <Button as={Link} href="/sign-in" size="sm" color="primary">
                Login
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="Purchases"
                    labelIcon={<DollarSign className="size-4" />}
                    href="/purchases"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="flex flex-col justify-center items-center gap-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                onClick={() => setIsMenuOpen(false)}
                className="w-full uppercase font-integral text-4xl hover:opacity-60"
                href={`/${
                  item.toLocaleLowerCase() == "home" ? "" : item.toLowerCase()
                }`}
              >
                {item}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
