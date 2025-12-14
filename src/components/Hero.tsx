import './Hero.css';

export default function Hero() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Excellence en Radiologie</span>
            <h1 className="hero-title">
              Diagnostic Précis
              <span className="highlight">et Soins Avancés</span>
            </h1>
          </div>
        </div>
        <div className="hero-video-top">
          <video autoPlay loop muted playsInline className="hero-video-full">
            <source src="/1212.webm" type="video/webm" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-bottom">
          <p className="hero-description">
            Fournissant des services de radiologie de pointe avec plus de 15 ans d'expérience.
            Le Dr Jamal Harouch utilise les dernières technologies pour des diagnostics précis et des soins personnalisés.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={scrollToAppointment}>
              Prendre Rendez-vous
            </button>
            <button
              className="btn-secondary-outline"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              En Savoir Plus
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">15+</div>
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
