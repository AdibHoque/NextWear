import ProductDetails from "@/app/components/ProductDetails";
import {data} from "@/app/constants";

type IdProps = Promise<{
  id: string;
}>;

const ProductDetailsPage = async (props: {params: IdProps}) => {
  const params = await props.params;
  const {id} = params;
  const ProductData = data.find((d) => d.id == id);

  return (
    <>{ProductData ? <ProductDetails data={ProductData} /> : "No data found"}</>
  );
};

export default ProductDetailsPage;
