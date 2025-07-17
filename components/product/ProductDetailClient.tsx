"use client";

import { useEffect } from "react";
import Image from "next/image";
import { usePaymentStore } from "@/store/usePaymentStore";
import PurchasePanel from "@/components/product/PurchasePanel";
import SpecTable from "@/components/product/SpecTable";
import { CategoryProduct, productSpec } from "@/types/products";
import { tagTextColorMap } from "@/constants/tagTextColorMap";

interface DetailPageProps {
  product: CategoryProduct;
  productSpec: productSpec[];
}

const ProductDetailClient = ({ product, productSpec }: DetailPageProps) => {
  const { id, name, description, price, tagName, image } = product;
  const { quantity } = usePaymentStore((state) => state.payment);

  useEffect(() => {
    usePaymentStore.getState().resetPayment();
  }, []);

  useEffect(() => {
    usePaymentStore.getState().setPartialPayment({
      name,
      total: price * quantity,
    });
  }, [name, price, quantity]);

  return (
    <div className="mx-auto mt-[64px] max-w-7xl px-4 py-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-center">
        {/* 이미지 및 스펙 */}
        <div className="mx-auto flex w-full max-w-md flex-col items-center lg:items-start">
          <div className="relative flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden rounded-lg bg-white sm:max-w-sm md:max-w-md">
            {image ? (
              <Image
                src={image}
                alt={name || "상품 이미지"}
                fill
                className="object-contain"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
                이미지 없음
              </div>
            )}
          </div>

          {/* 스펙 테이블 */}
          {productSpec.length > 0 && (
            <div className="mt-6 w-full">
              <SpecTable productSpec={productSpec} />
            </div>
          )}
        </div>

        {/* 상품 정보 및 구매 */}
        <div className="mx-auto w-full max-w-md">
          <div className="p-2">
            <div className="mb-4 flex items-start justify-between">
              <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                {name}
              </h1>
              <span
                className="inline-block shrink-0 rounded-full px-3 py-1 text-xs font-medium text-white"
                style={{
                  backgroundColor: tagTextColorMap[tagName] ?? "#ccc",
                }}
              >
                {tagName}
              </span>
            </div>

            <p className="mb-4 text-sm text-gray-600 sm:text-base">
              {description}
            </p>
            <p className="mb-6 text-lg font-extrabold text-green-700 sm:text-xl">
              {price.toLocaleString()}원
            </p>

            {/* 구매 패널 */}
            <PurchasePanel itemId={id} productSpec={productSpec} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
