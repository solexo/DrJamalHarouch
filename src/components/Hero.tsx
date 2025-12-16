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
              Diagnostic Précis <span className="highlight">et Soins Avancés</span>
            </h1>
            {(() => { console.log('Hero title textContent:', JSON.stringify(document.querySelector('.hero-title')?.textContent)); return null; })()}
          </div>
        </div>
        <div className="hero-video-top">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="hero-video-full"
            onLoadedData={() => console.log('Hero video loaded')}
            onPlay={() => console.log('Hero video playing')}
            onError={(e) => console.log('Hero video error:', e)}
          >
            <source src="/1212.webm" type="video/webm" />
          </video>
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
