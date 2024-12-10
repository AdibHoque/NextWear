import {Button} from "@nextui-org/button";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="bg-[#F2F0F1] relative">
      <div className="max-w-5xl lg:pt-6 h-full px-4 lg:px-2 mx-auto flex flex-col lg:flex-row justify-between items-center ">
        <div className="flex justify-center flex-col gap-y-10 py-10 lg:py-0">
          <h1 className="font-integral text-4xl md:text-5xl lg:text-6xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="opacity-60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button color="primary" variant="solid" className="rounded-full w-44">
            Shop Now
          </Button>
          <div className="flex flex-wrap w-full justify-center lg:justify-around gap-2 ">
            <div className="p-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-satoshiBold">
                200+
              </h2>
              <p className="opacity-60">International Brands</p>
            </div>

            <div className="p-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-satoshiBold">
                2,000+
              </h2>
              <p className="opacity-60">High-Quality Products</p>
            </div>

            <div className="p-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-satoshiBold">
                30,000+
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
          className="z-10 -mr-6"
        />
      </div>

      <img
        src="/Vector.svg"
        alt="star"
        className="absolute top-6 right-48 z-2 hidden lg:flex"
      />

      <img
        src="/Vector2.svg"
        alt="star2"
        className="absolute top-52 left-[730px] z-2 hidden lg:flex"
      />
    </div>
  );
};
