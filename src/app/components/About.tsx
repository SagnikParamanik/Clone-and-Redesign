import { Award, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-sage-200 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565828052994-aa2276b131a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0aGVyYXBpc3QlMjB3b21hbiUyMG9mZmljZXxlbnwxfHx8fDE3NzA2NjYzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <Award className="text-sage-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">15+ Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-sage-50 text-sage-700 rounded-full text-sm font-medium">
              About Dr. Reynolds
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              A Partner in Your Journey to Wellness
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I am Dr. Maya Reynolds, a licensed clinical psychologist with over 15 years of experience 
                helping individuals navigate anxiety, depression, trauma, and major life transitions. 
                My practice is rooted in compassion, authenticity, and evidence-based approaches.
              </p>
              <p>
                I believe therapy is a collaborative process—a safe space where you can explore your thoughts, 
                emotions, and patterns without judgment. My approach integrates Cognitive Behavioral Therapy (CBT), 
                mindfulness practices, and psychodynamic techniques tailored to your unique needs.
              </p>
              <p>
                Whether you are facing relationship challenges, career stress, identity questions, or simply 
                feeling stuck, I am here to help you build the tools and insights needed to create meaningful change.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-sage-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Licensed</div>
                  <div className="text-sm text-gray-600">Ph.D. Clinical Psychology</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-sage-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Specialized</div>
                  <div className="text-sm text-gray-600">Anxiety & Depression</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-sage-600" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Inclusive</div>
                  <div className="text-sm text-gray-600">LGBTQ+ Affirming</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
