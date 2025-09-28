// src/components/Testimonials/Testimonials.jsx
import { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      role: "Watch Collector",
      content: "The craftsmanship and attention to detail are exceptional. My Rolex from ChronoLux exceeded all expectations. The buying experience was seamless and professional.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Luxury Enthusiast",
      content: "I've purchased multiple watches from ChronoLux and each time the service has been impeccable. Their collection is curated with true expertise.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "First-time Buyer",
      content: "As my first luxury watch purchase, I was nervous. The team at ChronoLux guided me through every step. The Omega I bought is absolutely stunning!",
      rating: 5,
      image: "👨‍🔧"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>What our customers say about their experience</p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-active">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-content">"{testimonials[activeTestimonial].content}"</p>
            <div className="testimonial-rating">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <div className="testimonial-author">
              <span className="author-image">{testimonials[activeTestimonial].image}</span>
              <div>
                <h4>{testimonials[activeTestimonial].name}</h4>
                <p>{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-nav">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                className={`nav-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;