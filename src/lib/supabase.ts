import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if Supabase is properly configured
export const isSupabaseConfigured = !!(
  import.meta.env.VITE_SUPABASE_URL && 
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
  import.meta.env.VITE_SUPABASE_URL.startsWith('https://') &&
  import.meta.env.VITE_SUPABASE_URL.includes('.supabase.co') &&
  import.meta.env.VITE_SUPABASE_ANON_KEY !== 'placeholder-key'
)

export const supabase = createClient(supabaseUrl, supabaseAnonKey)