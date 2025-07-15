import { getProductDetail, getProductSpec } from "@/lib/api/product";
import ProductDetailClient from "@/components/product/ProductDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const productDetail = await getProductDetail(id);
  const productSpec = await getProductSpec(id);

  return (
    <ProductDetailClient product={productDetail} productSpec={productSpec} />
  );
}
