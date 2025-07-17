"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .cursor-hover, input, textarea, .magnetic-element',
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("hover"), { passive: true })
        el.addEventListener("mouseleave", () => setCursorVariant("default"), { passive: true })
      })
    }

    window.addEventListener("mousemove", updateMousePosition, { passive: true })
    window.addEventListener("mouseenter", handleMouseEnter, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true })

    setTimeout(addHoverListeners, 100)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: "rgba(214, 158, 46, 0.6)",
      mixBlendMode: "multiply" as const,
    },
    hover: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1.5,
      backgroundColor: "rgba(74, 85, 104, 0.7)",
      mixBlendMode: "multiply" as const,
    },
  }

  const followerVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.4,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.3,
      opacity: 0.6,
    },
  }

  if (!isVisible) return null

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.5 }}
      />

      {/* Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-amber-500/40 dark:border-yellow-400/40 pointer-events-none z-[9998]"
        variants={followerVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.2 }}
      />
    </>
  )
}
