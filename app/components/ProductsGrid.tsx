import React from "react";
import ProductCard from "./ProductCard";
import {getAllProducts} from "@/lib/actions/product.actions";
import {ProductData} from "@/types";

const ProductsGrid = async () => {
  const products = await getAllProducts();
  const data = products?.data;
  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data
        ? data.map((data: ProductData) => (
            <ProductCard key={data._id} data={data} />
          ))
        : ""}
    </div>
  );
};

export default ProductsGrid;
