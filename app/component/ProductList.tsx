"use client";

import React, { FC } from "react";
import { IProducts } from "../product/page";

interface IProductList {
  products: IProducts[];
  onAddToCart: (product: IProducts) => void;
}

const ProductList: FC<IProductList> = ({ products, onAddToCart }) => {
  console.log("ProductList re-rendered");

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button onClick={() => onAddToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductList);
