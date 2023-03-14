import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import CartProvider from "./contexts/CartContext";
import OrderProvider from "./contexts/OrderContext";
import ProductsProvider from "./contexts/ProductsContext";
import "./index.css";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Product from "./pages/Product";
import Start from "./pages/Start";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path=""
        element={<Start />}
      />
      <Route
        path="/product"
        element={<Product />}
      />
      <Route
        path="/admin"
        element={<Admin />}
      />
      <Route
        path="/checkout"
        element={<Checkout />}
      />
      <Route
        path="/confirmation"
        element={<Confirmation />}
      />
      <Route
        path="*"
        element={<h2>404 not found</h2>}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <OrderProvider>
          <RouterProvider router={router} />
        </OrderProvider>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
