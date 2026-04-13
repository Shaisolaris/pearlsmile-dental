"use client"

import Link from "next/link"
import { ArrowUpRight, Sparkles, Smile, Scan, Stethoscope, Sun, Heart } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive exams, cleanings, and preventive care for lasting oral health.",
    features: ["Digital X-rays", "Deep cleaning", "Cavity prevention"],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and complete smile makeovers designed just for you.",
    features: ["Porcelain veneers", "Dental bonding", "Smile design"],
  },
  {
    icon: Scan,
    title: "Orthodontics",
    description: "Invisalign and precision aligners for perfectly straight teeth.",
    features: ["Invisalign", "Clear aligners", "Retainers"],
  },
  {
    icon: Heart,
    title: "Dental Implants",
    description: "Permanent tooth replacement with natural-looking, lasting results.",
    features: ["Single implants", "Full arch", "Same-day options"],
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Professional whitening for a dramatically brighter smile.",
    features: ["In-office", "Take-home kits", "Touch-ups"],
  },
  {
    icon: Smile,
    title: "Emergency Care",
    description: "Same-day appointments for urgent dental needs and pain relief.",
    features: ["Pain relief", "Broken teeth", "Infections"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent mb-4">Our services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            Comprehensive dental care
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine checkups to complete smile transformations, we offer a full range 
            of services using the latest technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href="#contact"
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-accent" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which service you need?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors"
          >
            Schedule a free consultation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
