"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Game } from "@/lib/supabase"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const totalCards = game.cards.reduce((total, card) => total + card.quantity, 0)

  return (
    <Link href={`/game/${game.slug}`}>
      <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-200 hover:border-purple-500/50 cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            {game.image && <div className="text-2xl flex-shrink-0">{game.image}</div>}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium truncate">{game.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{totalCards} cartas</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
