import supabase from './supabase';
export async function getUsers() {
  let { data, error } = await supabase.from('users').select('*');
  return data, error;
}
