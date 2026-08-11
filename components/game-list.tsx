"use client"

import { useState, useMemo } from "react"
import { SearchBar } from "@/components/search-bar"
import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import type { Game } from "@/lib/supabase"

const GAMES_PER_PAGE = 12

interface GameListProps {
  initialGames: Game[]
}

export function GameList({ initialGames }: GameListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredGames = useMemo(() => {
    if (!searchQuery.trim()) return initialGames

    return initialGames.filter((game) => game.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [initialGames, searchQuery])

  const totalPages = Math.ceil(filteredGames.length / GAMES_PER_PAGE)

  const paginatedGames = useMemo(() => {
    const startIndex = (currentPage - 1) * GAMES_PER_PAGE
    const endIndex = startIndex + GAMES_PER_PAGE
    return filteredGames.slice(startIndex, endIndex)
  }, [filteredGames, currentPage])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-md sm:max-w-3xl lg:max-w-5xl mx-auto px-4 py-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-white mb-1">Sleeve It</h1>
            <p className="text-gray-400 text-sm">Encuentra las fundas perfectas para tus juegos</p>
          </div>
          <div className="max-w-md mx-auto">
            <SearchBar value={searchQuery} onChange={handleSearchChange} />
          </div>
        </div>
      </div>

      {/* Game List */}
      <div className="max-w-md sm:max-w-3xl lg:max-w-5xl mx-auto px-4 py-6">
        {/* Results Info */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm text-center">
            {searchQuery ? (
              <>
                {filteredGames.length} resultado{filteredGames.length !== 1 ? "s" : ""} para "{searchQuery}"
              </>
            ) : (
              <>{filteredGames.length} juegos disponibles</>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {paginatedGames.length > 0 ? (
            paginatedGames.map((game) => <GameCard key={game.id} game={game} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-gray-400">No se encontraron juegos</p>
              <p className="text-gray-400 text-sm mt-1">Intenta con otro término de búsqueda</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>

      {/* Footer */}
      <div className="max-w-md sm:max-w-3xl lg:max-w-5xl mx-auto px-4 pb-8">
        <div className="text-center">
          <a
            href="https://github.com/rodrigogerman16/sleeve-it/issues/new?title=Sugerencia%20de%20juego"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
          >
            💡 Sugerir un juego
          </a>
        </div>
      </div>
    </div>
  )
}
