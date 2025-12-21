import { useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Removed console.log to prevent forced reflow
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Excellence en Radiologie</span>
            <h1 className="hero-title">
              Diagnostic Précis <span className="highlight">et Soins Avancés</span>
            </h1>
            <p className="hero-description">
              Bienvenue au Cabinet de Radiologie Sidi Othmane, votre partenaire de confiance en imagerie médicale à Casablanca depuis 1994. Forts de plus de 30 années d'expérience ininterrompue, nous offrons des services de radiologie diagnostique de pointe incluant l'échographie, le scanner, l'IRM et la radiologie dentaire. Notre équipe de radiologues expérimentés, dirigée par le Dr Jamal Harouch, met à votre disposition des équipements de dernière génération pour des diagnostics précis et des soins personnalisés.
            </p>
            <p className="hero-experience">
              Le Cabinet de Radiologie Sidi Othmane est établi à Casablanca depuis 1994, offrant plus de 30 années consécutives d'expertise en imagerie médicale. Nos radiologues qualifiés utilisent des technologies de pointe pour assurer des diagnostics fiables et des soins de qualité supérieure à nos patients.
            </p>
          </div>
        </div>
        <div className="hero-video-top">
           <img
             src="/1212.gif"
             alt="Hero animation"
             className="hero-video-full"
             onLoad={() => console.log('Hero gif loaded')}
             onError={(e) => console.log('Hero gif error:', e)}
           />
           <div className="hero-overlay"></div>
         </div>
        <div className="hero-bottom">
          <div className="hero-actions">
            <button className="btn-primary" onClick={scrollToAppointment}>
              Prendre Rendez-vous
            </button>
            <button
              className="btn-secondary-outline"
              onClick={() => {
                const element = document.getElementById('doctors');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              En Savoir Plus
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Années d'Expérience</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Précision Diagnostique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
