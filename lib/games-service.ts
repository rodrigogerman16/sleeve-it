import { supabase, type Game } from "./supabase"

export async function getAllGames(): Promise<Game[]> {
  const { data: games, error: gamesError } = await supabase
    .from("games")
    .select(`
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
        price
      )
    `)
    .order("name")

  if (gamesError) {
    console.error("Error fetching games:", gamesError)
    return []
  }

  return games.map((game) => ({
    id: game.id,
    slug: game.slug,
    name: game.name,
    image: game.image || undefined,
    cards: game.cards.map((card) => ({
      id: card.id,
      size: card.size,
      dimensions: card.dimensions,
      quantity: card.quantity,
      sleeveType: card.sleeve_type,
      brand: card.brand,
      model: card.model,
    })),
    purchaseLinks: game.purchase_links.map((link) => ({
      id: link.id,
      name: link.name,
      url: link.url,
      price: link.price || undefined,
    })),
  }))
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  const { data: game, error } = await supabase
    .from("games")
    .select(`
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
        price
      )
    `)
    .eq("slug", slug)
    .single()

  if (error || !game) {
    console.error("Error fetching game:", error)
    return null
  }

  return {
    id: game.id,
    slug: game.slug,
    name: game.name,
    image: game.image || undefined,
    cards: game.cards.map((card) => ({
      id: card.id,
      size: card.size,
      dimensions: card.dimensions,
      quantity: card.quantity,
      sleeveType: card.sleeve_type,
      brand: card.brand,
      model: card.model,
    })),
    purchaseLinks: game.purchase_links.map((link) => ({
      id: link.id,
      name: link.name,
      url: link.url,
      price: link.price || undefined,
    })),
  }
}

export async function searchGames(query: string): Promise<Game[]> {
  const { data: games, error } = await supabase
    .from("games")
    .select(`
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
        price
      )
    `)
    .ilike("name", `%${query}%`)
    .order("name")

  if (error) {
    console.error("Error searching games:", error)
    return []
  }

  return games.map((game) => ({
    id: game.id,
    slug: game.slug,
    name: game.name,
    image: game.image || undefined,
    cards: game.cards.map((card) => ({
      id: card.id,
      size: card.size,
      dimensions: card.dimensions,
      quantity: card.quantity,
      sleeveType: card.sleeve_type,
      brand: card.brand,
      model: card.model,
    })),
    purchaseLinks: game.purchase_links.map((link) => ({
      id: link.id,
      name: link.name,
      url: link.url,
      price: link.price || undefined,
    })),
  }))
}
