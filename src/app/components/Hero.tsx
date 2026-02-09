import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sage-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-sage-100 text-sage-800 rounded-full text-sm font-medium">
              Licensed Clinical Psychologist • San Francisco, CA
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              Compassionate Therapy for Anxiety, Depression & Life Transitions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find clarity, build resilience, and rediscover your sense of self in a safe, 
              supportive environment. Specializing in evidence-based therapy for adults navigating 
              challenges in life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
              >
                Schedule Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/5 transition-all"
              >
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-8 pt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                In-Person & Telehealth
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                Evening Appointments
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 bg-sage-200 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1758274539654-23fa349cc090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjB3b21hbiUyMG5hdHVyZXxlbnwxfHx8fDE3NzA2NjYzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Peaceful therapy environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
