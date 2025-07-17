"use client";

import { useEffect, useState } from "react";
import { getCategories, getCategoryProductsById } from "@/lib/api/product";

import { Category, CategoryProduct } from "@/types/products";
import useCategoryStore from "@/store/useCategoryStore";
import CategoryTagSelector from "@/components/product/CategoryTagSelector";
import ProductList from "@/components/product/ProductList";

const Products = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<CategoryProduct[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoryId, setCategoryId } = useCategoryStore();

  const selectAllProducts = () => {
    setSelectedTags([]);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filteredProducts =
    selectedTags.length === 0
      ? products
      : products.filter((p) => selectedTags.includes(p.tagName));

  useEffect(() => {
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

    if (categoryId) fetchProducts();
  }, [categoryId]);

  useEffect(() => {
    const fetchInitialCategories = async () => {
      const fetched = await getCategories();
      setCategories(fetched);
      setCategoryId(fetched[0]?.id);
    };

    fetchInitialCategories();
  }, []);

  return (
    <div className="my-[100px] flex flex-col justify-between gap-10">
      <h1 className="text-center text-3xl font-semibold">Folding Desks</h1>
      <CategoryTagSelector
        categories={categories}
        toggleTag={toggleTag}
        selectAllProducts={selectAllProducts}
        selectedTags={selectedTags}
      />
      <ProductList products={filteredProducts} loading={loading} />
    </div>
  );
};

export default Products;
