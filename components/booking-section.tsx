"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ArrowRight, MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const services = [
  "General Checkup",
  "Cosmetic Consultation",
  "Orthodontics",
  "Dental Implants",
  "Teeth Whitening",
  "Emergency Care",
]

const times = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
]

export function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    toast.success("Appointment request received!", {
      description: "We'll confirm your booking within 2 hours.",
    })
    
    setIsSubmitting(false)
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Book your visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Ready to transform{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">
              your smile?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule your consultation today. New patients welcome, same-week availability.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-6 lg:p-10 rounded-2xl glass">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    First name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="John"
                    className="h-12 bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Doe"
                    className="h-12 bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="h-12 bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="h-12 bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Service */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Service
                  </label>
                  <Select name="service" required>
                    <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Preferred time
                  </label>
                  <Select name="time" required>
                    <SelectTrigger className="h-12 bg-secondary/50 border-border/50 focus:border-accent">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your dental concerns or goals..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-medium"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Request appointment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to our privacy policy. We&apos;ll never share your information.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick info cards */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">123 Park Avenue, San Francisco, CA 94102</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:hello@pearlsmile.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      hello@pearlsmile.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass">
              <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-transparent" />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">9:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-transparent" />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency banner */}
            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <p className="font-semibold text-foreground mb-2">Dental Emergency?</p>
              <p className="text-sm text-muted-foreground mb-4">
                We offer same-day emergency appointments for urgent dental needs.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Call now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
