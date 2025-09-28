// src/components/Hero/Hero.jsx
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    'https://plus.unsplash.com/premium_photo-1728324776761-a088b2b9fbbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1535346256685-0527f1dfd658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1612817159576-986a0b7a4165?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="hero">
      {/* Background Images with Slideshow */}
      <div className="hero-background">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-bg-image ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Animated Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Floating Elements */}
      <div className="floating-watches">
        <div className="floating-watch watch-1">⌚</div>
        <div className="floating-watch watch-2">⏱️</div>
        <div className="floating-watch watch-3">🕰️</div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-text-container">
          {/* Animated Badge */}
          <div className="hero-badge">
            <span>Est. 1998</span>
          </div>

          {/* Main Heading with Animation */}
          <h1 className="hero-title">
            <span className="title-line">Timeless</span>
            <span className="title-line accent">Elegance</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Where Heritage Meets Horology
          </p>

          {/* Main Tagline */}
          <p className="hero-tagline">
            Discover exquisite timepieces that blend centuries of craftsmanship 
            with contemporary sophistication. Each watch tells a unique story 
            of precision, luxury, and enduring style.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button className="btn btn-primary hero-cta">
              <span>Explore Collection</span>
              <div className="cta-arrow">→</div>
            </button>
            <button className="btn btn-secondary hero-cta-secondary">
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years Excellence</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Luxury Brands</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Featured Watch Preview */}
        <div className="hero-preview">
          <div className="watch-preview">
            <div className="watch-image">
              <img 
                src="https://images.unsplash.com/photo-1473635540888-4035a1cc72fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D" 
                alt="Luxury Watch" 
              />
            </div>
            <div className="watch-info">
              <span className="watch-brand">ROLEX</span>
              <span className="watch-model">Submariner</span>
              <span className="watch-price">$12,500</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to Discover</span>
      </div>
    </section>
  );
};

export default Hero;