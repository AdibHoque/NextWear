import BreadCrumbs from "@/app/components/BreadCrumbs";
import ProductCardSkeleton from "@/app/components/CardSkeleton";
import Filter from "@/app/components/Filter";

const SkeletonGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array(8)
      .fill(0)
      .map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
  </div>
);

const Loading = () => (
  <div className="w-full">
    <div className="wrapper px-4 lg:px-0">
      <BreadCrumbs routes={["Home", "Collections"]} />

      <div className="pb-16 md:flex gap-4 relative justify-between">
        <Filter />
        <SkeletonGrid />
      </div>
    </div>
  </div>
);

export default Loading;
