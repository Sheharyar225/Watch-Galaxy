// src/components/BrandShowcase/BrandShowcase.jsx
import './BrandShowcase.css';

const BrandShowcase = () => {
  const brands = [
    { name: 'Rolex', logo: '👑', since: 1905 },
    { name: 'Omega', logo: 'Ω', since: 1848 },
    { name: 'Cartier', logo: '💎', since: 1847 },
    { name: 'Patek Philippe', logo: '🌟', since: 1839 },
    { name: 'Tag Heuer', logo: '⚡', since: 1860 },
  ];

  return (
    <section className="brand-showcase">
      <div className="container">
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <div key={brand.name} className="brand-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="brand-logo">{brand.logo}</div>
              <h3>{brand.name}</h3>
              <p>Since {brand.since}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;