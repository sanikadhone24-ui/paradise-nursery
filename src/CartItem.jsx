import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="page-container empty-cart">
        <div className="empty-icon">🛒</div>
        <h1>Your Cart is Empty</h1>
        <p>Add some beautiful plants to your cart to get started.</p>
        <Link to="/products" className="primary-btn link-btn">
          Browse Plants
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container cart-page">
      <div className="cart-heading">
        <div>
          <p className="section-label">SHOPPING CART</p>
          <h1>Your Plants</h1>
        </div>
        <span>{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
      </div>

      <div className="cart-layout">
        <section className="cart-list">
          {items.map((item) => (
            <div className="cart-row" key={item.id}>
              <div className="cart-plant-icon">{item.emoji}</div>

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <strong>${item.price.toFixed(2)} each</strong>
              </div>

              <div className="quantity-control">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1
                      })
                    )
                  }
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1
                      })
                    )
                  }
                >
                  +
                </button>
              </div>

              <strong className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </strong>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </section>

        <aside className="summary-card">
          <h2>Order Summary</h2>
          <div className="summary-line">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="summary-line">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <button
            className="checkout-btn"
            onClick={() => alert("Thank you! Your order has been placed.")}
          >
            Checkout
          </button>
          <Link to="/products" className="continue-link">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}