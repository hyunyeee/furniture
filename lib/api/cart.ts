import { CartProductListInfo } from "@/types/products";
import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useCartApi = (token: string) => {
  const authFetch = useAuthenticatedFetch(token);

  const getCartList = async (): Promise<CartProductListInfo> => {
    const res = await authFetch(`${apiUrl}/cart`, {
      cache: "no-store",
    });
    return await res.json();
  };

  const addCartItem = async (productId: number, quantity: number) => {
    await authFetch(`${apiUrl}/cart/add`, {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    });
  };

  const updateCartItem = async (cartItemId: number, quantity: number) => {
    await authFetch(`${apiUrl}/cart/update`, {
      method: "PUT",
      body: JSON.stringify({ cartItemId, quantity }),
    });
  };

  const increaseCartItem = async (cartItemId: number) => {
    await authFetch(`${apiUrl}/cart/increase`, {
      method: "POST",
      body: JSON.stringify({ cartItemId }),
    });
  };

  const decreaseCartItem = async (cartItemId: number) => {
    await authFetch(`${apiUrl}/cart/decrease`, {
      method: "POST",
      body: JSON.stringify({ cartItemId }),
    });
  };

  const deleteCartItem = async (productIds: number[]) => {
    await authFetch(`${apiUrl}/cart/delete`, {
      method: "DELETE",
      body: JSON.stringify({ productIds }),
    });
  };

  return {
    getCartList,
    addCartItem,
    updateCartItem,
    increaseCartItem,
    decreaseCartItem,
    deleteCartItem,
  };
};
