import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductsDetails() {
  const param = useParams();
  return (
    <>
      <h1>Product {param.id}</h1>
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
}
