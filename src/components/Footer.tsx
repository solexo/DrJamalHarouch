import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>RADIOLOGIE SIDI OTHMANE</h3>
              <p className="footer-tagline">Dr Jamal Harouch et Équipe</p>
            </div>
            <p className="footer-description">
              Fournissant des services de radiologie de précision avec plus de 30 ans d'expérience.
              Des diagnostics fiables et des soins avancés sont nos priorités absolues.
            </p>
          </div>

          <div className="footer-section">
            <h4>Liens Rapides</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')}>Accueil</button></li>
              <li><button onClick={() => scrollToSection('doctors')}>Nos Médecins</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('services')}>Radiologie Diagnostique</button></li>
              <li><button onClick={() => scrollToSection('services')}>Échographie</button></li>
              <li><button onClick={() => scrollToSection('services')}>Scanner</button></li>
              <li><button onClick={() => scrollToSection('services')}>IRM</button></li>
              <li><button onClick={() => scrollToSection('services')}>Radiologie Dentaire</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+212 522 594 949</span>
              </li>
              <li>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>+212 671 706 270</span>
              </li>
              <li>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>HarouchJamal@gmail.com</span>
              </li>
              <li>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href="https://www.google.com/maps/place/Radiologie+Sidi+Othmane/@33.5596349,-7.5614869,17z/data=!3m1!4b1!4m6!3m5!1s0xda6330fb684d2b1:0x8b636357576b390f!8m2!3d33.5596349!4d-7.5614869!16s%2Fg%2F11h7cpg11l?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" target="_blank" rel="noopener noreferrer">
                  <span>Avenue 10 Mars, Salama 3<br />Sidi Othmane, Casablanca, Maroc</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} RADIOLOGIE SIDI OTHMANE. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
