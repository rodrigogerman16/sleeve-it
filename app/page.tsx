"use client"

import { useState, useMemo } from "react"
import { SearchBar } from "@/components/search-bar"
import { GameCard } from "@/components/game-card"
import { Pagination } from "@/components/pagination"
import { mockGames } from "@/lib/data"

const GAMES_PER_PAGE = 5

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredGames = useMemo(() => {
    if (!searchQuery.trim()) return mockGames

    return mockGames.filter((game) => game.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  const totalPages = Math.ceil(filteredGames.length / GAMES_PER_PAGE)

  const paginatedGames = useMemo(() => {
    const startIndex = (currentPage - 1) * GAMES_PER_PAGE
    const endIndex = startIndex + GAMES_PER_PAGE
    return filteredGames.slice(startIndex, endIndex)
  }, [filteredGames, currentPage])

  // Reset to page 1 when search changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-white mb-1">Sleeve It</h1>
            <p className="text-gray-400 text-sm">Encuentra las fundas perfectas para tus juegos</p>
          </div>
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>
      </div>

      {/* Game List */}
      <div className="max-w-md mx-auto px-4 py-6">
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

        <div className="space-y-3">
          {paginatedGames.length > 0 ? (
            paginatedGames.map((game) => <GameCard key={game.id} game={game} />)
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-gray-400">No se encontraron juegos</p>
              <p className="text-gray-500 text-sm mt-1">Intenta con otro término de búsqueda</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>

      {/* Footer */}
      <div className="max-w-md mx-auto px-4 pb-8">
        <div className="text-center">
          <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            💡 Sugerir un juego
          </button>
        </div>
      </div>
    </div>
  )
}
