"use client";
import {Button, Input} from "@nextui-org/react";
import {MailIcon} from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-0 relative ">
      <div className="h-1/2 left-0 bottom-0 -z-50 w-full bg-[#F0F0F0] absolute"></div>
      <div className="bg-black wrapper lg:mx-auto px-6 py-7 lg:py-9 lg:px-16  items-center rounded-2xl flex flex-col lg:flex-row justify-between">
        <h1 className="font-integral text-white text-3xl md:text-4xl lg:w-3/5">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <Input
            label="Email"
            labelPlacement="outside"
            placeholder="Enter your email address"
            className="w-full rounded-xl py-[1px] bg-white"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="email"
          />
          <Button className="w-full rounded-xl font-satoshiBold bg-white">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
