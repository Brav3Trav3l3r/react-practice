import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Products, { loader as fetchProducts } from "./pages/Products";
import ProductDetail, {
  loader as fetchProductDetail,
} from "./pages/ProductDetail";
import Error from "./pages/Error";
import ProductEdit from "./pages/ProductEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <Products />,
        loader: fetchProducts,
        children: [],
      },
      {
        path: "products/:id",
        id: "product-detail",
        loader: fetchProductDetail,
        children: [
          { index: true, element: <ProductDetail /> },
          {
            path: "edit",
            element: <ProductEdit />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
