// src/components/TrendingSection/TrendingSection.jsx
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './TrendingSection.css';

const TrendingSection = ({ onViewDetails, onAddToCart }) => {
  const trendingProducts = products.filter(product => 
    ['Luxury', 'Men'].includes(product.category)
  ).slice(0, 4);

  return (
    <section className="trending-section">
      <div className="container">
        <div className="section-header">
          <h2>Trending Now</h2>
          <p>Discover our most sought-after timepieces</p>
        </div>
        
        <div className="trending-grid">
          {trendingProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;