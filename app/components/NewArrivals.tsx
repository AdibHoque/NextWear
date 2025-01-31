import {Button} from "@nextui-org/button";
import ProductCard from "./ProductCard";
import {Divider} from "@nextui-org/react";
import {getAllProducts} from "@/lib/actions/product.actions";
import {ProductData} from "@/types";
import Link from "next/link";
import ProductCardSkeleton from "./CardSkeleton";

export const NewArrivals = async () => {
  const products = await getAllProducts({});
  const data = products?.data;

  return (
    <div className="wrapper">
      <h1 className="section-title">New Arrivals</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-0">
        {data > 0
          ? data
              .slice(0, 4)
              .map((data: ProductData) => (
                <ProductCard key={data._id} data={data} />
              ))
          : Array(4)
              .fill(0)
              .map((_, index) => <ProductCardSkeleton key={index} />)}
      </div>
      <div className="w-full flex justify-center my-12 mb-20 px-4">
        <Button
          as={Link}
          href="/collections"
          color="primary"
          variant="bordered"
          className="rounded-full w-44 font-satoshi font-medium mx-auto border-neutral-200"
        >
          View All
        </Button>
      </div>
      <Divider />
    </div>
  );
};
