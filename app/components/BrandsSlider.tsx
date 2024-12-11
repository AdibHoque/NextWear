import Marquee from "react-fast-marquee";
import Image from "next/image";

function BrandsSlider() {
  return (
    <Marquee className="bg-black w-full -top-1 z-20">
      <div className="my-5 mx-10">
        <Image src="/brand1.svg" alt="brand" width={166} height={33} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand2.svg" alt="brand" width={91} height={38} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand3.svg" alt="brand" width={156} height={36} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand4.svg" alt="brand" width={194} height={32} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand5.svg" alt="brand" width={206} height={34} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand6.svg" alt="brand" width={194} height={32} />
      </div>
      <div className="my-5 mx-10">
        <Image src="/brand7.svg" alt="brand" width={194} height={32} />
      </div>
    </Marquee>
  );
}

export default BrandsSlider;
