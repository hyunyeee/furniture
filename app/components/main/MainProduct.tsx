import Image from "next/image";
import Link from "next/link";
import { mainProducts } from "@/app/constants/mainProducts";

export default function MainProduct() {
  return (
    <div className="mx-auto my-5 flex w-full flex-wrap justify-center gap-6">
      {mainProducts.map((product, index) => (
        <div
          key={index}
          className="relative h-[650px] w-[500px] flex-shrink-0 transform transition duration-300 hover:scale-101 hover:shadow-xl"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="rounded object-contain"
            priority
          />
          <div className="absolute inset-0 rounded bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white">
            <p className="text-sm">{product.category}</p>
            <h3 className="mb-4 text-xl font-semibold">{product.title}</h3>
            <h3 className="mb-4 text-sm leading-relaxed whitespace-pre-wrap">
              {product.description}
            </h3>
            <Link
              href={product.link}
              className="rounded bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
            >
              구매하기
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
