export interface Category {
  id: number;
  name: string;
}

export interface CategoryTag {
  tagNames: string[];
  categoryName: string;
}

export interface CategoryProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryName: string;
  tagName: string;
  image: string | null;
}

export interface productSpec {
  model: string;
  size: string;
}

export interface CartProductListInfo {
  items: CartProduct[];
  totalAmount: number;
}

export interface CartProduct {
  cartItemId: number;
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image?: string;
}
