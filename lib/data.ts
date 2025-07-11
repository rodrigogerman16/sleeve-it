import type { Game } from "@/lib/supabase"

export const mockGames: Game[] = [
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
]
