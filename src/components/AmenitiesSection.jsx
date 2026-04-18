import { Wind, Wifi, Zap, Utensils, ShieldCheck, Car, Tv, Users } from 'lucide-react'

const amenities = [
  {
    icon: Wind,
    name: 'Air Conditioning',
    description:
      'Energy-efficient, individually controlled air conditioners in every room for your perfect temperature.',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
  },
  {
    icon: Wifi,
    name: 'High-Speed WiFi',
    description:
      'Reliable fibre-optic internet throughout the property — perfect for remote work or streaming.',
    iconBg: 'bg-teal/15',
    iconColor: 'text-teal',
  },
  {
    icon: Zap,
    name: 'Backup Power',
    description:
      'A standby generator and solar system ensure uninterrupted power supply during any outage.',
    iconBg: 'bg-gold/15',
    iconColor: 'text-gold',
  },
  {
    icon: Utensils,
    name: 'Fully Fitted Kitchen',
    description:
      'Each apartment features gas/electric hobs, a refrigerator, microwave, and all cooking essentials.',
    iconBg: 'bg-coral/15',
    iconColor: 'text-coral',
  },
  {
    icon: ShieldCheck,
    name: 'Smart Security',
    description:
      '24/7 CCTV surveillance, smart access control, and trained on-site security personnel.',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
  },
  {
    icon: Car,
    name: 'Secure Parking',
    description:
      'Ample secure on-site parking for all residents and guests, monitored around the clock.',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
  },
  {
    icon: Tv,
    name: 'Smart Television',
    description:
      'Premium Smart TVs with international channels, streaming apps, and crystal-clear display.',
    iconBg: 'bg-pink-500/15',
    iconColor: 'text-pink-400',
  },
  {
    icon: Users,
    name: '24/7 Concierge',
    description:
      'Our friendly team is available around the clock to assist with any request or need.',
    iconBg: 'bg-coral/15',
    iconColor: 'text-coral-light',
  },
]

export default function AmenitiesSection() {
  return (
    <section className="py-24 bg-warm-gradient relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-gold/6 top-0 right-0" />
      <div className="blob w-64 h-64 bg-coral/6 bottom-0 left-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-xs tracking-[0.18em] uppercase block mb-3">
            World-Class Amenities
          </span>
          <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Everything You Need,
            <br />
            <span className="text-gold-light">Thoughtfully Provided</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            At Zuni Apartments, we believe genuine comfort goes beyond four walls. Every amenity
            is curated to make your stay effortless and memorable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className="glass-charcoal gradient-border rounded-2xl p-6 group hover:scale-[1.03] hover:shadow-glass transition-all duration-300 shimmer-overlay"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                >
                  <Icon size={22} className={item.iconColor} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-base">{item.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
