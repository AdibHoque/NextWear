/* eslint-disable*/
import {connectToDatabase} from "../database";
import Product from "../database/models/product.model";

export async function getAllProducts({
  category,
  type,
  priceRange,
  query,
}: {
  category?: string;
  type?: string;
  priceRange?: string;
  query?: string;
}) {
  try {
    await connectToDatabase();
    const filter: Record<string, any> = {};

    if (category) filter.category = category;
    if (type) filter.type = type;

    if (query) {
      filter.name = {$regex: query, $options: "i"};
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filter.price = {$gte: min, $lte: max};
    }

    const products = await Product.find(filter);

    return {data: JSON.parse(JSON.stringify(products))};
  } catch (error) {
    console.error("Error fetching products:", error);
    return {data: []};
  }
}

export async function getProductById(id: string) {
  try {
    await connectToDatabase();
    const product = await Product.findById(id);

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
