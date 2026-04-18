import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import AmenitiesSection from '../components/AmenitiesSection'
import RoomsSection from '../components/RoomsSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import LocationSection from '../components/LocationSection'
import BlogSection from '../components/BlogSection'
import BookingWidget from '../components/BookingWidget'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <RoomsSection limit={4} />
      <AmenitiesSection />
      <AboutSection />
      <TestimonialsSection />
      <LocationSection />
      <BlogSection />

      {/* Bottom booking strip */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="section-tag block mb-3">Reserve Your Apartment</span>
            <h2 className="section-title mb-3">
              Book Your Stay Today
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Check real-time availability and secure your dates in minutes.
            </p>
          </div>
          <BookingWidget compact />
        </div>
      </section>
    </>
  )
}
