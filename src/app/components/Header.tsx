import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-serif text-primary whitespace-nowrap"
            >
              Dr. Maya Reynolds
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('approach')} className="text-gray-700 hover:text-primary transition-colors">
              Approach
            </button>
            <button onClick={() => scrollToSection('office')} className="text-gray-700 hover:text-primary transition-colors">
              Our Office
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-primary transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-gray-100">
            <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('approach')} className="text-left text-gray-700 hover:text-primary transition-colors">
              Approach
            </button>
            <button onClick={() => scrollToSection('office')} className="text-left text-gray-700 hover:text-primary transition-colors">
              Our Office
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-primary transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all text-center"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}