'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'automaly2026'

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [status, setStatus] = useState('')

  const generateSlug = (title: string) =>
    title.toLowerCase()
      .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e')
      .replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o')
      .replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setSlug(generateSlug(e.target.value))
  }

  const handleSubmit = async () => {
    if (!title || !slug || !content) {
      setStatus('Wypełnij tytuł, slug i treść.')
      return
    }
    const { error } = await supabase.from('posts').insert({
      title, slug, excerpt, content, cover_image: coverImage, published: true
    })
    if (error) {
      setStatus('Błąd: ' + error.message)
    } else {
      setStatus('Artykuł opublikowany!')
      setTitle(''); setSlug(''); setExcerpt(''); setContent(''); setCoverImage('')
    }
  }

  const inputStyle = {
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid rgba(52,21,57,0.15)',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    width: '100%',
    color: '#1a1a1a',
  }

  const labelStyle = { fontSize: '13px', fontWeight: 500, color: '#666' }
  const fieldStyle = { display: 'flex' as const, flexDirection: 'column' as const, gap: '6px' }

  if (!authed) {
    return (
      <main style={{ maxWidth: '400px', margin: '0 auto', padding: '200px 5% 80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#341539', marginBottom: '32px' }}>Panel admina</h1>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && (password === ADMIN_PASSWORD ? setAuthed(true) : alert('Złe hasło'))}
          placeholder="Hasło"
          style={{ ...inputStyle, marginBottom: '16px' }}
        />
        <button
          onClick={() => { if (password === ADMIN_PASSWORD) setAuthed(true); else alert('Złe hasło') }}
          style={{ background: '#341539', color: '#fff', padding: '14px', borderRadius: '12px', border: 'none', fontSize: '16px', fontWeight: 700, cursor: 'pointer', width: '100%', fontFamily: 'Inter, sans-serif' }}
        >
          Zaloguj →
        </button>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 5% 80px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#341539', marginBottom: '40px' }}>Nowy artykuł</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Tytuł *</label>
          <input style={inputStyle} type="text" value={title} onChange={handleTitleChange} placeholder="Tytuł artykułu" />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Slug (URL)</label>
          <input style={inputStyle} type="text" value={slug} onChange={e => setSlug(e.target.value)} placeholder="tytul-artykulu" />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Krótki opis (excerpt)</label>
          <input style={inputStyle} type="text" value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Krótki opis artykułu" />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>URL obrazka okładkowego</label>
          <input style={inputStyle} type="text" value={coverImage} onChange={e => setCoverImage(e.target.value)} placeholder="https://..." />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Treść (HTML) *</label>
          <textarea style={{ ...inputStyle, minHeight: '300px', resize: 'vertical' }} value={content} onChange={e => setContent(e.target.value)} placeholder="<p>Treść artykułu...</p>" />
        </div>
        <button onClick={handleSubmit} style={{ background: '#341539', color: '#fff', padding: '16px', borderRadius: '12px', border: 'none', fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          Opublikuj artykuł →
        </button>
        {status && <p style={{ color: status.includes('Błąd') ? '#e24b4a' : '#16a34a', fontWeight: 600 }}>{status}</p>}
      </div>
    </main>
  )
}