import { useState } from 'react';
import './About.css';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-wrapper">
              <img src="/scanner.webp" alt="Scanner Radiologique" style={{width: '100%', height: 'auto', borderRadius: '10px'}} onLoad={() => console.log('Scanner image loaded')} onError={() => console.error('Scanner image failed to load')} />
            </div>
          </div>

          <div className="about-text">
            <span className="section-badge">À propos du Dr. Jamal</span>
            <h2>Spécialiste en Radiologie</h2>
            <p className="lead">
              Radiologue privé à Casablanca depuis 1994, le Dr Harouch Jamal apporte une expertise
              avancée issue de formations prestigieuses en France.
            </p>

            <div className="about-details">
              <p>
                Diplômé de la faculté de médecine de Montpellier, France, le Dr Harouch Jamal est ancien praticien
                hospitalier des hôpitaux de France. Il exerce en radiologie privée à Casablanca depuis 1994.
              </p>

              <p>
                La radiologie médicale utilise des rayons X, ultrasons, IRM et autres technologies pour visualiser
                l'intérieur du corps humain. Le Dr Jamal Harouch maîtrise toutes ces techniques pour offrir des
                examens complets et non invasifs. Que ce soit pour le dépistage du cancer, le diagnostic de fractures,
                ou l'évaluation de pathologies internes, nos équipements de pointe assurent des résultats fiables.
              </p>

              <p>
                Au-delà de son expertise technique, le Dr Jamal croit en la communication claire avec les patients
                et les médecins référents. Il prend le temps d'expliquer les résultats, de répondre aux questions
                et de fournir des rapports détaillés pour une prise en charge optimale. La confiance et la transparence
                sont au cœur de notre approche.
              </p>
            </div>

            <div className="qualifications">
              <div className="qualification-item">
                <div className="qualification-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                </div>
                <div>
                  <h4>Docteur en Médecine</h4>
                  <p>Faculté de Montpellier, France</p>
                </div>
              </div>

              <div className="qualification-item">
                <div className="qualification-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h4>DIU Maladies des Seins</h4>
                  <p>Diplôme Inter-Universitaire</p>
                </div>
              </div>

              <div className="qualification-item">
                <div className="qualification-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
                <div>
                  <h4>DIU Radiologie Interventionnelle</h4>
                  <p>Générale et Vasculaire</p>
                </div>
              </div>

              <div className="qualification-item">
                <div className="qualification-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                </div>
                <div>
                  <h4>DU IRM</h4>
                  <p>Diplôme Universitaire</p>
                </div>
              </div>

              <div className="qualification-item">
                <div className="qualification-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h4>Ancien Praticien Hospitalier</h4>
                  <p>Hôpitaux de France</p>
                </div>
              </div>
            </div>

            <div className="ultrasound-demo">
              <div className="demo-container" onClick={() => setIsPlaying(true)}>
                {!isPlaying && (
                  <>
                    <img src="/sonosite-hfl50x-b_orig.webp" alt="Ultrasound Scanner" className="scanner-image" onLoad={() => console.log('Ultrasound image loaded')} onError={() => console.error('Ultrasound image failed to load')} />
                    <div className="demo-message">
                      Touchez l'appareil pour voir comment le scan fonctionne
                    </div>
                  </>
                )}
                {isPlaying && (
                  <video
                    src="/1213.webm"
                    autoPlay
                    muted
                    loop
                    className="demo-video"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
