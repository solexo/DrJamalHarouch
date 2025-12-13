import { useState, useEffect } from 'react';
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
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#0066cc" strokeWidth="2" fill="none"/>
                <path d="M10 20h20M20 10v20" stroke="#0066cc" strokeWidth="2"/>
                <circle cx="20" cy="20" r="6" stroke="#00a86b" strokeWidth="2" fill="none"/>
                <path d="M14 14l12 12M26 14l-12 12" stroke="#00a86b" strokeWidth="1"/>
              </svg>
            </div>
            <div>
              <h2>Dr. Jamal Harouch</h2>
              <span className="subtitle">Radiologie d'Excellence</span>
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
            <button onClick={() => scrollToSection('home')}>Accueil</button>
            <button onClick={() => scrollToSection('about')}>À propos</button>
            <button onClick={() => scrollToSection('services')}>Services</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              className="btn-primary book-btn"
              onClick={() => scrollToSection('appointment')}
            >
              Prendre Rendez-vous
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
