"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote:
      "Working with this team transformed our entire digital presence. The results exceeded our expectations and our conversion rates increased by 300%.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    project: "Complete Brand Redesign",
  },
  {
    id: 2,
    quote:
      "The mobile app they developed for us is absolutely stunning. Our users love the interface and the functionality is flawless.",
    author: "Michael Chen",
    position: "Founder, HealthTech Solutions",
    company: "HealthTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    project: "Mobile App Development",
  },
  {
    id: 3,
    quote:
      "Professional, creative, and delivered on time. Their digital marketing strategy helped us reach new markets we never thought possible.",
    author: "Emily Rodriguez",
    position: "Marketing Director, GrowthCo",
    company: "GrowthCo",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    project: "Digital Marketing Campaign",
  },
  {
    id: 4,
    quote: "The e-commerce platform they built for us is incredibly robust. Sales have increased by 250% since launch.",
    author: "David Thompson",
    position: "Owner, Luxury Retail",
    company: "Luxury Retail",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    project: "E-commerce Development",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 gradient-bg-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">What Our Clients Say</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="glass-effect rounded-3xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white/20"
                />
                <div className="text-left">
                  <div className="font-bold text-white text-lg">{testimonials[currentIndex].author}</div>
                  <div className="text-white/70">{testimonials[currentIndex].position}</div>
                  <div className="text-white/50 text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
