"use client";

import useCategoryStore from "@/app/store/useCategoryStore";

interface CategoryButtonProps {
  id: number;
  name: string;
}

const CategoryButton = ({ id, name }: CategoryButtonProps) => {
  const { categoryId, setCategoryId } = useCategoryStore();

  const handleClick = async () => {
    setCategoryId(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`${categoryId === id ? "bg-primary-green text-white" : "bg-light-green"} hover:bg-dark-green cursor-pointer rounded-md px-4 py-2 transition-colors hover:text-white`}
    >
      <p>{name}</p>
    </button>
  );
};

export default CategoryButton;
