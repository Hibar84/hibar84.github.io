export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export type Ingredient = {
  desc?: string;
  quantite?: string;
  unit?: string
}

export type ArrayElement<Type> = Type extends Array<infer Item> ? Item : Type;

export interface Database {
  public: {
    Tables: {
      fromages: {
        Row: {
          aoc: boolean | null
          aoc_year: string | null
          curd: string | null
          id: number
          img: string | null
          milk: string | null
          name: string | null
          regions: string | null
          status: string | null
          wiki: string | null
        }
        Insert: {
          aoc?: boolean | null
          aoc_year?: string | null
          curd?: string | null
          id: number
          img?: string | null
          milk?: string | null
          name?: string | null
          regions?: string | null
          status?: string | null
          wiki?: string | null
        }
        Update: {
          aoc?: boolean | null
          aoc_year?: string | null
          curd?: string | null
          id?: number
          img?: string | null
          milk?: string | null
          name?: string | null
          regions?: string | null
          status?: string | null
          wiki?: string | null
        }
      }
      gares: {
        Row: {
          commune: string | null
          coordonnees: string | null
          departement: string | null
          id: number
          nom: string | null
          vu: boolean | null
          X: number | null
          Y: number | null
        }
        Insert: {
          commune?: string | null
          coordonnees?: string | null
          departement?: string | null
          id: number
          nom?: string | null
          vu?: boolean | null
          X?: number | null
          Y?: number | null
        }
        Update: {
          commune?: string | null
          coordonnees?: string | null
          departement?: string | null
          id?: number
          nom?: string | null
          vu?: boolean | null
          X?: number | null
          Y?: number | null
        }
      }
      ideas: {
        Row: {
          desc: string | null
          done: boolean
          id: number
          key_box: string
          title: string
          url: string | null
        }
        Insert: {
          desc?: string | null
          done?: boolean
          id?: number
          key_box: string
          title: string
          url?: string | null
        }
        Update: {
          desc?: string | null
          done?: boolean
          id?: number
          key_box?: string
          title?: string
          url?: string | null
        }
      }
      recettes: {
        Row: {
          categorie: string | null
          desc: string | null
          id: number
          ingredients: Ingredient[] | null
          instructions: string[] | null
          nb_personnes: number | null
          title: string
        }
        Insert: {
          categorie?: string | null
          desc?: string | null
          id?: number
          ingredients?: Ingredient[] | null
          instructions?: string[] | null
          nb_personnes?: number | null
          title: string
        }
        Update: {
          categorie?: string | null
          desc?: string | null
          id?: number
          ingredients?: Ingredient[] | null
          instructions?: string[] | null
          nb_personnes?: number | null
          title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_random_idea: {
        Args: {
          input_key: string
        }
        Returns: {
          desc: string | null
          done: boolean
          id: number
          key_box: string
          title: string
          url: string | null
        }[]
      }
    }
    Enums: {
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
