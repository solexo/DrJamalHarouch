import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <section className="scanner-section">
            <div className="container">
              <div className="scanner-content">
                <div className="scanner-image-wrapper">
                  <img src="/scanner.webp" alt="Scanner Radiologique" style={{width: '100%', height: 'auto', borderRadius: '10px'}} onLoad={() => console.log('Scanner image loaded')} onError={() => console.error('Scanner image failed to load')} />
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
          <section id="privacy" className="section privacy">
            <div className="container">
              <h2>Politique de Confidentialité</h2>
              <p>
                Ce site ne collecte ni ne stocke aucune donnée personnelle.
                Il se limite à fournir des informations et des liens de redirection vers des services externes (Google Maps, téléphone, WhatsApp).
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
