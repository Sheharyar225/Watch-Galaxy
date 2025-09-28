// src/components/ProductModal/ProductModal.jsx
import { FaTimes, FaCheck } from 'react-icons/fa';
import './ProductModal.css';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="modal-details">
            <h2>{product.brand}</h2>
            <h1>{product.name}</h1>
            <p className="modal-price">${product.price.toLocaleString()}</p>
            
            <p className="modal-description">{product.description}</p>
            
            <div className="modal-features">
              <h3>Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <FaCheck className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="btn btn-primary modal-add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;