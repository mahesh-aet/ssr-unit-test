/**
 * When a parent component re-renders,
 * all functions inside it are recreated,
 * which changes their reference. If such a function is passed to a child component,
 *  it causes unnecessary re-renders. To avoid this,
 * we use useCallback to memoize the function reference,
 * and combine it with React.memo so the child only re-renders
 * when its props actually change.
 */

"use client";
import React, { useCallback, useMemo, useState } from "react";
import ProductList from "../component/ProductList";

export interface IProducts {
  id: number;
  name: string;
  price: number;
}

const products: IProducts[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 800 },
];

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  //   const filteredProducts = products.filter(
  //     (p) => p.name.toLowerCase() === search.toLowerCase(),
  //   );

  const handleAddToCart = useCallback((product: IProducts) => {
    console.log("added :", product.name);
  }, []);

  //   const handleAddToCart = (product: IProducts) => {
  //     console.log("added :", product.name);
  //   };

  return (
    <>
      <h2>Product Page</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Re-Render-Parent {count}
      </button>
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </>
  );
};

export default ProductPage;
