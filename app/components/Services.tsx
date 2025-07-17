"use client"

import { motion } from "framer-motion"
import { Code, Paintbrush, Megaphone, Smartphone } from "lucide-react"

const services = [
  {
    icon: <Paintbrush className="w-12 h-12 mb-4 text-amber-600 dark:text-yellow-500" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning interfaces that engage and delight users.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-slate-600 dark:text-slate-400" />,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites and web applications.",
  },
  {
    icon: <Megaphone className="w-12 h-12 mb-4 text-amber-700 dark:text-yellow-600" />,
    title: "Digital Marketing",
    description: "Developing strategic campaigns that increase brand visibility and drive conversions.",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-slate-700 dark:text-slate-500" />,
    title: "Mobile App Development",
    description: "Creating innovative mobile applications for iOS and Android platforms.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-slate-700 dark:text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-slate-700 dark:text-slate-200">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
