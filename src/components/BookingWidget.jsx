import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, Users, Home, Search, Minus, Plus } from 'lucide-react'

const today = new Date().toISOString().split('T')[0]
const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

export default function BookingWidget({ className = '', compact = false }) {
  const navigate = useNavigate()
  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(tomorrow)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)
  const [showGuests, setShowGuests] = useState(false)

  const totalGuests = adults + children

  function handleSearch(e) {
    e.preventDefault()
    navigate(
      `/rooms?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&rooms=${rooms}`
    )
  }

  function Counter({ value, onChange, min = 0, label }) {
    return (
      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-charcoal">{label}</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onChange(Math.max(min, value - 1))}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted hover:border-coral hover:text-coral transition-colors duration-150"
          >
            <Minus size={12} />
          </button>
          <span className="text-sm font-semibold w-4 text-center">{value}</span>
          <button
            type="button"
            onClick={() => onChange(value + 1)}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted hover:border-coral hover:text-coral transition-colors duration-150"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>
    )
  }

  if (compact) {
    return (
      <form
        onSubmit={handleSearch}
        className={`bg-white rounded-2xl shadow-luxury p-5 ${className}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Check-in */}
          <div>
            <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
              Check In
            </label>
            <div className="relative">
              <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-coral" />
              <input
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className="input-field pl-8 text-sm"
              />
            </div>
          </div>
          {/* Check-out */}
          <div>
            <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
              Check Out
            </label>
            <div className="relative">
              <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-coral" />
              <input
                type="date"
                value={checkOut}
                min={checkIn || today}
                onChange={(e) => setCheckOut(e.target.value)}
                className="input-field pl-8 text-sm"
              />
            </div>
          </div>
          {/* Guests */}
          <div className="relative">
            <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
              Guests &amp; Rooms
            </label>
            <button
              type="button"
              onClick={() => setShowGuests(!showGuests)}
              className="input-field text-sm flex items-center gap-2 text-left"
            >
              <Users size={14} className="text-coral flex-shrink-0" />
              <span>
                {totalGuests} Guest{totalGuests !== 1 ? 's' : ''}, {rooms} Room{rooms !== 1 ? 's' : ''}
              </span>
            </button>
            {showGuests && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-luxury border border-border p-4 z-20 min-w-[220px]">
                <Counter value={adults} onChange={setAdults} min={1} label="Adults" />
                <Counter value={children} onChange={setChildren} min={0} label="Children" />
                <Counter value={rooms} onChange={setRooms} min={1} label="Rooms" />
                <button
                  type="button"
                  onClick={() => setShowGuests(false)}
                  className="mt-2 w-full text-center text-xs font-semibold text-coral"
                >
                  Done
                </button>
              </div>
            )}
          </div>
          {/* Search */}
          <div className="flex items-end">
            <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
              <Search size={15} />
              Check Availability
            </button>
          </div>
        </div>
      </form>
    )
  }

  // Hero variant — dark/glass style
  return (
    <form
      onSubmit={handleSearch}
      className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-luxury p-6 ${className}`}
    >
      <h3 className="font-serif text-lg font-semibold text-charcoal mb-5">Book Your Stay</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Check-in */}
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
            <Calendar size={11} className="inline mr-1 text-coral" />
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => setCheckIn(e.target.value)}
            className="input-field text-sm"
          />
        </div>
        {/* Check-out */}
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
            <Calendar size={11} className="inline mr-1 text-coral" />
            Check Out
          </label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => setCheckOut(e.target.value)}
            className="input-field text-sm"
          />
        </div>
        {/* Adults */}
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
            <Users size={11} className="inline mr-1 text-coral" />
            Adults
          </label>
          <div className="flex items-center gap-3 border border-border rounded-lg px-4 py-3 bg-white">
            <button
              type="button"
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted hover:border-coral hover:text-coral transition-colors duration-150"
            >
              <Minus size={11} />
            </button>
            <span className="flex-1 text-center text-sm font-semibold">{adults}</span>
            <button
              type="button"
              onClick={() => setAdults(adults + 1)}
              className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted hover:border-coral hover:text-coral transition-colors duration-150"
            >
              <Plus size={11} />
            </button>
          </div>
        </div>
        {/* Rooms */}
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
            <Home size={11} className="inline mr-1 text-coral" />
            Rooms
          </label>
          <div className="flex items-center gap-3 border border-border rounded-lg px-4 py-3 bg-white">
            <button
              type="button"
              onClick={() => setRooms(Math.max(1, rooms - 1))}
              className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted hover:border-coral hover:text-coral transition-colors duration-150"
            >
              <Minus size={11} />
            </button>
            <span className="flex-1 text-center text-sm font-semibold">{rooms}</span>
            <button
              type="button"
              onClick={() => setRooms(rooms + 1)}
              className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted hover:border-coral hover:text-coral transition-colors duration-150"
            >
              <Plus size={11} />
            </button>
          </div>
        </div>
      </div>
      <button type="submit" className="btn-primary w-full justify-center py-3.5">
        <Search size={16} />
        Check Availability
      </button>
      <p className="text-center text-xs text-muted mt-3">
        No booking fees · Free cancellation within 24 hours
      </p>
    </form>
  )
}
