import Link from "next/link"
import Image from "next/image"
import { Button } from "src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "src/components/ui/card"
import { Heart, Users, MapPin, TrendingUp, ArrowRight } from "lucide-react"

export default function HomePage() {
  const stats = [
    { label: "Doações Realizadas", value: "12.5K+", icon: Heart },
    { label: "Vidas Impactadas", value: "50K+", icon: Users },
    { label: "Cidades Atendidas", value: "150+", icon: MapPin },
    { label: "Crescimento Mensal", value: "25%", icon: TrendingUp },
  ]

  const causes = [
    {
      title: "Educação",
      description: "Apoie projetos educacionais que transformam comunidades",
      image: "/images/educacao.jpeg?height=200&width=300",
      raised: "R$ 45.000",
      goal: "R$ 60.000",
    },
    {
      title: "Saúde",
      description: "Contribua para melhorar o acesso à saúde de qualidade",
      image: "/images/saude.jpeg?height=200&width=300",
      raised: "R$ 32.000",
      goal: "R$ 40.000",
    },
    {
      title: "Meio Ambiente",
      description: "Participe de iniciativas de preservação ambiental",
      image: "/images/meioambiente.jpeg?height=200&width=300",
      raised: "R$ 28.000",
      goal: "R$ 35.000",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforme vidas através da <span className="text-yellow-300">solidariedade</span>
              </h1>
              <p className="text-xl mb-8 text-red-100">
                Conectamos pessoas generosas com organizações que fazem a diferença. Sua doação pode mudar uma vida hoje
                mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100">
                  Fazer Doação
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-500 bg-transparent"
                >
                  Conhecer Projetos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/doacao.jpeg?height=400&width=500"
                alt="Pessoas ajudando"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-red-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Causes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Causas em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos projetos que estão transformando vidas em todo o Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={cause.image || "/placeholder.svg"} alt={cause.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{cause.title}</CardTitle>
                  <CardDescription>{cause.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Arrecadado: {cause.raised}</span>
                      <span>Meta: {cause.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    Apoiar Causa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/doacoes">
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              >
                Ver Todas as Causas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para fazer a diferença?</h2>
          <p className="text-xl mb-8 text-red-100">
            Junte-se a milhares de pessoas que já estão transformando vidas através da solidariedade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100">
              Começar a Doar
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-500 bg-transparent"
            >
              Ser Voluntário
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
