"use client"

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const testimonials = [
  {
    quote: "The moment I walked in, I knew this was different. The attention to detail and calm atmosphere made my smile transformation exceed every expectation.",
    author: "Amanda K.",
    role: "Creative Director",
    rating: 5,
  },
  {
    quote: "Dr. Mitchell combines artistry with precision. After years of hiding my smile, I finally have the confidence I always wanted.",
    author: "Robert J.",
    role: "Architect",
    rating: 5,
  },
  {
    quote: "Five years as a patient and I still look forward to every visit. What really sets them apart is the genuine care they show.",
    author: "Michelle T.",
    role: "Entrepreneur",
    rating: 5,
  },
  {
    quote: "The Invisalign journey was seamless from consultation to final reveal. They made the process effortless and the results speak for themselves.",
    author: "David L.",
    role: "Tech Executive",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    ref?.addEventListener("scroll", checkScroll)
    return () => ref?.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="text-sm font-medium text-accent mb-4">Patient reviews</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Loved by thousands
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.9 from 500+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative -mx-6 lg:-mx-8">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 px-6 lg:px-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-start">
                <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border">
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-foreground text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-8">
            Trusted by patients from leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-50">
            <span className="text-lg font-semibold">Google</span>
            <span className="text-lg font-semibold">Meta</span>
            <span className="text-lg font-semibold">Apple</span>
            <span className="text-lg font-semibold">Netflix</span>
            <span className="text-lg font-semibold">Stripe</span>
          </div>
        </div>
      </div>
    </section>
  )
}
