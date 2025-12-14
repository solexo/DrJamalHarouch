import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Entrer en Contact</span>
          <h2>Informations de Contact</h2>
          <p className="section-description">
            Vous avez des questions ou besoin de nous joindre ? Nous sommes là pour aider et nous attendons avec impatience de vous entendre.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3>Téléphone</h3>
            <p>Bureau Principal</p>
            <a href="tel:+212522594949" className="contact-link">+212 522 594 949</a>
            <p className="contact-meta">Lundi - Vendredi, 9h - 18h</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>Email</h3>
            <p>Envoyez-nous un message</p>
            <a href="mailto:jharouch@gmail.com" className="contact-link">jharouch@gmail.com</a>
            <p className="contact-meta">Nous répondrons dans les 24 heures</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3>Adresse</h3>
            <p>Visitez notre bureau</p>
            <div className="contact-address">
              Avenue 10 Mars, Salama 3<br />
              Sidi Othmane, Casablanca, Maroc
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Urgence</h3>
            <p>Ligne d'Urgence 24/7</p>
            <a href="tel:+212661140510" className="contact-link emergency">+212 661 140 510</a>
            <p className="contact-meta">Pour les besoins médicaux urgents</p>
          </div>
        </div>

        <div className="map-container">
          <div className="map-placeholder">
            <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="400" fill="#e9ecef"/>
              <g opacity="0.3">
                <path d="M100 100h600v200H100z" stroke="#6c757d" strokeWidth="2" fill="none"/>
                <path d="M150 150h100v100H150z" fill="#adb5bd"/>
                <path d="M300 180h150v70H300z" fill="#adb5bd"/>
                <path d="M500 150h150v100H500z" fill="#adb5bd"/>
                <circle cx="400" cy="250" r="40" fill="#0066cc" opacity="0.8"/>
                <path d="M400 210v30m0 10v30m-20-60h40m-30 10h20" stroke="white" strokeWidth="3"/>
              </g>
              <text x="400" y="350" textAnchor="middle" fill="#6c757d" fontSize="18" fontFamily="sans-serif">
                Avenue 10 Mars, Salama 3, Sidi Othmane, Casablanca
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
