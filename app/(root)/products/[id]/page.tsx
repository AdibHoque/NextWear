"use client";
import ProductGallery from "@/app/components/ProductGallery";
import {Divider, Tab, Tabs} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import Image from "next/image";
import {useState} from "react";

const Page = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="wrapper flex flex-col lg:flex-row justify-between px-4 lg:px-0 gap-6 my-6 mb-20">
      <div className="lg:w-1/2 w-full">
        <ProductGallery />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        <h1 className="font-integral text-4xl">Graphic T-shirt</h1>
        <div className="flex">
          {Array(Math.floor(parseInt("4.5")))
            .fill(0)
            .map((_, index) => (
              <Image
                width={24}
                height={24}
                key={index}
                src="/star.svg"
                alt="star"
              />
            ))}
          {Array(5 - Math.floor(parseInt("4.5")))
            .fill(0)
            .map((_, index) => (
              <Image
                width={24}
                height={24}
                key={index}
                src="/nostar.svg"
                alt="nostar"
              />
            ))}
          <p className="ml-2 text-black/60 font-satoshi">4.5/5</p>
        </div>
        <h4 className="font-bold font-satoshiBold text-3xl">$260</h4>
        <p className="opacity-60">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <Divider />

        <div>
          <p className="opacity-60 font-satoshi text-sm mb-2">Choose Color</p>
          <div className="flex gap-2">
            <div className="size-9 bg-[#4F4631] rounded-full"></div>
            <div className="size-9 bg-[#314F4A] rounded-full"></div>
            <div className="size-9 bg-[#31344F] rounded-full"></div>
          </div>
        </div>
        <Divider />
        <div>
          <p className="opacity-60 font-satoshi text-sm mb-2">Choose Size</p>
          <Tabs className="bg-white" color="primary" radius="full" size="lg">
            <Tab key="small" title="Small" />
            <Tab key="medium" title="Medium" />
            <Tab key="large" title="Large" />
            <Tab key="x-large" title="X-Large" />
          </Tabs>
        </div>

        <Divider />
        <div className="flex gap-5">
          <ButtonGroup radius="full" className="font-satoshiBold">
            <Button
              size="sm"
              disabled={quantity < 2}
              onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : "")}
              className="text-2xl h-full"
            >
              -
            </Button>
            <Button disabled className="text-xl font-satoshi h-full" size="sm">
              {quantity}
            </Button>
            <Button
              size="sm"
              disabled={quantity > 9}
              onClick={() => (quantity < 10 ? setQuantity(quantity + 1) : "")}
              className="text-2xl h-full"
            >
              +
            </Button>
          </ButtonGroup>
          <Button color="primary" radius="full" className="w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
