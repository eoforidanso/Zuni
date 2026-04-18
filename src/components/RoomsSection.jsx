import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import RoomCard from './RoomCard'
import { rooms } from '../data/rooms'

export default function RoomsSection({ limit = 4 }) {
  const displayRooms = rooms.slice(0, limit)

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-tag block mb-3">Rooms &amp; Suites</span>
            <h2 className="section-title">
              Find Your Perfect
              <br />
              <span className="text-gold">Apartment</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link to="/rooms" className="btn-outline">
              View All Rooms
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {displayRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  )
}
