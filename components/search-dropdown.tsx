"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Search, ShoppingCart, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

interface Product {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  badge?: string
  category?: string
}

interface SearchDropdownProps {
  products: Product[]
}

export function SearchDropdown({ products }: SearchDropdownProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { dispatch } = useCart()

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([])
      setIsOpen(false)
      return
    }

    const filtered = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setFilteredProducts(filtered.slice(0, 6)) // Mostrar máximo 6 resultados
    setIsOpen(filtered.length > 0)
  }, [searchTerm, products])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleProductClick = (product: Product) => {
    setSearchTerm("")
    setIsOpen(false)
    inputRef.current?.blur()
  }

  const addToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        priceNumber: Number.parseFloat(product.price.replace("$", "")),
      },
    })
  }

  const clearSearch = () => {
    setSearchTerm("")
    setIsOpen(false)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative flex-1 max-w-md mx-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          ref={inputRef}
          placeholder="Buscar productos..."
          className="pl-10 pr-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            if (filteredProducts.length > 0) {
              setIsOpen(true)
            }
          }}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
            onClick={clearSearch}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)} />
          <Card className="absolute top-12 left-0 right-0 z-50 max-h-80 overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="max-h-80 overflow-y-auto">
                {filteredProducts.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">No se encontraron productos</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => handleProductClick(product)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={50}
                              height={50}
                              className="rounded object-cover"
                            />
                            {product.badge && (
                              <Badge className="absolute -top-1 -right-1 text-xs px-1 py-0 bg-red-600">
                                {product.badge}
                              </Badge>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium truncate">{product.name}</h4>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-semibold text-red-600">{product.price}</span>
                              {product.originalPrice && (
                                <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                              )}
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700 h-8 w-8 p-0"
                            onClick={(e) => addToCart(product, e)}
                          >
                            <ShoppingCart className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {filteredProducts.length > 0 && (
                <div className="p-3 bg-gray-50 border-t">
                  <p className="text-xs text-gray-500 text-center">
                    {filteredProducts.length} resultado{filteredProducts.length !== 1 ? "s" : ""} encontrado
                    {filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
