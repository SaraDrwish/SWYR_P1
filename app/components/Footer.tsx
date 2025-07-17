"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram , Mail } from "lucide-react"
/*import { Tiktok } from "lucide-react" */

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=61563925810810" },
    /* { icon: <Tiktok className="w-5 h-5" />, href: "https://www.tiktok.com/@swyrperfumes/" }, */
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/swyrbeauty/" },
    
  ]

  const quickLinks = ["الرئيسية", "العطور", "العروض", "من نحن", "تواصل معنا"]

  const categories = ["عطور رجالية", "عطور نسائية", "عطور مشتركة", "العود", "المسك"]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
              عطور سوير
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              متجرك الأول للعطور الفاخرة والأصيلة. نقدم لك أجود أنواع العطور من مختلف أنحاء العالم بأفضل الأسعار.
            </p>

            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">الفئات</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    {category}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">تواصل معنا</h4>
            <div className="space-y-4">

              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300"> swyrperfumes@gmail.com </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">© 2025 عطور سوير . جميع الحقوق محفوظة.</p>

          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              الشروط والأحكام
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              سياسة الإرجاع
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
