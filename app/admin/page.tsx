'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Admin() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [status, setStatus] = useState('')

  const generateSlug = (title: string) =>
    title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

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

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 5% 80px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary)', marginBottom: '40px' }}>Nowy artykuł</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="form-group">
          <label>Tytuł *</label>
          <input type="text" value={title} onChange={handleTitleChange} placeholder="Tytuł artykułu" />
        </div>
        <div className="form-group">
          <label>Slug (URL)</label>
          <input type="text" value={slug} onChange={e => setSlug(e.target.value)} placeholder="tytul-artykulu" />
        </div>
        <div className="form-group">
          <label>Krótki opis (excerpt)</label>
          <input type="text" value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Krótki opis artykułu" />
        </div>
        <div className="form-group">
          <label>URL obrazka okładkowego</label>
          <input type="text" value={coverImage} onChange={e => setCoverImage(e.target.value)} placeholder="https://..." />
        </div>
        <div className="form-group">
          <label>Treść (HTML) *</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="<p>Treść artykułu...</p>" style={{ minHeight: '300px' }} />
        </div>
        <button className="btn-submit" onClick={handleSubmit} style={{ background: 'var(--primary)', color: '#fff' }}>
          Opublikuj artykuł →
        </button>
        {status && <p style={{ color: status.includes('Błąd') ? '#e24b4a' : '#16a34a', fontWeight: 600 }}>{status}</p>}
      </div>
    </main>
  )
}