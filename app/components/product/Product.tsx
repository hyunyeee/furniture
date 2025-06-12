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
      className="rounded-xl border-1 border-gray-100 px-6 py-4"
    >
      {image ? (
        <Image src={image} alt="상품 이미지" width={200} height={200} />
      ) : (
        <div className="mb-2 h-[200px] w-[200px] bg-gray-100 text-center">
          이미지
        </div>
      )}

      <div className="mb-4 flex items-center justify-between">
        <p className="font-semibold">{name}</p>
        <p className="inline rounded-md bg-slate-500 px-2 py-1 text-sm text-white">
          {categoryName}
        </p>
      </div>

      <p>{description}</p>
      <p className="font-semibold">{price.toLocaleString()}</p>
    </Link>
  );
};

export default Product;
