"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Monitor, Heart } from "lucide-react"

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 10, suffix: "K+", label: "Happy Patients" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-semibold tabular-nums">
      {count}
      <span className="text-accent">{suffix}</span>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/pearlsmile-dental/images/dental-office.jpg"
                alt="Modern dental office"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-6 lg:right-6 bg-card border border-border rounded-xl p-5 shadow-lg max-w-[260px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src="/pearlsmile-dental/images/dr-sarah.jpg"
                    alt="Dr. Sarah Mitchell"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">Dr. Sarah Mitchell</p>
                  <p className="text-xs text-muted-foreground">Lead Dentist</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                &ldquo;Every patient deserves to feel confident in their smile.&rdquo;
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pt-8">
            <p className="text-sm font-medium text-accent mb-4">About PearlSmile</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Where technology meets compassion
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Founded in 2009 by Dr. Sarah Mitchell and Dr. James Chen, PearlSmile Dental has grown 
                from a small practice into one of the region&apos;s most trusted dental clinics.
              </p>
              <p>
                We believe exceptional dental care goes beyond treating teeth. It&apos;s about creating 
                an environment where patients feel genuinely comfortable and cared for.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Monitor className="w-5 h-5 text-accent" />
                </div>
                <p className="font-medium mb-1">Latest Technology</p>
                <p className="text-sm text-muted-foreground">3D imaging & digital diagnostics</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <p className="font-medium mb-1">Patient-First Care</p>
                <p className="text-sm text-muted-foreground">Personalized treatment plans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
