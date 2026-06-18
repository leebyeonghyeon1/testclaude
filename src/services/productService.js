import { supabase } from '../lib/supabase'

export async function getProducts({ category, search } = {}) {
  let query = supabase.from('products').select('*').eq('is_active', true).order('created_at', { ascending: false })
  if (category) query = query.eq('category', category)
  if (search) query = query.ilike('name', `%${search}%`)
  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getProduct(id) {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single()
  if (error) throw error
  return data
}
