import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Products, { loader as fetchProducts } from "./pages/Products";
import ProductDetail, {
  loader as fetchProductDetail,
} from "./pages/ProductDetail";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products />, loader: fetchProducts },
      {
        path: "products/:id",
        element: <ProductDetail />,
        loader: fetchProductDetail,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
