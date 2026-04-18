import { Wind, Wifi, Zap, Utensils, ShieldCheck, Car, Tv, Users } from 'lucide-react'

const amenities = [
  {
    icon: Wind,
    name: 'Air Conditioning',
    description:
      'Energy-efficient, individually controlled air conditioners in every room for your perfect temperature.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wifi,
    name: 'High-Speed WiFi',
    description:
      'Reliable fibre-optic internet throughout the property — perfect for remote work or streaming.',
    color: 'bg-teal/10 text-teal',
  },
  {
    icon: Zap,
    name: 'Backup Power',
    description:
      'A standby generator and solar system ensure uninterrupted power supply during any outage.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Utensils,
    name: 'Fully Fitted Kitchen',
    description:
      'Each apartment features gas/electric hobs, a refrigerator, microwave, and all cooking essentials.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: ShieldCheck,
    name: 'Smart Security',
    description:
      '24/7 CCTV surveillance, smart access control, and trained on-site security personnel.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Car,
    name: 'Secure Parking',
    description:
      'Ample secure on-site parking for all residents and guests, monitored around the clock.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Tv,
    name: 'Smart Television',
    description:
      'Premium Smart TVs with international channels, streaming apps, and crystal-clear display.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Users,
    name: '24/7 Concierge',
    description:
      'Our friendly team is available around the clock to assist with any request or need.',
    color: 'bg-coral/10 text-coral',
  },
]

export default function AmenitiesSection() {
  return (
    <section className="py-24 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag block mb-3">World-Class Amenities</span>
          <h2 className="section-title mb-4">
            Everything You Need,
            <br />
            <span className="text-gold">Thoughtfully Provided</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            At Zuni Apartments, we believe genuine comfort goes beyond four walls. Every amenity
            is curated to make your stay effortless and memorable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-charcoal mb-2 text-base">{item.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
