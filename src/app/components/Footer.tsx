import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif mb-4">Dr. Maya Reynolds</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Licensed Clinical Psychologist specializing in anxiety, depression, 
              and life transitions. Serving San Francisco with compassionate, 
              evidence-based therapy.
            </p>
            <div className="flex items-center gap-2 text-sage-300">
              <Heart size={16} fill="currentColor" />
              <span className="text-sm">LGBTQ+ Affirming • Culturally Sensitive</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  My Approach
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+14155551234" className="hover:text-white transition-colors">
                  (415) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:dr.maya@reynoldstherapy.com" className="hover:text-white transition-colors">
                  dr.maya@reynoldstherapy.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-sm">
                  2500 Pacific Avenue, Suite 201<br />
                  San Francisco, CA 94115
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Dr. Maya Reynolds, Ph.D. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            PSY 12345 • Licensed Clinical Psychologist, State of California
          </p>
        </div>
      </div>
    </footer>
  );
}
