// Imports

// React hooks
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Product mapper to rebrand FakeStoreAPI data
import { mapPhoreignProducts } from "../utils/productMapper";

// Bootstrap layout and styling components
import { Container, Button } from "react-bootstrap";

// React Link Router 
import { Link } from "react-router-dom";

// Landing page
export default function Home() {

  // Featured products state
  const [featured, setFeatured] = useState(null);

  // Fetch APi data on mount
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {

  // Custom mapperfor "Phoreign-branded" items
        const mapped = mapPhoreignProducts(res.data);

  // Cylce 1st 3 items
        setFeatured(mapped.slice(0, 3));
      })
      .catch(() => {}); // Silent fail if APi call breaks
  }, []);

  // Track product being displayed
  const [index, setIndex] = useState(0);

  // Cycle featured item every 4s
  useEffect(() => {

  // Stop rotation if product not loaded
    if (!featured?.length) return;

  // Cycle products on a timer
    const id = setInterval(() => setIndex(i => (i + 1) % featured.length), 4000);

  // Cleanup the interval when component unmounts
    return () => clearInterval(id);
  }, [featured]);

// Bootstrap containers
  return (
    <Container className="container text-center pt-5">

{/* Header */}
      <h1 className="display-5 mb-3">Welcome to Phoreign Tech</h1>
      <p className="lead mb-4">Sleek. Modern. Limitless.</p>

{/* Featured Products */}
      {featured && featured.length > 0 && (
        <div className="phoreign-card mx-auto mb-4" style={{ maxWidth: 900 }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>

{/* Featured Product Image */}
            <img src={featured[index].image} style={{ height: 220, objectFit: "contain" }} alt="" />

{/* Product Info + Shop Button */}
            <div style={{ textAlign: "left" }}>
              <h3>{featured[index].title}</h3>
              <p className="text-muted">{featured[index].brand}</p>
              <p style={{ fontWeight: 700 }}>${featured[index].price}</p>
              <Button as={Link} to={`/products/${featured[index].id}`} variant="dark">Shop</Button>
            </div>
          </div>
        </div>
      )}

{/* Link to full product catalog */}
      <Button as={Link} to="/products" variant="outline-dark">Browse All Products</Button>
    </Container>
  );
}
