import supabase from './supabase';

export async function getTasksApi() {
  const { data, error } = await supabase.from('tasks').select('*');

  if (error) throw new Error('Failed to get tasks');

  return data;
}
