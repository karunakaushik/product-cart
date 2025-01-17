import { create } from "zustand";

export type cartData = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

interface CartStore {
  cart: cartData[];
  addToCart: (product: cartData) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  totalProduct: (p: any) => number;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product: { id: any }) =>
    set((state: any) => {
      const existingProduct = state.cart.find(
        (item: any) => item.id === product.id
      );
      if (existingProduct) {
        return {
          cart: state.cart.map((item: any) =>
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
    set((state: any) => {
      return {
        cart: state.cart.filter((item: any) => item.id !== productId),
      };
    }),

  updateQuantity: (productId: number, quantity: number) =>
    set((state: any) => {
      if (quantity <= 0) {
        return {
          cart: state.cart.filter((item: any) => item.id !== productId),
        };
      }

      return {
        cart: state.cart.map((item: any) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };
    }),
  totalProduct: (state: any) => {
    const total = state?.cart?.reduce(
      (sum: any, item: any) => sum + item.quantity,
      0
    );

    return total || 0;
  },
}));
