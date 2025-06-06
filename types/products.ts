export interface Category {
  id: number;
  name: string;
}

export interface CategoryProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  categoryName: string;
  image: string | null;
}
