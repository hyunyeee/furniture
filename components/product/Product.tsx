import { CategoryProduct } from "@/types/products";
import Link from "next/link";
import Image from "next/image";
import { tagTextColorMap } from "@/constants/tagTextColorMap";

const Product = ({
  id,
  name,
  description,
  price,
  // categoryName,
  image,
  tagName,
}: CategoryProduct) => {
  return (
    <Link
      href={`/products/${id}`}
      className="flex w-[300px] flex-col items-center rounded-xl border-1 border-gray-100 px-6 py-4"
    >
      {image ? (
        <Image src={image} alt="상품 이미지" width={200} height={200} />
      ) : (
        <div className="mb-2 h-[200px] w-[200px] bg-gray-100 text-center">
          이미지
        </div>
      )}
      <div className="mt-1 w-full text-left">
        <div className="flex justify-between">
          <h3 className="truncate text-base font-semibold text-gray-800">
            {name}
          </h3>
          <span
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: tagTextColorMap[tagName] ?? "#ccc" }}
          >
            {tagName}
          </span>
        </div>

        <p className="mt-1 line-clamp-2 text-sm text-gray-600">{description}</p>
        <p className="mt-2 text-lg font-bold text-gray-900">
          {price.toLocaleString()}원
        </p>
      </div>
    </Link>
  );
};

export default Product;
