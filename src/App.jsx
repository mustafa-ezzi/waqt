import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import { Layout } from "./components/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { Collection } from "./pages/Collection.jsx";
import { Product } from "./pages/Product.jsx";
import { About } from "./pages/About.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Checkout } from "./pages/Checkout.jsx";
import { NotFound } from "./pages/NotFound.jsx";

export default function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ToastProvider>
    </CartProvider>
  );
}
