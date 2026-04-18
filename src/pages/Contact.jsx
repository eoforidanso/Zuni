import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ContactSection from '../components/ContactSection'
import LocationSection from '../components/LocationSection'

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
            alt="Contact Zuni Apartments"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase block mb-3">
            Contact Us
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white mb-4">
            We&apos;re Here to Help
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Reach out to our friendly team for bookings, enquiries, or anything else. We respond
            within 2 business hours.
          </p>
        </div>
      </section>

      <ContactSection />
      <LocationSection />

      {/* FAQ teaser */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-semibold text-charcoal mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted mb-6 text-sm">
            Find quick answers to common questions about booking, check-in, amenities, and more.
          </p>
          <div className="space-y-3 text-left">
            {[
              {
                q: 'What time is check-in and check-out?',
                a: 'Standard check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be arranged subject to availability.',
              },
              {
                q: 'Is breakfast included?',
                a: 'Our apartments feature fully equipped kitchens so you can prepare your own meals. We do not currently offer breakfast service, but we can recommend great local eateries nearby.',
              },
              {
                q: 'Are long-stay discounts available?',
                a: 'Yes! We offer discounted weekly and monthly rates. Please contact us directly to discuss your needs and we will tailor a package for you.',
              },
              {
                q: 'Is secure parking available?',
                a: 'Yes, all apartments include access to our secure on-site parking facility at no extra charge.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="bg-white rounded-xl shadow-card p-5 group">
                <summary className="font-semibold text-charcoal text-sm cursor-pointer list-none flex items-center justify-between">
                  {q}
                  <span className="text-coral ml-3 flex-shrink-0 text-lg leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="text-muted text-sm leading-relaxed mt-3 pt-3 border-t border-border">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
