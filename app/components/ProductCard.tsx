"use client";

import Image from "next/image";

export default function ProductCard() {
  const data = {
    name: "T-shirt with tape details",
    image: "/product1.png",
    price: "120",
    rating: "4.5",
  };

  return (
    <div className="pb-4 flex flex-col items-center justify-center border mx-auto max-w-96 w-full">
      <div className="pb-2 relative w-full h-60 overflow-hidden bg-[#F2F0F1]">
        <Image
          alt="Card background"
          className="object-fill hover:scale-110 overflow-hidden transform transition-transform duration-300 ease-in-out"
          src={data.image}
          fill
        />
      </div>
      <div className="pb-0 pt-2 px-2 flex-col items-start w-full">
        <h3 className="text-lg font-satoshiBold font-bold text-wrap">
          {data.name}
        </h3>

        <div className="flex">
          {Array(Math.floor(parseInt(data.rating)))
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
          {Array(5 - Math.floor(parseInt(data.rating)))
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
          <p className="ml-2 text-black/60 font-satoshi">{data.rating}/5</p>
        </div>

        <h4 className="font-bold font-satoshiBold text-2xl">${data.price}</h4>
      </div>
    </div>
  );
}
