"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Award, Users, Heart, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchDropdown } from "@/components/search-dropdown"
import { CartDropdown } from "@/components/cart-dropdown"

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
  // ... otros productos para el buscador
]

const values = [
  {
    icon: <Award className="h-8 w-8 text-red-600" />,
    title: "Calidad Premium",
    description:
      "Seleccionamos solo los mejores cortes de carne, garantizando frescura y sabor excepcional en cada producto.",
  },
  {
    icon: <Users className="h-8 w-8 text-red-600" />,
    title: "Servicio Personalizado",
    description:
      "Nuestro equipo de expertos te asesora para elegir el corte perfecto según tus necesidades y preferencias.",
  },
  {
    icon: <Heart className="h-8 w-8 text-red-600" />,
    title: "Tradición Familiar",
    description:
      "Más de 30 años de experiencia en el rubro cárnico, manteniendo las tradiciones de calidad de generación en generación.",
  },
  {
    icon: <Clock className="h-8 w-8 text-red-600" />,
    title: "Frescura Garantizada",
    description:
      "Productos frescos todos los días. Trabajamos con proveedores locales para asegurar la máxima calidad.",
  },
]

const team = [
  {
    name: "Carlos Rodríguez",
    role: "Fundador y Maestro Carnicero",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Con más de 30 años de experiencia, Carlos fundó nuestra carnicería con la visión de ofrecer la mejor calidad.",
  },
  {
    name: "María González",
    role: "Gerente de Calidad",
    image: "/placeholder.svg?height=200&width=200",
    description:
      "María supervisa la selección y calidad de todos nuestros productos, garantizando los más altos estándares.",
  },
  {
    name: "Roberto Silva",
    role: "Especialista en Cortes",
    image: "/placeholder.svg?height=200&width=200",
    description: "Roberto es nuestro experto en cortes especiales y asesoramiento personalizado para cada cliente.",
  },
]

export default function AboutPage() {
  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hola, me gustaría conocer más sobre Carnes & Lomitos", "_blank")
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

            <SearchDropdown products={products} />

            <div className="flex items-center space-x-2">
              <CartDropdown />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col md:flex-row md:space-x-6 py-2">
              <li>
                <Link href="/categoria/todos" className="block py-2 hover:text-red-200">
                  Todas las categorías
                </Link>
              </li>
              <li>
                <Link href="/acerca-de-nosotros" className="block py-2 hover:text-red-200 text-red-200">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/distribuidor-mayorista" className="block py-2 hover:text-red-200">
                  Distribuidor mayorista
                </Link>
              </li>
            
              <li>
                <button onClick={openWhatsApp} className="block py-2 hover:text-red-200 text-left">
                  Soporte
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Acerca de Nosotros</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Nuestra carnicería" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Acerca de Nosotros</h1>
            <p className="text-lg md:text-xl max-w-2xl">Tu carnicería virtual de confianza desde 1990</p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              <span>Volver al inicio</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Desde 1990, <strong>Carnes & Lomitos</strong> ha sido sinónimo de calidad y confianza en el mundo de
                  las carnes premium. Lo que comenzó como una pequeña carnicería familiar en el corazón de la ciudad, se
                  ha transformado en una referencia para los amantes de la buena carne.
                </p>
                <p>
                  Nuestra pasión por la excelencia nos ha llevado a seleccionar cuidadosamente cada corte, trabajando
                  directamente con productores locales que comparten nuestros valores de calidad y sustentabilidad.
                </p>
                <p>
                  Hoy, con más de 30 años de experiencia, hemos dado el salto al mundo digital para acercarte la mejor
                  carne directamente a tu hogar, manteniendo siempre la calidad y el servicio personalizado que nos
                  caracteriza.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Historia de la carnicería"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario y nos comprometen con la excelencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas que hacen posible la calidad excepcional de nuestros productos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
            <p className="text-lg opacity-90">Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="opacity-90">+1 234 567 890</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="opacity-90">info@carnesylomitos.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p className="opacity-90">Av. Principal 123, Ciudad</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-3">CARNES & LOMITOS</h4>
              <p className="text-sm text-gray-300">
                Tu carnicería virtual de confianza. Productos frescos y de calidad premium desde 1990.
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
