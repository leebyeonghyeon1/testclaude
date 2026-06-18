import { supabase } from '../lib/supabase'

const PAGE_SIZE = 10

export async function getPosts({ page = 1, search = '' } = {}) {
  let query = supabase
    .from('posts')
    .select('id, title, is_notice, view_count, created_at, profiles(name)', { count: 'exact' })
    .order('is_notice', { ascending: false })
    .order('created_at', { ascending: false })

  if (search) query = query.ilike('title', `%${search}%`)

  const from = (page - 1) * PAGE_SIZE
  query = query.range(from, from + PAGE_SIZE - 1)

  const { data, count, error } = await query
  if (error) throw error
  return { data, count, pageSize: PAGE_SIZE }
}

export async function getPost(id) {
  const { data, error } = await supabase
    .from('posts')
    .select('*, profiles(name)')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

export async function incrementViewCount(id) {
  await supabase.rpc('increment_view_count', { post_id: id })
}

export async function createPost({ title, content }) {
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from('posts')
    .insert({ title, content, author_id: user.id })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updatePost(id, { title, content }) {
  const { data, error } = await supabase
    .from('posts')
    .update({ title, content })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) throw error
}
