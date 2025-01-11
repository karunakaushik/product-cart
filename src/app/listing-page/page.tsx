"use client";

import { useProducts } from "@/api/mock-api";
import ProductCard from "@/components/product-card/product-card";
import { type cartData } from "@/store/create-store";

const ListingPage = () => {
  const { data: products, isLoading } = useProducts("listing");

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex gap-4 flex-col">
      <h1>Listing Page</h1>
      <div className="flex gap-4 flex-wrap">
        {products?.map((product: cartData) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
