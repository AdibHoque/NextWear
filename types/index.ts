export interface ProductData {
  _id: string;
  name: string;
  description: string;
  image: string[];
  price: string;
  rating: string;
  type: string;
  category: string;
}

export interface ProductCardProps {
  data: ProductData;
}
