"use client"

import { motion } from "framer-motion"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { type Product, useCart } from "../context/CartContext"
import { useState } from "react"

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { dispatch } = useCart()
  const [isLiked, setIsLiked] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    dispatch({ type: "ADD_TO_CART", payload: product })

    // Simulate loading
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      {/* Product Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">جديد</span>
        )}
        {product.isBestseller && (
          <span className="px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">الأكثر مبيعاً</span>
        )}
      </div>

      {/* Like Button */}
      <motion.button
        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart className={`w-5 h-5 transition-colors ${isLiked ? "text-red-500 fill-red-500" : "text-gray-600"}`} />
      </motion.button>

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />

        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Quick Add Button */}
        <motion.button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-amber-600 text-white rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-700"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? "جاري الإضافة..." : "إضافة سريعة"}
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-amber-600 font-medium">{product.category}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-600 mr-1">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{product.price} ر.س</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{product.originalPrice} ر.س</span>
            )}
          </div>

          <motion.button
            className="p-3 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
