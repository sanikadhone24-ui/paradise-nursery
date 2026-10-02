import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-overlay">
        <div className="hero-content">
          <p className="small-title">WELCOME TO</p>
          <h1>Paradise Nursery</h1>
          <p className="hero-text">
            Bring nature into your home with beautiful, healthy and affordable
            indoor plants.
          </p>
          <button className="primary-btn" onClick={() => navigate("/products")}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">Paradise Nursery</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart <span className="cart-count">{count}</span>
        </Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}