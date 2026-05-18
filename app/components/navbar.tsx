'use client'

import { useState, useEffect } from 'react'

export default function Navbar({ logo, link1, link2, link3, cta }: {
  logo?: string
  link1?: string
  link2?: string
  link3?: string
  cta?: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

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
        <a href="/#kontakt" className="btn-nav">{cta || 'Darmowe demo →'}</a>
        <label
          className="hamburger"
          onClick={() => setOpen(o => !o)}
        >
          {open ? '✕' : '☰'}
        </label>
      </nav>

      {open && (
        <>
          <div
            style={{
              position: 'fixed', inset: 0,
              zIndex: 98,
              background: 'rgba(0,0,0,0.3)',
            }}
            onClick={close}
          />
          <div className="mobile-menu">
            <a href="/#uslugi" onClick={close}>{link1 || 'Usługi'}</a>
            <a href="/#proces" onClick={close}>{link2 || 'Jak działamy'}</a>
            <a href="/#faq" onClick={close}>{link3 || 'FAQ'}</a>
            <a href="/blog" onClick={close}>Blog</a>
            <a href="/#kontakt" className="btn-nav" onClick={close}>
              {cta || 'Darmowe demo →'}
            </a>
          </div>
        </>
      )}
    </>
  )
}
