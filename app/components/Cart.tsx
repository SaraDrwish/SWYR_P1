"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, ShoppingBag, CreditCard } from "lucide-react"
import { useCart } from "../context/CartContext"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
  }

  const handleCheckout = () => {
    // Here you would integrate with a payment system
    alert("سيتم توجيهك لصفحة الدفع قريباً!")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Cart Sidebar */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <ShoppingBag className="w-6 h-6 mr-2" />
                  سلة التسوق ({state.itemCount})
                </h2>
                <motion.button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {state.items.length === 0 ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">سلة التسوق فارغة</p>
                    <p className="text-gray-400 text-sm mt-2">أضف بعض العطور الرائعة!</p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="flex items-center space-x-4 space-x-reverse p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        layout
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                          <p className="text-amber-600 font-bold">{item.price} ر.س</p>
                        </div>

                        <div className="flex items-center space-x-2 space-x-reverse">
                          <motion.button
                            className="p-1 hover:bg-gray-200 rounded"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>

                          <span className="w-8 text-center font-semibold">{item.quantity}</span>

                          <motion.button
                            className="p-1 hover:bg-gray-200 rounded"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>

                        <motion.button
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <motion.div
                  className="border-t p-6 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>المجموع:</span>
                    <span className="text-amber-600">{state.total} ر.س</span>
                  </div>

                  <motion.button
                    className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 space-x-reverse hover:from-amber-700 hover:to-amber-800 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>إتمام الشراء</span>
                  </motion.button>

                  <motion.button
                    className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                  >
                    متابعة التسوق
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
