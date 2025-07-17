"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { MapPin, Search, Heart, Phone, Mail, ExternalLink } from "lucide-react"

export default function LocalizacoesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const states = [
    "Todos os Estados",
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Bahia",
    "Paraná",
    "Rio Grande do Sul",
    "Pernambuco",
    "Ceará",
    "Pará",
    "Santa Catarina",
  ]

  const categories = ["Todas as Categorias", "Educação", "Saúde", "Meio Ambiente", "Assistência Social"]

  const locations = [
    {
      id: 1,
      name: "Centro Educacional Esperança",
      category: "Educação",
      address: "Rua das Flores, 123 - Vila Esperança",
      city: "São Paulo",
      state: "SP",
      phone: "(11) 3456-7890",
      email: "contato@esperanca.org.br",
      website: "www.esperanca.org.br",
      description: "Centro educacional que atende 500 crianças em situação de vulnerabilidade social.",
      beneficiaries: 500,
      projects: 8,
      totalRaised: "R$ 125.000",
      coordinates: { lat: -23.5505, lng: -46.6333 },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Hospital Comunitário São José",
      category: "Saúde",
      address: "Av. Principal, 456 - Centro",
      city: "Rio de Janeiro",
      state: "RJ",
      phone: "(21) 2345-6789",
      email: "saude@sanjose.org.br",
      website: "www.hospitalsanjose.org.br",
      description: "Hospital que oferece atendimento gratuito para comunidades carentes.",
      beneficiaries: 1200,
      projects: 5,
      totalRaised: "R$ 89.000",
      coordinates: { lat: -22.9068, lng: -43.1729 },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Reserva Verde Futuro",
      category: "Meio Ambiente",
      address: "Estrada da Serra, Km 15",
      city: "Belo Horizonte",
      state: "MG",
      phone: "(31) 3456-7890",
      email: "preservacao@verdefuturo.org.br",
      website: "www.verdefuturo.org.br",
      description: "Área de preservação ambiental com projetos de reflorestamento.",
      beneficiaries: 800,
      projects: 12,
      totalRaised: "R$ 67.000",
      coordinates: { lat: -19.9167, lng: -43.9345 },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Casa de Apoio Mãos Solidárias",
      category: "Assistência Social",
      address: "Rua da Solidariedade, 789",
      city: "Salvador",
      state: "BA",
      phone: "(71) 3456-7890",
      email: "ajuda@maossolidarias.org.br",
      website: "www.maossolidarias.org.br",
      description: "Casa de apoio para famílias em situação de vulnerabilidade.",
      beneficiaries: 300,
      projects: 6,
      totalRaised: "R$ 45.000",
      coordinates: { lat: -12.9714, lng: -38.5014 },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Escola Rural Saber",
      category: "Educação",
      address: "Zona Rural - Distrito de Paz",
      city: "Curitiba",
      state: "PR",
      phone: "(41) 3456-7890",
      email: "educacao@escolasaber.org.br",
      website: "www.escolasaber.org.br",
      description: "Escola rural que atende crianças de comunidades agrícolas.",
      beneficiaries: 150,
      projects: 4,
      totalRaised: "R$ 32.000",
      coordinates: { lat: -25.4284, lng: -49.2733 },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Clínica Popular Vida",
      category: "Saúde",
      address: "Rua da Saúde, 321 - Bairro Novo",
      city: "Porto Alegre",
      state: "RS",
      phone: "(51) 3456-7890",
      email: "atendimento@clinicavida.org.br",
      website: "www.clinicavida.org.br",
      description: "Clínica que oferece consultas e exames gratuitos.",
      beneficiaries: 600,
      projects: 7,
      totalRaised: "R$ 78.000",
      coordinates: { lat: -30.0346, lng: -51.2177 },
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredLocations = locations.filter((location) => {
    const matchesSearch =
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState =
      selectedState === "" || selectedState === "Todos os Estados" || location.state === selectedState.split(" ")[0]
    const matchesCategory =
      selectedCategory === "" || selectedCategory === "Todas as Categorias" || location.category === selectedCategory
    return matchesSearch && matchesState && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      Educação: "bg-blue-500",
      Saúde: "bg-red-500",
      "Meio Ambiente": "bg-green-500",
      "Assistência Social": "bg-orange-500",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossas Localizações</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Encontre projetos e organizações parceiras em todo o Brasil
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Buscar Localizações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input
                  placeholder="Buscar por nome ou cidade..."
                  value={searchTerm}
                  onChange={(e: any) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredLocations.length} localização(ões) encontrada(s)</p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Mapa das Localizações
            </CardTitle>
            <CardDescription>Visualize todas as organizações parceiras no mapa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Mapa interativo será carregado aqui</p>
                <p className="text-sm">Integração com Google Maps ou similar</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => (
            <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-2 left-2 ${getCategoryColor(location.category)} text-white`}>
                  {location.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{location.name}</CardTitle>
                <CardDescription>{location.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{location.address}</div>
                    <div>
                      {location.city}, {location.state}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{location.beneficiaries}</div>
                    <div className="text-xs text-gray-600">Beneficiários</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{location.projects}</div>
                    <div className="text-xs text-gray-600">Projetos</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{location.totalRaised}</div>
                    <div className="text-xs text-gray-600">Arrecadado</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {location.phone}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {location.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {location.website}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600">
                    <MapPin className="mr-1 h-4 w-4" />
                    Ver no Mapa
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Heart className="mr-1 h-4 w-4" />
                    Apoiar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Nenhuma localização encontrada com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  )
}