import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getGameBySlug } from "@/lib/games-service"

interface GamePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params
  const game = await getGameBySlug(slug)

  if (!game) {
    notFound()
  }

  const hasMultipleCardTypes = game.cards.length > 1

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-md sm:max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                aria-label="Volver a la lista de juegos"
                className="text-gray-400 hover:text-white p-2"
              >
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
      <div className="max-w-md sm:max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Cards Information */}
        <div className="space-y-4">
          {game.cards.length === 0 && (
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl mb-2">🃏</div>
                <p className="text-white font-medium mb-1">Todavía no tenemos datos de cartas</p>
                <p className="text-gray-400 text-sm">
                  No sabemos qué sleeve recomendar para {game.name} todavía.{" "}
                  <a
                    href={`https://github.com/rodrigogerman16/sleeve-it/issues/new?title=${encodeURIComponent(
                      `Datos de cartas para ${game.name}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Sugerí los datos
                  </a>{" "}
                  si los tenés.
                </p>
              </CardContent>
            </Card>
          )}

          {game.cards.map((cardInfo) => (
            <Card key={cardInfo.id} className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg flex items-center space-x-2">
                  <Package className="h-5 w-5 text-purple-400" />
                  <span>Información de Cartas{hasMultipleCardTypes ? ` — ${cardInfo.size}` : ""}</span>
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

                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-1">Consejo</p>
                  <p className="text-white text-sm">
                    Este set tiene {cardInfo.quantity} cartas. Te recomendamos comprar al menos{" "}
                    <span className="font-medium">{Math.ceil(cardInfo.quantity * 1.1)} fundas</span> (10% extra
                    para reemplazos futuros).
                  </p>
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
            {game.purchaseLinks.some((link) => link.price) && (
              <p className="text-gray-400 text-xs mt-3">
                Precios de referencia en USD. Pueden variar en el sitio del vendedor.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
