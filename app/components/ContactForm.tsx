'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-form">
      <div className="form-grid">
        <div className="form-group">
          <label>Imię i nazwisko *</label>
          <input name="name" type="text" placeholder="Jan Kowalski" value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Telefon *</label>
          <input name="phone" type="tel" placeholder="+48 600 000 000" value={form.phone} onChange={handleChange} />
        </div>
        <div className="form-group full">
          <label>E-mail *</label>
          <input name="email" type="email" placeholder="jan@firma.pl" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group full">
          <label>Nazwa firmy</label>
          <input name="company" type="text" placeholder="Firma Sp. z o.o." value={form.company} onChange={handleChange} />
        </div>
        <div className="form-group full">
          <label>Co chcesz zautomatyzować?</label>
          <textarea name="message" placeholder="Np. obsługa zapytań klientów..." value={form.message} onChange={handleChange} />
        </div>
      </div>

      {status === 'success' && (
        <div style={{ color: '#16a34a', marginBottom: '16px', fontWeight: 500 }}>
          ✓ Wysłano! Odezwiemy się w ciągu 24h.
        </div>
      )}
      {status === 'error' && (
        <div style={{ color: '#e24b4a', marginBottom: '16px' }}>
          Coś poszło nie tak. Spróbuj ponownie lub napisz na info@automaly.pl
        </div>
      )}

      <button
        className="btn-submit"
        onClick={handleSubmit}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Wysyłanie...' : 'Zamów bezpłatne demo →'}
      </button>
      <div className="form-note">Odpiszemy w ciągu 24h · Bez umów · Bez karty kredytowej</div>
    </div>
  )
}
