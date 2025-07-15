"use client";

import { CategoryProduct } from "@/types/products";
import Product from "@/components/product/Product";

interface ProductListProps {
  products: CategoryProduct[];
  loading: boolean;
}

export default function ProductList({ products, loading }: ProductListProps) {
  if (loading) {
    return <p className="text-center text-gray-500">상품을 불러오는 중...</p>;
  }

  if (products?.length === 0) {
    return (
      <p className="text-center text-gray-500">
        해당 카테고리의 상품이 없습니다.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products?.map(
        ({ id, name, description, price, categoryName, tagName, image }) => (
          <Product
            key={id}
            id={id}
            name={name}
            description={description}
            price={price}
            categoryName={categoryName}
            tagName={tagName}
            image={image}
          />
        ),
      )}
    </div>
  );
}
