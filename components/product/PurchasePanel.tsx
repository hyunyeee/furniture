"use client";

import { useState } from "react";
import { useCartApi } from "@/lib/api/cart";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { productSpec } from "@/types/products";
import { useAuthStore } from "@/store/authStore";
import { usePaymentStore } from "@/store/usePaymentStore";
import ProductQuantitySelector from "@/components/cart/ProductQuantitySelector";

interface PurchasePanelProps {
  itemId: number;
  productSpec: productSpec[];
}

const PurchasePanel = ({ itemId, productSpec }: PurchasePanelProps) => {
  const [quantity, setQuantity] = useState(1);
  const { token } = useAuthStore();
  const router = useRouter();

  const { addCartItem } = useCartApi(token || "");

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    usePaymentStore.getState().setPartialPayment({
      quantity: newQuantity,
    });
  };

  const addCart = async (itemId: number, quantity: number) => {
    try {
      if (!token) {
        alert("로그인이 필요합니다.");
        router.push("/login");
        return;
      }
      await addCartItem(itemId, quantity);
      router.push("/cart");
      alert(`장바구니에 ${itemId} 상품 ${quantity}개 추가했습니다`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("장바구니에 상품 추가를 실패했습니다.");
      }
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-6 p-4">
      {/* 수량 선택 */}
      <div className="w-full">
        <label
          htmlFor="quantity"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          수량
        </label>
        <ProductQuantitySelector
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
      </div>

      {/* 색상 선택 */}
      <div className="w-full">
        <p className="mb-2 text-sm font-medium text-gray-700">색상 선택</p>
        <div className="flex flex-wrap gap-3">
          <button className="h-10 w-10 rounded-full bg-gray-200 ring-2 ring-transparent transition-all duration-200 hover:ring-gray-700 focus:ring-[#698b6b] focus:outline-none sm:h-11 sm:w-11"></button>
          <button className="h-10 w-10 rounded-full bg-gray-900 ring-2 ring-transparent transition-all duration-200 hover:ring-gray-700 focus:ring-[#698b6b] focus:outline-none sm:h-11 sm:w-11 dark:bg-gray-700"></button>
          <button className="h-10 w-10 rounded-full bg-green-800 ring-2 ring-transparent transition-all duration-200 hover:ring-gray-700 focus:ring-[#698b6b] focus:outline-none sm:h-11 sm:w-11"></button>
          <button className="h-10 w-10 rounded-full bg-amber-900 ring-2 ring-transparent transition-all duration-200 hover:ring-gray-700 focus:ring-[#698b6b] focus:outline-none sm:h-11 sm:w-11"></button>
        </div>
      </div>

      {/* 사이즈 선택 */}
      <div className="w-full">
        <p className="mb-2 text-sm font-medium text-gray-700">사이즈 선택</p>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {productSpec?.map(({ model }) => (
            <div
              key={model}
              className="w-full sm:w-auto" /* 작은 화면은 전체 너비, sm 이상은 auto */
            >
              <input
                type="radio"
                id={`size_option_${model}`}
                name="size_option"
                value={model}
                className="peer hidden"
              />
              <label
                htmlFor={`size_option_${model}`}
                className="peer-checked:border-primary-green peer-checked:bg-primary-green block cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700 transition-all duration-200 peer-checked:text-white"
              >
                {model}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* 장바구니 버튼 */}
      <button
        className="focus:ring-opacity-50 bg-primary-green focus:ring-primary-green w-full cursor-pointer rounded-xl px-4 py-3 text-base font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#5a7a5c] focus:ring-2 focus:outline-none sm:py-4 sm:text-lg"
        onClick={() => addCart(itemId, quantity)}
      >
        장바구니에 담기
      </button>

      {/* 결제하기 버튼 */}
      {token && (
        <Link
          href="/checkout"
          className="focus:ring-opacity-50 bg-primary-green focus:ring-primary-green w-full cursor-pointer rounded-xl px-4 py-3 text-center text-base font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#5a7a5c] focus:ring-2 focus:outline-none sm:py-4 sm:text-lg"
        >
          결제하기
        </Link>
      )}
    </div>
  );
};

export default PurchasePanel;
