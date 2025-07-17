"use client"

import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, Palette, Code, TestTube, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    duration: "1-2 weeks",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Strategy & Planning",
    description:
      "Our team develops a comprehensive strategy and project roadmap tailored to your specific needs and objectives.",
    duration: "1 week",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design & Prototyping",
    description: "We create stunning visual designs and interactive prototypes that bring your vision to life.",
    duration: "2-3 weeks",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development & Implementation",
    description:
      "Our developers build your project using cutting-edge technologies and best practices for optimal performance.",
    duration: "4-8 weeks",
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your project works flawlessly across all devices and platforms.",
    duration: "1-2 weeks",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Support",
    description: "We handle the launch process and provide ongoing support to ensure your continued success.",
    duration: "Ongoing",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 section-bg-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology to ensure every project is delivered on time, within budget, and exceeds
            expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-900 via-orange-500 to-blue-900 opacity-30"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-5/12">
                  <div className={`glass-effect rounded-3xl p-8 hover-lift ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-orange-500 text-white rounded-2xl mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        <span className="text-sm text-orange-600 font-medium">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>
                </div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="professional-button">Start Your Project Today</button>
        </motion.div>
      </div>
    </section>
  )
}
