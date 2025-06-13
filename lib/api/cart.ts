import { CartProductListInfo } from "@/types/products";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const token = "token";

export const getCartList = async (): Promise<CartProductListInfo> => {
  const response = await fetch(`${apiUrl}/cart`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  if (!response.ok) throw new Error("장바구니 목록 불러오기 실패");
  return await response.json();
};

export const addCartItem = async (
  productId: number,
  quantity: number,
): Promise<void> => {
  const response = await fetch(`${apiUrl}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ productId, quantity }),
  });

  if (!response.ok) {
    console.error(response);
    throw new Error("장바구니 수량 변경 실패");
  }
};

export const updateCartItem = async (
  cartItemId: number,
  quantity: number,
): Promise<void> => {
  const response = await fetch(`${apiUrl}/cart/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ cartItemId, quantity }),
  });

  if (!response.ok) {
    console.error(response);
    throw new Error("장바구니 수량 변경 실패");
  }
};

export const increaseCartItem = async (cartItemId: number): Promise<void> => {
  const response = await fetch(`${apiUrl}/cart/increase`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ cartItemId }),
  });

  if (!response.ok) {
    console.error(response);
    throw new Error("장바구니 수량 증가 실패");
  }
};

export const decreaseCartItem = async (cartItemId: number): Promise<void> => {
  const response = await fetch(`${apiUrl}/cart/decrease`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ cartItemId }),
  });

  if (!response.ok) {
    console.error(response);
    throw new Error("장바구니 수량 감소 실패");
  }
};

export const deleteCartItem = async (productIds: number[]): Promise<void> => {
  const response = await fetch(`${apiUrl}/cart/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ productIds }),
  });

  if (!response.ok) {
    console.error(response);
    throw new Error("장바구니 삭제 실패");
  }
};
