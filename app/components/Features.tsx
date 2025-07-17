"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Headphones, Gift, Star, Clock } from "lucide-react"

const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "شحن مجاني",
    description: "شحن مجاني لجميع الطلبات أكثر من 200 ريال",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "ضمان الجودة",
    description: "جميع منتجاتنا أصلية ومضمونة 100%",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "دعم 24/7",
    description: "خدمة عملاء متاحة على مدار الساعة",
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "تغليف فاخر",
    description: "تغليف أنيق مجاني مع كل طلب",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "منتجات مميزة",
    description: "أفضل العطور من العلامات التجارية العالمية",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "توصيل سريع",
    description: "توصيل خلال 24-48 ساعة داخل المدن الرئيسية",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا تختار عطور سوير </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">نقدم لك أفضل تجربة تسوق للعطور مع خدمات متميزة</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 hover:from-amber-100 hover:to-amber-200/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>

              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
