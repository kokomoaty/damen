import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const isExsist = state.items.find((i) => i.id === item.id);
      if (isExsist) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  removeAllItems: () => set({ items: [] }),
}));
