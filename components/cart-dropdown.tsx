"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"

export function CartDropdown() {
  const { state, dispatch } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const openWhatsAppOrder = () => {
    const orderText = state.items.map((item) => `${item.name} x${item.quantity} - ${item.price}`).join("\n")

    const total = `Total: $${state.total.toFixed(2)}`
    const message = `Hola! Me gustaría hacer el siguiente pedido:\n\n${orderText}\n\n${total}`

    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="relative" onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart className="h-6 w-6" />
        {state.itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-600">
            {state.itemCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <Card className="absolute right-0 top-12 w-80 md:w-96 z-50 max-h-96 overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Carrito de Compras</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {state.items.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>Tu carrito está vacío</p>
                </div>
              ) : (
                <>
                  <div className="max-h-60 overflow-y-auto px-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 py-3 border-b last:border-b-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium truncate">{item.name}</h4>
                          <p className="text-sm text-red-600 font-semibold">{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-red-500 hover:text-red-700"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t bg-gray-50">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-lg text-red-600">${state.total.toFixed(2)}</span>
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full bg-green-600 hover:bg-green-700" onClick={openWhatsAppOrder}>
                        Pedir por WhatsApp
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
                        Vaciar Carrito
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
