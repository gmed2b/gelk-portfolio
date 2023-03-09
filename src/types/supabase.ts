export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          competence: number | null
          cover_image: string | null
          created_at: string | null
          description: string | null
          id: number
          images: Json | null
          links: Json | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          competence?: number | null
          cover_image?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          images?: Json | null
          links?: Json | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          competence?: number | null
          cover_image?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          images?: Json | null
          links?: Json | null
          title?: string | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
