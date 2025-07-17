"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import MagneticButton from "./MagneticButton"
import TiltCard from "./TiltCard"
import ParallaxSection from "./ParallaxSection"
import AnimatedCounter from "./AnimatedCounter"

export default function EnhancedHero() {
  return (
    <div className="relative isolate overflow-hidden gradient-bg-1 min-h-screen flex items-center">
      {/* Soft Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/8 dark:bg-yellow-500/12 rounded-full blur-3xl"
          animate={{
            y: [0, -12, 0],
            x: [0, 6, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500/8 dark:bg-slate-400/12 rounded-full blur-3xl"
          animate={{
            y: [0, 12, 0],
            x: [0, -6, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Soft particle elements */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/15 dark:bg-yellow-400/20 rounded-full"
            style={{
              left: `${35 + i * 15}%`,
              top: `${45 + i * 8}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.div
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium glass-effect text-slate-700 dark:text-yellow-100 mb-8 cursor-hover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            🌟 Professional Creative Agency
          </motion.div>

          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-slate-700 dark:text-slate-100 sm:text-7xl text-glow-animation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block"
              initial={{ x: -30 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Creative
            </motion.span>
            <motion.span
              className="block text-gradient-reverse"
              initial={{ x: 30 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Excellence
            </motion.span>
            <motion.span
              className="block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Delivered
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Transform your brand with cutting-edge design and innovative digital solutions. We create experiences that
            captivate, engage, and convert with gentle elegance.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <MagneticButton className="professional-button group cursor-hover">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton className="secondary-button group cursor-hover">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-center cursor-hover">
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center cursor-hover">
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Client Satisfaction</div>
            </div>
            <div className="text-center cursor-hover">
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">24/7</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Support</div>
            </div>
          </motion.div>
        </div>

        <ParallaxSection offset={15} className="mx-auto mt-16 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <TiltCard className="relative cursor-hover">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500/15 to-slate-500/15 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
                alt="Creative Agency Design"
                width={600}
                height={600}
                className="relative w-[500px] rounded-3xl shadow-xl ring-1 ring-slate-200/50 dark:ring-yellow-500/20 hover-lift"
              />
            </TiltCard>
          </motion.div>
        </ParallaxSection>
      </div>
    </div>
  )
}
