Phoreign Tech — React E-Commerce Demo

A modern React storefront demonstrating clean architecture, reusable components, dynamic routing, and API integration using a mock commerce backend.

Built to showcase production-ready React fundamentals and scalable frontend structure.

Project Highlights

Dynamic product catalog powered by FakeStoreAPI

Rebranding layer using a custom product mapping utility

Full CRUD flow (mock API)

Dynamic routing with React Router

Controlled forms with validation patterns

Reusable component architecture

Responsive UI with Bootstrap 5

Clean separation of concerns (Pages / Components / Utils)

Note: FakeStoreAPI is a mock API. Create, update, and delete actions return success responses but do not persist after refresh.

Tech Stack

React 18 (Vite)

React Router DOM

Axios

React Bootstrap + Bootstrap 5

CSS Variables (scalable theming system)

FakeStoreAPI

Architecture Overview
src/
 ├── components/   → Reusable UI (Navbar, ProductCard)
 ├── pages/        → Route-level logic + data fetching
 ├── utils/        → Data transformation (productMapper)
 ├── App.jsx       → Route configuration
 └── main.jsx      → App entry point

Design Decisions

Product mapping utility decouples API structure from UI logic

Pages handle data fetching; components remain presentation-focused

Dynamic routes support scalable product detail and edit flows

CSS variables enable easy future theming

Core Features
Product Catalog

Fetches products from external API

Responsive grid layout

Reusable ProductCard component

Product Details

Dynamic route (/products/:id)

Edit + Delete functionality

Mock API integration with user feedback

Add / Edit Product

Controlled forms using React state

Pre-filled edit form via data fetch

Mock POST and PUT requests

Home Page

Auto-rotating featured product spotlight

Demonstrates interval cleanup with useEffect

What This Demonstrates

Strong understanding of React state and lifecycle

REST API consumption with Axios

Clean component abstraction

Dynamic routing patterns

Controlled form handling

Separation of business logic from UI

Professional project structure suitable for scaling

Potential Extensions

Persistent backend (Node + Express + Database)

Authentication & protected routes

Shopping cart state management

Filtering & pagination

Deployment pipeline (Vercel / Netlify)git status
