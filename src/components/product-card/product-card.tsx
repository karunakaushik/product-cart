"use client";

import { cartData, useCartStore } from "@/store/create-store";

const ProductCard = ({ product }: { product: cartData }) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCartStore();
  const existingProduct = cart.find(
    (item: { id: number }) => item?.id === product?.id
  );
  const quantity = existingProduct ? existingProduct.quantity : 0;

  const handleQuantityChange = (newQuantity: number) => {
    addToCart(product);
    if (newQuantity >= 0) {
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div className="flex flex-col rounded-md w-fit text-black py-4 px-8 bg-white gap-4">
      <h3>{product?.name}</h3>
      <p>Price: ${product?.price}</p>
      <p>Add to Cart</p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className="border rounded-sm px-4 border-black">{quantity}</span>
        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
