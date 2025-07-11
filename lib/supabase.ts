import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      games: {
        Row: {
          id: string
          slug: string
          name: string
          image: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          image?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          image?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      cards: {
        Row: {
          id: string
          game_id: string
          size: string
          dimensions: string
          quantity: number
          sleeve_type: string
          brand: string
          model: string
          created_at: string
        }
        Insert: {
          id?: string
          game_id: string
          size: string
          dimensions: string
          quantity: number
          sleeve_type: string
          brand: string
          model: string
          created_at?: string
        }
        Update: {
          id?: string
          game_id?: string
          size?: string
          dimensions?: string
          quantity?: number
          sleeve_type?: string
          brand?: string
          model?: string
          created_at?: string
        }
      }
      purchase_links: {
        Row: {
          id: string
          game_id: string
          name: string
          url: string
          price: string | null
          created_at: string
        }
        Insert: {
          id?: string
          game_id: string
          name: string
          url: string
          price?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          game_id?: string
          name?: string
          url?: string
          price?: string | null
          created_at?: string
        }
      }
    }
  }
}

export interface Game {
  id: string
  slug: string
  name: string
  image?: string
  cards: Card[]
  purchaseLinks: PurchaseLink[]
}

export interface Card {
  id: string
  size: string
  dimensions: string
  quantity: number
  sleeveType: string
  brand: string
  model: string
}

export interface PurchaseLink {
  id: string
  name: string
  url: string
  price?: string
}
