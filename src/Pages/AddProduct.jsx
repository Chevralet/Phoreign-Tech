//  Imports

// React 
import { useState } from "react";

// Axios Http Promise
import axios from "axios";

// React-Bootstrap UI 
import { Container, Form, Button, Alert } from "react-bootstrap";

// "Add Product" page main component
export default function AddProduct() {

// Form state for user input
  const [form, setForm] = useState({ title: "", price: "", description: "", category: "", image: "" });

// Display success or error messages
  const [success, setSuccess] = useState("");

// Updates input changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// Updates input submissions
  const handleSubmit = async (e) => {

// Prevents page refresh
    e.preventDefault();

    try {
// Post data to Api endpoint
      await axios.post("https://fakestoreapi.com/products", form);

// Shows success message (doesn’t save it)
      setSuccess("Product created (FakeStore returns success but won't persist).");

// Reset after submission
      setForm({ title: "", price: "", description: "", category: "", image: "" });

// Show error on failure
    } catch {
      setSuccess("Failed to create product (network error).");
    }
  };

// Return Format
  return (
    <Container className="container">
      <h2 className="mb-4">Add Product</h2>

      {/* Show msg in green alert box */}
      {success && <Alert variant="success">{success}</Alert>}

      {/* Product input form */}
      <Form onSubmit={handleSubmit}>

      {/* Product Title */}
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" value={form.title} onChange={handleChange} required />
        </Form.Group>

      {/* Product Price */}
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" value={form.price} onChange={handleChange} type="number" required />
        </Form.Group>

      {/* Product Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" value={form.description} onChange={handleChange} as="textarea" rows={3} />
        </Form.Group>

      {/* Product Image URL */}
        <Form.Group className="mb-3">
          <Form.Label>Image URL (optional)</Form.Label>
          <Form.Control name="image" value={form.image} onChange={handleChange} />
        </Form.Group>

       {/* Submit button */}
        <Button type="submit" variant="dark">Add Product</Button>
      </Form>
    </Container>
  );
}
