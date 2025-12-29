import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONTENT } from '../content';

const Home = () => {
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState(0);
  const images = SITE_CONTENT.images;
  const toResizedPath = (img: string, variant: 'carousel' | 'gallery') => {
    const fileName = img.split('/').filter(Boolean).pop() ?? img;
    return `/resized/${variant}/${fileName}`;
  };
  const extendedImages = [...images, ...images.slice(0, 3)]; // pad for seamless loop

  // Shuffle function to randomize array
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledImages] = useState(() => shuffleArray(extendedImages));

  useEffect(() => {
    document.title = `${SITE_CONTENT.brand.businessName} - ${SITE_CONTENT.brand.tagline}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', SITE_CONTENT.brand.shortPitch);
  }, []);

  useEffect(() => {
    if (location.hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (location.hash === '#top' || location.hash === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const advance = (step: number) => {
    setCurrentImage((prev) => (prev + step + shuffledImages.length) % shuffledImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => advance(1), 5000);
    return () => clearInterval(interval);
  }, [shuffledImages]);

  return (
    <main id="top">
      <section className="hero">
        <div className="container">
          <div className="carousel">
            <div className="carousel-images" style={{ transform: `translateX(-${currentImage * (100 / 3)}%)` }}>
              {shuffledImages.map((img, index) => (
                <img 
                  key={index} 
                  src={toResizedPath(img, 'carousel')} 
                  alt={`Slide ${index + 1}`} 
                  onError={(e) => {
                    console.error(`Failed to load image: ${img}`);
                    e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
                  }}
                />
              ))}
            </div>
          </div>
          <h1>{SITE_CONTENT.brand.businessName}</h1>
          <p className="hero-lead">
            {SITE_CONTENT.brand.shortPitch}
            <span className="secondary-line">
              Our goal is to grow into the go-to trash can cleaning service, with loyal monthly customers and expansion into nearby neighborhoods.
            </span>
          </p>
          <div className="ctas">
            <Link to="/services" className="btn primary">Services</Link>
            <Link to="/contact" className="btn secondary">Contact Us</Link>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="container">
          <h2>Curbside Bin Cleaning</h2>
          <div className="steps">
            {SITE_CONTENT.howItWorks.steps.map((step, i) => (
              <div key={i} className="step">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2>What's Included</h2>
          <div className="steps services-steps">
            {SITE_CONTENT.service.included.map((item, i) => (
              <div key={i} className="step">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pricing-teaser">
        <div className="container">
          <h2>Pricing</h2>
          <div className="pricing-group one-time">
            <h3>One-Time Services</h3>
            <div className="pricing-cards">
              {SITE_CONTENT.pricing.oneTime.map((plan, i) => (
                <div key={i} className="card">
                  <h3>{plan.label}</h3>
                  <p className="price">{plan.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pricing-group subscriptions">
            <h3>Subscriptions</h3>
            <p className="pricing-subtext">
              <strong>Frequency Options:</strong> <strong>Monthly</strong> (Best for Odor Control) • <strong>Every Other Month</strong> (Budget Option) • <strong>Quarterly</strong> (Light Maintenance)
            </p>
            <div className="pricing-cards">
              {SITE_CONTENT.pricing.recurring.map((plan, i) => (
                <div key={i} className="card">
                  <h3>{plan.label}</h3>
                  <p className="price">{plan.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pricing-cta">
            <Link to="/services" className="btn pricing-btn">View Services & Pricing</Link>
          </div>
        </div>
      </section>
      <section className="guarantee">
        <div className="container">
          <h2>{SITE_CONTENT.trust.guaranteeHeadline}</h2>
          <p>{SITE_CONTENT.trust.guaranteeText}</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
