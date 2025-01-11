"use client";

import { useProducts } from "@/api/mock-api";
import ProductCard from "@/components/product-card";

const SearchPage = () => {
  const { data: products, isLoading } = useProducts("search");

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex gap-4 flex-col">
      <h1>Search Page</h1>
      <div className="flex gap-4 flex-wrap">
        {products?.map(
          (product: { id: number; name: string; quantity: number }) => (
            <ProductCard key={product?.id} product={product} />
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
