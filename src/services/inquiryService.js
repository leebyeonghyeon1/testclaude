import { supabase } from '../lib/supabase'

export async function createInquiry({ title, content }) {
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from('inquiries')
    .insert({ title, content, author_id: user.id })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getMyInquiries() {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getInquiry(id) {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}
