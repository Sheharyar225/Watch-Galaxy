// src/components/DealOfTheDay/DealOfTheDay.jsx
import { useState, useEffect, useRef } from 'react';
import { products } from '../../data/products';
import { FaFire, FaShoppingCart, FaEye, FaClock, FaTag } from 'react-icons/fa';
import './DealOfTheDay.css';

const DealOfTheDay = ({ onViewDetails, onAddToCart }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const dealProduct = products.find(product => product.id === 6); // Apple Watch as deal

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!dealProduct) return null;

  const discountedPrice = dealProduct.price * 0.8; // 20% off
  const savings = dealProduct.price - discountedPrice;

  return (
    <section 
      className={`deal-section ${isVisible ? 'visible' : ''}`} 
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="deal-background">
        <div className="bg-pulse-1"></div>
        <div className="bg-pulse-2"></div>
        <div className="bg-pulse-3"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-icon">
            <FaFire />
          </div>
          <h2 className="section-title">Deal of the Day</h2>
          <p className="section-subtitle">Limited Time Exclusive Offer</p>
        </div>

        <div className="deal-content">
          {/* Product Showcase */}
          <div className="deal-showcase">
            <div className="product-card">
              <div className="card-badges">
                <div className="discount-badge">
                  <FaTag />
                  <span>20% OFF</span>
                </div>
                <div className="featured-badge">
                  <FaFire />
                  <span>HOT DEAL</span>
                </div>
              </div>
              
              <div className="product-image">
                <img 
                  src={dealProduct.image} 
                  alt={dealProduct.name}
                  className="product-img"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="brand-tag">{dealProduct.brand}</span>
                  </div>
                </div>
              </div>

              <div className="product-glow"></div>
            </div>

            {/* Savings Banner */}
            <div className="savings-banner">
              <div className="savings-content">
                <span className="savings-text">You Save</span>
                <span className="savings-amount">${savings.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Deal Information */}
          <div className="deal-info">
            <div className="deal-header">
              <span className="product-category">Smart Watch</span>
              <h3 className="product-title">
                {dealProduct.brand} {dealProduct.name}
              </h3>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
                <span className="rating-text">(4.8/5)</span>
              </div>
            </div>

            <p className="deal-description">
              {dealProduct.description}
            </p>

            {/* Features List */}
            <div className="features-list">
              {dealProduct.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="pricing-section">
              <div className="price-display">
                <div className="original-price">
                  <span>Was ${dealProduct.price.toLocaleString()}</span>
                </div>
                <div className="discounted-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">{discountedPrice.toLocaleString()}</span>
                </div>
              </div>
              <div className="price-savings">
                Save ${savings.toLocaleString()} • Free Shipping
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="countdown-section">
              <div className="countdown-header">
                <FaClock />
                <span>Offer Ends In</span>
              </div>
              <div className="countdown-timer">
                <div className="time-block">
                  <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="time-label">Hours</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-block">
                  <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="time-label">Minutes</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-block">
                  <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="time-label">Seconds</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="deal-progress">
              <div className="progress-header">
                <span>Limited Stock Available</span>
                <span>75% Sold</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="deal-actions">
              <button 
                className="btn btn-primary add-to-cart-btn"
                onClick={() => onAddToCart(dealProduct)}
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
                <div className="btn-glow"></div>
              </button>
              <button 
                className="btn btn-secondary view-details-btn"
                onClick={() => onViewDetails(dealProduct)}
              >
                <FaEye />
                <span>Quick View</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-item">
                <div className="trust-icon">🚚</div>
                <span>Free Shipping</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">↩️</div>
                <span>30-Day Returns</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🔒</div>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;