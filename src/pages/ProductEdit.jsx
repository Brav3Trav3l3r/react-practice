import React from "react";
import styles from "./ProductEdit.module.css";
import { useRouteLoaderData, Link } from "react-router-dom";

export default function () {
  const data = useRouteLoaderData("product-detail");

  return (
    <>
    <div className={styles.form}>
      <div className="title">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={data.title} />
      </div>

      <div className="cat">
        <label htmlFor="category">Category</label>
        <input type="text" id="category" value={data.category} />
      </div>

      <div className="desc">
        <label htmlFor="desc">Description</label>
        <textarea type="text" id="desc" value={data.description} />
      </div>
    </div>

    <Link to='..' relative='path'>Back</Link>
    </>



  );
}
