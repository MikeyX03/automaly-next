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
    <>
      <div style={{ borderBottom: '1px solid rgba(52,21,57,0.1)', padding: '0 5%', marginTop: '64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 0 32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#341539', letterSpacing: '-1px' }}>Blog</h1>
          <p style={{ color: '#666', fontSize: '18px', marginTop: '8px' }}>Wiedza o automatyzacji i AI dla polskich firm</p>
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 5% 100px' }}>
        {posts && posts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article style={{ cursor: 'pointer' }}>
                  {post.cover_image && (
                    <div style={{ width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', background: '#f3e8f7' }}>
                      <img src={post.cover_image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                    </div>
                  )}
                  {!post.cover_image && (
                    <div style={{ width: '100%', height: '200px', borderRadius: '12px', marginBottom: '20px', background: 'linear-gradient(135deg, #341539, #4e1f55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '40px' }}>✦</span>
                    </div>
                  )}
                  <p style={{ fontSize: '12px', color: '#c084d0', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    {new Date(post.created_at).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#341539', marginBottom: '10px', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6 }}>{post.excerpt}</p>
                  <div style={{ marginTop: '16px', fontSize: '14px', fontWeight: 600, color: '#341539', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Czytaj dalej →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{ color: '#666', fontSize: '18px' }}>Brak artykułów — wróć wkrótce.</p>
        )}
      </main>
    </>
  )
}