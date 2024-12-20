import Filter from "@/app/components/Filter";
import ProductCard from "@/app/components/ProductCard";
import {getAllProducts} from "@/lib/actions/product.actions";
import {ProductData} from "@/types";
import {SearchParams} from "next/dist/server/request/search-params";

const CollectionsPage = async (props: {searchParams: SearchParams}) => {
  const searchParams = await props.searchParams;
  const category = (searchParams?.category as string) || "";
  const type = (searchParams?.type as string) || "";
  const priceRange = (searchParams?.priceRange as string) || "";
  const query = (searchParams?.query as string) || "";
  const products = await getAllProducts({
    category: category,
    type: type,
    priceRange: priceRange,
    query: query,
  });
  const data = products?.data;

  return (
    <div className="wrapper py-6 md:flex gap-4 px-4 lg:px-0 relative">
      <Filter />
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data
          ? data.map((data: ProductData) => (
              <ProductCard key={data._id} data={data} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default CollectionsPage;
