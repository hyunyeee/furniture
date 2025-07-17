import Image from "next/image";
import Link from "next/link";
import { mainProducts } from "@/constants/mainProducts";

export default function MainProduct() {
  return (
    <div className="mx-auto my-5 flex flex-wrap justify-center gap-6 px-4">
      {mainProducts.map((product, index) => (
        <div
          key={index}
          className="relative h-[400px] w-full max-w-[320px] flex-shrink-0 transform transition duration-300 hover:scale-[1.01] hover:shadow-xl sm:h-[500px] sm:max-w-[400px] md:h-[650px] md:max-w-[500px]"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="rounded object-contain"
            priority
          />
          <div className="absolute inset-0 rounded bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-white sm:p-6">
            <p className="text-xs sm:text-sm">{product.category}</p>
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">
              {product.title}
            </h3>
            <p className="mb-4 text-xs leading-relaxed whitespace-pre-wrap sm:text-sm">
              {product.description}
            </p>
            <Link
              href={product.link}
              className="rounded bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-gray-200 sm:text-sm"
            >
              구매하기
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
