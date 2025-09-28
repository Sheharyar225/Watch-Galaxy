// src/pages/CollectionsPage/CollectionsPage.jsx
import { useState, useEffect } from 'react';
import { categories, products } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { FaFilter, FaSort, FaTimes, FaSearch, FaStar } from 'react-icons/fa';
import './CollectionsPage.css';

const CollectionsPage = ({ onViewDetails, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Extract unique brands
  const brands = [...new Set(products.map(product => product.brand))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    
    return matchesCategory && matchesPrice && matchesSearch && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'brand':
        return a.brand.localeCompare(b.brand);
      case 'featured':
        return a.id - b.id;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange([0, 30000]);
    setSearchTerm('');
    setSelectedBrands([]);
    setSortBy('name');
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterOpen]);

  return (
    <div className="collections-page">
      {/* Hero Section */}
      <section className="collections-hero">
        <div className="hero-bacround" >
          
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>Premium Collection</span>
            </div>
            <h1>Masterpiece Watches</h1>
            <p>Discover horological excellence with our curated selection of luxury timepieces from renowned watchmakers worldwide.</p>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{products.length}+</span>
              <span className="stat-label">Timepieces</span>
            </div>
            <div className="stat">
              <span className="stat-number">{brands.length}</span>
              <span className="stat-label">Luxury Brands</span>
            </div>
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="controls-bar">
        <div className="container">
          <div className="controls-content">
            <div className="controls-left">
              <button 
                className="filter-toggle"
                onClick={() => setIsFilterOpen(true)}
              >
                <FaFilter />
                <span>Filters</span>
              </button>
              
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search watches..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="controls-right">
              <div className="sort-box">
                <FaSort className="sort-icon" />
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="name">Name A-Z</option>
                  <option value="brand">Brand</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              
              <div className="results-count">
                <span>{sortedProducts.length} Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="collections-container">
        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
          <div className="filter-overlay">
            <div className="filter-sidebar mobile">
              <div className="filter-header">
                <h3>Filters</h3>
                <button 
                  className="close-filter"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              
              <FilterContent
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedBrands={selectedBrands}
                toggleBrand={toggleBrand}
                brands={brands}
                clearFilters={clearFilters}
              />
            </div>
            <div 
              className="filter-backdrop"
              onClick={() => setIsFilterOpen(false)}
            />
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="collections-sidebar">
          <FilterContent
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBrands={selectedBrands}
            toggleBrand={toggleBrand}
            brands={brands}
            clearFilters={clearFilters}
          />
        </div>

        {/* Products Grid */}
        <div className="collections-main">
          {sortedProducts.length > 0 ? (
            <>
              <div className="grid-header">
                <h2>
                  {selectedCategory === 'All' ? 'All Collections' : selectedCategory}
                  <span className="product-count"> ({sortedProducts.length})</span>
                </h2>
                <p>Exquisite timepieces crafted with precision and passion</p>
              </div>
              
              <div className="products-grid">
                {sortedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={onViewDetails}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="no-products">
              <div className="no-products-icon">⌚</div>
              <h3>No watches found</h3>
              <p>Try adjusting your filters or search terms</p>
              <button className="btn btn-primary" onClick={clearFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Filter Content Component
const FilterContent = ({ 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange, 
  selectedBrands, 
  toggleBrand, 
  brands, 
  clearFilters 
}) => {
  return (
    <>
      <div className="filter-section">
        <h4>Categories</h4>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="filter-name">{category}</span>
              <span className="filter-count">
                ({category === 'All' 
                  ? products.length 
                  : products.filter(p => p.category === category).length
                })
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-filter">
          <div className="price-inputs">
            <div className="price-input">
              <label>Min</label>
              <span>${priceRange[0].toLocaleString()}</span>
            </div>
            <div className="price-input">
              <label>Max</label>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="30000"
            step="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="price-slider"
          />
        </div>
      </div>

      <div className="filter-section">
        <h4>Brands</h4>
        <div className="brand-filters">
          {brands.map(brand => (
            <label key={brand} className="brand-filter">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />
              <span className="checkmark"></span>
              <span className="brand-name">{brand}</span>
              <span className="brand-count">
                ({products.filter(p => p.brand === brand).length})
              </span>
            </label>
          ))}
        </div>
      </div>

      <button className="clear-filters-btn" onClick={clearFilters}>
        Clear All Filters
      </button>
    </>
  );
};

export default CollectionsPage;