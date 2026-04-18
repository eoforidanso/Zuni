import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, BedDouble, ChevronDown } from 'lucide-react'
import RoomCard from '../components/RoomCard'
import BookingWidget from '../components/BookingWidget'
import { rooms } from '../data/rooms'

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Studio', value: 'studio' },
  { label: '1 Bedroom', value: '1bed' },
  { label: '2 Bedroom', value: '2bed' },
  { label: 'Penthouse', value: 'penthouse' },
]

const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Most Guests', value: 'capacity' },
  { label: 'Largest Size', value: 'size' },
]

function filterRoom(room, filter) {
  if (filter === 'all') return true
  if (filter === 'studio') return room.beds === 1 && room.size < 50
  if (filter === '1bed') return room.beds === 1 && room.size >= 50
  if (filter === '2bed') return room.beds === 2 && room.price < 800
  if (filter === 'penthouse') return room.price >= 800
  return true
}

export default function Rooms() {
  const [searchParams] = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeSort, setActiveSort] = useState('price-asc')
  const [maxPrice, setMaxPrice] = useState(1000)
  const [showFilters, setShowFilters] = useState(false)

  const filteredRooms = useMemo(() => {
    return rooms
      .filter((r) => filterRoom(r, activeFilter) && r.price <= maxPrice)
      .sort((a, b) => {
        if (activeSort === 'price-asc') return a.price - b.price
        if (activeSort === 'price-desc') return b.price - a.price
        if (activeSort === 'capacity') return b.capacity - a.capacity
        if (activeSort === 'size') return b.size - a.size
        return 0
      })
  }, [activeFilter, activeSort, maxPrice])

  const checkIn = searchParams.get('checkIn') || ''
  const checkOut = searchParams.get('checkOut') || ''
  const adults = searchParams.get('adults') || ''

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-28 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1920&q=80"
            alt="Rooms and suites"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase block mb-3">
            Rooms &amp; Suites
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white mb-4">
            Find Your Perfect Apartment
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            From cozy studios to panoramic penthouses — choose the space that suits your stay.
          </p>
        </div>
      </section>

      {/* Search bar */}
      <div className="bg-white border-b border-border py-6 sticky top-[61px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingWidget compact />
        </div>
      </div>

      {/* Body */}
      <section className="py-10 sm:py-16 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between mb-5 lg:hidden">
            <p className="text-muted text-sm">
              <span className="font-semibold text-charcoal">{filteredRooms.length}</span> apartment{filteredRooms.length !== 1 ? 's' : ''}
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white border border-border rounded-xl px-4 py-2.5 text-sm font-semibold text-charcoal shadow-sm hover:border-coral hover:text-coral transition-all duration-200"
            >
              <SlidersHorizontal size={14} className="text-coral" />
              Filters
              {(activeFilter !== 'all' || maxPrice !== 1000) && (
                <span className="w-5 h-5 rounded-full bg-coral text-white text-[10px] font-bold flex items-center justify-center">
                  {(activeFilter !== 'all' ? 1 : 0) + (maxPrice !== 1000 ? 1 : 0)}
                </span>
              )}
              <ChevronDown size={14} className={`transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile filter panel */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-[600px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-card p-5">
              <div className="grid grid-cols-2 gap-5">
                {/* Type filter */}
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Room Type</p>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setActiveFilter(opt.value)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                          activeFilter === opt.value ? 'bg-coral text-white' : 'bg-soft-gray text-charcoal hover:bg-coral/10'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Sort */}
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Sort By</p>
                  <select
                    value={activeSort}
                    onChange={(e) => setActiveSort(e.target.value)}
                    className="input-field text-xs py-2"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Price range */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Max Price · <span className="text-coral">₵{maxPrice}</span></p>
                <input type="range" min={300} max={1000} step={50} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-coral" />
              </div>
              {(activeFilter !== 'all' || maxPrice !== 1000) && (
                <button onClick={() => { setActiveFilter('all'); setMaxPrice(1000) }} className="mt-3 flex items-center gap-1.5 text-xs text-coral font-semibold hover:underline">
                  <X size={12} /> Clear Filters
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar filters — desktop only */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-card p-6 sticky top-32">
                <h3 className="font-semibold text-charcoal mb-5 flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-coral" />
                  Filters
                </h3>

                {/* Type filter */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
                    Room Type
                  </p>
                  <div className="space-y-2">
                    {filterOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setActiveFilter(opt.value)}
                        className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                          activeFilter === opt.value
                            ? 'bg-coral text-white'
                            : 'text-charcoal hover:bg-soft-gray'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price range */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
                    Max Price Per Night
                  </p>
                  <input
                    type="range"
                    min={300}
                    max={1000}
                    step={50}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-coral"
                  />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>₵300</span>
                    <span className="text-coral font-semibold">₵{maxPrice}</span>
                    <span>₵1,000</span>
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
                    Sort By
                  </p>
                  <select
                    value={activeSort}
                    onChange={(e) => setActiveSort(e.target.value)}
                    className="input-field text-sm"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reset */}
                {(activeFilter !== 'all' || maxPrice !== 1000) && (
                  <button
                    onClick={() => { setActiveFilter('all'); setMaxPrice(1000) }}
                    className="mt-4 w-full text-center text-sm text-coral font-semibold flex items-center justify-center gap-1.5 hover:underline"
                  >
                    <X size={13} />
                    Clear Filters
                  </button>
                )}
              </div>
            </aside>

            {/* Room grid */}
            <div className="flex-1">
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-muted text-sm">
                  Showing <span className="font-semibold text-charcoal">{filteredRooms.length}</span> apartment{filteredRooms.length !== 1 ? 's' : ''}
                  {checkIn && checkOut && (
                    <span> · {checkIn} – {checkOut}</span>
                  )}
                </p>
              </div>

              {filteredRooms.length === 0 ? (
                <div className="text-center py-20">
                  <BedDouble size={48} className="text-border mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-charcoal mb-2">No rooms match your filters</h3>
                  <p className="text-muted text-sm mb-4">Try adjusting your price range or room type.</p>
                  <button
                    onClick={() => { setActiveFilter('all'); setMaxPrice(1000) }}
                    className="btn-outline text-sm py-2.5"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
