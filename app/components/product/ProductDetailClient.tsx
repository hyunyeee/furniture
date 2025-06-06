"use client";

import { CategoryProduct } from "@/types/products";

const ProductDetailClient = ({ product }: { product: CategoryProduct }) => {
  const { name, description, price, image } = product;
  return (
    <div className="flex justify-center">
      <div className="my-[100px] p-4">
        {image ? (
          <img src={image} alt="상품 이미지 " />
        ) : (
          <div className="h-[400px] w-[400px] bg-gray-100">이미지</div>
        )}
        <h1 className="font-semibold">{name}</h1>
        <p>{description}</p>
        <p>{price}원</p>
      </div>
    </div>
  );
};

export default ProductDetailClient;
