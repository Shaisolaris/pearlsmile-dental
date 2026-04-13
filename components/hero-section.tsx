"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-sm font-medium text-accent">Now accepting new patients</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">Your smile,</span>
              <br />
              <span className="text-foreground">our </span>
              <span className="text-accent">passion</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
              Experience dental care reimagined. Advanced technology, gentle hands, 
              and a commitment to your comfort at every visit.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 text-base font-medium">
                <Link href="#contact" className="gap-2">
                  Book appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-medium border-border hover:bg-secondary">
                <Link href="#services">
                  Our services
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">15+ Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">10,000+</p>
                  <p className="text-xs text-muted-foreground">Happy patients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Same Day</p>
                  <p className="text-xs text-muted-foreground">Appointments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square">
              <Image
                src="/pearlsmile-dental/images/hero-dental.jpg"
                alt="Modern dental clinic interior"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating rating card */}
            <div className="absolute -bottom-4 -left-4 lg:left-6 lg:bottom-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-semibold">4.9 out of 5</p>
              <p className="text-xs text-muted-foreground">500+ Google reviews</p>
            </div>

            {/* Next available card */}
            <div className="absolute -top-4 -right-4 lg:right-6 lg:top-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <p className="text-xs text-muted-foreground mb-1">Next available</p>
              <p className="text-sm font-semibold">Today, 2:30 PM</p>
              <div className="mt-2 px-3 py-1 bg-accent/10 rounded-md inline-block">
                <p className="text-xs font-medium text-accent">Book now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
