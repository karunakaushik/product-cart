import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product: { id: any }) =>
    set((state: { cart: any[] }) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  removeFromCart: (productId: any) =>
    set((state: { cart: any[] }) => {
      return {
        cart: state.cart.filter((item) => item.id !== productId),
      };
    }),

  updateQuantity: (productId: any, quantity: number) =>
    set((state: { cart: any[] }) => {
      if (quantity <= 0) {
        return { cart: state.cart.filter((item) => item.id !== productId) };
      }

      return {
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };
    }),
  totalProduct: (state: { cart: any[] }) => {
    const total = state?.cart?.reduce((sum, item) => sum + item.quantity, 0);

    return total || 0;
  },
}));
