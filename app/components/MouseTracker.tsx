"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const particleId = useRef(0)
  const lastParticleTime = useRef(0)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      const now = Date.now()
      if (now - lastParticleTime.current > 150 && Math.random() > 0.8) {
        const newParticle = {
          id: particleId.current++,
          x: e.clientX,
          y: e.clientY,
        }
        setParticles((prev) => [...prev.slice(-2), newParticle])
        lastParticleTime.current = now
      }
    }

    window.addEventListener("mousemove", updateMousePosition, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setParticles((prev) => prev.slice(-1))
    }, 1500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Soft Mouse Glow Effect */}
      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-8 dark:opacity-12"
        style={{
          background: "radial-gradient(circle, rgba(214,158,46,0.15) 0%, transparent 70%)",
          x: mousePosition.x - 96,
          y: mousePosition.y - 96,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.1 }}
      />

      {/* Soft Particle Trail */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-amber-500/40 dark:bg-yellow-400/50 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 40,
            y: particle.y + (Math.random() - 0.5) * 40,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
