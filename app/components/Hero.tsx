import {Button} from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Counter} from "./Counter";

export const Hero = async () => {
  return (
    <div className="bg-[#F2F0F1] relative overflow-hidden ">
      <div className="max-w-5xl lg:pt-6 h-full px-4 lg:px-2 mx-auto flex flex-col lg:flex-row justify-between items-center ">
        <div className="flex justify-center flex-col gap-y-10 py-10 lg:py-0 md:mt-2">
          <h1 className="font-integral text-4xl md:text-5xl lg:text-6xl animate-appearance-in">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="opacity-60 animate-appearance-in">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            as={Link}
            href="/collections"
            color="primary"
            variant="solid"
            className="rounded-full w-full lg:w-44 font-satoshi font-medium animate-appearance-in"
          >
            Shop Now
          </Button>
          <div className="flex flex-wrap w-full justify-center lg:justify-around gap-2 ">
            <div className="p-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-satoshiBold">
                <Counter end={200} duration={1} />
                <span className="animate-appearance-in delay-1000">+</span>
              </h2>
              <p className="opacity-60">International Brands</p>
            </div>

            <div className="p-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-satoshiBold">
                <Counter end={2000} duration={1} />
                <span className="animate-appearance-in delay-1000">+</span>
              </h2>
              <p className="opacity-60">High-Quality Products</p>
            </div>

            <div className="p-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-satoshiBold">
                <Counter end={30000} duration={1} />
                <span className="animate-appearance-in delay-1000">+</span>
              </h2>
              <p className="opacity-60">Happy Customers</p>
            </div>
          </div>
        </div>

        <Image
          src="/hero.png"
          width={500}
          height={500}
          alt="Hero"
          quality={100}
          priority
          className="z-10 -mr-6 md:mt-2 animate-appearance-in"
        />
      </div>

      <Image
        width={104}
        height={104}
        src="/Vector.svg"
        alt="star"
        className="absolute top-6 right-48 z-2 hidden lg:flex animate-spin-slow"
      />

      <Image
        width={56}
        height={56}
        src="/Vector2.svg"
        alt="star2"
        className="absolute top-52 left-[730px] z-2 hidden lg:flex animate-spin-slow"
      />
    </div>
  );
};
