// src/components/Cart/Cart.jsx
import { useState } from "react";
import { FaTimes, FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";
import Checkout from "../Checkout/Checkout";
import "./Cart.css";

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onClose, getCartTotal }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <FaShoppingBag />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.brand}</h4>
                      <p>{item.name}</p>
                      <p className="item-price">${item.price.toLocaleString()}</p>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <FaMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toLocaleString()}</span>
                </div>
                <button
                  className="btn btn-primary checkout-btn"
                  onClick={() => setShowCheckout(true)}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
    </div>
  );
};

export default Cart;
