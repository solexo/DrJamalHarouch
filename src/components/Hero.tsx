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
            controls={false}
            className="hero-video-full"
            onLoadedData={() => console.log('Hero video loaded')}
            onPlay={() => console.log('Hero video playing')}
            onError={(e) => console.log('Hero video error:', e)}
            onLoadStart={() => console.log('Hero video load start')}
            onCanPlay={() => console.log('Hero video can play')}
            onCanPlayThrough={() => console.log('Hero video can play through')}
            onWaiting={() => console.log('Hero video waiting')}
            onStalled={() => console.log('Hero video stalled')}
            onSuspend={() => console.log('Hero video suspended')}
            onAbort={() => console.log('Hero video aborted')}
            onPause={() => console.log('Hero video paused')}
            onEnded={() => console.log('Hero video ended')}
            onTimeUpdate={() => console.log('Hero video time update')}
            onVolumeChange={() => console.log('Hero video volume change')}
            onSeeking={() => console.log('Hero video seeking')}
            onSeeked={() => console.log('Hero video seeked')}
            onRateChange={() => console.log('Hero video rate change')}
            onDurationChange={() => console.log('Hero video duration change')}
            onProgress={() => console.log('Hero video progress')}
            onEmptied={() => console.log('Hero video emptied')}
            onLoadedMetadata={() => console.log('Hero video loaded metadata')}
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
