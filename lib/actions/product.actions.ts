import {connectToDatabase} from "../database";
import Product from "../database/models/product.model";

export async function getAllProducts() {
  try {
    await connectToDatabase();
    const products = await Product.find().lean();

    return {data: JSON.parse(JSON.stringify(products))};
  } catch (error) {
    console.log(error);
  }
}
