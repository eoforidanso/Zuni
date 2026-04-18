import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Users,
  Maximize,
  Wind,
  Wifi,
  Zap,
  Utensils,
  ShieldCheck,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Phone,
} from 'lucide-react'
import { rooms } from '../data/rooms'
import BookingWidget from '../components/BookingWidget'

const amenityIconMap = {
  AC: { icon: Wind, label: 'Air Conditioning' },
  WiFi: { icon: Wifi, label: 'High-Speed WiFi' },
  'Backup Power': { icon: Zap, label: 'Backup Power' },
  Kitchen: { icon: Utensils, label: 'Full Kitchen' },
  Security: { icon: ShieldCheck, label: 'Smart Security' },
  Parking: { icon: Car, label: 'Secure Parking' },
}

const badgeColors = {
  Popular: 'bg-coral text-white',
  'Best Value': 'bg-gold text-white',
  Premium: 'bg-charcoal text-white',
}

export default function RoomDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const room = rooms.find((r) => r.id === Number(id))
  const [activeImg, setActiveImg] = useState(0)

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-charcoal mb-3">Room Not Found</h2>
          <p className="text-muted mb-6">The room you are looking for does not exist.</p>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      </div>
    )
  }

  const relatedRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3)

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-coral transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/rooms" className="hover:text-coral transition-colors">
            Rooms
          </Link>
          <span>/</span>
          <span className="text-charcoal font-medium">{room.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: main content */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="relative rounded-2xl overflow-hidden mb-4 h-80 sm:h-[420px] group">
              <img
                src={room.gallery[activeImg]}
                alt={`${room.name} - photo ${activeImg + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {room.badge && (
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[room.badge] || 'bg-charcoal text-white'}`}>
                  {room.badge}
                </span>
              )}
              {/* Arrows */}
              {room.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImg((a) => (a - 1 + room.gallery.length) % room.gallery.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setActiveImg((a) => (a + 1) % room.gallery.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3 mb-8">
              {room.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-150 ${
                    i === activeImg ? 'ring-2 ring-coral ring-offset-2' : 'opacity-60 hover:opacity-90'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Room info */}
            <div className="bg-white rounded-2xl shadow-card p-7 mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-coral font-semibold text-sm mb-1">{room.tagline}</p>
                  <h1 className="font-serif text-3xl font-semibold text-charcoal">{room.name}</h1>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl font-bold text-charcoal">
                    {room.currency}{room.price.toLocaleString()}
                  </div>
                  <div className="text-muted text-sm">per night</div>
                </div>
              </div>

              {/* Quick specs */}
              <div className="flex flex-wrap gap-5 py-5 border-y border-border mb-5">
                {[
                  { icon: BedDouble, label: `${room.beds} Bed${room.beds !== 1 ? 's' : ''} (${room.bedType})` },
                  { icon: Bath, label: `${room.baths} Bathroom${room.baths !== 1 ? 's' : ''}` },
                  { icon: Users, label: `Sleeps up to ${room.capacity}` },
                  { icon: Maximize, label: `${room.size} m²` },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-charcoal">
                    <Icon size={16} className="text-coral" />
                    {label}
                  </div>
                ))}
              </div>

              <p className="text-muted leading-relaxed mb-6">{room.longDescription}</p>

              {/* Highlights */}
              <h3 className="font-semibold text-charcoal mb-3">Room Highlights</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {room.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-charcoal">
                    <Check size={14} className="text-coral flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <h3 className="font-semibold text-charcoal mb-3">Included Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {room.amenities.map((amenity) => {
                  const entry = amenityIconMap[amenity]
                  if (!entry) return null
                  const Icon = entry.icon
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-2.5 bg-soft-gray rounded-xl px-4 py-3"
                    >
                      <Icon size={16} className="text-coral flex-shrink-0" />
                      <span className="text-sm font-medium text-charcoal">{entry.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-2xl shadow-card p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold text-charcoal">4.9</div>
                  <div className="flex justify-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <div className="text-xs text-muted mt-0.5">Exceptional</div>
                </div>
                <div className="flex-1 space-y-2">
                  {['Cleanliness', 'Comfort', 'Location', 'Value', 'Communication'].map((cat, i) => {
                    const val = [98, 95, 97, 90, 99][i]
                    return (
                      <div key={cat} className="flex items-center gap-3">
                        <span className="text-xs text-muted w-28 flex-shrink-0">{cat}</span>
                        <div className="flex-1 h-1.5 bg-soft-gray rounded-full overflow-hidden">
                          <div className="h-full bg-coral rounded-full" style={{ width: `${val}%` }} />
                        </div>
                        <span className="text-xs font-medium text-charcoal w-7 text-right">{val}%</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: booking widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">
              <BookingWidget className="!bg-white !rounded-2xl shadow-luxury" />

              {/* Contact */}
              <div className="bg-charcoal rounded-2xl p-6">
                <p className="text-white/70 text-sm mb-3">Need help booking? Call us directly.</p>
                <a
                  href="tel:+233538739877"
                  className="flex items-center gap-2 text-white font-semibold hover:text-gold-light transition-colors duration-200"
                >
                  <Phone size={16} className="text-coral" />
                  +233 538 739 877
                </a>
              </div>

              {/* Location note */}
              <div className="bg-soft-gray rounded-2xl p-5 flex items-start gap-3">
                <MapPin size={18} className="text-coral flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-charcoal mb-0.5">Zuni Apartments</p>
                  <p className="text-xs text-muted">
                    Plot No. 81, Block B, Dominase North, Sector 17, Sunyani, Ghana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related rooms */}
        {relatedRooms.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRooms.map((r) => (
                <Link key={r.id} to={`/rooms/${r.id}`} className="card group">
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">{r.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-muted text-sm">{r.capacity} guests · {r.size} m²</span>
                      <span className="font-serif font-bold text-coral">{r.currency}{r.price.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
