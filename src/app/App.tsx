import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Office } from './components/Office';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Testimonials />
        <FAQ />
        <Office />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
