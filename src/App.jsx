import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductModal from './components/ProductModal/ProductModal';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import TrendingSection from './components/TrendingSection/TrendingSection';
import DealOfTheDay from './components/DealOfTheDay/DealOfTheDay';
import Testimonials from './components/Testimonials/Testimonials';
import BrandShowcase from './components/BrandShowcase/BrandShowcase';
import CollectionsPage from './pages/CollectionsPage/CollectionsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import './App.css';

// ✅ HomePage Layout
function HomePage({ onViewDetails, onAddToCart, selectedCategory, setSelectedCategory, cart }) {
  return (
    <>
      <Hero />
      <BrandShowcase />
      <main className="main-content">
        {/* Category Filters */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* ✅ Filtered Products directly below filters */}
        <ProductGrid 
          category={selectedCategory}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />

        {/* Then extra promotional sections */}
        <TrendingSection 
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
        
        <DealOfTheDay 
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
        
        <Testimonials />
      </main>
    </>
  );
}

// ✅ App Component
function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cart = useCart();

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Router>
      <div className="app">
        {/* Navbar with cart */}
        <Navbar 
          cartItemsCount={cart.getCartItemsCount()} 
          onCartClick={() => setIsCartOpen(true)}
        />
        
        {/* Routes */}
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onViewDetails={handleViewDetails}
                onAddToCart={cart.addToCart}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                cart={cart}
              />
            } 
          />
          <Route 
            path="/collections" 
            element={
              <CollectionsPage 
                onViewDetails={handleViewDetails} 
                onAddToCart={cart.addToCart} 
              />
            } 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct}
            onClose={handleCloseModal}
            onAddToCart={cart.addToCart}
          />
        )}

        {/* Cart Drawer */}
        {isCartOpen && (
          <Cart 
            cartItems={cart.cartItems}
            onUpdateQuantity={cart.updateQuantity}
            onRemoveItem={cart.removeFromCart}
            onClose={() => setIsCartOpen(false)}
            onCheckout={() => {
              setIsCartOpen(false);
              // TODO: Navigate to checkout page
            }}
            getCartTotal={cart.getCartTotal}
          />
        )}

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
