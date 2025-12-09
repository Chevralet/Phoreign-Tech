// Imports

// React-BS
import { Card, Button } from "react-bootstrap";

// Link Router
import { Link } from "react-router-dom";

// Reusable ProductCard component

// Accepts a single "product" object as a prop
export default function ProductCard({ product }) {

// Bootstrap product card wrap
  return (
    <Card className="phoreign-card h-100">

{/* Center Product pic section */}
      <div style={{ height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
  
{/* Dynamic pic load */}
        <Card.Img
          src={product.image}
          alt={product.title}
          style={{ maxHeight: "200px", width: "auto", objectFit: "contain" }}
        />
      </div>

{/* Product details */}
      <Card.Body>
        <Card.Title style={{ fontSize: 16 }}>{product.title}</Card.Title>

{/* Brand line/model */}
        <Card.Subtitle className="mb-2 text-muted">{product.brand}</Card.Subtitle>

{/* Product price */}
        <Card.Text style={{ fontSize: 14, color: "#555" }}>${product.price}</Card.Text>

{/* Button link to product detail page */}
        <Button as={Link} to={`/products/${product.id}`} variant="dark">View</Button>
      </Card.Body>
    </Card>
  );
}
