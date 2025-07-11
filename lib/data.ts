export interface Game {
  id: string
  name: string
  image?: string
  cards: {
    size: string
    dimensions: string
    quantity: number
    sleeveType: string
    brand: string
    model: string
  }[]
  purchaseLinks: {
    name: string
    url: string
    price?: string
  }[]
}

export const mockGames: Game[] = [
  {
    id: "wingspan",
    name: "Wingspan",
    image: "🦅",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 170,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Classic",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "SleeveKing", url: "#", price: "$11.50" },
      { name: "GameNerdz", url: "#", price: "$10.99" },
    ],
  },
  {
    id: "gloomhaven",
    name: "Gloomhaven",
    image: "⚔️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 458,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 305,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$24.99" },
      { name: "BoardGameBliss", url: "#", price: "$22.50" },
    ],
  },
  {
    id: "azul",
    name: "Azul",
    image: "🎨",
    cards: [
      {
        size: "Cuadrado",
        dimensions: "70 x 70 mm",
        quantity: 100,
        sleeveType: "Cuadrado Premium",
        brand: "Ultra Pro",
        model: "Square",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "CoolStuffInc", url: "#", price: "$7.99" },
    ],
  },
  {
    id: "terraforming-mars",
    name: "Terraforming Mars",
    image: "🚀",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 208,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$14.99" },
      { name: "Miniature Market", url: "#", price: "$13.50" },
    ],
  },
  {
    id: "spirit-island",
    name: "Spirit Island",
    image: "🏝️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 123,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$11.99" },
      { name: "SleeveKing", url: "#", price: "$10.50" },
    ],
  },
  {
    id: "dominion",
    name: "Dominion",
    image: "👑",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 500,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$18.99" },
      { name: "CardKingdom", url: "#", price: "$17.50" },
    ],
  },
  {
    id: "7-wonders",
    name: "7 Wonders",
    image: "🏛️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 149,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$11.99" },
      { name: "BoardGameBliss", url: "#", price: "$10.99" },
    ],
  },
  {
    id: "pandemic",
    name: "Pandemic",
    image: "🦠",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 110,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "Target", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "arkham-horror-lcg",
    name: "Arkham Horror: The Card Game",
    image: "🐙",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 254,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$16.99" },
      { name: "Fantasy Flight Games", url: "#", price: "$15.95" },
    ],
  },
  {
    id: "netrunner",
    name: "Android: Netrunner",
    image: "💻",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 252,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Matte",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$15.99" },
      { name: "SleeveKing", url: "#", price: "$14.50" },
    ],
  },
  {
    id: "race-for-the-galaxy",
    name: "Race for the Galaxy",
    image: "🌌",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 114,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "GameNerdz", url: "#", price: "$9.99" },
    ],
  },
  {
    id: "splendor",
    name: "Splendor",
    image: "💎",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 90,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "SleeveKing", url: "#", price: "$7.99" },
    ],
  },
  {
    id: "ticket-to-ride",
    name: "Ticket to Ride",
    image: "🚂",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 144,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$11.99" },
      { name: "Days of Wonder", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "love-letter",
    name: "Love Letter",
    image: "💌",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 21,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Target", url: "#", price: "$4.50" },
    ],
  },
  {
    id: "machi-koro",
    name: "Machi Koro",
    image: "🏘️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 108,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Classic",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "CoolStuffInc", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "king-of-tokyo",
    name: "King of Tokyo",
    image: "🦖",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 66,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "BoardGameBliss", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "citadels",
    name: "Citadels",
    image: "🏰",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 84,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "SleeveKing", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "coup",
    name: "Coup",
    image: "🎭",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 15,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Target", url: "#", price: "$4.50" },
    ],
  },
  {
    id: "sushi-go",
    name: "Sushi Go!",
    image: "🍣",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 108,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "GameStop", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "bang",
    name: "BANG!",
    image: "🤠",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 103,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Classic",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "CoolStuffInc", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "uno",
    name: "UNO",
    image: "🔴",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 108,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "Walmart", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "exploding-kittens",
    name: "Exploding Kittens",
    image: "💥",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 56,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "Target", url: "#", price: "$6.50" },
    ],
  },
  {
    id: "cards-against-humanity",
    name: "Cards Against Humanity",
    image: "🃏",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 600,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Matte",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$22.99" },
      { name: "Cards Against Humanity", url: "#", price: "$25.00" },
    ],
  },
  {
    id: "magic-the-gathering",
    name: "Magic: The Gathering",
    image: "🔮",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 75,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Matte",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "TCGPlayer", url: "#", price: "$11.99" },
      { name: "CardKingdom", url: "#", price: "$12.50" },
    ],
  },
  {
    id: "pokemon-tcg",
    name: "Pokémon Trading Card Game",
    image: "⚡",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 60,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Pokémon",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Pokémon Center", url: "#", price: "$9.99" },
      { name: "TCGPlayer", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "yu-gi-oh",
    name: "Yu-Gi-Oh!",
    image: "🎴",
    cards: [
      {
        size: "Yu-Gi-Oh",
        dimensions: "59 x 86 mm",
        quantity: 60,
        sleeveType: "Yu-Gi-Oh Premium",
        brand: "Konami",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "Yu-Gi-Oh Store", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "legendary",
    name: "Legendary: A Marvel Deck Building Game",
    image: "🦸",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 600,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$22.99" },
      { name: "Upper Deck", url: "#", price: "$24.99" },
    ],
  },
  {
    id: "ascension",
    name: "Ascension",
    image: "⚔️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 200,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$14.99" },
      { name: "Stone Blade", url: "#", price: "$15.99" },
    ],
  },
  {
    id: "star-realms",
    name: "Star Realms",
    image: "🚀",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 128,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Classic",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "White Wizard Games", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "munchkin",
    name: "Munchkin",
    image: "🗡️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 168,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "Steve Jackson Games", url: "#", price: "$13.50" },
    ],
  },
  {
    id: "fluxx",
    name: "Fluxx",
    image: "🌀",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 100,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "Looney Labs", url: "#", price: "$10.50" },
    ],
  },
  {
    id: "smash-up",
    name: "Smash Up",
    image: "💥",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 160,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "AEG", url: "#", price: "$13.50" },
    ],
  },
  {
    id: "red-dragon-inn",
    name: "The Red Dragon Inn",
    image: "🍺",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 110,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Classic",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "SlugFest Games", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "betrayal-at-house-on-the-hill",
    name: "Betrayal at House on the Hill",
    image: "🏚️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 80,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Avalon Hill", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "elder-sign",
    name: "Elder Sign",
    image: "👁️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 165,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "Fantasy Flight Games", url: "#", price: "$12.95" },
    ],
  },
  {
    id: "mansions-of-madness",
    name: "Mansions of Madness",
    image: "🕯️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 350,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
      {
        size: "Mini Americano",
        dimensions: "41 x 63 mm",
        quantity: 24,
        sleeveType: "Mini Americano",
        brand: "Mayday Games",
        model: "Mini USA",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$19.99" },
      { name: "Fantasy Flight Games", url: "#", price: "$18.95" },
    ],
  },
  {
    id: "eldritch-horror",
    name: "Eldritch Horror",
    image: "🌍",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 294,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
      {
        size: "Mini Americano",
        dimensions: "41 x 63 mm",
        quantity: 122,
        sleeveType: "Mini Americano",
        brand: "Mayday Games",
        model: "Mini USA",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$21.99" },
      { name: "Fantasy Flight Games", url: "#", price: "$20.95" },
    ],
  },
  {
    id: "arkham-horror",
    name: "Arkham Horror",
    image: "🏚️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 242,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
      {
        size: "Mini Americano",
        dimensions: "41 x 63 mm",
        quantity: 16,
        sleeveType: "Mini Americano",
        brand: "Mayday Games",
        model: "Mini USA",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$17.99" },
      { name: "Fantasy Flight Games", url: "#", price: "$16.95" },
    ],
  },
  {
    id: "twilight-imperium",
    name: "Twilight Imperium",
    image: "🌌",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 354,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$19.99" },
      { name: "Fantasy Flight Games", url: "#", price: "$18.95" },
    ],
  },
  {
    id: "agricola",
    name: "Agricola",
    image: "🚜",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 360,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$16.99" },
      { name: "Z-Man Games", url: "#", price: "$17.50" },
    ],
  },
  {
    id: "puerto-rico",
    name: "Puerto Rico",
    image: "🏝️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 50,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "Rio Grande Games", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "power-grid",
    name: "Power Grid",
    image: "⚡",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 84,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Rio Grande Games", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "through-the-ages",
    name: "Through the Ages",
    image: "🏛️",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 234,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$14.99" },
      { name: "Czech Games Edition", url: "#", price: "$15.50" },
    ],
  },
  {
    id: "brass-birmingham",
    name: "Brass: Birmingham",
    image: "🏭",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 180,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Classic",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$13.99" },
      { name: "Roxley Games", url: "#", price: "$14.50" },
    ],
  },
  {
    id: "food-chain-magnate",
    name: "Food Chain Magnate",
    image: "🍔",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 255,
        sleeveType: "Estándar Premium",
        brand: "Sleeve Kings",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$16.99" },
      { name: "Splotter Spellen", url: "#", price: "$17.50" },
    ],
  },
  {
    id: "great-western-trail",
    name: "Great Western Trail",
    image: "🤠",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 36,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$5.99" },
      { name: "Stronghold Games", url: "#", price: "$6.50" },
    ],
  },
  {
    id: "scythe",
    name: "Scythe",
    image: "🤖",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 80,
        sleeveType: "Estándar Premium",
        brand: "Stonemaier Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Stonemaier Games", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "everdell",
    name: "Everdell",
    image: "🌳",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 128,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Matte",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "Starling Games", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "root",
    name: "Root",
    image: "🦝",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 54,
        sleeveType: "Estándar Premium",
        brand: "Leder Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "Leder Games", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "clank",
    name: "Clank!",
    image: "🗡️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 180,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$13.99" },
      { name: "Renegade Game Studios", url: "#", price: "$14.50" },
    ],
  },
  {
    id: "concordia",
    name: "Concordia",
    image: "🏛️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 150,
        sleeveType: "Estándar Premium",
        brand: "Mayday Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "Rio Grande Games", url: "#", price: "$13.50" },
    ],
  },
  {
    id: "istanbul",
    name: "Istanbul",
    image: "🕌",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 26,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "AEG", url: "#", price: "$5.50" },
    ],
  },
  {
    id: "lords-of-waterdeep",
    name: "Lords of Waterdeep",
    image: "🏰",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 121,
        sleeveType: "Estándar Premium",
        brand: "Fantasy Flight Games",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "Wizards of the Coast", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "viticulture",
    name: "Viticulture",
    image: "🍇",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 154,
        sleeveType: "Estándar Premium",
        brand: "Stonemaier Games",
        model: "Premium",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "Stonemaier Games", url: "#", price: "$13.50" },
    ],
  },
  {
    id: "caverna",
    name: "Caverna",
    image: "⛏️",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 53,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "Lookout Games", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "le-havre",
    name: "Le Havre",
    image: "🚢",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 162,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "Lookout Games", url: "#", price: "$13.50" },
    ],
  },
  {
    id: "ora-et-labora",
    name: "Ora et Labora",
    image: "⛪",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 95,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "Lookout Games", url: "#", price: "$10.50" },
    ],
  },
  {
    id: "fields-of-arle",
    name: "Fields of Arle",
    image: "🌾",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 29,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Z-Man Games", url: "#", price: "$5.50" },
    ],
  },
  {
    id: "a-feast-for-odin",
    name: "A Feast for Odin",
    image: "🛡️",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 179,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$13.99" },
      { name: "Z-Man Games", url: "#", price: "$14.50" },
    ],
  },
  {
    id: "gaia-project",
    name: "Gaia Project",
    image: "🌌",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 36,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$5.99" },
      { name: "Z-Man Games", url: "#", price: "$6.50" },
    ],
  },
  {
    id: "terra-mystica",
    name: "Terra Mystica",
    image: "🏔️",
    cards: [
      {
        size: "Mini Europeo",
        dimensions: "44 x 68 mm",
        quantity: 36,
        sleeveType: "Mini Europeo",
        brand: "Swan PanAsia",
        model: "Mini Euro",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$5.99" },
      { name: "Z-Man Games", url: "#", price: "$6.50" },
    ],
  },
  {
    id: "robinson-crusoe",
    name: "Robinson Crusoe",
    image: "🏝️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 246,
        sleeveType: "Estándar Premium",
        brand: "Dragon Shield",
        model: "Classic",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$16.99" },
      { name: "Portal Games", url: "#", price: "$17.50" },
    ],
  },
  {
    id: "dead-of-winter",
    name: "Dead of Winter",
    image: "🧟",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 80,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Plaid Hat Games", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "mice-and-mystics",
    name: "Mice and Mystics",
    image: "🐭",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 72,
        sleeveType: "Estándar Premium",
        brand: "Plaid Hat Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "Plaid Hat Games", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "zombicide",
    name: "Zombicide",
    image: "🧟‍♂️",
    cards: [
      {
        size: "Mini Americano",
        dimensions: "41 x 63 mm",
        quantity: 110,
        sleeveType: "Mini Americano",
        brand: "Mayday Games",
        model: "Mini USA",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "CMON", url: "#", price: "$10.50" },
    ],
  },
  {
    id: "blood-rage",
    name: "Blood Rage",
    image: "⚔️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 81,
        sleeveType: "Estándar Premium",
        brand: "CMON",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "CMON", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "rising-sun",
    name: "Rising Sun",
    image: "🌅",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 107,
        sleeveType: "Estándar Premium",
        brand: "CMON",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "CMON", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "massive-darkness",
    name: "Massive Darkness",
    image: "🗡️",
    cards: [
      {
        size: "Mini Americano",
        dimensions: "41 x 63 mm",
        quantity: 168,
        sleeveType: "Mini Americano",
        brand: "Mayday Games",
        model: "Mini USA",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "CMON", url: "#", price: "$13.50" },
    ],
  },
  {
    id: "sheriff-of-nottingham",
    name: "Sheriff of Nottingham",
    image: "🏹",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 216,
        sleeveType: "Estándar Premium",
        brand: "Arcane Tinmen",
        model: "Board Game",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$15.99" },
      { name: "Arcane Wonders", url: "#", price: "$16.50" },
    ],
  },
  {
    id: "castle-panic",
    name: "Castle Panic",
    image: "🏰",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 98,
        sleeveType: "Estándar Premium",
        brand: "Ultra Pro",
        model: "Standard",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "Fireside Games", url: "#", price: "$10.50" },
    ],
  },
  {
    id: "forbidden-island",
    name: "Forbidden Island",
    image: "🏝️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 58,
        sleeveType: "Estándar Premium",
        brand: "Gamewright",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "Gamewright", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "forbidden-desert",
    name: "Forbidden Desert",
    image: "🏜️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 55,
        sleeveType: "Estándar Premium",
        brand: "Gamewright",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "Gamewright", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "forbidden-sky",
    name: "Forbidden Sky",
    image: "⚡",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 65,
        sleeveType: "Estándar Premium",
        brand: "Gamewright",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "Gamewright", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "flash-point",
    name: "Flash Point: Fire Rescue",
    image: "🚒",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 58,
        sleeveType: "Estándar Premium",
        brand: "Indie Boards & Cards",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "Indie Boards & Cards", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "hanabi",
    name: "Hanabi",
    image: "🎆",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 60,
        sleeveType: "Estándar Premium",
        brand: "R&R Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "R&R Games", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "the-mind",
    name: "The Mind",
    image: "🧠",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 120,
        sleeveType: "Estándar Premium",
        brand: "Pandasaurus Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "Pandasaurus Games", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "just-one",
    name: "Just One",
    image: "✏️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 110,
        sleeveType: "Estándar Premium",
        brand: "Repos Production",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "Repos Production", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "wavelength",
    name: "Wavelength",
    image: "📡",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 84,
        sleeveType: "Estándar Premium",
        brand: "Social Psychology Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Social Psychology Games", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "codenames",
    name: "Codenames",
    image: "🕵️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 200,
        sleeveType: "Estándar Premium",
        brand: "Czech Games Edition",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$14.99" },
      { name: "Czech Games Edition", url: "#", price: "$15.50" },
    ],
  },
  {
    id: "codenames-duet",
    name: "Codenames: Duet",
    image: "👫",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 200,
        sleeveType: "Estándar Premium",
        brand: "Czech Games Edition",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$14.99" },
      { name: "Czech Games Edition", url: "#", price: "$15.50" },
    ],
  },
  {
    id: "codenames-pictures",
    name: "Codenames: Pictures",
    image: "🖼️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 140,
        sleeveType: "Estándar Premium",
        brand: "Czech Games Edition",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$12.99" },
      { name: "Czech Games Edition", url: "#", price: "$13.50" },
    ],
  },
  {
    id: "dixit",
    name: "Dixit",
    image: "🎨",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 84,
        sleeveType: "Estándar Premium",
        brand: "Libellud",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Libellud", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "mysterium",
    name: "Mysterium",
    image: "👻",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 93,
        sleeveType: "Estándar Premium",
        brand: "Libellud",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "Libellud", url: "#", price: "$10.50" },
    ],
  },
  {
    id: "one-night-ultimate-werewolf",
    name: "One Night Ultimate Werewolf",
    image: "🐺",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 16,
        sleeveType: "Estándar Premium",
        brand: "Bezier Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Bezier Games", url: "#", price: "$5.50" },
    ],
  },
  {
    id: "the-resistance-avalon",
    name: "The Resistance: Avalon",
    image: "⚔️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 14,
        sleeveType: "Estándar Premium",
        brand: "Indie Boards & Cards",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Indie Boards & Cards", url: "#", price: "$5.50" },
    ],
  },
  {
    id: "secret-hitler",
    name: "Secret Hitler",
    image: "🎭",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 17,
        sleeveType: "Estándar Premium",
        brand: "Goat Wolf & Cabbage",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Secret Hitler", url: "#", price: "$5.50" },
    ],
  },
  {
    id: "spyfall",
    name: "Spyfall",
    image: "🕵️‍♂️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 240,
        sleeveType: "Estándar Premium",
        brand: "Cryptozoic Entertainment",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$16.99" },
      { name: "Cryptozoic Entertainment", url: "#", price: "$17.50" },
    ],
  },
  {
    id: "telestrations",
    name: "Telestrations",
    image: "✏️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 2400,
        sleeveType: "Estándar Premium",
        brand: "USAopoly",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$89.99" },
      { name: "USAopoly", url: "#", price: "$95.00" },
    ],
  },
  {
    id: "wits-and-wagers",
    name: "Wits & Wagers",
    image: "🎲",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 125,
        sleeveType: "Estándar Premium",
        brand: "North Star Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$10.99" },
      { name: "North Star Games", url: "#", price: "$11.50" },
    ],
  },
  {
    id: "camel-up",
    name: "Camel Up",
    image: "🐪",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 50,
        sleeveType: "Estándar Premium",
        brand: "eggertspiele",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "Z-Man Games", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "kingdomino",
    name: "Kingdomino",
    image: "👑",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 12,
        sleeveType: "Estándar Premium",
        brand: "Blue Orange Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Blue Orange Games", url: "#", price: "$5.50" },
    ],
  },
  {
    id: "azul-summer-pavilion",
    name: "Azul: Summer Pavilion",
    image: "🏛️",
    cards: [
      {
        size: "Cuadrado",
        dimensions: "70 x 70 mm",
        quantity: 60,
        sleeveType: "Cuadrado Premium",
        brand: "Ultra Pro",
        model: "Square",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "Next Move Games", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "azul-stained-glass",
    name: "Azul: Stained Glass of Sintra",
    image: "🪟",
    cards: [
      {
        size: "Cuadrado",
        dimensions: "70 x 70 mm",
        quantity: 60,
        sleeveType: "Cuadrado Premium",
        brand: "Ultra Pro",
        model: "Square",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "Next Move Games", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "sagrada",
    name: "Sagrada",
    image: "🪟",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 87,
        sleeveType: "Estándar Premium",
        brand: "Floodgate Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Floodgate Games", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "century-spice-road",
    name: "Century: Spice Road",
    image: "🌶️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 104,
        sleeveType: "Estándar Premium",
        brand: "Plan B Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$9.99" },
      { name: "Plan B Games", url: "#", price: "$10.50" },
    ],
  },
  {
    id: "century-eastern-wonders",
    name: "Century: Eastern Wonders",
    image: "🏝️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 66,
        sleeveType: "Estándar Premium",
        brand: "Plan B Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "Plan B Games", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "century-new-world",
    name: "Century: A New World",
    image: "🌎",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 89,
        sleeveType: "Estándar Premium",
        brand: "Plan B Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "Plan B Games", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "patchwork",
    name: "Patchwork",
    image: "🧵",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 5,
        sleeveType: "Estándar Premium",
        brand: "Lookout Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Lookout Games", url: "#", price: "$5.50" },
    ],
  },
  {
    id: "jaipur",
    name: "Jaipur",
    image: "💎",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 55,
        sleeveType: "Estándar Premium",
        brand: "GameWorks",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$6.99" },
      { name: "GameWorks", url: "#", price: "$7.50" },
    ],
  },
  {
    id: "lost-cities",
    name: "Lost Cities",
    image: "🗺️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 60,
        sleeveType: "Estándar Premium",
        brand: "KOSMOS",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$7.99" },
      { name: "KOSMOS", url: "#", price: "$8.50" },
    ],
  },
  {
    id: "hive",
    name: "Hive",
    image: "🐝",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 26,
        sleeveType: "Estándar Premium",
        brand: "Gen42 Games",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "Gen42 Games", url: "#", price: "$5.50" },
    ],
  },
  {
    id: "targi",
    name: "Targi",
    image: "🏜️",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 80,
        sleeveType: "Estándar Premium",
        brand: "KOSMOS",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$8.99" },
      { name: "KOSMOS", url: "#", price: "$9.50" },
    ],
  },
  {
    id: "hanamikoji",
    name: "Hanamikoji",
    image: "🌸",
    cards: [
      {
        size: "Estándar",
        dimensions: "63.5 x 88 mm",
        quantity: 21,
        sleeveType: "Estándar Premium",
        brand: "EmperorS4",
        model: "Official",
      },
    ],
    purchaseLinks: [
      { name: "Amazon", url: "#", price: "$4.99" },
      { name: "EmperorS4", url: "#", price: "$5.50" },
    ],
  },
]
