import { Link } from 'react-router-dom'
import { Wind, Wifi, Zap, Utensils, ShieldCheck, Car, Users, BedDouble, Bath, ArrowRight, Star } from 'lucide-react'

const amenityIconMap = {
  AC: Wind,
  WiFi: Wifi,
  'Backup Power': Zap,
  Kitchen: Utensils,
  Security: ShieldCheck,
  Parking: Car,
}

const badgeColors = {
  Popular: 'bg-coral text-white',
  'Best Value': 'bg-gold text-white',
  Premium: 'bg-charcoal text-white',
}

export default function RoomCard({ room }) {
  const { id, name, description, price, currency, capacity, beds, baths, size, image, amenities, badge, available } = room

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-float transition-all duration-400 hover:-translate-y-2">
      {/* ── Image with glass overlay ── */}
      <div className="relative overflow-hidden h-60">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
          style={{ transitionDuration: '600ms' }}
        />

        {/* Always-visible gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

        {/* Always-visible room info glass pill at bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <p className="text-white font-serif font-semibold text-base leading-tight drop-shadow-sm">{name}</p>
            <p className="text-white/70 text-xs mt-0.5">{size} m² · Up to {capacity} guests</p>
          </div>
          <div className="text-right">
            <span className="font-serif text-xl font-bold text-white">{currency}{price.toLocaleString()}</span>
            <span className="text-white/60 text-xs block">/night</span>
          </div>
        </div>

        {/* Badge */}
        {badge && (
          <span className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[badge] || 'bg-charcoal text-white'}`}>
            {badge}
          </span>
        )}

        {/* Not available overlay */}
        {!available && (
          <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
            <span className="bg-white text-charcoal font-semibold text-sm px-4 py-2 rounded-full">
              Not Available
            </span>
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="p-5">
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-xs text-muted">
            <BedDouble size={12} className="text-coral" />
            {beds} Bed{beds !== 1 ? 's' : ''}
          </span>
          <span className="text-muted/40">·</span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Bath size={12} className="text-coral" />
            {baths} Bath{baths !== 1 ? 's' : ''}
          </span>
          <span className="text-muted/40">·</span>
          <div className="ml-auto flex items-center gap-1 text-xs text-gold font-semibold">
            <Star size={11} className="fill-gold text-gold" />
            4.9
          </div>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Amenity icons */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/60">
          {amenities.slice(0, 6).map((amenity) => {
            const Icon = amenityIconMap[amenity]
            return Icon ? (
              <div key={amenity} title={amenity} className="w-7 h-7 rounded-lg bg-soft-gray flex items-center justify-center">
                <Icon size={13} className="text-muted" />
              </div>
            ) : null
          })}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-serif text-xl font-bold text-charcoal">
              {currency}{price.toLocaleString()}
            </span>
            <span className="text-muted text-xs ml-1">/night</span>
          </div>
          <Link
            to={`/rooms/${id}`}
            className="btn-primary py-2.5 px-5 text-sm"
          >
            Book Now
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}
