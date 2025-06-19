import { CategoryProduct } from "@/types/products";
import Link from "next/link";
import Image from "next/image";

const Product = ({
  id,
  name,
  description,
  price,
  categoryName,
  image,
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

      <div className="flex items-center justify-between">
        <p className="font-semibold">{name}</p>
        <p className="bg-primary-green ml-2 inline rounded-md px-2 py-1 text-xs text-white">
          {categoryName}
        </p>
      </div>

      <p>{description}</p>
      <p className="font-semibold">{price.toLocaleString()}</p>
    </Link>
  );
};

export default Product;
