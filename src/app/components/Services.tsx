import { Brain, HeartCrack, Sparkles } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: 'Anxiety & Stress Management',
      description:
        'Learn evidence-based techniques to manage overwhelming worry, panic attacks, and chronic stress. Develop coping strategies that help you regain control and find peace in your daily life.',
      features: ['CBT Techniques', 'Mindfulness Practices', 'Exposure Therapy', 'Relaxation Training'],
    },
    {
      icon: HeartCrack,
      title: 'Depression & Mood Disorders',
      description:
        'Work through feelings of sadness, hopelessness, and disconnection. Together we will identify patterns, challenge negative thoughts, and build a path toward renewed energy and meaning.',
      features: ['Cognitive Restructuring', 'Behavioral Activation', 'Grief Processing', 'Lifestyle Integration'],
    },
    {
      icon: Sparkles,
      title: 'Life Transitions & Identity',
      description:
        'Navigate major life changes—career shifts, relationship transitions, identity exploration, or personal growth. Therapy provides clarity and support during times of transformation.',
      features: ['Career Guidance', 'Relationship Work', 'Identity Exploration', 'Goal Setting'],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-sage-700">
            Therapy Services
          </div>
          <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
            Specialized Support for Your Unique Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Evidence-based therapy tailored to your needs, delivered with warmth and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100">
                <service.icon className="text-sage-600" size={28} />
              </div>

              <h3 className="mb-4 text-2xl font-serif text-gray-900">
                {service.title}
              </h3>

              <p className="mb-6 flex-1 text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-sage-500"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Not sure which service is right for you?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-primary px-8 py-4 text-white transition-all hover:bg-primary/90"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}