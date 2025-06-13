"use client";

import { useEffect, useState } from "react";
import useCategoryStore from "@/app/store/useCategoryStore";
import Product from "@/app/components/product/Product";
import { getCategoryProductsById } from "@/lib/api/product";
import { CategoryProduct } from "@/types/products";

interface ProductListProps {
  initialCategoryId: number;
}

export default function ProductList({ initialCategoryId }: ProductListProps) {
  const { categoryId, setCategoryId } = useCategoryStore();
  const [products, setProducts] = useState<CategoryProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId === 0 && initialCategoryId) {
      setCategoryId(initialCategoryId);
    }
  }, [initialCategoryId, categoryId, setCategoryId]);

  useEffect(() => {
    if (!categoryId) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getCategoryProductsById(categoryId);
        setProducts(data);
      } catch (err) {
        console.error("상품 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <p className="text-center text-gray-500">상품을 불러오는 중...</p>;
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500">
        해당 카테고리의 상품이 없습니다.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map(({ id, name, description, price, categoryName, image }) => (
        <Product
          key={id}
          id={id}
          name={name}
          description={description}
          price={price}
          categoryName={categoryName}
          image={image}
        />
      ))}
    </div>
  );
}
