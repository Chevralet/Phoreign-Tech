# Phoreign Tech - React E-Commerce Demo

## Overview
Phoreign Tech is a small React front-end project demonstrating modern React concepts, 
including **props, state, routing, reusable components, and modular utilities**. 
It fetches products from a mock API (FakeStore) and customizes them with a branded utility 

---

## Key Features

### 1. Pages & Routing
- **Home**: Highlights featured products in a carousel-style section.
- **Products**: Lists all products using reusable cards.
- **Product Details**: Displays full product information and allows edit/delete (mock).
- **Add Product**: Form to create new products (mock API, not persisted).

### 2. Reusable Components
- **ProductCard**: Displays a single product; used on Home and Products page.
- **Navbar**: Responsive, reusable navigation component.

### 3. State & Interactivity
- Uses `useState` to manage form input, featured product rotation, and product list.
- Uses `useEffect` to fetch data and handle carousel rotation.

### 4. Modular Utilities
- `mapPhoreignProducts(products)`: Converts API data into branded products.
  - Example: Renames, rebrands, and adjusts price/description.
  - Keeps original data for default products.

### 5. Styling
- **CSS Variables**: `--bg`, `--card-bg`, `--text` for consistent styling.
- **Neumorphic Cards**: `.phoreign-card` with hover effects.
- **Responsive Container**: `.container` adapts to different screen sizes.
- **Vignette Overlay**: Fades edges on scroll for a polished look.

---

## How It Demonstrates React Concepts

| Concept       | Example                                    | Why It's Good                                   |
|-------------  |--------------------------------------------|-------------------------------------------------|
| Props         | `ProductCard` receives `product`           | Components are reusable and flexible            |
| State         | `useState` for form, featured index        | UI updates dynamically based on user interaction|
| Routing       | `react-router-dom` `Routes` & `Route`      | Multiple pages with clean navigation            |
| Modularity    | `mapPhoreignProducts` utility              | Logic is isolated and reusable                  |
| CSS Variables | `--bg`, `--text`, `--card-bg`              | Easily switch themes and maintain consistency   |

---

## Next Steps
- Add **Dark Mode toggle** (future feature)
- Add Backkend persistance

