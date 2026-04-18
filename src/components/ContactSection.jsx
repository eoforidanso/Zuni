import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['Plot No. 81, Block B, Dominase North', 'Sector 17, Sunyani, Ghana'],
    color: 'bg-coral/10 text-coral',
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    lines: ['+233 538 739 877', '+233 269 576 666'],
    color: 'bg-teal/10 text-teal',
    href: 'tel:+233538739877',
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['zuniapartments@gmail.com'],
    color: 'bg-gold/10 text-gold',
    href: 'mailto:zuniapartments@gmail.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Fri: 8am – 6pm', 'Sat – Sun: 10am – 4pm'],
    color: 'bg-purple-50 text-purple-600',
  },
]

export default function ContactSection() {
  function handleSubmit(e) {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you! Your message has been sent. We will get back to you shortly.')
    e.target.reset()
  }

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag block mb-3">Get In Touch</span>
          <h2 className="section-title mb-4">
            We&apos;d Love to
            <br />
            <span className="text-gold">Hear From You</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Have questions about our apartments? Ready to book? Our friendly team is here to help
            you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-5">
            {contactInfo.map((info) => {
              const Icon = info.icon
              const inner = (
                <div className="bg-white rounded-2xl p-5 shadow-card flex items-start gap-4 hover:shadow-luxury transition-all duration-300">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm mb-1">{info.title}</h4>
                    {info.lines.map((line) => (
                      <p key={line} className="text-muted text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )
              return info.href ? (
                <a key={info.title} href={info.href}>
                  {inner}
                </a>
              ) : (
                <div key={info.title}>{inner}</div>
              )
            })}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      placeholder="Your first name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      placeholder="Your last name"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+233 XXX XXX XXX"
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                    Subject *
                  </label>
                  <select id="subject" required className="input-field">
                    <option value="">Select a subject…</option>
                    <option value="booking">Room Booking Enquiry</option>
                    <option value="pricing">Pricing &amp; Packages</option>
                    <option value="amenities">Amenities Information</option>
                    <option value="long-stay">Long-Stay / Monthly Rates</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your needs, preferred dates, and any questions…"
                    className="input-field resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
