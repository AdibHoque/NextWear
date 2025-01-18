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

export interface ProductOrder {
  stripeId: string;
  userId: string;
  totalAmount: string;
  createdAt: Date;
  id: string;
  name: string;
  price: string;
  size: string;
  color: string;
  image: string;
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

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;
