import { create } from "zustand";

export type cartData = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product: { id: any }) =>
    set((state: { cart: cartData[] }) => {
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

  removeFromCart: (productId: number) =>
    set((state: { cart: cartData[] }) => {
      return {
        cart: state.cart.filter((item) => item.id !== productId),
      };
    }),

  updateQuantity: (productId: number, quantity: number) =>
    set((state: { cart: cartData[] }) => {
      if (quantity <= 0) {
        return { cart: state.cart.filter((item) => item.id !== productId) };
      }

      return {
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };
    }),
  totalProduct: (state: { cart: cartData[] }) => {
    const total = state?.cart?.reduce((sum, item) => sum + item.quantity, 0);

    return total || 0;
  },
}));
