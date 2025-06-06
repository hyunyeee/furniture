"use client";

import { Category } from "@/types/products";
import useCategoryStore from "@/app/store/useCategoryStore";

const CategoryButton = ({ id, name }: Category) => {
  const { categoryId, setCategoryId } = useCategoryStore();

  const handleClick = () => {
    setCategoryId(id);
    console.log(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`${categoryId === id ? "bg-slate-800 text-white" : "bg-slate-400"} cursor-pointer rounded-md px-4 py-2 hover:bg-slate-800 hover:text-white`}
    >
      <p>{name}</p>
    </button>
  );
};

export default CategoryButton;
