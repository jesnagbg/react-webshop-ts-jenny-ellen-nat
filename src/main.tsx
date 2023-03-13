import {Start} from "@mui/icons-material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Product from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Start />} />
      <Route path="/product" element={<Product />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="*" element={<h2>404 not found</h2>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
