"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin, FileText, Award, Truck, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

const benefits = [
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Precios Preferenciales",
    description: "Descuentos especiales del 15% al 30% según volumen de compra mensual.",
  },
  {
    icon: <Truck className="h-8 w-8 text-blue-600" />,
    title: "Entrega Gratuita",
    description: "Envío sin costo en pedidos superiores a $500 dentro del área metropolitana.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Asesor Dedicado",
    description: "Un representante comercial exclusivo para atender todas tus necesidades.",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Horarios Extendidos",
    description: "Atención prioritaria y horarios especiales para distribuidores.",
  },
]

const requirements = [
  "Registro como empresa o comerciante individual",
  "Compra mínima mensual de $1,000",
  "Referencias comerciales verificables",
  "Capacidad de almacenamiento refrigerado",
  "Experiencia en el sector alimentario (preferible)",
]

const priceRanges = [
  {
    volume: "$1,000 - $2,999",
    discount: "15%",
    badge: "Bronce",
    color: "bg-amber-600",
  },
  {
    volume: "$3,000 - $7,999",
    discount: "20%",
    badge: "Plata",
    color: "bg-gray-500",
  },
  {
    volume: "$8,000 - $14,999",
    discount: "25%",
    badge: "Oro",
    color: "bg-yellow-500",
  },
  {
    volume: "$15,000+",
    discount: "30%",
    badge: "Platino",
    color: "bg-purple-600",
  },
]

export default function WholesaleDistributorPage() {
  const openWhatsAppWholesale = () => {
    window.open("https://wa.me/1234567890?text=Hola, me interesa información sobre distribución mayorista", "_blank")
  }

  const openEmailWholesale = () => {
    window.location.href = "mailto:mayoristas@carnesylomitos.com?subject=Consulta sobre Distribución Mayorista"
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
                <Link href="/acerca-de-nosotros" className="block py-2 hover:text-red-200">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/distribuidor-mayorista" className="block py-2 hover:text-red-200 text-red-200">
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
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Distribuidor Mayorista</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Distribución mayorista"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 bg-opacity-80 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Distribuidor Mayorista</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Únete a nuestra red de distribuidores y accede a precios preferenciales
            </p>
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

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beneficios de ser Distribuidor</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Accede a ventajas exclusivas diseñadas para hacer crecer tu negocio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow border-t-4 border-blue-600"
              >
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Ranges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Niveles de Descuento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descuentos progresivos según tu volumen de compra mensual
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceRanges.map((range, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${range.color} text-white py-3`}>
                  <Badge className="bg-white text-gray-900 font-bold">{range.badge}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Volumen Mensual</h3>
                  <p className="text-gray-600 mb-4">{range.volume}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{range.discount}</div>
                  <p className="text-sm text-gray-500">de descuento</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Requisitos para ser Distribuidor</h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button onClick={openWhatsAppWholesale} className="bg-blue-600 hover:bg-blue-700 mr-4">
                  Consultar por WhatsApp
                </Button>
                <Button onClick={openEmailWholesale} variant="outline">
                  Enviar Email
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Requisitos distribuidor"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* License and Location */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Información Legal y Ubicación</h2>
            <p className="text-lg opacity-90">Empresa legalmente constituida y certificada</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* License Information */}
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Información Legal</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Razón Social</h4>
                  <p className="text-gray-600">Carnes & Lomitos S.A.S.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">NIT</h4>
                  <p className="text-gray-600">900.123.456-7</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Registro INVIMA</h4>
                  <p className="text-gray-600">RSOA-123456789</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certificaciones</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800">HACCP</Badge>
                    <Badge className="bg-blue-100 text-blue-800">ISO 22000</Badge>
                    <Badge className="bg-purple-100 text-purple-800">BPM</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Information */}
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span>Ubicación y Contacto</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dirección Principal</h4>
                  <p className="text-gray-600">Av. Principal 123, Zona Industrial</p>
                  <p className="text-gray-600">Ciudad, Departamento - CP 12345</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Planta de Procesamiento</h4>
                  <p className="text-gray-600">Carrera 45 #67-89, Parque Industrial</p>
                  <p className="text-gray-600">Ciudad, Departamento - CP 12346</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contacto Mayoristas</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+1 234 567 891 (Línea directa)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>mayoristas@carnesylomitos.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Registro</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sigue estos simples pasos para convertirte en nuestro distribuidor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Contacto Inicial",
                description: "Envía tu consulta por WhatsApp o email con información básica de tu empresa.",
              },
              {
                step: "2",
                title: "Evaluación",
                description: "Nuestro equipo comercial evaluará tu solicitud y programará una reunión.",
              },
              {
                step: "3",
                title: "Documentación",
                description: "Presenta los documentos requeridos y firma el acuerdo comercial.",
              },
              {
                step: "4",
                title: "Activación",
                description: "Recibe tus credenciales y comienza a disfrutar de los beneficios.",
              },
            ].map((process, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ser nuestro distribuidor?</h2>
          <p className="text-lg mb-8 opacity-90">
            Únete a nuestra red de distribuidores y haz crecer tu negocio con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openWhatsAppWholesale} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Contactar por WhatsApp
            </Button>
            <Button onClick={openEmailWholesale} className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Enviar Email
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
              <p className="text-sm text-gray-300">🏢 mayoristas@carnesylomitos.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Horarios</h4>
              <p className="text-sm text-gray-300">Lun - Sáb: 8:00 AM - 8:00 PM</p>
              <p className="text-sm text-gray-300">Dom: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-300">Mayoristas: 24/7</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-sm text-gray-400">© 2024 Carnes & Lomitos S.A.S. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
