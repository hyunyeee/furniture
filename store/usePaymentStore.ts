import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PaymentData {
  name: string;
  quantity: number;
  total: number;
}

interface PaymentStore {
  payment: PaymentData;
  setPartialPayment: (data: Partial<PaymentData>) => void;
  resetPayment: () => void;
}

export const usePaymentStore = create<PaymentStore>()(
  persist(
    (set) => ({
      payment: {
        name: "",
        quantity: 1,
        total: 0,
      },

      setPartialPayment: (data) =>
        set((state) => ({
          payment: {
            ...state.payment,
            ...data,
          },
        })),

      resetPayment: () =>
        set(() => ({
          payment: {
            name: "",
            quantity: 1,
            total: 0,
          },
        })),
    }),
    {
      name: "payment-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
