import { Link, useLocation } from 'react-router-dom';
import { SITE_CONTENT } from '../content';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo" aria-label={SITE_CONTENT.brand.businessName}>
          <svg width="180" height="72" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="bin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0A5EF0" />
                <stop offset="100%" stopColor="#1CD4A8" />
              </linearGradient>
              <linearGradient id="wavefill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7FDBFF" />
                <stop offset="100%" stopColor="#0074D9" />
              </linearGradient>
            </defs>
            <g transform="translate(20,20)">
              <rect x="60" y="20" width="120" height="110" rx="14" fill="url(#bin)" stroke="#0A5EF0" strokeWidth="4" />
              <rect x="50" y="10" width="140" height="18" rx="6" fill="#0A5EF0" />
              <rect x="65" y="8" width="35" height="6" rx="3" fill="#1CD4A8" />
              <rect x="150" y="8" width="35" height="6" rx="3" fill="#1CD4A8" />
              <path d="M45 95 Q80 120 115 100 T175 100" stroke="url(#wavefill)" strokeWidth="8" fill="none" />
              <polygon points="150,45 155,58 170,60 158,70 162,85 150,77 138,85 142,70 130,60 145,58" fill="white" stroke="#33E1B5" strokeWidth="2" />
              <circle cx="190" cy="80" r="7" fill="#7FDBFF" />
              <circle cx="180" cy="95" r="5" fill="#7FDBFF" />
            </g>
            <text x="220" y="95" fontFamily="Segoe UI, Montserrat, Arial" fontSize="60" fontWeight="800" fill="#0A5EF0">
              STANLEY
            </text>
            <text x="223" y="124" fontFamily="Segoe UI, Montserrat, Arial" fontSize="38" fontWeight="800" fill="#1CD4A8" letterSpacing="1.2">
              CLEANING
            </text>
          </svg>
        </Link>
        <nav>
          <ul>
            <li><Link to={{ pathname: '/', hash: '#top' }} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
            <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
            <li><Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
            <li><Link to={{ pathname: '/', hash: '#contact' }} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
