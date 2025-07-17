import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">DoaçõesBR</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Conectamos pessoas generosas com organizações que fazem a diferença, criando um impacto social positivo em
              todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/doacoes" className="text-gray-300 hover:text-white">
                  Como Doar
                </Link>
              </li>
              <li>
                <Link href="/impactos" className="text-gray-300 hover:text-white">
                  Nosso Impacto
                </Link>
              </li>
              <li>
                <Link href="/organizacoes" className="text-gray-300 hover:text-white">
                  Organizações
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} DoaçõesBR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
