import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PaymentData {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface PaymentStore {
  payment: PaymentData;
  setPartialPayment: (data: Partial<Omit<PaymentData, "total">>) => void;
  resetPayment: () => void;
}

export const usePaymentStore = create<PaymentStore>()(
  persist(
    (set) => ({
      payment: {
        name: "",
        quantity: 1,
        price: 0,
        total: 0,
      },

      setPartialPayment: (data) =>
        set((state) => {
          const updated = {
            ...state.payment,
            ...data,
          };
          return {
            payment: {
              ...updated,
              total: updated.price * updated.quantity,
            },
          };
        }),

      resetPayment: () => {
        set(() => ({
          payment: {
            name: "",
            quantity: 1,
            price: 0,
            total: 0,
          },
        }));
      },
    }),
    {
      name: "payment-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
