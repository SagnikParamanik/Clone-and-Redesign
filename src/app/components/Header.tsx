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
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-serif text-primary"
            >
              Dr. Maya Reynolds
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
              className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('approach')} className="text-gray-700 hover:text-primary transition-colors text-left">
                Approach
              </button>
              <button onClick={() => scrollToSection('office')} className="text-gray-700 hover:text-primary transition-colors text-left">
                Our Office
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-primary transition-colors text-left">
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
        )}
      </nav>
    </header>
  );
}
