import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gozczxyicookxyubieos.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvemN6eHlpY29va3h5dWJpZW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MDA0NDAsImV4cCI6MjAxMTQ3NjQ0MH0.feCKlOMbJeHcwWZQvL714b48InjN5zeXr2bhDQTChPs';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
