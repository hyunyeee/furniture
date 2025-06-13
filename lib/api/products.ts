import { Category, CategoryProduct } from "@/types/products";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${apiUrl}/products/categories`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("카테고리 불러오기 실패");
  return await response.json();
}

export async function getCategoryProductsById(
  id: number,
): Promise<CategoryProduct[]> {
  const response = await fetch(`${apiUrl}/products/categories/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("카테고리별 상품 불러오기 실패");
  return await response.json();
}
