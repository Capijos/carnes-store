"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart, Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CartDropdown } from "@/components/cart-dropdown"
import { useCart } from "@/contexts/cart-context"
import { SearchDropdown } from "@/components/search-dropdown"
import Link from "next/link"

const carouselImages = [
  {
    src: "https://carnicentro.com.pe/wp-content/uploads/2020/09/slider4.jpg",
    title: "BIENVENIDO",
    subtitle: "TU CARNICERÍA VIRTUAL DE CONFIANZA",
  },
  {
    src: "https://carnicentro.com.pe/wp-content/uploads/2020/09/slider4.jpg",
    title: "CARNES PREMIUM",
    subtitle: "LA MEJOR CALIDAD PARA TU MESA",
  },
  {
    src: "https://carnicentro.com.pe/wp-content/uploads/2020/09/slider4.jpg",
    title: "OFERTAS ESPECIALES",
    subtitle: "DESCUENTOS HASTA 30% EN PRODUCTOS SELECCIONADOS",
  },
]

const categories = [
  { name: "Ahumados", image: "https://www.consumer.es/app/uploads/2024/04/alimentos-ahumados-efectos.jpg", slug: "ahumados" },
  { name: "Res", image: "https://productosdeldia.com/cdn/shop/articles/Los_cortes_de_res_mas_tiernos.jpg?v=1724689739", slug: "res" },
  { name: "Cerdo", image: "https://media.scoolinary.app/blog/images/2020/07/despiece-carne-de-cerdo.jpg", slug: "cerdo" },
  { name: "Embutidos", image: "https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/embutidos/embutido_800x450.jpg?rev=0209a688-4042-4c88-a832-45165c4c643f&hash=464D672E94013593AB9D5258F4CDE469", slug: "embutidos" },
  { name: "Carbón", image: "https://carnicosortega.com/wp-content/uploads/2019/08/barbacoa.jpg", slug: "carbon" },
  { name: "Ver todo", image: "/placeholder.svg?height=80&width=80", slug: "todos" },
]

const products = [
  {
    id: 1,
    name: "Bife de Chorizo Premium",
    price: "$25.99",
    originalPrice: "$29.99",
    image: "https://images.tcdn.com.br/img/img_prod/854660/bife_chorizo_premium_2x350gr_resfriado_700gr_127_1_ccf9eb1688c78f14ce66bdeac1ec3a34.jpg",
    badge: "Oferta",
    category: "Res",
  },
  {
    id: 2,
    name: "Costillas de Cerdo",
    price: "$18.50",
    image: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202403/05/00118434100402____4__600x600.jpg",
    badge: "Nuevo",
    category: "Cerdo",
  },
  {
    id: 3,
    name: "Pollo Entero",
    price: "$12.99",
    image: "https://plazavea.vteximg.com.br/arquivos/ids/29694318-450-450/135484.jpg?v=638648726450730000",
    category: "Pollo",
  },
  {
    id: 4,
    name: "Chorizo Parrillero",
    price: "$8.75",
    image: "https://braedt.com.pe/storage/f0749-chorizo-parrillero-pre-cocido.jpg",
    category: "Embutidos",
  },
  {
    id: 5,
    name: "Lomo de Res",
    price: "$32.00",
    image: "https://a.storyblok.com/f/160385/059728be58/carne.jpg/m/filters:quality(70)/",
    badge: "Premium",
    category: "Res",
  },
  {
    id: 6,
    name: "Hamburguesas Caseras",
    price: "$15.25",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwhRHUgStctcJF8p7xngveUmhDep5yKfw9Q&s",
    category: "Embutidos",
  },
  {
    id: 7,
    name: "Asado de Tira",
    price: "$22.00",
    image: "https://carnicentro.com.pe/wp-content/uploads/2023/10/asado-de-tira-scaled.jpg",
    category: "Res",
  },
  {
    id: 8,
    name: "Bondiola de Cerdo",
    price: "$19.75",
    image: "https://media.elgourmet.com/recetas/cover/bondi_WV2YC6bQEuTpRmkF79rBAKHZhzoa4v.png",
    category: "Cerdo",
  },
  {
    id: 9,
    name: "Morcilla Criolla",
    price: "$9.50",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9z7BDxobnr251hZ2jrksZOMZ7zgXpmAGJQ&s",
    category: "Embutidos",
  },
  {
    id: 10,
    name: "Pechuga de Pollo",
    price: "$16.25",
    image: "https://ilp-ala.org/wp-content/uploads/2020/08/receta-pechuga-de-pollo.jpg",
    category: "Pollo",
  },
]

export default function CarnesEcommerce() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { dispatch } = useCart()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hola, me interesa conocer más sobre sus productos", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-bold text-lg text-red-600">CARNES</h1>
                  <p className="text-xs text-gray-600">& LOMITOS</p>
                </div>
              </div>
            </div>

            <SearchDropdown products={products} />

            <div className="flex items-center space-x-2">
              <CartDropdown />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <ul className="flex flex-col md:flex-row md:space-x-6 py-2">
                <li>
                  <Link href="/categoria/todos" className="block py-2 hover:text-red-200">
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
          </div>
        </nav>
      </header>

      {/* Carousel */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <div className="relative w-full h-full">
          {carouselImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={slide.src || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-sm md:text-lg">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-semibold text-center mb-6">Principales categorías 🥩</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/categoria/${category.slug}`}
                className="text-center block hover:opacity-80 transition-opacity"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs md:text-sm font-medium">{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6">Productos más vendidos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                  {product.badge && <Badge className="absolute top-2 left-2 bg-red-600">{product.badge}</Badge>}
                </div>
                <CardContent className="p-3">
                  <h4 className="font-medium text-sm md:text-base mb-2 line-clamp-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-red-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-1">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => {
                        dispatch({
                          type: "ADD_ITEM",
                          payload: {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image || "/placeholder.svg",
                            priceNumber: Number.parseFloat(product.price.replace("$", "")),
                          },
                        })
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-3">CARNES & LOMITOS</h4>
              <p className="text-sm text-gray-300">
                Tu carnicería virtual de confianza. Productos frescos y de calidad premium.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contacto</h4>
              <p className="text-sm text-gray-300">📞 +1 234 567 890</p>
              <p className="text-sm text-gray-300">📧 info@carnesylomitos.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Horarios</h4>
              <p className="text-sm text-gray-300">Lun - Sáb: 8:00 AM - 8:00 PM</p>
              <p className="text-sm text-gray-300">Dom: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-sm text-gray-400">© 2024 Carnes & Lomitos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
