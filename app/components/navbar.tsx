'use client'

import { useState } from 'react'

interface NavbarProps {
  logo?: string
  link1?: string
  link2?: string
  link3?: string
  cta?: string
}

export default function Navbar({ logo, link1, link2, link3, cta }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ height: open ? 'auto' : '64px', flexWrap: 'wrap', alignItems: 'flex-start', paddingTop: open ? '0' : undefined }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '64px' }}>
        <a href="/" className="logo">
          <img src="/favicon-96x96.png" alt="Automaly logo" width={32} height={32} />
          {logo || 'Automaly.pl'}
        </a>
        <ul className="nav-links">
          <li><a href="/#uslugi">{link1 || 'Usługi'}</a></li>
          <li><a href="/#proces">{link2 || 'Jak działamy'}</a></li>
          <li><a href="/#faq">{link3 || 'FAQ'}</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <a href="/#kontakt" className="btn-nav">{cta || 'Darmowe demo →'}</a>
        <button
            className="hamburger"
            type="button"
            aria-label="Menu"
            onClick={() => alert('klik')}
        >
          ☰
        </button>
      </div>

      {open && (
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '16px 0 24px',
          borderTop: '1px solid rgba(52,21,57,0.12)'
        }}>
          <a href="/#uslugi" style={{ color: '#666', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }} onClick={() => setOpen(false)}>{link1 || 'Usługi'}</a>
          <a href="/#proces" style={{ color: '#666', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }} onClick={() => setOpen(false)}>{link2 || 'Jak działamy'}</a>
          <a href="/#faq" style={{ color: '#666', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }} onClick={() => setOpen(false)}>{link3 || 'FAQ'}</a>
          <a href="/blog" style={{ color: '#666', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }} onClick={() => setOpen(false)}>Blog</a>
          <a href="/#kontakt" className="btn-nav" style={{ textAlign: 'center' }} onClick={() => setOpen(false)}>{cta || 'Darmowe demo →'}</a>
        </div>
      )}
    </nav>
  )
}
