/* eslint-disable*/
import {connectToDatabase} from "../database";
import Product from "../database/models/product.model";

export async function getAllProducts({
  category,
  type,
  priceRange,
  query,
  page,
}: {
  category?: string;
  type?: string;
  priceRange?: string;
  query?: string;
  page?: number;
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
    const skipAmount = (Number(page) - 1) * 8;
    const products = await Product.find(filter).skip(skipAmount).limit(8);

    const productsCount = await Product.countDocuments(filter);

    return {
      data: JSON.parse(JSON.stringify(products)),
      totalPages: Math.ceil(productsCount / 8),
    };
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
