import { create } from "zustand";

interface CategoryState {
  categoryId: number;
  setCategoryId: (id: number) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
  categoryId: 0,
  setCategoryId: (id) => set({ categoryId: id }),
}));

export default useCategoryStore;
