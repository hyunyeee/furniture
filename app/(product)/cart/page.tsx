"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartApi } from "@/lib/api/cart";
import { useHydrated } from "@/hooks/useHydrated";
import { usePaymentStore } from "@/store/usePaymentStore";
import { useAuthStore } from "@/store/authStore";
import QuantitySelector from "@/components/cart/QuantitySelector";
import RemoveButton from "@/components/cart/RemoveButton";
import { CartProduct } from "@/types/products";

const Cart = () => {
  const { token } = useAuthStore();
  const isHydrated = useHydrated();

  const [cartList, setCartList] = useState<CartProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { getCartList, deleteCartItem } = useCartApi(token || "");

  const orderTotal = cartList?.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalQuantity = cartList.reduce((acc, item) => acc + item.quantity, 0);
  const representativeName = cartList[0]?.productName || "";
  const name =
    cartList.length > 1
      ? `${representativeName} 외 ${cartList.length - 1}개`
      : representativeName;

  useEffect(() => {
    if (!isHydrated || !token) return;

    const fetchCartList = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCartList();
        setCartList(data.items);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("장바구니 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartList();
  }, [isHydrated, token]);

  useEffect(() => {
    if (!isHydrated || loading || !cartList.length) return;

    usePaymentStore.getState().setPartialPayment({
      name,
      quantity: totalQuantity,
      total: orderTotal,
    });
  }, [cartList, isHydrated, loading, orderTotal]);

  const handleQuantityChange = (cartItemId: number, newQuantity: number) => {
    const quantityToSet = Math.max(1, newQuantity);

    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.cartItemId === cartItemId
          ? {
              ...item,
              quantity: quantityToSet,
              totalPrice: item.price * quantityToSet,
            }
          : item,
      ),
    );
  };

  const handleRemoveItem = async (productId: number) => {
    try {
      setCartList((prevCartList) =>
        prevCartList.filter((item) => item.productId !== productId),
      );
      await deleteCartItem([productId]);
      alert(`장바구니 항목 ID ${productId} 삭제됨`);
    } catch (err: unknown) {
      if (err instanceof Error) alert("상품 삭제를 실패했습니다.");
    }
  };

  if (!isHydrated || loading || error) {
    let message = "로딩 중...";

    if (error) message = error;
    else if (!token) message = "로그인이 필요합니다";
    else if (!isHydrated || loading) message = "장바구니 로딩 중...";

    return (
      <div className="m-40 flex h-22 items-center justify-center rounded-md bg-gray-400 text-xl text-white shadow-md">
        {message}
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-14 max-w-7xl p-4 sm:p-6">
      <h1 className="mb-8 text-2xl font-semibold text-gray-800">장바구니</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* 상품 리스트 */}
        <div className="lg:col-span-8">
          {cartList.length === 0 ? (
            <div className="flex h-22 items-center justify-center rounded-md bg-gray-400 text-lg text-white shadow-md">
              장바구니에 상품이 없습니다.
            </div>
          ) : (
            <ul className="space-y-4">
              {cartList.map((item) => (
                <li
                  key={item.cartItemId}
                  className="flex flex-col items-center rounded-md border border-gray-200 bg-white p-2 shadow-sm sm:flex-row sm:items-center"
                >
                  <div className="h-24 w-24 flex-shrink-0 p-2">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.productName}
                        width={96}
                        height={96}
                        style={{ objectFit: "contain" }}
                        className="rounded-md"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 text-sm text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="flex-grow p-2 text-center sm:text-left">
                    <h2 className="text-lg font-medium text-gray-800">
                      {item.productName}
                    </h2>
                    <p className="text-sm text-gray-600">
                      ₩{item.price.toLocaleString()}
                    </p>
                    <p className="mt-1 text-xs text-yellow-600">
                      ◎ 3-4주 소요됩니다.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-2 sm:justify-start">
                    <QuantitySelector
                      itemId={item.cartItemId}
                      quantity={item.quantity}
                      onQuantityChange={handleQuantityChange}
                    />
                    <RemoveButton
                      productId={item.productId}
                      onRemoveItem={handleRemoveItem}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 결제 정보 */}
        <div className="lg:col-span-4">
          <div className="flex flex-col space-y-4 rounded-md bg-white p-6 shadow-md">
            <div className="flex justify-between text-xl font-bold text-gray-900">
              <span>최종 결제 금액</span>
              <span>
                {orderTotal?.toLocaleString("ko-KR", {
                  style: "currency",
                  currency: "KRW",
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>

            <Link
              href="/checkout"
              className="bg-primary-green focus:ring-primary-green focus:ring-opacity-50 w-full rounded-md p-4 text-center text-lg font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#5a7a5c] focus:ring-2 focus:outline-none"
            >
              결제하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
