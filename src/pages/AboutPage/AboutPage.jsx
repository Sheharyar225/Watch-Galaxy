// src/pages/AboutPage/AboutPage.jsx
import { FaAward, FaUsers, FaShippingFast, FaHeadset } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  const stats = [
    { icon: <FaAward />, number: '25+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '50K+', label: 'Happy Customers' },
    { icon: <FaShippingFast />, number: '100+', label: 'Brands Available' },
    { icon: <FaHeadset />, number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      title: 'Heritage & Craftsmanship',
      description: 'We honor the centuries-old tradition of watchmaking, bringing you timepieces that represent the pinnacle of human craftsmanship.'
    },
    {
      title: 'Authenticity Guaranteed',
      description: 'Every watch in our collection is 100% authentic, sourced directly from authorized dealers and certified pre-owned experts.'
    },
    {
      title: 'Personalized Service',
      description: 'Our team of watch experts provides personalized guidance to help you find the perfect timepiece for your style and needs.'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Excellence in every second since 1998</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Watch Galaxy: Where Time Meets Perfection</h2>
              <p>
                Founded in 1998, WatchGalaxy has established itself as a premier destination for luxury 
                watch enthusiasts and collectors. Our journey began with a simple passion for 
                horological excellence and has evolved into a trusted platform connecting discerning 
                clients with the world's finest timepieces.
              </p>
              <p>
                We believe that a luxury watch is more than just a timekeeping instrument—it's a 
                statement of personal style, a testament to craftsmanship, and an heirloom to be 
                cherished for generations. This philosophy guides every aspect of our business, 
                from curation to customer service.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1678323898820-48f9bde8f9e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNoJTIwZ2FsYXh5fGVufDB8fDB8fHww" 
                alt="Watch craftsmanship" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Experts</h2>
            <p>Passionate horologists dedicated to your satisfaction</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">👨‍💼</div>
              <h3>Robert James</h3>
              <p>Head Watch Expert</p>
              <span>15+ years experience</span>
            </div>
            <div className="team-member">
              <div className="member-image">👩‍💼</div>
              <h3>Sarah Mitchell</h3>
              <p>Luxury Consultant</p>
              <span>Rolex & Patek Specialist</span>
            </div>
            <div className="team-member">
              <div className="member-image">👨‍🔧</div>
              <h3>David Chen</h3>
              <p>Certified Watchmaker</p>
              <span>Authentication Expert</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;