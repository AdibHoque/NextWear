import {Button} from "@nextui-org/button";
import ProductCard from "./ProductCard";
import {Divider} from "@nextui-org/react";
import {data} from "../constants";

export const NewArrivals = () => {
  const NewArrivals = data.slice(0, 4);

  return (
    <div className="wrapper">
      <h1 className="section-title">New Arrivals</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-0">
        {NewArrivals.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
      <div className="w-full flex justify-center my-12 mb-20 px-4">
        <Button
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
