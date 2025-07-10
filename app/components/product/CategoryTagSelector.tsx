"use client";

import { useEffect, useState } from "react";
import { getCategoryTags } from "@/lib/api/product";
import CategoryButton from "@/app/components/product/CategoryButton";
import TagButton from "@/app/components/product/TagButton";
import useCategoryStore from "@/app/store/useCategoryStore";
import { Category } from "@/types/products";

interface CategoryTagSelectorProps {
  categories: Category[];
  toggleTag: (tag: string) => void;
  selectAllProducts: () => void;
  selectedTags: string[];
}

const CategoryTagSelector = ({
  categories,
  toggleTag,
  selectAllProducts,
  selectedTags,
}: CategoryTagSelectorProps) => {
  const { categoryId } = useCategoryStore();

  const [tagArr, setTagArr] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      if (categoryId) {
        const tagArr = await getCategoryTags(categoryId);
        setTagArr(tagArr.tagNames);
      }
    };
    fetchTags();
  }, [categoryId]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-4">
        {categories.map(({ id, name }) => (
          <CategoryButton key={id} id={id} name={name} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={selectAllProducts}
          className="cursor-pointer rounded-full px-4 py-2 text-xs font-medium transition-opacity duration-300"
          style={{
            backgroundColor: selectedTags.length > 0 ? "#ccc" : "#3d3d3d",
            color: selectedTags.length > 0 ? "black" : "white",
          }}
        >
          전체 보기
        </button>
        {tagArr.map((tagName) => (
          <TagButton
            key={tagName}
            name={tagName}
            toggleTag={toggleTag}
            isActive={selectedTags.includes(tagName)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryTagSelector;
