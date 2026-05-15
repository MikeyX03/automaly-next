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
        <a href="/#kontakt" className="btn-nav">{cta || 'Darmowe demo →'}</a>
        <button 
          className="hamburger" 
          onClick={() => setOpen(!open)}
          type="button"
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <a href="/#uslugi" onClick={() => setOpen(false)}>{link1 || 'Usługi'}</a>
          <a href="/#proces" onClick={() => setOpen(false)}>{link2 || 'Jak działamy'}</a>
          <a href="/#faq" onClick={() => setOpen(false)}>{link3 || 'FAQ'}</a>
          <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
          <a href="/#kontakt" className="btn-nav" onClick={() => setOpen(false)}>
            {cta || 'Darmowe demo →'}
          </a>
        </div>
      )}
    </>
  )
}
