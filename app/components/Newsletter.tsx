"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Gift } from "lucide-react"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Gift className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl font-bold text-white mb-4">احصل على خصم 15%</h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            اشترك في نشرتنا البريدية واحصل على خصم فوري على طلبك الأول بالإضافة إلى آخر العروض والمنتجات الجديدة
          </p>

          <motion.form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 relative">
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-12 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubscribed}
            >
              {isSubscribed ? "تم الاشتراك!" : "اشترك الآن"}
            </motion.button>
          </motion.form>

          <motion.p
            className="text-white/70 text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            لا تقلق، لن نرسل لك رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
