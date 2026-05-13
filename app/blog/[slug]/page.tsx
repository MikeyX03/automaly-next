import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 5% 80px' }}>
      {post.cover_image && (
        <img src={post.cover_image} alt={post.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '40px', height: '400px', objectFit: 'cover' }} />
      )}
      <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#341539', marginBottom: '16px', lineHeight: 1.1 }}>{post.title}</h1>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '48px' }}>
        {new Date(post.created_at).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <div style={{ fontSize: '17px', lineHeight: 1.8, color: '#1a1a1a' }} dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  )
}