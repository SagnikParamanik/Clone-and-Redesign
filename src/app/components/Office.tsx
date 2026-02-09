import { MapPin, Clock, Shield } from 'lucide-react';

export function Office() {
  return (
    <section id="office" className="py-24 px-4 sm:px-6 lg:px-8 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white text-sage-700 rounded-full text-sm font-medium mb-4">
            Our Office
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            A Calm Space for Healing
          </h2>
          <p className="text-xl text-gray-600">
            Step into a warm, private environment designed to help you feel safe, 
            comfortable, and ready to do meaningful work.
          </p>
        </div>

        {/* Office Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="aspect-[4/3] bg-sage-200 rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1698373890183-ae3943362fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbiUyMGNhbG0lMjByb29tfGVufDF8fHx8MTc3MDY2NjMxNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Calm therapy room with comfortable seating"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] bg-sage-200 rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1637580681839-6e3ed197ca93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0aGVyYXB5JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNjY2MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern therapy office interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Office Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center mb-4">
              <MapPin className="text-sage-600" size={24} />
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3">
              Convenient Location
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Located in the heart of San Francisco's Pacific Heights neighborhood, 
              easily accessible by public transit and with street parking available.
            </p>
            <div className="text-sm text-sage-700 font-medium">
              2500 Pacific Avenue, Suite 201<br />
              San Francisco, CA 94115
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center mb-4">
              <Clock className="text-sage-600" size={24} />
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I offer both in-person and telehealth appointments, including evening hours 
              to accommodate busy schedules.
            </p>
            <div className="text-sm text-gray-700">
              <div className="mb-1">Monday - Thursday: 9am - 7pm</div>
              <div className="mb-1">Friday: 9am - 5pm</div>
              <div>Weekend: By appointment</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center mb-4">
              <Shield className="text-sage-600" size={24} />
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3">
              Privacy & Comfort
            </h3>
            <p className="text-gray-600 leading-relaxed">
              My office features a private entrance, soundproofing, comfortable seating, 
              natural light, and a calming aesthetic designed to help you feel at ease.
            </p>
          </div>
        </div>

        {/* Office Description */}
        <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              The therapy space is intentionally designed to feel warm and inviting—not clinical. 
              You will find soft lighting, comfortable seating, plants, and tasteful artwork that 
              creates a sense of calm. Whether you are meeting in person or via telehealth, 
              my priority is creating an environment where you feel safe to be yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
