"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  const elements = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 12,
    delay: Math.random() * 4,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-3 dark:opacity-6"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            background: `linear-gradient(45deg, ${
              Math.random() > 0.5 ? "rgba(74, 85, 104, 0.1)" : "rgba(214, 158, 46, 0.1)"
            }, transparent)`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, -8, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
