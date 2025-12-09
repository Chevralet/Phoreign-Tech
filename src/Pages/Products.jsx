// Imports

// Side Fx And state mgmt
import { useEffect, useState } from "react";

// HTTP requests
import axios from "axios";

// APi custimization utility 
import { mapPhoreignProducts } from "../utils/productMapper";

// Independent Product cards
import ProductCard from "../components/ProductCard";

// Bootstrap layout and loading indicator
import { Container, Row, Col, Spinner } from "react-bootstrap";


// Products functional component
export default function Products() {

// Stored product list & update function
  const [products, setProducts] = useState(null);

// Get products from on mount
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {

// Custom branding data for APi products 
        const mapped = mapPhoreignProducts(res.data);

// Update state with mapped product data
        setProducts(mapped);
      })
// If error, return empty array instead of crashing
      .catch(() => setProducts([]));

// Empty array run once on init
  }, []);

// Show spinner while loading
  if (!products) return <div className="text-center mt-20"><Spinner animation="border" /></div>;

// Responsive Product Grid
  return (
    <Container className="container">

{/* Section Title */}
      <h2 className="mb-4">Our Products</h2>

{/* Mobile 1st*/}
      <Row xs={1} md={3} lg={3} className="g-4">

{/* Api Mapper & ProductCard Layout */}
        {products.map(p => (
          <Col key={p.id}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
