// Imports

// React-Bootstrap UI 
import { Navbar, Nav, Container } from "react-bootstrap";

// React Link Router 
import { Link } from "react-router-dom";

// Reusable nav component
function CustomNavbar() {

// Responsive Nav styled
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">

{/* Branded Link (home on click) */}
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
          Phoreign Tech
        </Navbar.Brand>

{/* Burger menu mobile toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

{/* Collapsible nav links */}
        <Navbar.Collapse id="basic-navbar-nav">
          
{/* Nav links aligned right */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Export component
export default CustomNavbar;
