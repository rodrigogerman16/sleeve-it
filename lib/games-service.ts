import { supabase, isSupabaseConfigured, type Game } from "./supabase"

// Mock data fallback
const mockGames: Game[] = [
  {
    id: "1",
    slug: "wingspan",
    name: "Wingspan",
    image: "🦅",
    cards: [
      {
        id: "1",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 170,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Classic",
      },
    ],
    purchaseLinks: [
      { id: "1", name: "Amazon", url: "https://www.amazon.com/dp/B07XLBQZPX", price: "$12.99" },
      {
        id: "2",
        name: "SleeveKing",
        url: "https://www.sleevekings.com/products/standard-card-sleeves",
        price: "$11.50",
      },
    ],
  },
  {
    id: "2",
    slug: "gloomhaven",
    name: "Gloomhaven",
    image: "⚔️",
    cards: [
      {
        id: "2",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 458,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
      {
        id: "3",
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 305,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { id: "3", name: "Amazon", url: "https://www.amazon.com/dp/B01LZXVN4P", price: "$24.99" },
      {
        id: "4",
        name: "BoardGameBliss",
        url: "https://www.boardgamebliss.com/products/gloomhaven-sleeves",
        price: "$22.50",
      },
    ],
  },
  {
    id: "3",
    slug: "azul",
    name: "Azul",
    image: "🎨",
    cards: [
      {
        id: "4",
        size: "Cuadrado",
        dimensions: "70 x 70 mm",
        quantity: 100,
        sleeveType: "Cuadrado Premium",
        brand: "Ultra Pro",
        model: "Square",
      },
    ],
    purchaseLinks: [
      { id: "5", name: "Amazon", url: "https://www.amazon.com/dp/B00NHZ61HU", price: "$8.99" },
      { id: "6", name: "CoolStuffInc", url: "https://www.coolstuffinc.com/p/Card+Sleeves", price: "$7.99" },
    ],
  },
  {
    id: "4",
    slug: "terraforming-mars",
    name: "Terraforming Mars",
    image: "🚀",
    cards: [
      {
        id: "5",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 208,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { id: "7", name: "Amazon", url: "https://www.amazon.com/dp/B00VMK6150", price: "$14.99" },
      { id: "8", name: "Miniature Market", url: "https://miniaturemarket.com/sleeves", price: "$13.50" },
    ],
  },
  {
    id: "5",
    slug: "spirit-island",
    name: "Spirit Island",
    image: "🏝️",
    cards: [
      {
        id: "6",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 123,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { id: "9", name: "Amazon", url: "https://www.amazon.com/dp/B01MUHIMMC", price: "$11.99" },
      { id: "10", name: "SleeveKing", url: "https://www.sleevekings.com/products/premium-sleeves", price: "$10.50" },
    ],
  },
  {
    id: "6",
    slug: "dominion",
    name: "Dominion",
    image: "👑",
    cards: [
      {
        id: "7",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 500,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { id: "11", name: "Amazon", url: "https://www.amazon.com/dp/B008YJOW9O", price: "$18.99" },
      { id: "12", name: "CardKingdom", url: "https://www.cardkingdom.com/sleeves", price: "$17.50" },
    ],
  },
  {
    id: "7",
    slug: "7-wonders",
    name: "7 Wonders",
    image: "🏛️",
    cards: [
      {
        id: "8",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 149,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { id: "13", name: "Amazon", url: "https://www.amazon.com/dp/B0043KJW5M", price: "$11.99" },
      {
        id: "14",
        name: "BoardGameBliss",
        url: "https://www.boardgamebliss.com/products/7-wonders-sleeves",
        price: "$10.99",
      },
    ],
  },
  {
    id: "8",
    slug: "pandemic",
    name: "Pandemic",
    image: "🦠",
    cards: [
      {
        id: "9",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 110,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { id: "15", name: "Amazon", url: "https://www.amazon.com/dp/B00A2HD40E", price: "$9.99" },
      { id: "16", name: "Target", url: "https://www.target.com/p/pandemic-sleeves", price: "$9.50" },
    ],
  },
  {
    id: "9",
    slug: "magic-the-gathering",
    name: "Magic: The Gathering",
    image: "🔮",
    cards: [
      {
        id: "10",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 75,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Matte",
      },
    ],
    purchaseLinks: [
      { id: "17", name: "Amazon", url: "https://www.amazon.com/dp/B082PQBZQX", price: "$12.99" },
      { id: "18", name: "TCGPlayer", url: "https://www.tcgplayer.com/sleeves", price: "$11.99" },
      { id: "19", name: "CardKingdom", url: "https://www.cardkingdom.com/sleeves", price: "$12.50" },
    ],
  },
  {
    id: "10",
    slug: "pokemon-tcg",
    name: "Pokémon Trading Card Game",
    image: "⚡",
    cards: [
      {
        id: "11",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 60,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Pokémon",
      },
    ],
    purchaseLinks: [
      { id: "20", name: "Amazon", url: "https://www.amazon.com/dp/B08HVDQB8Y", price: "$8.99" },
      { id: "21", name: "Pokémon Center", url: "https://www.pokemoncenter.com/sleeves", price: "$9.99" },
      { id: "22", name: "TCGPlayer", url: "https://www.tcgplayer.com/pokemon-sleeves", price: "$8.50" },
    ],
  },
  {
    id: "11",
    slug: "codenames",
    name: "Codenames",
    image: "🕵️",
    cards: [
      {
        id: "12",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 200,
        sleeveType: "Estándar Premium",
        brand: "Czech Games Edition",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { id: "23", name: "Amazon", url: "https://www.amazon.com/dp/B014Q1XX9S", price: "$14.99" },
      { id: "24", name: "Czech Games Edition", url: "https://czechgames.com/sleeves", price: "$15.50" },
    ],
  },
  {
    id: "12",
    slug: "exploding-kittens",
    name: "Exploding Kittens",
    image: "💥",
    cards: [
      {
        id: "13",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 56,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { id: "25", name: "Amazon", url: "https://www.amazon.com/dp/B00HGDVOQM", price: "$6.99" },
      { id: "26", name: "Target", url: "https://www.target.com/p/exploding-kittens-sleeves", price: "$6.50" },
    ],
  },
  {
    id: "13",
    slug: "scythe",
    name: "Scythe",
    image: "🤖",
    cards: [
      {
        id: "14",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 80,
        sleeveType: "Estándar Premium",
        brand: "Stonemaier Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { id: "27", name: "Amazon", url: "https://www.amazon.com/dp/B01IPUGYK6", price: "$8.99" },
      { id: "28", name: "Stonemaier Games", url: "https://stonemaiergames.com/sleeves", price: "$9.50" },
    ],
  },
  {
    id: "14",
    slug: "everdell",
    name: "Everdell",
    image: "🌳",
    cards: [
      {
        id: "15",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 128,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Matte",
      },
    ],
    purchaseLinks: [
      { id: "29", name: "Amazon", url: "https://www.amazon.com/dp/B01MQSM8TZ", price: "$10.99" },
      { id: "30", name: "Starling Games", url: "https://starlinggames.com/sleeves", price: "$11.50" },
    ],
  },
  {
    id: "15",
    slug: "splendor",
    name: "Splendor",
    image: "💎",
    cards: [
      {
        id: "16",
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 90,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { id: "31", name: "Amazon", url: "https://www.amazon.com/dp/B00IZEUFIA", price: "$8.99" },
      { id: "32", name: "SleeveKing", url: "https://www.sleevekings.com/products/splendor-sleeves", price: "$7.99" },
    ],
  },
]

export async function getAllGames(): Promise<Game[]> {
  if (!isSupabaseConfigured || !supabase) {
    // Return mock data when Supabase is not configured
    return mockGames
  }

  try {
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
      return mockGames
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
  } catch (error) {
    console.error("Error fetching games:", error)
    return mockGames
  }
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  if (!isSupabaseConfigured || !supabase) {
    // Return mock data when Supabase is not configured
    return mockGames.find((game) => game.slug === slug) || null
  }

  try {
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
      return mockGames.find((g) => g.slug === slug) || null
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
  } catch (error) {
    console.error("Error fetching game:", error)
    return mockGames.find((g) => g.slug === slug) || null
  }
}

export async function searchGames(query: string): Promise<Game[]> {
  if (!isSupabaseConfigured || !supabase) {
    // Return filtered mock data when Supabase is not configured
    return mockGames.filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
  }

  try {
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
      return mockGames.filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
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
  } catch (error) {
    console.error("Error searching games:", error)
    return mockGames.filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
  }
}
