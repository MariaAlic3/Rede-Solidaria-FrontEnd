"use client"; // Necessário para componentes que usam hooks do React

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

// Imports de componentes customizados do projeto
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";

// Ícones do lucide-react
import {
  Building,
  Search,
  Heart,
  MapPin,
  Calendar,
  Phone,
  Mail,
  ExternalLink,
  Star,
} from "lucide-react";

// Formulário com validação usando zod e react-hook-form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Schema de validação do formulário
const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
});

// Tipos para organização e dados do formulário
type Organization = {
  id: string;
  name: string;
  description: string;
  category?: string;
  location?: string;
  createdAt?: string;
};

type FormData = z.infer<typeof formSchema>;

// Componente para renderizar a data apenas no cliente
function ClientDate({ date }: { date: string }) {
  const [formatted, setFormatted] = useState("");
  useEffect(() => {
    setFormatted(new Date(date).toLocaleDateString());
  }, [date]);
  return <>{formatted}</>;
}

export default function OrganizationsPage() {
  // Estados para lista, loading, erro e filtros  
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Configuração do formulário
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Função para buscar organizações na API
  const fetchOrganizations = () => {
    setLoading(true);
    setError("");
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/organizations`)
      .then((res) => setOrganizations(res.data))
      .catch(() => setError("Erro ao carregar organizações"))
      .finally(() => setLoading(false));
  };

  // Busca as organizações ao montar o componente
  useEffect(() => {
    fetchOrganizations();
  }, []);

  // Função para criar nova organização
  const onSubmit = async (data: FormData) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/organizations`, data);
      reset();
      fetchOrganizations(); // Atualiza lista após criar
    } catch {
      alert("Erro ao criar organização");
    }
  };

  // Filtra organizações pelo termo de busca e categoria
  const filteredOrganizations = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || org.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categorias disponíveis para filtro
  const categories = [
    "Educação",
    "Saúde",
    "Meio Ambiente",
    "Assistência Social",
    "Direitos Humanos",
  ];

  // Função para definir cor do badge de categoria
  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      Educação: "bg-blue-500",
      Saúde: "bg-red-500",
      "Meio Ambiente": "bg-green-500",
      "Assistência Social": "bg-orange-500",
      "Direitos Humanos": "bg-purple-500",
    };
    return category ? colors[category] || "bg-gray-500" : "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da página */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Organizações Parceiras
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Conheça as organizações que fazem a diferença e escolha como apoiar
            suas causas
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Formulário de cadastro */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Adicionar Nova Organização</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid md:grid-cols-2 gap-4"
            >
              <div>
                <Input
                  placeholder="Nome"
                  {...register("name")}
                  className="w-full"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Descrição"
                  {...register("description")}
                  className="w-full"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Salvando..." : "Criar Organização"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Filtros de busca e categoria */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Buscar Organizações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Buscar por nome ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Mensagens de carregamento e erro */}
        {loading && <p>Carregando...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Lista de organizações filtradas */}
        <div className="space-y-8">
          {filteredOrganizations.map((org) => (
            <Card
              key={org.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg"
                  alt={org.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                  <Avatar className="h-16 w-16 border-4 border-white">
                    <AvatarImage src="/placeholder.svg" alt={org.name} />
                    <AvatarFallback className="text-lg font-bold">
                      {/* Mostra as iniciais da organização */}
                      {org.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <h2 className="text-xl font-bold">{org.name}</h2>
                    {org.category && (
                      <Badge
                        className={`${getCategoryColor(
                          org.category
                        )} text-white`}
                      >
                        {org.category}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{org.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {/* Mostra data de criação ou texto padrão */}
                    {org.createdAt
                      ? <ClientDate date={org.createdAt} />
                      : "Data desconhecida"}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {org.location || "Localização não informada"}
                  </div>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Organização
                  </div>
                </div>

                {/* Botões de ação */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button className="bg-red-500 hover:bg-red-600">
                    <Heart className="mr-2 h-4 w-4" />
                    Fazer Doação
                  </Button>
                  <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mensagem caso não haja resultados */}
        {filteredOrganizations.length === 0 && !loading && (
          <div className="text-center py-12">
            <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Nenhuma organização encontrada com os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
