export default function Navbar({ logo, link1, link2, link3, cta }: {
  logo?: string
  link1?: string
  link2?: string
  link3?: string
  cta?: string
}) {
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
        <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
        <label htmlFor="nav-toggle" className="hamburger">☰</label>
        <a href="/#kontakt" className="btn-nav">{cta || 'Darmowe demo →'}</a>
        <div className="mobile-menu">
          <a href="/#uslugi">{link1 || 'Usługi'}</a>
          <a href="/#proces">{link2 || 'Jak działamy'}</a>
          <a href="/#faq">{link3 || 'FAQ'}</a>
          <a href="/blog">Blog</a>
          <a href="/#kontakt" className="btn-nav">
            {cta || 'Darmowe demo →'}
          </a>
        </div>
      </nav>
    </>
  )
}
