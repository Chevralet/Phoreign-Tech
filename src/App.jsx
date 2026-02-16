//  Router
import { Routes, Route } from "react-router-dom";

// React hooks for state + side effects
import { useState, useEffect } from "react";

// Layout
import Navbar from "./components/Navbar";

// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct"; // hidden 

export default function App() {
  // vignette
  const [vOpacity, setVOpacity] = useState(0.05);

  // Run on load
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // Vignette formula cap at 0.45
      const opacity = Math.min(
        (scrollTop / Math.max(1, maxScroll)) * 0.45 + 0.05,
        0.45
      );

      setVOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Vignette overlay, reacts to scroll */}
      <div
        className="vignette"
        style={{
          background: `radial-gradient(
            circle at center,
            rgba(255,255,255,0) 0%,
            rgba(0,0,0,${vOpacity}) 100%
          )`,
        }}
      />

      {/* main container */}
      <div className="bg-white text-dark" style={{ minHeight: "100vh" }}>
        {/* always visible navbar */}
        <Navbar />

        <main>
          <Routes>
            {/* landing page */}
            <Route path="/" element={<Home />} />

            {/* product listing */}
            <Route path="/products" element={<Products />} />

            {/* product detail page */}
            <Route path="/products/:id" element={<ProductDetails />} />

            {/* edit product page - hidden, only via button */}
            <Route path="/products/:id/edit" element={<EditProduct />} />

            {/* add product form */}
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
