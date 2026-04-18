import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import AmenitiesSection from '../components/AmenitiesSection'
import RoomsSection from '../components/RoomsSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import LocationSection from '../components/LocationSection'
import BlogSection from '../components/BlogSection'
import BookingWidget from '../components/BookingWidget'
import GallerySection from '../components/GallerySection'
import ScrollReveal from '../components/ScrollReveal'
import BackToTop from '../components/BackToTop'
import FloatingCTA from '../components/FloatingCTA'

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollReveal direction="up">
        <StatsSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <RoomsSection limit={4} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <GallerySection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <AmenitiesSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <LocationSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <BlogSection />
      </ScrollReveal>

      {/* Bottom booking strip */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-8">
              <span className="section-tag block mb-3">Reserve Your Apartment</span>
              <h2 className="section-title mb-3">Book Your Stay Today</h2>
              <p className="section-subtitle mx-auto text-center">
                Check real-time availability and secure your dates in minutes.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <BookingWidget compact />
          </ScrollReveal>
        </div>
      </section>

      {/* Floating UI elements */}
      <FloatingCTA />
      <BackToTop />
    </>
  )
}
