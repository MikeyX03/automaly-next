'use client'

import { useState } from 'react'

export default function Navbar({ logo, link1, link2, link3, cta }: {
  logo?: string
  link1?: string
  link2?: string
  link3?: string
  cta?: string
}) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav>
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
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Otwórz menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
        <a href="/#kontakt" className="btn-nav">{cta || 'Darmowe demo →'}</a>
      </nav>

      {/* Backdrop */}
      {open && (
        <div className="nav-backdrop" onClick={close} aria-hidden="true" />
      )}

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}>
        <a href="/#uslugi" onClick={close}>{link1 || 'Usługi'}</a>
        <a href="/#proces" onClick={close}>{link2 || 'Jak działamy'}</a>
        <a href="/#faq" onClick={close}>{link3 || 'FAQ'}</a>
        <a href="/blog" onClick={close}>Blog</a>
        <a href="/#kontakt" className="btn-nav" onClick={close}>{cta || 'Darmowe demo →'}</a>
      </div>
    </>
  )
}
