"use client";

import {Button} from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import {ProductCardProps} from "../types";

export default function ProductCard({data}: ProductCardProps) {
  return (
    <div className="pb-4 flex flex-col items-center justify-center border mx-auto max-w-72 w-full max-h-80">
      <div className="pb-2 relative w-full min-h-36 md:h-48 overflow-hidden bg-[#F2F0F1]">
        <Image
          alt="Card background"
          className="object-fill hover:scale-110 overflow-hidden transform transition-transform duration-300 ease-in-out"
          src={data.image}
          fill
        />
      </div>
      <div className="pb-0 pt-2 px-2 flex-col items-start w-full">
        <h3 className="text-xs md:text-lg font-satoshiBold font-bold text-wrap">
          {data.name}
        </h3>

        <div className="flex">
          {Array(Math.floor(parseInt(data.rating)))
            .fill(0)
            .map((_, index) => (
              <Image
                width={16}
                height={16}
                key={index}
                src="/star.svg"
                alt="star"
              />
            ))}
          {Array(5 - Math.floor(parseInt(data.rating)))
            .fill(0)
            .map((_, index) => (
              <Image
                width={16}
                height={16}
                key={index}
                src="/nostar.svg"
                alt="nostar"
              />
            ))}
          <p className="ml-2 text-black/60 font-satoshi">{data.rating}/5</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <h4 className="font-bold font-satoshiBold text-2xl">${data.price}</h4>

          <Button
            as={Link}
            href={`/collections/${data.id}`}
            size="sm"
            color="primary"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
