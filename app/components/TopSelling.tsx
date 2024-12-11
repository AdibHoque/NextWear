import {Button} from "@nextui-org/button";
import ProductCard from "./ProductCard";

export const TopSelling = () => {
  return (
    <div className="wrapper">
      <h1 className="section-title">Top Selling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 lg:px-0">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
      <div className="w-full flex justify-center mt-12 px-10">
        <Button
          color="primary"
          variant="bordered"
          className="rounded-full w-44 font-satoshi font-medium mx-auto border-neutral-200"
        >
          View All
        </Button>
      </div>
    </div>
  );
};