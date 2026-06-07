import { supabase } from '@/lib/supabase'
import Navbar from './components/navbar'
import HeroSpotlight from './components/HeroSpotlight'
import ContactForm from './components/ContactForm'
import Link from 'next/link'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

async function getContent() {
  const { data } = await supabase.from('content').select('section, key, value')
  const content: Record<string, Record<string, string>> = {}
  data?.forEach(({ section, key, value }: { section: string; key: string; value: string }) => {
    if (!content[section]) content[section] = {}
    content[section][key] = value
  })
  return content
}

export default async function Home() {
  const content = await getContent()
  const hero = content.hero || {}
  const navbar = content.navbar || {}
  const offer = content.offer || {}
  const services = content.services || {}
  const process = content.process || {}
  const cta = content.cta || {}
  const footer = content.footer || {}
  const problem = content.problem || {}

  return (
    <>
      <Navbar
        logo={navbar.logo}
        link1={navbar.link1}
        link2={navbar.link2}
        link3={navbar.link3}
        cta={navbar.cta}
      />

      <HeroSpotlight>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot"></span> {hero.eyebrow || 'Automatyzacja · AI · Strony internetowe'}
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: hero.headline || 'Przestań robić rzeczy, które zrobi za Ciebie <em>AI</em>' }} />
          <p className="hero-sub">{hero.subheading || 'Budujemy automatyzacje, strony internetowe i wdrażamy AI dla małych i średnich firm w Polsce.'}</p>
          <div className="hero-cta">
            <a href="#kontakt" className="btn-primary">{hero.cta_primary || 'Zamów bezpłatne demo →'}</a>
            <a href="#proces" className="btn-secondary">{hero.cta_secondary || 'Jak to działa?'}</a>
          </div>
          <div className="risk-badge">{hero.badge || 'Bez kosztów. Bez zobowiązań. Bez konieczności wiedzy technicznej.'}</div>
      </HeroSpotlight>

      <section className="problem" id="problem">
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div className="section-label">{problem.eyebrow || 'Czy to brzmi znajomo?'}</div>
          <h2 dangerouslySetInnerHTML={{ __html: problem.headline || 'Tracisz godziny na rzeczy, które robi za Ciebie automat' }} />
        </div>
        <div className="problem-grid">
          <div>
            <h3 style={{ fontSize: '20px', color: '#999', marginBottom: '20px', fontWeight: 500 }}>Bez automatyzacji</h3>
            <ul className="problem-list">
              <li>Ręczne przepisywanie danych między arkuszami</li>
              <li>Follow-upy do klientów wysyłane &quot;kiedy pamiętam&quot;</li>
              <li>Faktury, raporty i maile tworzone od zera każdym razem</li>
              <li>Klienci czekają na odpowiedź godzinami lub dniami</li>
              <li>Cały wieczór tracisz na administrację zamiast na biznes</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '20px', fontWeight: 500 }}>Z Automaly</h3>
            <ul className="solution-list">
              <li>Dane przepływają automatycznie między narzędziami</li>
              <li>Sekwencje follow-up działają same, we właściwym momencie</li>
              <li>Dokumenty generują się automatycznie z szablonu</li>
              <li>Chatbot AI odpowiada klientom o każdej porze dnia i nocy</li>
              <li>Ty skupiasz się na pracy, która naprawdę przynosi pieniądze</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="offer-band" id="demo">
        <h2 className="offer-headline" dangerouslySetInnerHTML={{ __html: offer.headline || 'Zanim zapłacisz choć złotówkę — zobaczysz działające rozwiązanie dla Twojej firmy' }} />
        <p className="offer-sub">{offer.subheading || 'Nie sprzedajemy obietnic. Pokazujemy konkretne demo dopasowane do Twoich procesów.'}</p>
        <div className="offer-steps">
          <div className="offer-step">
            <div className="offer-step-num">1</div>
            <div className="offer-step-title">Bezpłatna rozmowa</div>
            <div className="offer-step-desc">30 minut. Opowiesz nam jak wygląda Twój dzień.</div>
          </div>
          <div className="offer-step">
            <div className="offer-step-num">2</div>
            <div className="offer-step-title">Gotowe demo</div>
            <div className="offer-step-desc">Budujemy działający prototyp. Bezpłatnie.</div>
          </div>
          <div className="offer-step">
            <div className="offer-step-num">3</div>
            <div className="offer-step-title">Decydujesz</div>
            <div className="offer-step-desc">Jeśli widzisz wartość — wdrażamy. Jeśli nie — rozchodzimy się.</div>
          </div>
        </div>
        <a href="#kontakt" className="btn-primary" style={{ fontSize: '17px', padding: '18px 40px' }}>Zamów bezpłatne demo →</a>
        <div className="offer-cta-note">Odpiszemy w ciągu 24h · Bez umów · Bez karty kredytowej</div>
      </section>

      <section className="services" id="uslugi">
        <div className="services-header">
          <div className="section-label">{services.eyebrow || 'Czym się zajmujemy'}</div>
          <h2 dangerouslySetInnerHTML={{ __html: services.headline || 'Wszystko, czego Twoja firma potrzebuje, żeby działać sprawniej' }} />
        </div>
        <div className="services-grid">
          {[
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
              title: 'Strony internetowe', desc: 'Szybkie, nowoczesne strony zoptymalizowane pod konwersję.'
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 13 9 20 9"/><path d="M20 14v7H4V3h9"/><path d="M4 15l4-4 4 4 4-6"/></svg>,
              title: 'Automatyzacje procesów', desc: 'Łączymy Twoje narzędzia i eliminujemy ręczną pracę.'
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="12" y1="16" x2="12" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
              title: 'Chatboty i agenci AI', desc: 'Inteligentni asystenci obsługujący klientów 24/7.'
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
              title: 'Skrypty i narzędzia custom', desc: 'Dedykowane skrypty do automatycznego przetwarzania danych.'
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
              title: 'Raporty i dashboardy', desc: 'Automatyczne raporty KPI — zawsze aktualne.'
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
              title: 'Szkolenia z AI i automatyzacji', desc: 'Uczymy Twój zespół jak korzystać z narzędzi.'
            },
          ].map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process" id="proces">
        <div className="process-inner">
          <div className="process-header">
            <div className="section-label">{process.eyebrow || 'Jak działamy'}</div>
            <h2 dangerouslySetInnerHTML={{ __html: process.headline || 'Od pierwszej rozmowy do działającego systemu — w 4 krokach' }} />
          </div>
          <div className="process-steps">
            {[
              { num: '01', title: 'Darmowy audyt', desc: 'Rozmawiamy o Twoim biznesie. Szukamy gdzie tracisz czas i pieniądze.' },
              { num: '02', title: 'Demo i plan', desc: 'Budujemy działający prototyp i tworzymy mapę automatyzacji.' },
              { num: '03', title: 'Wdrożenie', desc: 'Budujemy i testujemy automatyzacje w Twoim środowisku.' },
              { num: '04', title: 'Wsparcie i skalowanie', desc: 'Szkolimy Twój zespół i rozwijamy system razem z firmą.' },
            ].map((s) => (
              <div key={s.num} className="process-step">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-header">
          <div className="section-label">Obiekcje i odpowiedzi</div>
          <h2>Masz wątpliwości?<br />Mamy odpowiedzi.</h2>
        </div>
        {[
          { q: '„Nie znam się na technologii — to nie jest dla mnie"', a: 'Właśnie dlatego tu jesteśmy. Ty nie musisz znać się na niczym technicznym.' },
          { q: '„Czy to będzie drogie?"', a: 'Zacznijmy od bezpłatnego demo. Ceny ustalamy po rozmowie, bez ukrytych opłat.' },
          { q: '„Czy to zadziała w mojej branży?"', a: 'Jeśli w Twojej firmie powtarzają się procesy — da się je zautomatyzować.' },
          { q: '„Co jeśli automatyzacja przestanie działać?"', a: 'Monitorujemy systemy i reagujemy szybko. Wsparcie techniczne w każdym pakiecie.' },
          { q: '„Ile czasu zajmie wdrożenie?"', a: 'Pierwsze automatyzacje wdrażamy w 7–14 dni.' },
          { q: '„Czy moje dane są bezpieczne?"', a: 'Działamy zgodnie z RODO, podpisujemy DPA i korzystamy z renomowanych dostawców.' },
        ].map((f) => (
          <div key={f.q} className="faq-item">
            <div className="faq-q">{f.q}</div>
            <div className="faq-a">{f.a}</div>
          </div>
        ))}
      </section>

      <section className="cta-final" id="kontakt">
        <div className="section-label" style={{ color: 'var(--accent-bright)' }}>Gotowy?</div>
        <h2 dangerouslySetInnerHTML={{ __html: cta.headline || 'Zamów bezpłatne demo i zacznij oszczędzać czas' }} />
        <p>{cta.subheading || 'Oddzwonimy w ciągu 24 godzin. Bez zobowiązań, bez ukrytych kosztów.'}</p>
        <ContactForm />
      </section>

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
        <a href="https://www.linkedin.com/company/113093390/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="https://www.instagram.com/automaly.pl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
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
      
     <div className="footer-nav">
      <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
      <Link href="/regulamin">Regulamin</Link>
    </div>
    </div>
  </div>
</footer>
    </>
  )
}
