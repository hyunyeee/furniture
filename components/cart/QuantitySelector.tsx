import React, { useState } from "react";
import { useCartApi } from "@/lib/api/cart";
import { useAuthStore } from "@/store/authStore";

interface QuantitySelectorProps {
  itemId: number;
  quantity: number;
  onQuantityChange: (cartItemId: number, quantity: number) => void;
}

const QuantitySelector = ({
  itemId,
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const { token } = useAuthStore();

  const { decreaseCartItem, increaseCartItem, updateCartItem } = useCartApi(
    token || "",
  );

  const handleIncrease = async () => {
    try {
      const newQuantity = localQuantity + 1;
      setLocalQuantity(newQuantity);
      onQuantityChange(itemId, newQuantity);
      await increaseCartItem(itemId);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("상품 수량 수정을 실패했습니다.");
      }
    }
  };

  const handleDecrease = async () => {
    try {
      if (localQuantity > 1) {
        const newQuantity = localQuantity - 1;
        setLocalQuantity(newQuantity);
        onQuantityChange(itemId, newQuantity);
        await decreaseCartItem(itemId);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("상품 수량 수정을 실패했습니다.");
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setLocalQuantity(value);
    }
  };

  const handleBlur = async () => {
    try {
      if (localQuantity !== quantity) {
        onQuantityChange(itemId, localQuantity);
        await updateCartItem(itemId, localQuantity);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("상품 수량 수정을 실패했습니다.");
      }
    }
  };

  return (
    <div className="flex items-center space-x-1 p-2">
      <button
        type="button"
        onClick={handleDecrease}
        className="h-8 w-8 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      >
        –
      </button>
      <input
        type="number"
        min={1}
        value={localQuantity}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="h-8 w-12 [appearance:textfield] appearance-none rounded border border-gray-300 text-center text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={handleIncrease}
        className="h-8 w-8 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
