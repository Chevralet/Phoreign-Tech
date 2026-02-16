// Imports
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Container } from "react-bootstrap";

// Edit existing product (PUT simulation)
export default function EditProduct() {

  // Grab ID from route
  const { id } = useParams();

  // Navigation hook
  const navigate = useNavigate();

  // Local form state
  const [form, setForm] = useState(null);

  // Success state
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Load existing product data
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setForm(res.data))
      .catch(() => setError("Failed to load product for editing."));
  }, [id]);

  // Handle form submit (PUT mock update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        price: Number(form.price),
      };

      // Simulate PUT request
      await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        payload
      );

      // Show success message
      setSuccess(true);
      setError("");

      // Redirect back after short delay
      setTimeout(() => {
        navigate(`/products/${id}`);
      }, 1500);
    } catch {
      setSuccess(false);
      setError("Failed to update product (network error).");
    }
  };

  if (!form) {
    return (
      <Container className="container">
        {error ? <Alert variant="danger">{error}</Alert> : null}
      </Container>
    );
  }

  return (
    <Container className="container">

      {success && (
        <Alert variant="success">
          Product Updated (mock API simulation)
        </Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>

        {/* Title field */}
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
        </Form.Group>

        {/* Price field */}
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />
        </Form.Group>

        {/* Save button */}
        <Button type="submit" variant="dark">
          Save Changes
        </Button>

      </Form>
    </Container>
  );
}
