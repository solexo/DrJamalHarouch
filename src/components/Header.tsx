import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <img src="/logo.webp" alt="Radiologie Sidi Othmane Logo" width="40" height="40" onLoad={() => console.log('Logo image loaded')} onError={() => console.error('Logo image failed to load')} />
            </div>
            <div>
              <h2>RADIOLOGIE SIDI OTHMANE</h2>
            </div>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
            <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)}>Nos Médecins</Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <Link
              to="/"
              className="btn-primary book-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection('appointment'), 100);
              }}
            >
              Prendre Rendez-vous
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
