import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/navbar'

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

  const cleanContent = post.content
    .replace(/^```[\w]*\n?/, '')
    .replace(/\n?```$/, '')
    .trim()

  return (
    <>
      <Navbar />

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '100px 24px 120px' }}>
        <Link
          href="/blog"
          style={{
            fontSize: '13px',
            color: 'rgba(237,233,240,0.45)',
            textDecoration: 'none',
            fontWeight: 400,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '48px',
            letterSpacing: '0.01em',
          }}
        >
          ← Wróć do bloga
        </Link>

        <p style={{
          fontSize: '11px',
          color: 'rgba(237,233,240,0.38)',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '16px'
        }}>
          {new Date(post.created_at).toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 44px)',
          fontWeight: 700,
          color: '#fff',
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
              borderRadius: '10px',
              marginBottom: '48px',
              maxHeight: '480px',
              objectFit: 'cover'
            }}
          />
        )}

        <div className="prose" dangerouslySetInnerHTML={{ __html: cleanContent }} />
      </div>
    </>
  )
}
