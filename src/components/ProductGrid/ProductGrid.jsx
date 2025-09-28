// src/components/ProductGrid/ProductGrid.jsx
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ category, onViewDetails, onAddToCart }) => {
  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <section className="product-grid">
      <div className="grid-container">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;