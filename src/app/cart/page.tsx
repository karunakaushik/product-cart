"use client";

import { type cartData, useCartStore } from "@/store/create-store";

interface CartStore {
  cart: cartData[];
  addToCart: (product: cartData) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  totalProduct: () => number;
}

const CartPage = () => {
  const { cart, removeFromCart } = useCartStore() as CartStore;

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <h1>Your Cart</h1>
      {cart?.length > 0 ? (
        cart?.map((product: { id: number; name: string; quantity: number }) => (
          <div key={product.id} className="flex items-center gap-6">
            <h3>
              {product.name}: <span>Quantity: {product.quantity}</span>{" "}
            </h3>
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={() => removeFromCart(product?.id)}
            >
              delete
            </span>
          </div>
        ))
      ) : (
        <>Cart is empty !</>
      )}
    </div>
  );
};

export default CartPage;
