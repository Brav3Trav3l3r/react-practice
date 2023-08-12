import { json, useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function Products() {
  const data = useLoaderData();

  return <ProductList products={data} />;
}

export const loader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw json({ message: "Couldn't fetch the data" }, { status: 500 });
  }
  return res;
};
