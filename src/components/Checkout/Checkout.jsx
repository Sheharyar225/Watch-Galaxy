// src/components/Checkout/Checkout.jsx
import { FaCreditCard, FaPaypal, FaApple } from "react-icons/fa";
import toast from "react-hot-toast";
import "./Checkout.css";

const Checkout = ({ onClose }) => {
  const handlePayment = (method) => {
    toast.success(`Payment via ${method} processed successfully ✅`);
    onClose(); // close checkout after success
  };

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Select Payment Method</h2>
        <div className="payment-options">
          <button
            className="payment-btn"
            onClick={() => handlePayment("Credit Card")}
          >
            <FaCreditCard /> Credit Card
          </button>
          <button
            className="payment-btn"
            onClick={() => handlePayment("PayPal")}
          >
            <FaPaypal /> PayPal
          </button>
          <button
            className="payment-btn"
            onClick={() => handlePayment("Apple Pay")}
          >
            <FaApple /> Apple Pay
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Checkout;
