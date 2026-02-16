// Imports

// Local state and side FX
import { useEffect, useState } from "react";

// Read route params and dynamic navigation
import { useParams, useNavigate } from "react-router-dom";

// HTTP requests
import axios from "axios";

// Custom branding for Api Data
import { mapPhoreignProducts } from "../utils/productMapper";

// React Bootstrap UI components
import { Container, Card, Button, Spinner, Alert } from "react-bootstrap";

// Default product details
export default function ProductDetails() {

  // Grab product ID from the URL
  const { id } = useParams();

  // Dynamic Navigation Hook (after delete or edit)
  const navigate = useNavigate();

  // Local state to store the loaded product
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  // Run on loads & on i.D. changes
  useEffect(() => {

    // Get product details
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {

        // Map API response to custom product details
        const mapped = mapPhoreignProducts([res.data]);

        // Save 1st mapped product to state
        setProduct(mapped[0]);
      })

      // If error reset state
      .catch(() => {
        setProduct(null);
        setError("Failed to load product details.");
      });

  }, [id]);  // Re-run if i.D. changes


  // Handle delete button click
  const handleDelete = async () => {

    // Confirm & Warn before deleting
    if (!window.confirm("Delete this product? (Fake API mock delete)")) return;

    try {
      // Sim DELETE request
      await axios.delete(`https://fakestoreapi.com/products/${id}`);

      // Confirm Alert
      alert("Deleted (mock) — redirecting to products");

      // Redirect back to product list
      navigate("/products");
    } catch {
      setError("Failed to delete product (network error).");
    }
  };


  // If not loaded, show spinner loading indicator
  if (!product)
    return (
      <div className="text-center mt-5">
        {error ? <Alert variant="danger" className="mx-3">{error}</Alert> : <Spinner animation="border" />}
      </div>
    );


  return (
    <Container className="container">
      {error && <Alert variant="danger">{error}</Alert>}
      <Card className="phoreign-card p-4">

        {/* Flex container */}
        <div style={{ display: "flex", gap: 20 }}>

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            style={{ height: 300, objectFit: "contain" }}
          />

          {/* Product info */}
          <div>
            <h2>{product.title}</h2>
            <p className="text-muted">{product.brand}</p>
            <p>{product.description}</p>
            <p style={{ fontWeight: 700 }}>${product.price}</p>

            {/* Edit/Delete buttons */}
            <div style={{ marginTop: 12 }}>

              {/* Edit button goes to hidden edit route */}
              <Button
                variant="dark"
                onClick={() => navigate(`/products/${product.id}/edit`)}
              >
                Edit
              </Button>{' '}

              {/* Delete button trigger */}
              <Button
                variant="outline-danger"
                onClick={handleDelete}
              >
                Delete
              </Button>

            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
}
