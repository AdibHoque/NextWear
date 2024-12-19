import {Button} from "@nextui-org/button";
import ProductCard from "./ProductCard";
import {getAllProducts} from "@/lib/actions/product.actions";
import {ProductData} from "@/types";

export const TopSelling = async () => {
  const products = await getAllProducts();
  const data = products?.data;

  return (
    <div className="wrapper">
      <h1 className="section-title">Top Selling</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-0">
        {data
          ? data
              .slice(4, 8)
              .map((data: ProductData) => (
                <ProductCard key={data._id} data={data} />
              ))
          : ""}
      </div>
      <div className="w-full flex justify-center mt-12 px-4">
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
