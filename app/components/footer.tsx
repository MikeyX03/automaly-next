import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image src="/favicon-96x96.png" alt="Automaly logo" width={28} height={28} />
              Automaly.pl
            </Link>
            <div className="footer-contact">
              <a href="mailto:info@automaly.pl">info@automaly.pl</a>
              <a href="tel:+48698724699">+48 698 724 699</a>
            </div>
          </div>

          <div className="footer-social">
            <a href="https://www.linkedin.com/company/automaly" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/automaly.pl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@automaly.pl" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Automaly.pl</span>
          <div className="footer-legal">
            <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
            <Link href="/regulamin">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
