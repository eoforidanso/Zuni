import { Link } from 'react-router-dom'
import { Wind, Wifi, Zap, Utensils, ShieldCheck, Car, Users, BedDouble, Bath, ArrowRight } from 'lucide-react'

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
    <div className="card group">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-card-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Badge */}
        {badge && (
          <span className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[badge] || 'bg-charcoal text-white'}`}>
            {badge}
          </span>
        )}
        {/* Availability */}
        {!available && (
          <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
            <span className="bg-white text-charcoal font-semibold text-sm px-4 py-2 rounded-full">
              Not Available
            </span>
          </div>
        )}
        {/* Price on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/95 text-charcoal font-serif font-bold text-lg px-3 py-1.5 rounded-lg shadow-lg">
            {currency}{price.toLocaleString()}
            <span className="text-xs font-sans font-normal text-muted ml-1">/night</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-xs text-muted">
            <BedDouble size={13} className="text-coral" />
            {beds} Bed{beds !== 1 ? 's' : ''}
          </span>
          <span className="text-muted/40">·</span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Bath size={13} className="text-coral" />
            {baths} Bath{baths !== 1 ? 's' : ''}
          </span>
          <span className="text-muted/40">·</span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Users size={13} className="text-coral" />
            Up to {capacity}
          </span>
          <span className="text-muted/40">·</span>
          <span className="text-xs text-muted">{size} m²</span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">{name}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Amenity icons */}
        <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border">
          {amenities.slice(0, 6).map((amenity) => {
            const Icon = amenityIconMap[amenity]
            return Icon ? (
              <div key={amenity} className="amenity-badge" title={amenity}>
                <Icon size={15} className="text-muted" />
              </div>
            ) : null
          })}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-serif text-2xl font-bold text-charcoal">
              {currency}{price.toLocaleString()}
            </span>
            <span className="text-muted text-sm ml-1">/night</span>
          </div>
          <Link
            to={`/rooms/${id}`}
            className="btn-primary py-2.5 px-5 text-sm"
          >
            Book Now
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
