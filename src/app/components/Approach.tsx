import { CheckCircle2 } from 'lucide-react';

export function Approach() {
  const principles = [
    {
      title: 'Evidence-Based',
      description: 'Utilizing proven therapeutic modalities including CBT, DBT, and mindfulness-based interventions.'
    },
    {
      title: 'Collaborative',
      description: 'You are the expert on your life. Together, we will co-create goals and strategies that resonate with you.'
    },
    {
      title: 'Holistic',
      description: 'Addressing the interconnected aspects of your mental, emotional, and physical well-being.'
    },
    {
      title: 'Culturally Sensitive',
      description: 'Honoring your unique identity, background, and lived experiences with respect and understanding.'
    }
  ];

  return (
    <section id="approach" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-sage-50 text-sage-700 rounded-full text-sm font-medium">
              My Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Therapy Tailored to You
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              My therapeutic approach is integrative and personalized. I draw from multiple 
              evidence-based modalities to create a treatment plan that aligns with your goals, 
              values, and learning style.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you prefer structured, skill-based work or deeper exploratory conversations, 
              we will find the right balance for you.
            </p>

            {/* Principles */}
            <div className="space-y-4 pt-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-sage-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-sage-200 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1597824295725-3bc5dc49f4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMHBsYW50cyUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDY2NjMxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mindfulness and wellness approach"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-4xl font-bold text-sage-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-4xl font-bold text-sage-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
