import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Note: In a real app, you'd handle the case where these are missing more gracefully
// or ensure they are typed correctly.
export const supabase = createClient(supabaseUrl, supabaseKey);
