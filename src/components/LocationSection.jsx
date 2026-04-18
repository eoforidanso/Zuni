import { MapPin, Star, Wifi, Shield } from 'lucide-react'

export default function LocationSection() {
  return (
    <section className="py-24 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag block mb-3">Our Location</span>
          <h2 className="section-title mb-4">
            At the Heart of
            <br />
            <span className="text-gold">Sunyani, Ghana</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Strategically located for easy access to Sunyani's best dining, shopping, educational
            institutions, and transport links across the Bono Region.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map embed */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-luxury h-96 bg-soft-gray">
            <iframe
              title="Zuni Apartments Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15883.452614793866!2d-2.3317!3d7.3349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb6ef8a7c1a2e5%3A0x0!2sSunyani%2C+Ghana!5e0!3m2!1sen!2sgh!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Nearby attractions */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                <MapPin size={17} className="text-coral" />
                Nearby Attractions
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Sunyani Central Market', dist: '0.5 km' },
                  { name: 'Brong Ahafo Hospital', dist: '1.2 km' },
                  { name: 'University of Energy', dist: '2.4 km' },
                  { name: 'Sunyani Airport', dist: '4.1 km' },
                  { name: 'Nkoranza Game Reserve', dist: '28 km' },
                ].map((place) => (
                  <li key={place.name} className="flex items-center justify-between text-sm">
                    <span className="text-charcoal">{place.name}</span>
                    <span className="text-coral font-semibold text-xs bg-coral/10 px-2 py-0.5 rounded-full">
                      {place.dist}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-coral rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Star size={16} className="text-gold-light fill-gold-light" />
                <span className="font-semibold">Why This Location?</span>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <Shield size={13} className="text-white mt-0.5 flex-shrink-0" />
                  Safe, quiet residential neighbourhood
                </li>
                <li className="flex items-start gap-2">
                  <Wifi size={13} className="text-white mt-0.5 flex-shrink-0" />
                  Strong mobile network coverage
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={13} className="text-white mt-0.5 flex-shrink-0" />
                  Easy access to major roads &amp; transit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
