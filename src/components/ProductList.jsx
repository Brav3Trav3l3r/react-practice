import React from "react";
import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <main>
      <h2>Product list</h2>
      <div className={styles.list}>
        {products.map((p) => (
          <Link to={`${p.id}`} key={p.id}>
            <div className={styles.card}>
              <h3>id:{p.id}</h3>
              <h3>{p.title}</h3>
              <h3>{p.price}.</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
