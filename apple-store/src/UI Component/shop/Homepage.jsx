import React from "react";
import { PRODUCTS } from "../Products";
import { Product } from "./Product";
import "/Coding/VS Code/TBD/apple-store/src/CSS/Homepage.css";

export const Homepage = () => {
  return (
    <>
      <div className="shop">
      <div className="shopTitle">
        <h1>TBD Apple Store</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      </div>
    </>
  );
};

