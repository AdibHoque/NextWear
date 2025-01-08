import {Suspense} from "react";
import Filter from "@/app/components/Filter";
import ProductCard from "@/app/components/ProductCard";
import {getAllProducts} from "@/lib/actions/product.actions";
import {ProductData, SearchParams} from "@/types";
import ProductCardSkeleton from "@/app/components/CardSkeleton";
import BreadCrums from "@/app/components/BreadCrumbs";
import Pagination from "@/app/components/Pagination";

const SkeletonGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array(8)
      .fill(0)
      .map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
  </div>
);

const CollectionsPage = async (props: {searchParams: SearchParams}) => {
  const searchParams = await props.searchParams;
  const category = (searchParams?.category as string) || "";
  const type = (searchParams?.type as string) || "";
  const priceRange = (searchParams?.priceRange as string) || "";
  const query = (searchParams?.query as string) || "";
  const page = (searchParams?.page as string) || 1;

  const products = await getAllProducts({
    category: category,
    type: type,
    priceRange: priceRange,
    query: query,
    page: Number(page),
  });

  const data = products?.data;

  return (
    <div className="wrapper px-4 lg:px-0">
      <BreadCrums
        routes={
          category == ""
            ? ["Home", "Collections"]
            : [
                "Home",
                "Collections",
                category.charAt(0).toUpperCase() + category.slice(1),
              ]
        }
      />
      <div className="pb-16 md:flex gap-4 relative">
        <Filter />
        <Suspense fallback={<SkeletonGrid />}>
          <div>
            <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data
                ? data.map((data: ProductData) => (
                    <ProductCard key={data._id} data={data} />
                  ))
                : ""}
            </div>
            <Pagination
              totalPages={products?.totalPages ? products?.totalPages : 1}
              page={page}
            />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default CollectionsPage;
