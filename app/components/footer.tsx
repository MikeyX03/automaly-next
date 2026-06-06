"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top row: logo+contact | social icons */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image
                src="/favicon-96x96.png"
                alt="Automaly logo"
                width={24}
                height={24}
              />
              <span>Automaly.pl</span>
            </Link>
            <div className="footer-contact">
              <a href="mailto:info@automaly.pl">info@automaly.pl</a>
              <a href="tel:+48698724699">+48 698 724 699</a>
            </div>
          </div>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/automaly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/automaly.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@automaly.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="social-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom row: copyright | legal links */}
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Automaly.pl</span>
          <nav className="footer-legal">
            <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
            <Link href="/regulamin">Regulamin</Link>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 48px 0 32px;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .footer-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .footer-logo:hover {
          color: #fff;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-contact a {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.38);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }

        .footer-contact a:hover {
          color: rgba(255, 255, 255, 0.65);
        }

        .footer-social {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.35);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }

        .social-link:hover {
          color: rgba(255, 255, 255, 0.75);
          background: rgba(255, 255, 255, 0.06);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-copy {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.25);
          letter-spacing: 0.01em;
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-legal a {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.25);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }

        .footer-legal a:hover {
          color: rgba(255, 255, 255, 0.55);
        }

        @media (max-width: 640px) {
          .footer-top {
            flex-direction: column;
            gap: 20px;
          }

          .footer-social {
            gap: 2px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
