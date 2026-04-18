import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Award, Users, Home, Star } from 'lucide-react'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'

const team = [
  {
    name: 'Emmanuel Adjei',
    role: 'General Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'With over 10 years in hospitality management, Emmanuel ensures every guest receives world-class service.',
  },
  {
    name: 'Abena Asante',
    role: 'Guest Relations Manager',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80',
    bio: 'Abena brings warmth and professionalism to every guest interaction, making arrivals feel like homecomings.',
  },
  {
    name: 'Kofi Mensah',
    role: 'Head of Maintenance',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Kofi keeps every apartment in pristine condition, ensuring all systems run perfectly around the clock.',
  },
]

const values = [
  {
    icon: Home,
    title: 'Comfort First',
    description:
      'Every space is designed to feel like home — warm, welcoming, and thoughtfully furnished.',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description:
      'From premium mattresses to high-speed fibre, we never cut corners on what matters to guests.',
  },
  {
    icon: Users,
    title: 'Genuine Hospitality',
    description:
      'Our team treats every guest like family — responsive, friendly, and always going the extra mile.',
  },
  {
    icon: Star,
    title: 'Exceptional Value',
    description:
      'Luxury doesn\'t have to be unaffordable. We offer competitive rates without sacrificing quality.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80"
            alt="Zuni Apartments building"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase block mb-3">
            About Us
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white mb-5">
            The Story of Zuni Apartments
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Born from a vision to redefine affordable luxury in Sunyani, Zuni Apartments has grown
            into the Bono Region's most trusted name in premium short and long-stay accommodation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Mission */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag block mb-3">Our Mission</span>
              <h2 className="section-title mb-5">
                We Offer More Than
                <br />
                <span className="text-gold">Just Apartments</span>
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                At Zuni Apartments, our mission is to offer well-designed, fully furnished apartments
                that deliver comfort, security, and exceptional service — ensuring residents and
                guests experience unparalleled value and hospitality in Sunyani.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We compete by focusing on key value propositions: comfort, security, modernity, and
                affordability. Every apartment is move-in ready and maintained to the highest
                standards. Whether you are here for a night, a week, or a month, your experience
                is our priority.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { pct: '93%', label: 'Reliability & Cleanliness' },
                  { pct: '90%', label: 'Comfort & Amenities' },
                  { pct: '95%', label: 'Safety & Security' },
                  { pct: '97%', label: 'Guest Satisfaction' },
                ].map(({ pct, label }) => (
                  <div key={label} className="bg-soft-gray rounded-xl p-4">
                    <div className="font-serif text-3xl font-bold text-coral mb-1">{pct}</div>
                    <div className="text-sm text-muted">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96">
                <img
                  src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80"
                  alt="Zuni Apartments interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-coral rounded-2xl px-8 py-6 shadow-luxury hidden md:block">
                <div className="font-serif text-4xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm mt-1">Happy Guests Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag block mb-3">Our Values</span>
            <h2 className="section-title mb-4">
              What Drives Us Every
              <br />
              <span className="text-gold">Single Day</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-card text-center hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-coral" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag block mb-3">Our Team</span>
            <h2 className="section-title mb-4">
              The People Behind
              <br />
              <span className="text-gold">Your Experience</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-luxury transition-all duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-coral text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="section-tag block mb-3">Ready to Stay With Us?</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            Experience Zuni Apartments For Yourself
          </h2>
          <p className="text-muted mb-8 leading-relaxed">
            Join over 500 guests who have made Zuni Apartments their home in Sunyani. Book your
            perfect apartment today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/rooms" className="btn-primary py-3.5 px-8 text-base">
              View Our Apartments
              <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="btn-outline py-3.5 px-8 text-base">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
