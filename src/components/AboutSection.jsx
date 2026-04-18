import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const stats = [
  { label: 'Reliability & Cleanliness', value: 93 },
  { label: 'Comfort & Modern Amenities', value: 90 },
  { label: 'Safety & Peace of Mind', value: 95 },
]

const featureList = [
  'Fully furnished & move-in ready apartments',
  'Professional housekeeping & maintenance',
  'Strategic location near key facilities',
  'Short-stay, long-stay & monthly rates',
  'Pet-friendly options available',
  'Dedicated 24/7 guest support',
]

export default function AboutSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
                    alt="Zuni Apartments building exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-40">
                  <img
                    src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=600&q=80"
                    alt="Zuni Apartments lounge area"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="rounded-2xl overflow-hidden h-40">
                  <img
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80"
                    alt="Zuni Apartments kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=600&q=80"
                    alt="Zuni Apartments bedroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-luxury px-6 py-4 text-center min-w-[180px]">
              <div className="font-serif text-3xl font-bold text-coral">3+</div>
              <div className="text-muted text-sm font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Text content */}
          <div className="pt-6 lg:pt-0">
            <span className="section-tag block mb-3">About Zuni Apartments</span>
            <h2 className="section-title mb-5">
              Most Trusted &amp; Rated
              <br />
              <span className="text-gold">Apartment in Sunyani</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Situated in a conveniently accessible and thriving neighborhood of Sunyani, Zuni
              Apartments enjoys close proximity to major attractions — educational institutions,
              fine dining, shopping areas, and transit routes connecting residents to the wider Bono
              Region.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Our mission is to offer well-designed, fully furnished apartments that deliver comfort,
              security, and exceptional service — ensuring every resident and guest experiences
              unparalleled value and hospitality.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {featureList.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-coral flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">{feature}</span>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="space-y-4 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-charcoal">{stat.label}</span>
                    <span className="text-sm font-semibold text-coral">{stat.value}%</span>
                  </div>
                  <div className="h-2 bg-soft-gray rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-coral to-gold rounded-full transition-all duration-1000"
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
