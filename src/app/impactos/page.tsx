import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Heart, Users, MapPin, School, Stethoscope, Leaf, Home, Award } from "lucide-react"

// Tipagem
interface OverallStat {
  label: string
  value: string
  icon: string
  color: string
}

interface CategoryImpact {
  category: string
  icon: string
  color: string
  stats: {
    projects: number
    beneficiaries: number
    amount: string
  }
  achievements: string[]
}

interface MonthlyProgress {
  month: string
  donations: number
  projects: number
}

interface Testimonial {
  name: string
  role: string
  text: string
  location: string
}

interface ImpactosData {
  overallStats: OverallStat[]
  categoryImpacts: CategoryImpact[]
  monthlyProgress: MonthlyProgress[]
  testimonials: Testimonial[]
}

const icons: Record<string, any> = { Heart, Users, MapPin, School, Stethoscope, Leaf, Home, Award }

export default function ImpactosPage() {
  const [data, setData] = useState<ImpactosData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://projeto-final-m4-backend.onrender.com/impactos")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar dados de impacto")
        return res.json()
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-center mt-10 text-gray-500">Carregando...</div>
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosso Impacto</h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">
          Veja como suas doações estão transformando vidas e comunidades em todo o Brasil
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Estatísticas Gerais */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Estatísticas Gerais</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data?.overallStats.map((stat, index) => {
              const Icon = icons[stat.icon]
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Impacto por Categoria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impacto por Categoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data?.categoryImpacts.map((category, index) => {
              const Icon = icons[category.icon]
              return (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className={`${category.color} text-white`}>
                    <div className="flex items-center">
                      <Icon className="h-8 w-8 mr-3" />
                      <div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                        <CardDescription className="text-gray-100">
                          {category.stats.projects} projetos concluídos
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{category.stats.projects}</div>
                        <div className="text-sm text-gray-600">Projetos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{category.stats.beneficiaries.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Beneficiários</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{category.stats.amount}</div>
                        <div className="text-sm text-gray-600">Arrecadado</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Principais Conquistas:</h4>
                      <ul className="space-y-2">
                        {category.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Progresso Mensal */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Progresso Mensal</h2>
          <Card>
            <CardHeader>
              <CardTitle>Evolução de Doações e Projetos</CardTitle>
              <CardDescription>Acompanhe nosso crescimento ao longo dos meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {data?.monthlyProgress.map((month, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{month.month}</span>
                      <div className="flex space-x-4 text-sm text-gray-600">
                        <span>{month.donations}% doações</span>
                        <span>{month.projects} projetos</span>
                      </div>
                    </div>
                    <Progress value={month.donations} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Depoimentos */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Histórias de Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data?.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className="h-4 w-4 text-red-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
