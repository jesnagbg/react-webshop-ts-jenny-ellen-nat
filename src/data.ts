export interface Product {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [];
