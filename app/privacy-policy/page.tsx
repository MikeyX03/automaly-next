// app/polityka-prywatnosci/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Automaly.pl",
  description:
    "Informacje o przetwarzaniu danych osobowych przez Automaly.pl zgodnie z RODO.",
};

const sections = [
  {
    id: "administrator",
    title: "1. Administrator danych osobowych",
    content: (
      <>
        <p>
          Administratorem Twoich danych osobowych jest{" "}
          <strong>Mikolaj [TWOJE NAZWISKO], prowadzący działalność pod nazwą
          Automaly.pl</strong>, z siedzibą w Polsce.
        </p>
        <p className="mt-3">
          Kontakt z administratorem:{" "}
          <a href="mailto:info@automaly.pl" className="pp-link">
            info@automaly.pl
          </a>{" "}
          &nbsp;|&nbsp;{" "}
          <a href="tel:+48698724699" className="pp-link">
            +48 698 724 699
          </a>
        </p>
      </>
    ),
  },
  {
    id: "jakie-dane",
    title: "2. Jakie dane zbieramy",
    content: (
      <>
        <p>Poprzez formularz kontaktowy na stronie zbieramy:</p>
        <ul className="pp-list">
          <li>Imię i nazwisko</li>
          <li>Numer telefonu</li>
          <li>Adres e-mail</li>
          <li>Nazwę firmy (opcjonalnie)</li>
          <li>Opis zapytania / zakres automatyzacji (opcjonalnie)</li>
        </ul>
      </>
    ),
  },
  {
    id: "cel",
    title: "3. Cel i podstawa prawna przetwarzania",
    content: (
      <>
        <p>
          Twoje dane przetwarzamy wyłącznie w celu odpowiedzi na przesłane
          zapytanie oraz nawiązania kontaktu biznesowego — podstawa prawna:{" "}
          <strong>art. 6 ust. 1 lit. b i f RODO</strong> (wykonanie umowy /
          prawnie uzasadniony interes administratora).
        </p>
        <p className="mt-3">
          Nie przetwarzamy danych w celach marketingowych bez Twojej wyraźnej
          zgody.
        </p>
      </>
    ),
  },
  {
    id: "czas",
    title: "4. Czas przechowywania danych",
    content: (
      <p>
        Dane przechowujemy przez okres niezbędny do obsługi zapytania i
        ewentualnej współpracy, nie dłużej niż <strong>3 lata</strong> od
        ostatniego kontaktu, chyba że przepisy prawa wymagają dłuższego okresu
        przechowywania (np. dokumentacja księgowa — 5 lat).
      </p>
    ),
  },
  {
    id: "odbiorcy",
    title: "5. Odbiorcy danych",
    content: (
      <>
        <p>
          Twoje dane mogą być przekazywane podmiotom świadczącym usługi na nasze
          zlecenie, wyłącznie w zakresie niezbędnym do ich wykonania:
        </p>
        <ul className="pp-list">
          <li>
            <strong>Vercel Inc.</strong> — hosting strony internetowej (serwery
            w UE / USA z odpowiednimi zabezpieczeniami SCCs)
          </li>
          <li>
            <strong>Dostawcy usług e-mail</strong> — do korespondencji
          </li>
        </ul>
        <p className="mt-3">
          Nie sprzedajemy ani nie udostępniamy danych podmiotom trzecim w celach
          marketingowych.
        </p>
      </>
    ),
  },
  {
    id: "prawa",
    title: "6. Twoje prawa",
    content: (
      <>
        <p>Przysługuje Ci prawo do:</p>
        <ul className="pp-list">
          <li>
            <strong>Dostępu</strong> do swoich danych osobowych
          </li>
          <li>
            <strong>Sprostowania</strong> nieprawidłowych danych
          </li>
          <li>
            <strong>Usunięcia</strong> danych („prawo do bycia zapomnianym")
          </li>
          <li>
            <strong>Ograniczenia</strong> przetwarzania
          </li>
          <li>
            <strong>Przenoszenia</strong> danych
          </li>
          <li>
            <strong>Sprzeciwu</strong> wobec przetwarzania opartego na
            prawnie uzasadnionym interesie
          </li>
          <li>
            <strong>Wniesienia skargi</strong> do Prezesa Urzędu Ochrony Danych
            Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa
          </li>
        </ul>
        <p className="mt-3">
          Aby skorzystać z powyższych praw, skontaktuj się z nami przez e-mail:{" "}
          <a href="mailto:info@automaly.pl" className="pp-link">
            info@automaly.pl
          </a>
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "7. Pliki cookies",
    content: (
      <p>
        Strona może korzystać z podstawowych plików cookies niezbędnych do
        poprawnego działania (sesja, preferencje). Nie stosujemy cookies
        śledzących ani reklamowych bez Twojej zgody. Pliki cookies możesz
        wyłączyć w ustawieniach swojej przeglądarki.
      </p>
    ),
  },
  {
    id: "bezpieczenstwo",
    title: "8. Bezpieczeństwo danych",
    content: (
      <p>
        Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony
        Twoich danych osobowych przed nieuprawnionym dostępem, utratą lub
        zniszczeniem. Strona jest szyfrowana protokołem TLS (HTTPS).
      </p>
    ),
  },
  {
    id: "zmiany",
    title: "9. Zmiany polityki prywatności",
    content: (
      <p>
        Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki Prywatności.
        O wszelkich istotnych zmianach poinformujemy przez aktualizację daty na
        dole strony. Zachęcamy do regularnego zapoznawania się z treścią
        dokumentu.
      </p>
    ),
  },
];

export default function PolitykaPrywatnosci() {
  return (
    <>
      <style>{`
        .pp-link {
          color: #a855f7;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }
        .pp-link:hover {
          color: #c084fc;
        }
        .pp-list {
          list-style: none;
          padding: 0;
          margin: 0.75rem 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pp-list li {
          padding-left: 1.25rem;
          position: relative;
          color: #d1d5db;
        }
        .pp-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #a855f7;
          font-size: 0.85rem;
        }
      `}</style>

      <main
        style={{
          backgroundColor: "#0a0a0a",
          minHeight: "100vh",
          color: "#e5e7eb",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Nagłówek */}
        <div
          style={{
            borderBottom: "1px solid #1f2937",
            padding: "1.5rem 0",
          }}
        >
          <div
            style={{
              maxWidth: "56rem",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#9ca3af",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.2s",
              }}
            >
              <span style={{ fontSize: "1rem" }}>←</span> Powrót na stronę
              główną
            </Link>
          </div>
        </div>

        {/* Treść */}
        <div
          style={{
            maxWidth: "56rem",
            margin: "0 auto",
            padding: "4rem 1.5rem 6rem",
          }}
        >
          {/* Tytuł */}
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#a855f7",
                backgroundColor: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.25)",
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                marginBottom: "1.25rem",
              }}
            >
              Dokument prawny
            </div>
            <h1
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "#f9fafb",
                lineHeight: 1.2,
                margin: "0 0 1rem",
              }}
            >
              Polityka Prywatności
            </h1>
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
              Ostatnia aktualizacja:{" "}
              <strong style={{ color: "#9ca3af" }}>2 czerwca 2026 r.</strong>
            </p>
          </div>

          {/* Intro */}
          <div
            style={{
              backgroundColor: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "2.5rem",
              borderLeft: "3px solid #a855f7",
            }}
          >
            <p style={{ color: "#d1d5db", lineHeight: 1.7, margin: 0 }}>
              Niniejsza Polityka Prywatności opisuje, w jaki sposób{" "}
              <strong style={{ color: "#f9fafb" }}>Automaly.pl</strong>{" "}
              przetwarza dane osobowe użytkowników odwiedzających stronę
              internetową oraz korzystających z formularza kontaktowego. Zależy
              nam na transparentności — poniżej znajdziesz wszystkie niezbędne
              informacje wymagane przez{" "}
              <strong style={{ color: "#f9fafb" }}>
                Rozporządzenie RODO (UE) 2016/679
              </strong>
              .
            </p>
          </div>

          {/* Sekcje */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1f2937",
                  borderRadius: "0.75rem",
                  padding: "1.75rem",
                  transition: "border-color 0.2s",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "#f3f4f6",
                    margin: "0 0 1rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid #1f2937",
                  }}
                >
                  {section.title}
                </h2>
                <div
                  style={{
                    color: "#d1d5db",
                    lineHeight: 1.75,
                    fontSize: "0.9375rem",
                  }}
                >
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Footer dokumentu */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #1f2937",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#4b5563", fontSize: "0.8125rem", margin: 0 }}>
              © 2026 Automaly.pl · Wszelkie prawa zastrzeżone
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link
                href="/regulamin"
                style={{ color: "#6b7280", fontSize: "0.8125rem", textDecoration: "none" }}
              >
                Regulamin →
              </Link>
              <Link
                href="/"
                style={{ color: "#6b7280", fontSize: "0.8125rem", textDecoration: "none" }}
              >
                Strona główna →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
