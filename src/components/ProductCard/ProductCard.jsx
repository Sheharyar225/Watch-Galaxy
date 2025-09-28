import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderStars = () => {
    const stars = [];
    const rating = product.rating || 4; // fallback
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "star filled" : "star"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="card-image">
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={imageLoaded ? 'loaded' : ''}
        />

        {/* Category Badge */}
        <span className="product-badge">{product.category}</span>

        <div className="card-overlay">
          <button 
            className="btn btn-primary overlay-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
          <button 
            className="btn btn-secondary overlay-btn"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="product-brand">{product.brand}</h3>
        <h4 className="product-name">{product.name}</h4>
        <p className="product-price">${product.price.toLocaleString()}</p>

        {/* Rating */}
        <div className="product-rating">
          {renderStars()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
