import { createClient } from '@supabase/supabase-js'

// For Lovable's native Supabase integration, we don't need to manually configure the client
// The environment variables are automatically provided
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase config:', { 
  url: supabaseUrl ? 'configured' : 'missing', 
  key: supabaseAnonKey ? 'configured' : 'missing' 
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing');
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder-key')