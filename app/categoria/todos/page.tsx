"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Grid, List, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/contexts/cart-context"
import { SearchDropdown } from "@/components/search-dropdown"
import { CartDropdown } from "@/components/cart-dropdown"
const allProducts = [
  {
    id: 1,
    name: "Bife de Chorizo Premium",
    price: "$25.99",
    originalPrice: "$29.99",
    image: "https://images.tcdn.com.br/img/img_prod/854660/bife_chorizo_premium_2x350gr_resfriado_700gr_127_1_ccf9eb1688c78f14ce66bdeac1ec3a34.jpg",
    badge: "Oferta",
    category: "res",
    description: "Corte premium de res, ideal para parrilla",
  },
  {
    id: 2,
    name: "Costillas de Cerdo",
    price: "$18.50",
    image: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202403/05/00118434100402____4__600x600.jpg",
    badge: "Nuevo",
    category: "cerdo",
    description: "Costillas tiernas y jugosas",
  },
  {
    id: 3,
    name: "Pollo Entero",
    price: "$12.99",
    image: "https://plazavea.vteximg.com.br/arquivos/ids/29694318-450-450/135484.jpg?v=638648726450730000",
    category: "pollo",
    description: "Pollo fresco de granja",
  },
  {
    id: 4,
    name: "Chorizo Parrillero",
    price: "$8.75",
    image: "https://braedt.com.pe/storage/f0749-chorizo-parrillero-pre-cocido.jpg",
    category: "embutidos",
    description: "Chorizo artesanal para parrilla",
  },
  {
    id: 5,
    name: "Lomo de Res",
    price: "$32.00",
    image: "https://a.storyblok.com/f/160385/059728be58/carne.jpg/m/filters:quality(70)/",
    badge: "Premium",
    category: "res",
    description: "Corte premium, muy tierno",
  },
  {
    id: 6,
    name: "Hamburguesas Caseras",
    price: "$15.25",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwhRHUgStctcJF8p7xngveUmhDep5yKfw9Q&s",
    category: "embutidos",
    description: "Hamburguesas artesanales",
  },
  {
    id: 7,
    name: "Asado de Tira",
    price: "$22.00",
    image: "https://carnicentro.com.pe/wp-content/uploads/2023/10/asado-de-tira-scaled.jpg",
    category: "res",
    description: "Clásico corte argentino",
  },
  {
    id: 8,
    name: "Bondiola de Cerdo",
    price: "$19.75",
    image: "https://media.elgourmet.com/recetas/cover/bondi_WV2YC6bQEuTpRmkF79rBAKHZhzoa4v.png",
    category: "cerdo",
    description: "Corte jugoso y sabroso",
  },
  {
    id: 9,
    name: "Morcilla Criolla",
    price: "$9.50",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9z7BDxobnr251hZ2jrksZOMZ7zgXpmAGJQ&s",
    category: "embutidos",
    description: "Morcilla tradicional argentina",
  },
  {
    id: 10,
    name: "Pechuga de Pollo",
    price: "$16.25",
    image: "https://ilp-ala.org/wp-content/uploads/2020/08/receta-pechuga-de-pollo.jpg",
    category: "pollo",
    description: "Pechuga sin hueso",
  },
  {
    id: 11,
    name: "Jamón Ahumado",
    price: "$28.00",
    image: "https://i0.wp.com/www.buenossaborespanama.com/wp-content/uploads/2022/01/traditional-sliced-honey-glazed-ham-2021-08-26-16-20-15-utc-scaled.jpg?fit=1200%2C800&ssl=1",
    badge: "Premium",
    category: "ahumados",
    description: "Jamón ahumado artesanal",
  },
  {
    id: 12,
    name: "Salmón Ahumado",
    price: "$45.00",
    image: "https://s3.abcstatics.com/abc/www/multimedia/gurme/2025/05/20/salmon-ahumado-kgUE-U7010024661269xH-1200x840@diario_abc.jpg",
    badge: "Premium",
    category: "ahumados",
    description: "Salmón ahumado en frío",
  },
  {
    id: 13,
    name: "Carbón Quebracho",
    price: "$12.50",
    image: "https://amadeusdistribuidora.cl/wp-content/uploads/2024/09/CARBON-QUEBRACHO-BLANCO-2.5KG-Amadeus-Distribuidora.jpg",
    category: "carbon",
    description: "Carbón de quebracho premium",
  },
  {
    id: 14,
    name: "Leña de Quebracho",
    price: "$8.75",
    image: "https://amadeusdistribuidora.cl/wp-content/uploads/2024/09/CARBON-QUEBRACHO-BLANCO-2.5KG-Amadeus-Distribuidora.jpg",
    category: "carbon",
    description: "Leña seca para asado",
  },
]
export default function AllProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("name")
  const [filterCategory, setFilterCategory] = useState("all")
  const { dispatch } = useCart()

  const filteredProducts = allProducts.filter(
    (product) => filterCategory === "all" || product.category === filterCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
      case "price-high":
        return Number.parseFloat(b.price.replace("$", "")) - Number.parseFloat(a.price.replace("$", ""))
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const addToCart = (product: any) => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="font-bold text-lg text-red-600">CARNES</h1>
                    <p className="text-xs text-gray-600">& LOMITOS</p>
                  </div>
                </div>
              </Link>
            </div>

            <SearchDropdown products={allProducts} />

            <div className="flex items-center space-x-2">
              <CartDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:space-x-6 py-2">
            <li>
              <Link href="/categoria/todos" className="block py-2 hover:text-red-200 text-red-200">
                Todas las categorías
              </Link>
            </li>
            <li>
              <Link href="/acerca-de-nosotros" className="block py-2 hover:text-red-200">
                Acerca de Nosotros
              </Link>
            </li>
            <li>
              <Link href="/distribuidor-mayorista" className="block py-2 hover:text-red-200">
                Distribuidor mayorista
              </Link>
            </li>
          
            <li>
              <button
                onClick={() =>
                  window.open("https://wa.me/1234567890?text=Hola, necesito soporte con mi pedido", "_blank")
                }
                className="block py-2 hover:text-red-200 text-left"
              >
                Soporte
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Todos los productos</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                <span>Volver</span>
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Todos los Productos</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora nuestra selección completa de carnes y productos de calidad premium
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600">
              {sortedProducts.length} producto{sortedProducts.length !== 1 ? "s" : ""} encontrado
              {sortedProducts.length !== 1 ? "s" : ""}
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="res">Res</SelectItem>
                    <SelectItem value="cerdo">Cerdo</SelectItem>
                    <SelectItem value="pollo">Pollo</SelectItem>
                    <SelectItem value="embutidos">Embutidos</SelectItem>
                    <SelectItem value="ahumados">Ahumados</SelectItem>
                    <SelectItem value="carbon">Carbón</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nombre</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className={`overflow-hidden hover:shadow-lg transition-shadow ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
              >
                <div className={`relative ${viewMode === "list" ? "w-32 h-32 flex-shrink-0" : ""}`}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className={`object-cover ${viewMode === "list" ? "w-full h-full" : "w-full h-32 md:h-40"}`}
                  />
                  {product.badge && <Badge className="absolute top-2 left-2 bg-red-600">{product.badge}</Badge>}
                </div>
                <CardContent className={`p-3 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                  <div>
                    <h4 className="font-medium text-sm md:text-base mb-2 line-clamp-2">{product.name}</h4>
                    {viewMode === "list" && <p className="text-sm text-gray-600 mb-3">{product.description}</p>}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-red-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-1">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => addToCart(product)}>
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
