"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./mock-data";

export const useProducts = (page: "listing" | "search") => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    staleTime: Infinity,
  });
};
