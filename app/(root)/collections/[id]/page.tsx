import ProductDetails from "@/app/components/ProductDetails";
import {getProductById} from "@/lib/actions/product.actions";

type IdProps = Promise<{
  id: string;
}>;

const ProductDetailsPage = async (props: {params: IdProps}) => {
  const params = await props.params;
  const {id} = params;
  const productData = await getProductById(id);

  return (
    <>{productData ? <ProductDetails data={productData} /> : "No data found"}</>
  );
};

export default ProductDetailsPage;
