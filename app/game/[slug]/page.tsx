import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getGameBySlug } from "@/lib/games-service"

interface GamePageProps {
  params: {
    slug: string
  }
}

export default async function GamePage({ params }: GamePageProps) {
  const game = await getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              {game.image && <div className="text-2xl flex-shrink-0">{game.image}</div>}
              <h1 className="text-xl font-bold text-white truncate">{game.name}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Cards Information */}
        <div className="space-y-4">
          {game.cards.map((cardInfo, index) => (
            <Card key={cardInfo.id} className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg flex items-center space-x-2">
                  <Package className="h-5 w-5 text-purple-400" />
                  <span>Información de Cartas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Cantidad</p>
                    <p className="text-white font-medium">{cardInfo.quantity} cartas</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Tamaño</p>
                    <p className="text-white font-medium">{cardInfo.size}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Dimensiones</p>
                  <p className="text-white font-medium">{cardInfo.dimensions}</p>
                </div>

                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-2">Sleeve Recomendado</p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-green-900/30 text-green-300 border-green-700">
                      {cardInfo.brand}
                    </Badge>
                    <p className="text-white font-medium">{cardInfo.model}</p>
                    <p className="text-gray-400 text-sm">{cardInfo.sleeveType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Purchase Links */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-lg flex items-center space-x-2">
              <ExternalLink className="h-5 w-5 text-green-400" />
              <span>Dónde Comprar</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {game.purchaseLinks.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors border border-gray-600 hover:border-green-500/50">
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                      <span className="text-white font-medium">{link.name}</span>
                    </div>
                    {link.price && (
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        {link.price}
                      </Badge>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">💡</div>
              <div>
                <p className="text-white font-medium mb-1">Consejo</p>
                <p className="text-gray-400 text-sm">
                  Considera comprar un 10% extra de fundas para reemplazos futuros.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
