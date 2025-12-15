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
          <Services />
          <section className="video-section">
            <div className="container">
              <div dangerouslySetInnerHTML={{__html: '<dotlottie-wc src="https://lottie.host/173cd462-1070-4bee-bbe4-ca907c535623/W80JNJewuU.lottie" style="width: 300px; height: 300px;" autoplay loop></dotlottie-wc>'}} />
            </div>
          </section>
          <Appointment />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
