import ProductDetails from "@/app/components/ProductDetails";
import {getAllProducts} from "@/lib/actions/product.actions";
import {ProductData} from "@/types";

type IdProps = Promise<{
  id: string;
}>;

const ProductDetailsPage = async (props: {params: IdProps}) => {
  const params = await props.params;
  const {id} = params;
  const products = await getAllProducts();
  const data = products?.data;
  const ProductData = data ? data.find((d: ProductData) => d._id == id) : {};

  return (
    <>{ProductData ? <ProductDetails data={ProductData} /> : "No data found"}</>
  );
};

export default ProductDetailsPage;
