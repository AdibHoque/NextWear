"use client";
import {Button, Input} from "@nextui-org/react";
import {MailIcon} from "lucide-react";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import MySwal from "sweetalert2";

const Newsletter = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("NextEmail", "template_fke9x0s", form.current, {
          publicKey: "9MKherpptDhGZ-j_6",
        })
        .then(
          () => {
            MySwal.fire({
              position: "center",
              icon: "success",
              title: "Success!",
              text: "Thanks for subscribing to our newsletter!",
              timer: 2000,
              showConfirmButton: false,
            });
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            MySwal.fire({
              position: "center",
              icon: "error",
              title: "FAILED...",
              timer: 2000,
              text: "Kindly try again to subscribe.",
              showConfirmButton: false,
            });
          }
        );
    }
  };

  return (
    <div className="px-4 lg:px-0 relative ">
      <div className="h-1/2 left-0 bottom-0 -z-50 w-full bg-[#F0F0F0] absolute"></div>
      <div className="bg-black wrapper lg:mx-auto px-6 py-7 lg:py-9 lg:px-16  items-center rounded-2xl flex flex-col lg:flex-row justify-between">
        <h1 className="font-integral text-white text-3xl md:text-4xl lg:w-3/5">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full lg:w-2/5 flex flex-col gap-4"
        >
          <Input
            name="to_email"
            label="Email"
            labelPlacement="outside"
            required
            placeholder="Enter your email address"
            className="w-full rounded-xl py-[1px] bg-white"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="email"
          />
          <Button
            type="submit"
            className="w-full rounded-xl font-satoshiBold bg-white"
          >
            Subscribe to Newsletter
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
