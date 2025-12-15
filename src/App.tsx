import { useEffect, useRef } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (video.duration) {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Progress from 0 (section entering from bottom) to 1 (section exiting at top)
            const progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
            const clampedProgress = Math.max(0, Math.min(1, progress));
            video.currentTime = clampedProgress * video.duration;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <section ref={sectionRef} className="video-section">
            <div className="container">
              <video
                ref={videoRef}
                muted
                playsInline
                className="scroll-video"
                onLoadedData={() => console.log('Bones video loaded')}
                onPlay={() => console.log('Bones video playing')}
                onError={(e) => console.log('Bones video error:', e)}
              >
                <source src="/bones.webm" type="video/webm" />
              </video>
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
