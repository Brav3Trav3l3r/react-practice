import React from "react";
import { json, useLoaderData, Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const data = useLoaderData();
  return (
    <>
      <div className={styles.card}>
        <h1>{data.title}</h1>

        <h3>{data.category}</h3>
        <p>
          {data.description}
        </p>
      </div>

      <Link to=".." relative='path'>
        Back
      </Link>
    </>
  );
}

export async function loader({ request, params }) {
  const id = params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw json({ message: "Could not get the detils" }, { status: 500 });
  }

  return res;
}