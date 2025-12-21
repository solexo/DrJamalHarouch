import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

function HomePage() {
  useEffect(() => {
    const checkLottie = () => {
      const lottieEl = document.querySelector('dotlottie-wc') as any;
      if (lottieEl) {
        console.log('Lottie element found:', lottieEl);
        console.log('Lottie autoplay:', lottieEl.autoplay);
        console.log('Lottie loop:', lottieEl.loop);
        console.log('Lottie currentState:', lottieEl.currentState);
        console.log('Lottie isPlaying:', lottieEl.isPlaying);
        console.log('Lottie isPaused:', lottieEl.isPaused);
        console.log('Lottie isStopped:', lottieEl.isStopped);

        // Add event listeners
        lottieEl.addEventListener('play', () => console.log('Lottie play event'));
        lottieEl.addEventListener('pause', () => console.log('Lottie pause event'));
        lottieEl.addEventListener('stop', () => console.log('Lottie stop event'));
        lottieEl.addEventListener('complete', () => console.log('Lottie complete event'));
        lottieEl.addEventListener('load', () => console.log('Lottie load event'));
        lottieEl.addEventListener('error', (e: any) => console.log('Lottie error event:', e));
      } else {
        console.log('Lottie element not found yet');
        setTimeout(checkLottie, 1000);
      }
    };
    checkLottie();
  }, []);
  return (
    <>
      <Hero />
      <About />
      <section className="scanner-section">
        <div className="container">
          <div className="scanner-content">
            <div className="scanner-image-wrapper">
              <img src="/logo.webp" alt="Scanner Radiologique" width="600" height="412" style={{width: '100%', height: 'auto', borderRadius: '10px'}} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="video-section">
        <div className="container">
          <div className="mri-content">
            <div className="mri-text">
              <h2>Imagerie par Résonance Magnétique (IRM)</h2>
              <p>
                L'IRM est une technique d'imagerie médicale non invasive qui utilise des champs magnétiques et des ondes radio pour créer des images détaillées des structures internes du corps. Elle est particulièrement utile pour diagnostiquer les problèmes neurologiques, musculaires, osseux et oncologiques.
              </p>
              <p>
                Chez Radiologie Sidi Othmane, nous utilisons des équipements IRM de dernière génération pour assurer des examens précis et confortables pour nos patients.
              </p>
            </div>
            <div className="lottie-container" dangerouslySetInnerHTML={{__html: '<dotlottie-wc src="https://lottie.host/173cd462-1070-4bee-bbe4-ca907c535623/W80JNJewuU.lottie" autoplay loop></dotlottie-wc>'}} />
          </div>
        </div>
      </section>
      <Appointment />
      <Contact />
    </>
  );
}

function DoctorsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Nos Médecins</h1>
        </div>
      </section>
      <About />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Nos Services</h1>
        </div>
      </section>
      <Services />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact</h1>
        </div>
      </section>
      <Contact />
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Politique de Confidentialité</h1>
        </div>
      </section>
      <section className="section privacy">
        <div className="container">
          <p>
            Ce site ne collecte ni ne stocke aucune donnée personnelle.
            Il se limite à fournir des informations et des liens de redirection vers des services externes (Google Maps, téléphone, WhatsApp).
          </p>
        </div>
      </section>
    </>
  );
}

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js';
    script.type = 'module';
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
