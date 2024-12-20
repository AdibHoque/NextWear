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

export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};
