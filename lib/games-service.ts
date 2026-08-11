import { supabase, type Game } from "./supabase"

const GAME_SELECT = `
  id,
  slug,
  name,
  image,
  cards (
    id,
    size,
    dimensions,
    quantity,
    sleeve_type,
    brand,
    model
  ),
  purchase_links (
    id,
    name,
    url,
    price,
    category,
    dimensions
  )
`

function mapGame(game: any): Game {
  return {
    id: game.id,
    slug: game.slug,
    name: game.name,
    image: game.image || undefined,
    cards: game.cards.map((card: any) => ({
      id: card.id,
      size: card.size,
      dimensions: card.dimensions,
      quantity: card.quantity,
      sleeveType: card.sleeve_type,
      brand: card.brand,
      model: card.model,
    })),
    purchaseLinks: game.purchase_links.map((link: any) => ({
      id: link.id,
      name: link.name,
      url: link.url,
      price: link.price || undefined,
      category: link.category,
      dimensions: link.dimensions || undefined,
    })),
  }
}

export async function getAllGames(): Promise<Game[]> {
  const { data: games, error } = await supabase.from("games").select(GAME_SELECT).order("name")

  if (error) {
    throw new Error(`Error fetching games: ${error.message}`)
  }

  return games.map(mapGame)
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  const { data: game, error } = await supabase.from("games").select(GAME_SELECT).eq("slug", slug).single()

  if (error) {
    // PGRST116 = no row matched the query - a genuine 404, not a failure.
    if (error.code === "PGRST116") {
      return null
    }
    throw new Error(`Error fetching game "${slug}": ${error.message}`)
  }

  return mapGame(game)
}
