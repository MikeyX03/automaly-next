import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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

  // Czyszczenie Markdown (usuwa ``` na początku i końcu)
  const cleanContent = post.content
    .replace(/```[\w]*\n?/g, '')
    .trim()

  return (
    <>
      {/* Navbar - dodany z powrotem */}
      <nav>
        <a href="/" className="logo">
          <img src="/favicon-96x96.png" alt="Automaly logo" width={32} height={32} />
          Automaly.pl
        </a>
        <ul className="nav-links">
          <li><a href="/#uslugi">Usługi</a></li>
          <li><a href="/#proces">Jak działamy</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <a href="/#kontakt" className="btn-nav">Darmowe demo →</a>
      </nav>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 5% 120px' }}>
        <Link 
          href="/blog" 
          style={{ 
            fontSize: '14px', 
            color: '#c084d0', 
            textDecoration: 'none', 
            fontWeight: 500, 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '4px', 
            marginBottom: '48px' 
          }}
        >
          ← Wróć do bloga
        </Link>

        <p style={{ 
          fontSize: '12px', 
          color: '#c084d0', 
          fontWeight: 500, 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          marginBottom: '16px' 
        }}>
          {new Date(post.created_at).toLocaleDateString('pl-PL', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        <h1 style={{ 
          fontSize: '42px', 
          fontWeight: 800, 
          color: '#341539', 
          letterSpacing: '-1px', 
          lineHeight: 1.1, 
          marginBottom: '40px' 
        }}>
          {post.title}
        </h1>

        {post.cover_image && (
          <img 
            src={post.cover_image} 
            alt={post.title} 
            style={{ 
              width: '100%', 
              borderRadius: '12px', 
              marginBottom: '48px', 
              maxHeight: '480px', 
              objectFit: 'cover' 
            }} 
          />
        )}
        
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {cleanContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}
