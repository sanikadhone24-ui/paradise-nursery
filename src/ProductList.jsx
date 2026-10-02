import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    price: 18,
    emoji: "🌿",
    description: "Easy-care plant that helps freshen indoor spaces."
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Flowering",
    price: 22,
    emoji: "🌱",
    description: "Elegant indoor plant with beautiful white flowers."
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulent",
    price: 15,
    emoji: "🪴",
    description: "Low-maintenance succulent with useful gel-filled leaves."
  },
  {
    id: 4,
    name: "Money Plant",
    category: "Air Purifying",
    price: 12,
    emoji: "🍃",
    description: "Popular indoor climber that is simple to grow."
  },
  {
    id: 5,
    name: "Monstera",
    category: "Decorative",
    price: 28,
    emoji: "🌿",
    description: "A stylish tropical plant with large split leaves."
  },
  {
    id: 6,
    name: "Spider Plant",
    category: "Air Purifying",
    price: 16,
    emoji: "🌱",
    description: "Fast-growing and beginner-friendly indoor plant."
  },
  {
    id: 7,
    name: "Jade Plant",
    category: "Succulent",
    price: 20,
    emoji: "🪴",
    description: "A compact succulent with thick green leaves."
  },
  {
    id: 8,
    name: "Rubber Plant",
    category: "Decorative",
    price: 25,
    emoji: "🍃",
    description: "Glossy-leaved plant that adds a bold look indoors."
  },
  {
    id: 9,
    name: "Lavender",
    category: "Flowering",
    price: 19,
    emoji: "💜",
    description: "Fragrant flowering plant that adds a calming touch."
  }
];

function ProductCard({ product, inCart, onAdd }) {
  return (
    <article className="product-card">
      <div className="plant-image">{product.emoji}</div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>
          <button
            className="add-btn"
            onClick={() => onAdd(product)}
            disabled={inCart}
          >
            {inCart ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="page-container">
      <div className="products-header">
        <div>
          <p className="section-label">OUR COLLECTION</p>
          <h1>Plants for Every Space</h1>
          <p>Choose from our collection of beautiful indoor plants.</p>
        </div>
      </div>

      <div className="category-row">
        <span>Air Purifying</span>
        <span>Flowering</span>
        <span>Succulent</span>
        <span>Decorative</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart={cartItems.some((item) => item.id === product.id)}
            onAdd={handleAdd}
          />
        ))}
      </div>
    </div>
  );
}