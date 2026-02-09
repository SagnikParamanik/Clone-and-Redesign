import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "Dr. Reynolds helped me navigate one of the most difficult periods of my life. Her warmth, insight, and practical tools gave me hope when I felt lost. I am forever grateful.",
      author: "Sarah M.",
      role: "Client since 2022"
    },
    {
      text: "I was skeptical about therapy, but Dr. Reynolds made me feel heard and understood from day one. She has helped me develop healthier thought patterns and genuine self-compassion.",
      author: "James L.",
      role: "Client since 2021"
    },
    {
      text: "Working with Dr. Reynolds has been transformative. She creates a space where I can be vulnerable and honest, and her guidance has helped me make meaningful changes in my life.",
      author: "Alex K.",
      role: "Client since 2023"
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center">
          <div className="inline-block px-4 py-2 bg-white text-sage-700 rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Stories of Growth & Healing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Read what clients have shared about their therapy journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-amber-400 fill-amber-400"
                    size={18}
                  />
                ))}
              </div>

              <Quote className="text-sage-300 mb-4" size={32} />

              <p className="text-gray-700 leading-relaxed mb-6 italic flex-1">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-gray-100">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            Client testimonials have been anonymized to protect privacy.
          </p>
        </div>
      </div>
    </section>
  );
}