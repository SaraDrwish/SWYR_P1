"use client"

import { motion } from "framer-motion"
import { Palette, Code2, Megaphone, Smartphone, Globe, Zap, Users, Award, Clock, Target } from "lucide-react"

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Brand Identity Design",
    description: "Complete brand identity packages including logos, color schemes, and brand guidelines.",
    features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
    price: "From $2,500",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
    price: "From $5,000",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Maintenance"],
    price: "From $15,000",
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence.",
    features: ["Social Media", "PPC Campaigns", "Content Strategy", "Analytics"],
    price: "From $1,500/mo",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration and inventory management.",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"],
    price: "From $8,000",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Speed up your website and improve user experience with our optimization services.",
    features: ["Speed Optimization", "SEO Audit", "Performance Monitoring", "CDN Setup"],
    price: "From $1,200",
  },
]

const stats = [
  { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
  { icon: <Award className="w-6 h-6" />, value: "50+", label: "Awards Won" },
  { icon: <Clock className="w-6 h-6" />, value: "5+", label: "Years Experience" },
  { icon: <Target className="w-6 h-6" />, value: "98%", label: "Success Rate" },
]

export default function ProfessionalServices() {
  return (
    <section className="py-20 section-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-900 to-orange-500 text-white rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-3xl p-8 hover-lift hover-glow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-orange-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gradient">{service.price}</span>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-900 to-orange-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-3xl p-12 gradient-bg-2">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Our team is ready to bring your vision
              to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="professional-button">Start Your Project</button>
              <button className="secondary-button bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
