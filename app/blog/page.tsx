import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import Navbar from '../components/navbar'

export const dynamic = 'force-dynamic'

async function getContent() {
  const { data } = await supabase
    .from('content')
    .select('section, key, value')

  const content: Record<string, Record<string, string>> = {}
  data?.forEach(({ section, key, value }) => {
    if (!content[section]) content[section] = {}
    content[section][key] = value
  })
  return content
}

export default async function Blog() {
  const content = await getContent()
  const navbar = content.navbar || {}

  const { data: posts } = await supabase
    .from('posts')
    .select('title, slug, excerpt, cover_image, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })

  return (
    <>
      <Navbar
        logo={navbar.logo}
        link1={navbar.link1}
        link2={navbar.link2}
        link3={navbar.link3}
        cta={navbar.cta}
      />

      <div style={{ borderBottom: '0.5px solid rgba(255,255,255,0.08)', padding: '0 5%', marginTop: '64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 0 32px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#fff', letterSpacing: '-1.5px' }}>Blog</h1>
          <p style={{ color: 'rgba(237,233,240,0.55)', fontSize: '18px', marginTop: '8px', fontWeight: 300 }}>Wiedza o automatyzacji i AI dla polskich firm</p>
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 5% 100px' }}>
        {posts && posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article style={{ cursor: 'pointer' }}>
                  {post.cover_image ? (
                    <div style={{ width: '100%', height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                      <img src={post.cover_image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div style={{ width: '100%', height: '200px', borderRadius: '10px', marginBottom: '20px', background: 'linear-gradient(135deg, rgba(52,21,57,0.6), rgba(78,31,85,0.4))', border: '0.5px solid rgba(154,63,191,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '32px', opacity: 0.4 }}>✦</span>
                    </div>
                  )}
                  <p style={{ fontSize: '11px', color: 'rgba(237,233,240,0.38)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                    {new Date(post.created_at).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '10px', lineHeight: 1.3, letterSpacing: '-0.3px' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: '14px', color: 'rgba(237,233,240,0.55)', lineHeight: 1.65 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 500, color: 'rgba(237,233,240,0.4)' }}>
                    Czytaj dalej →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{ color: 'rgba(237,233,240,0.4)', fontSize: '18px' }}>Brak artykułów — wróć wkrótce.</p>
        )}
      </main>
    </>
  )
}
