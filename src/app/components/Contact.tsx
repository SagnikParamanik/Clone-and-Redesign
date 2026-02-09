import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    alert('Thank you for reaching out! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-sage-50 text-sage-700 rounded-full text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-gray-600">
            Reach out today to schedule your free 15-minute consultation. 
            I typically respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-sage-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:+14155551234" className="text-sage-600 hover:text-sage-700">
                      (415) 555-1234
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Please leave a voicemail if I am with a client
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-sage-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:dr.maya@reynoldstherapy.com" className="text-sage-600 hover:text-sage-700">
                      dr.maya@reynoldstherapy.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      I respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-sage-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office Location</div>
                    <p className="text-gray-600">
                      2500 Pacific Avenue, Suite 201<br />
                      San Francisco, CA 94115
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      In-person & telehealth available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sage-50 rounded-3xl p-8">
              <h4 className="text-xl font-serif text-gray-900 mb-4">
                What to Expect
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Free 15-minute consultation to discuss your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Confidential and judgment-free communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prompt response to all inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>No obligation—just a conversation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-sage-50 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all resize-none"
                  placeholder="Tell me a bit about what brings you to therapy..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to our privacy policy. 
                Your information is confidential and secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
