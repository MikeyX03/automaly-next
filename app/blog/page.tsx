import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function Blog() {
  const { data: posts } = await supabase
    .from('posts')
    .select('title, slug, excerpt, cover_image, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 5% 80px' }}>
      <h1 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--primary)', marginBottom: '48px' }}>Blog</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
        {posts?.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <div className="service-card">
              {post.cover_image && <img src={post.cover_image} alt={post.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '16px', height: '200px', objectFit: 'cover' }} />}
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>{post.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>{post.excerpt}</p>
            </div>
          </Link>
        ))}
        {posts?.length === 0 && <p style={{ color: 'var(--text-muted)' }}>Brak artykułów.</p>}
      </div>
    </main>
  )
}