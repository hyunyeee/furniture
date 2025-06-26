"use client";

import { useEffect } from "react";
import Image from "next/image";
import { usePaymentStore } from "@/app/store/usePaymentStore";
import PurchasePanel from "@/app/components/product/PurchasePanel";
import SpecTable from "@/app/components/product/SpecTable";
import { CategoryProduct, productSpec } from "@/types/products";

interface DetailPageProps {
  product: CategoryProduct;
  productSpec: productSpec[];
}

const ProductDetailClient = ({ product, productSpec }: DetailPageProps) => {
  const { id, name, description, price, image } = product;

  useEffect(() => {
    usePaymentStore.getState().resetPayment();
  }, []);

  useEffect(() => {
    usePaymentStore.getState().setPartialPayment({
      name,
      price,
    });
  }, [name, price]);

  return (
    <div className="mx-auto mt-20 px-4 py-8 md:mt-[100px]">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-col">
          <div className="relative my-auto h-[300px] w-full max-w-[400px] flex-shrink-0 overflow-hidden rounded-lg md:h-[400px] md:w-[400px]">
            {image ? (
              <Image
                src={image}
                alt={name || "상품 이미지"}
                fill
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
                이미지 없음
              </div>
            )}
          </div>
          {productSpec.length > 0 && <SpecTable productSpec={productSpec} />}
        </div>

        <div>
          <div className="p-3 lg:flex-grow">
            <div className="flex">
              <div className="flex-grow whitespace-nowrap">
                <h1 className="mb-2 pt-6 text-3xl font-bold text-gray-800 md:text-2xl">
                  {name}
                </h1>
                <p className="mb-4 text-lg text-gray-600">{description}</p>
                <p className="mb-6 text-xl font-extrabold text-green-700">
                  {price.toLocaleString()}원
                </p>
              </div>
            </div>

            <PurchasePanel itemId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
