"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ProductCard from "./ProductCard"
import type { Product } from "../context/CartContext"

const products: Product[] = [
  {
    id: 1,
    name: "عطر الورد الدمشقي",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=300&width=300",
    description: "عطر فاخر مستوحى من الورد الدمشقي الأصيل برائحة عذبة تدوم طويلاً",
    category: "عطور نسائية",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "عود الملوك الفاخر",
    price: 599,
    image: "/placeholder.svg?height=300&width=300",
    description: "عود طبيعي فاخر من أجود أنواع العود الكمبودي الأصيل",
    category: "عطور رجالية",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "مسك الليل الساحر",
    price: 199,
    originalPrice: 249,
    image: "/placeholder.svg?height=300&width=300",
    description: "مسك طبيعي برائحة ساحرة مثالية للمساء والمناسبات الخاصة",
    category: "عطور مشتركة",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isBestseller: false,
  },
  {
    id: 4,
    name: "عطر الياسمين الملكي",
    price: 349,
    image: "/placeholder.svg?height=300&width=300",
    description: "عطر نسائي راقي برائحة الياسمين الطبيعي المنعش",
    category: "عطور نسائية",
    rating: 4.6,
    reviews: 203,
    isNew: true,
    isBestseller: false,
  },
  {
    id: 5,
    name: "عنبر الصحراء",
    price: 449,
    image: "/placeholder.svg?height=300&width=300",
    description: "عطر رجالي قوي برائحة العنبر الأصيل والتوابل الشرقية",
    category: "عطور رجالية",
    rating: 4.8,
    reviews: 167,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 6,
    name: "زهر البرتقال",
    price: 229,
    originalPrice: 279,
    image: "/placeholder.svg?height=300&width=300",
    description: "عطر منعش برائحة زهر البرتقال الطبيعي المنشط",
    category: "عطور مشتركة",
    rating: 4.5,
    reviews: 98,
    isNew: false,
    isBestseller: false,
  },
]

const categories = ["الكل", "عطور رجالية", "عطور نسائية", "عطور مشتركة"]

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [sortBy, setSortBy] = useState("الأحدث")

  const filteredProducts = products.filter(
    (product) => selectedCategory === "الكل" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "السعر: من الأقل للأعلى":
        return a.price - b.price
      case "السعر: من الأعلى للأقل":
        return b.price - a.price
      case "الأعلى تقييماً":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">مجموعتنا المميزة</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف أفضل العطور الفاخرة والأصيلة من مختلف أنحاء العالم
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Sort Filter */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="الأحدث">الأحدث</option>
            <option value="السعر: من الأقل للأعلى">السعر: من الأقل للأعلى</option>
            <option value="السعر: من الأعلى للأقل">السعر: من الأعلى للأقل</option>
            <option value="الأعلى تقييماً">الأعلى تقييماً</option>
          </select>
        </motion.div>

        {/* Products Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {sortedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            عرض المزيد
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
