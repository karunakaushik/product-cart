"use client";

import { useCartStore } from "@/store/create-store";

const CartPage = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart?.map((product: { id: number; name: string; quantity: number }) => (
        <div key={product.id}>
          <h3>
            {product.name}: <span>Quantity: {product.quantity}</span>{" "}
            <span onClick={() => removeFromCart(product.id)}>Remove</span>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
