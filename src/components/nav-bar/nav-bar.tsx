"use client";

import { useCartStore } from "@/store/create-store";
import Link from "next/link";

const NavBar = () => {
  const totalProduct = useCartStore((state) => state.totalProduct(state));

  return (
    <nav>
      <Link href="/listing-page">Listing</Link> |{" "}
      <Link href="/search">Search</Link>|{" "}
      <Link href="/cart">Cart({totalProduct})</Link>
    </nav>
  );
};

export default NavBar;
