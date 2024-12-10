"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function BrandsSlider() {
  return (
    <Marquee className="bg-black max-w-5xl mx-auto">
      <div className="my-5 mx-10">
        <Image src="/brand1.png" alt="brand" width={166} height={33} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand2.png" alt="brand" width={91} height={38} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand3.png" alt="brand" width={156} height={36} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand4.png" alt="brand" width={194} height={32} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand5.png" alt="brand" width={206} height={34} />
      </div>
      ...
    </Marquee>
  );
}

export default BrandsSlider;
