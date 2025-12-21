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
