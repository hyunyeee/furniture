import {
  Category,
  CategoryProduct,
  CategoryTag,
  productSpec,
} from "@/types/products";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${apiUrl}/products/categories`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("카테고리 불러오기 실패");
  return await response.json();
}

export async function getCategoryTags(id: number): Promise<CategoryTag> {
  const response = await fetch(`${apiUrl}/products/tags?categoryId=${id}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("카테고리 태그 불러오기 실패");
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

export async function getProductDetail(id: string): Promise<CategoryProduct> {
  const response = await fetch(`${apiUrl}/products/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("상품 상세정보 불러오기 실패");
  return await response.json();
}

export async function getProductSpec(id: string): Promise<productSpec[]> {
  const response = await fetch(
    `${apiUrl}/products/product-details/by-product/${id}`,
    {
      cache: "no-store",
    },
  );
  if (!response.ok) throw new Error("상품 상세정보 불러오기 실패");
  return await response.json();
}
