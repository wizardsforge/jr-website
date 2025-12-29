import { useEffect } from 'react';
import { SITE_CONTENT } from '../content';

const About = () => {
  useEffect(() => {
    document.title = `About Us - ${SITE_CONTENT.brand.businessName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', SITE_CONTENT.brand.vision);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <main className="about-page">
      <div className="container">
        <section className="service-block about-hero">
          <h1>About Us — Stanley Cleaning</h1>
          <p className="about-tagline">A Fresh Business Built on Pride, Responsibility & Hard Work</p>
          <div className="about-hero-grid">
            <div className="about-photo">
              <span>Photo Placeholder</span>
              <p className="about-photo-caption">Bring your story to life with a team photo or in-action shot.</p>
            </div>
            <div className="about-hero-copy">
              <p>
                Stanley Cleaning is proudly locally owned and operated by a motivated 14-year-old entrepreneur with big goals,
                strong values, and a commitment to doing things the right way. What started as a simple idea —
                “people shouldn’t have to deal with dirty, smelly trash cans” — has grown into a dependable, customer-focused
                cleaning service that families trust.
              </p>
              <p className="about-note">
                Parent Supervised-Supported Operations. Questions? Parent Email <a href="mailto:bryanstanley820@gmail.com">bryanstanley820@gmail.com</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="service-block about-why">
          <h2>Why Choose a Youth-Owned Business?</h2>
          <div className="about-columns">
            <div className="about-card">
              <h3>Reliability You Can Count On</h3>
              <p>Scheduling matters. Showing up matters. Doing the job right matters. Every service is performed carefully, respectfully, and with attention to detail.</p>
            </div>
            <div className="about-card">
              <h3>Pride in Every Job</h3>
              <p>This isn’t just a side gig. It’s a real business built with real standards. Every bin cleaned is a reflection of our name, and we take that seriously.</p>
            </div>
            <div className="about-card">
              <h3>Community-Based</h3>
              <p>Proudly serving local neighborhoods. Built on integrity, honesty, and hard work.</p>
            </div>
          </div>
        </section>

        <section className="service-block about-beliefs">
          <h2>What We Believe</h2>
          <div className="about-columns">
            <div className="about-card">
              <h3>Clean Homes Feel Better</h3>
              <p>Fresh, sanitized trash bins reduce odor, pests, and mess around your home.</p>
            </div>
            <div className="about-card">
              <h3>Great Service Builds Trust</h3>
              <p>Clear communication, dependable appointments, and consistent quality keep customers happy.</p>
            </div>
            <div className="about-card">
              <h3>Entrepreneurship Matters</h3>
              <p>Learning business, responsibility, and customer care early builds lifelong discipline and character.</p>
            </div>
          </div>
        </section>

        <section className="service-block about-commitment">
          <h2>Our Commitment to You</h2>
          <ul className="service-list about-list">
            <li>We show up when we say we will.</li>
            <li>We treat your property with respect.</li>
            <li>We deliver professional-level results.</li>
            <li>We work hard. Every visit.</li>
          </ul>
        </section>

        <section className="service-block about-message">
          <h2>A Message From the Owner</h2>
          <p>
            “Thank you for supporting a youth-owned business. Every customer helps me learn, grow, and build something meaningful —
            and I promise to deliver great service every single time.”
          </p>
        </section>

        <section className="service-block about-cta">
          <h2>Ready to Support Local Youth & Get Cleaner Bins?</h2>
          <div className="about-columns about-cta-actions">
            <div className="about-card">
              <h3>Book a Service</h3>
              <p>Pick your plan and we’ll handle the rest.</p>
            </div>
            <div className="about-card">
              <h3>Ask a Question</h3>
              <p>Email</p>
              <p className="about-email-line">
                <a href="mailto:stanleycleaningandwashing@gmail.com">stanleycleaningandwashing@gmail.com</a>
              </p>
              <p>We’re happy to help.</p>
            </div>
            <div className="about-card">
              <h3>Just Say Hi</h3>
              <p>We love meeting neighbors and earning your trust.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
