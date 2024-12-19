export interface ProductData {
  id: string;
  name: string;
  description: string;
  image: string[];
  price: string;
  rating: string;
}

export interface ProductCardProps {
  data: ProductData;
}
