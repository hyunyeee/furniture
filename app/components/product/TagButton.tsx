"use client";

import { tagTextColorMap } from "@/app/constants/tagTextColorMap";

interface TagButtonProps {
  name: string;
  isActive: boolean;
  toggleTag: (tag: string) => void;
}

const TagButton = ({ name, isActive, toggleTag }: TagButtonProps) => {
  const handleClick = async () => {
    toggleTag(name);
  };

  const bgColor = tagTextColorMap[name] ?? "#ccc";

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer rounded-full px-4 py-2 text-xs font-medium transition-opacity duration-300 ${
        isActive ? "text-white" : "text-black"
      }`}
      style={{
        backgroundColor: bgColor,
        opacity: isActive ? 1 : 0.3,
      }}
    >
      {name}
    </button>
  );
};

export default TagButton;
