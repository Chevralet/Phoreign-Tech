import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";

export default function App() {
  // vignette opacity state (darkens edges on scroll)
  const [vOpacity, setVOpacity] = useState(0.05);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const opacity = Math.min((scrollTop / Math.max(1, maxScroll)) * 0.45 + 0.05, 0.45);
      setVOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Vignette overlay */}
      <div
        className="vignette"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(0,0,0,${vOpacity}) 100%)`,
        }}
      />
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
