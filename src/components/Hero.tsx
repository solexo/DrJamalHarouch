import { useRef, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // If autoplay blocked, play on user interaction
        const playVideo = () => {
          const silentAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IAAAAAEAAQARAAAAEAAAAAEACABkYXRhAgAAAAEA');
          silentAudio.volume = 0.01;
          silentAudio.play().then(() => {
            return video.play();
          }).catch(() => {});
          document.removeEventListener('click', playVideo);
          document.removeEventListener('touchstart', playVideo);
        };
        document.addEventListener('click', playVideo);
        document.addEventListener('touchstart', playVideo);
      });
    }
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
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hero-video-full"
            onError={(e) => console.error('Hero video error:', e)}
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
