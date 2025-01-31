const ProductCardSkeleton = () => {
  return (
    <div className="rounded-xl pb-4 flex flex-col items-center justify-center border mx-auto max-w-56  w-full max-h-72 animate-pulse">
      <div className="pb-2 rounded-t-xl object-top relative w-full min-h-36 bg-gray-200"></div>

      <div className="pb-0 pt-2 px-2 flex-col items-start w-full">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full bg-gray-300 mr-1"
              ></div>
            ))}
          <div className="ml-2 h-4 bg-gray-300 rounded w-10"></div>
        </div>

        <div className="w-full flex justify-between items-center mt-2">
          <h1 className="h-6 text-gray-300 font-bold font-satoshiBold text-2xl">
            $000
          </h1>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
