import {Button} from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import {ProductCardProps} from "../../types";
import {Suspense} from "react";
import ProductCardSkeleton from "./CardSkeleton";
import {Counter} from "./Counter";

export default function ProductCard({data}: ProductCardProps) {
  return (
    <Suspense fallback={<ProductCardSkeleton />}>
      <div className="rounded-xl pb-4 flex flex-col items-center justify-center border mx-auto max-w-56 w-full max-h-72">
        <div className="pb-2 rounded-t-xl object-top relative w-full min-h-36 md:h-48 overflow-hidden bg-[#F2F0F1]">
          <Image
            alt="Card background"
            className="rounded-t-xl object-fill hover:scale-110 overflow-hidden transform transition-transform duration-300 ease-in-out"
            src={data.image[0]}
            fill
          />
        </div>
        <div className="pb-0 pt-2 px-2 flex-col items-start w-full">
          <h3 className="text-xs md:text-lg font-satoshiBold font-bold truncate">
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
            <h4 className="font-bold font-satoshiBold text-2xl">
              $
              <Counter
                scrollSpyOnce
                enableScrollSpy
                scrollSpyDelay={0.2}
                end={Number(data.price)}
                duration={1}
              />
            </h4>

            <Button
              as={Link}
              href={`/collections/${data._id}`}
              size="sm"
              color="primary"
              className="h-6"
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
