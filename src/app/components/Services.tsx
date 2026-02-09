import { Brain, HeartCrack, Sparkles } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: 'Anxiety & Stress Management',
      description: 'Learn evidence-based techniques to manage overwhelming worry, panic attacks, and chronic stress. Develop coping strategies that help you regain control and find peace in your daily life.',
      features: ['CBT Techniques', 'Mindfulness Practices', 'Exposure Therapy', 'Relaxation Training']
    },
    {
      icon: HeartCrack,
      title: 'Depression & Mood Disorders',
      description: 'Work through feelings of sadness, hopelessness, and disconnection. Together we will identify patterns, challenge negative thoughts, and build a path toward renewed energy and meaning.',
      features: ['Cognitive Restructuring', 'Behavioral Activation', 'Grief Processing', 'Lifestyle Integration']
    },
    {
      icon: Sparkles,
      title: 'Life Transitions & Identity',
      description: 'Navigate major life changes—career shifts, relationship transitions, identity exploration, or personal growth. Therapy provides clarity and support during times of transformation.',
      features: ['Career Guidance', 'Relationship Work', 'Identity Exploration', 'Goal Setting']
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white text-sage-700 rounded-full text-sm font-medium mb-4">
            Therapy Services
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Specialized Support for Your Unique Journey
          </h2>
          <p className="text-xl text-gray-600">
            Evidence-based therapy tailored to your needs, delivered with warmth and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="text-sage-600" size={28} />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-sage-500 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Not sure which service is right for you?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}