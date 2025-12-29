import { SITE_CONTENT } from '../content';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-brand">
          <div className="footer-logo" aria-label={SITE_CONTENT.brand.businessName}>
            <svg width="164" height="65" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" role="img">
              <defs>
                <linearGradient id="bin-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0A5EF0" />
                  <stop offset="100%" stopColor="#1CD4A8" />
                </linearGradient>
                <linearGradient id="wavefill-footer" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7FDBFF" />
                  <stop offset="100%" stopColor="#0074D9" />
                </linearGradient>
              </defs>
              <g transform="translate(20,20)">
                <rect x="60" y="20" width="120" height="110" rx="14" fill="url(#bin-footer)" stroke="#0A5EF0" strokeWidth="4" />
                <rect x="50" y="10" width="140" height="18" rx="6" fill="#0A5EF0" />
                <rect x="65" y="8" width="35" height="6" rx="3" fill="#1CD4A8" />
                <rect x="150" y="8" width="35" height="6" rx="3" fill="#1CD4A8" />
                <path d="M45 95 Q80 120 115 100 T175 100" stroke="url(#wavefill-footer)" strokeWidth="8" fill="none" />
                <polygon points="150,45 155,58 170,60 158,70 162,85 150,77 138,85 142,70 130,60 145,58" fill="white" stroke="#33E1B5" strokeWidth="2" />
                <circle cx="190" cy="80" r="7" fill="#7FDBFF" />
                <circle cx="180" cy="95" r="5" fill="#7FDBFF" />
              </g>
              <text x="220" y="95" fontFamily="Segoe UI, Montserrat, Arial" fontSize="60" fontWeight="800" fill="#FFFFFF">
                STANLEY
              </text>
              <text x="223" y="124" fontFamily="Segoe UI, Montserrat, Arial" fontSize="38" fontWeight="800" fill="#1CD4A8" letterSpacing="1.2">
                CLEANING
              </text>
            </svg>
          </div>
          <p className="footer-tagline">{SITE_CONTENT.brand.tagline}</p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Phone: <a href={`tel:${SITE_CONTENT.contact.phone}`}>{SITE_CONTENT.contact.phone}</a></p>
          <p>Text: <a href={`sms:${SITE_CONTENT.contact.text}`}>{SITE_CONTENT.contact.text}</a></p>
          <p>Email: <a href={`mailto:${SITE_CONTENT.contact.email}`}>{SITE_CONTENT.contact.email}</a></p>
        </div>
        <div className="footer-follow">
          <h3>Follow Us</h3>
          <p>
            <span className="social-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v2h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z"/>
              </svg>
            </span>
            <a href={SITE_CONTENT.brand.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
          <p>
            <span className="social-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.9 7.3a9.5 9.5 0 0 1-2-.2 6.5 6.5 0 0 0 1.4 4.3 6.7 6.7 0 0 0 3.8 2.5v4.4a11.7 11.7 0 0 1-6.7-2.2v8.9a10 10 0 1 1-10-10 7.3 7.3 0 0 0 .7 3.1 6 6 0 0 0 2.6 2.7v5.7a4.1 4.1 0 1 1-3.1-4v-4.8A10 10 0 1 0 29 30.9V12.4a12 12 0 0 0 7.8 2.8V11a8 8 0 0 1-3.9-3.8Z"/>
              </svg>
            </span>
            <a href={SITE_CONTENT.brand.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
