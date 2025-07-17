"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
// import { Input } from "@/src/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { MapPin, Heart, Phone, Mail, ExternalLink } from "lucide-react"
import { Localizacao } from "@/src/types/localizacao"
import { getLocalizacoes } from "@/lib/api/localizacaoApi"




export default function LocalizacoesPage() {
  // const [searchTerm, setSearchTerm] = useState("")
  // const [selectedState, setSelectedState] = useState("")
  // const [selectedCategory, setSelectedCategory] = useState("")
  const [locations, setLocations] = useState<Localizacao[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocalizacoes()
        setLocations(data)
      } catch (error) {
        console.error("Erro ao buscar localizações:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLocations()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Carregando localizações...</div>
      </div>
    )
  }


  // const states = [
  //   "Todos os Estados",
  //   "São Paulo",
  //   "Rio de Janeiro",
  //   "Minas Gerais",
  //   "Bahia",
  //   "Paraná",
  //   "Rio Grande do Sul",
  //   "Pernambuco",
  //   "Ceará",
  //   "Pará",
  //   "Santa Catarina",
  // ]

  // const categories = ["Todas as Categorias", "Educação", "Saúde", "Meio Ambiente", "Assistência Social"]

  console.log(locations)


  // const filteredLocations = locations.filter((location) => {
    // const matchesSearch =
    //   location.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   location.organizacao.endereco.toLowerCase().includes(searchTerm.toLowerCase());

  //   const matchesState =
  //     selectedState === "" || selectedState === "Todos os Estados" || location.state === selectedState.split(" ")[0]
  //   const matchesCategory =
  //     selectedCategory === "" || selectedCategory === "Todas as Categorias" || location.category === selectedCategory
  //   return matchesSearch && matchesState && matchesCategory
  // })

  // const getCategoryColor = (category: string) => {
  //   const colors = {
  //     Educação: "bg-blue-500",
  //     Saúde: "bg-red-500",
  //     "Meio Ambiente": "bg-green-500",
  //     "Assistência Social": "bg-orange-500",
  //   }
  //   return colors[category as keyof typeof colors] || "bg-gray-500"
  // }

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
        {/* <Card className="mb-8">
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
        </Card> */}

        {/* Results Summary */}
        <div className="mb-6">
          {/* <p className="text-gray-600">{filteredLocations.length} localização(ões) encontrada(s)</p> */}
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
          {locations.map((location) => (
            <Card key={location.id_localizacao} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={"/placeholder.svg"}
                  alt={location.nome}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-2 left-2 bg-blue-500 text-white`}>
                  {location.latitude}
                </Badge>
              </div>

              <CardHeader className="text-gray-700">
                <CardTitle className="text-lg">{location.nome}</CardTitle>
                <CardDescription>teste desc</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{location.organizacao.endereco}</div>
                    <div>
                      {location.organizacao.endereco.split("-")[1]}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{locations.length}</div>
                    <div className="text-xs text-gray-600">Beneficiários</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{locations.length}</div>
                    <div className="text-xs text-gray-600">Projetos</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{locations.length}</div>
                    <div className="text-xs text-gray-600">Arrecadado</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {location.organizacao.telefone}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {location.organizacao.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {location.organizacao.cnpj}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600">
                    <MapPin className="mr-1 h-4 w-4" />
                    Ver no Mapa
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent text-red-600 hover:bg-red-500/10">
                    <Heart className="mr-1 h-4 w-4" />
                    Apoiar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Nenhuma localização encontrada com os filtros selecionados.</p>
          </div>
        )} */}
      </div>
    </div>
  )
}