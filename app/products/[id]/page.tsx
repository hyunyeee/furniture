import { CategoryProduct } from "@/types/products";
import ProductDetailClient from "@/app/components/product/ProductDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

async function getProductDetail(id: string): Promise<CategoryProduct> {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) throw new Error("API_URL 환경변수가 설정되어 있지 않습니다.");
  if (!id) throw new Error("productId가 설정되어 있지 않습니다.");

  const fetchUrl = `${apiUrl}/products/${id}`;
  const response = await fetch(fetchUrl, { cache: "no-store" });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API 요청 실패:", response.status, errorText);
    throw new Error("불러오기 실패");
  }

  return response.json();
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const product = await getProductDetail(id);
  return <ProductDetailClient product={product} />;
}
