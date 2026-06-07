// app/polityka-prywatnosci/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Polityka Prywatności — Automaly.pl",
  description:
    "Informacje o przetwarzaniu danych osobowych przez Automaly.pl zgodnie z RODO.",
};

export default function PolitykaPrywatnosci() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-container">
        <header className="legal-header">
          <p className="legal-label">Dokument prawny</p>
          <h1 className="legal-title">Polityka Prywatności</h1>
          <p className="legal-meta">Ostatnia aktualizacja: 2 czerwca 2026 r.</p>
        </header>

        <div className="legal-body">
          <section className="legal-section">
            <h2>1. Administrator danych osobowych</h2>
            <p>
              Administratorem Twoich danych osobowych jest{" "}
              <strong>Mikołaj Cieślik, prowadzący działalność nierejestrowaną
              pod nazwą Automaly.pl</strong>, z siedzibą w Polsce.
            </p>
            <p>
              Kontakt z administratorem:{" "}
              <a href="mailto:info@automaly.pl">info@automaly.pl</a>
              {" "}·{" "}
              <a href="tel:+48698724699">+48 698 724 699</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Jakie dane zbieramy</h2>
            <p>Poprzez formularz kontaktowy na stronie zbieramy:</p>
            <ul>
              <li>Imię i nazwisko</li>
              <li>Numer telefonu</li>
              <li>Adres e-mail</li>
              <li>Nazwę firmy (opcjonalnie)</li>
              <li>Opis zapytania / zakres automatyzacji (opcjonalnie)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Cel i podstawa prawna przetwarzania</h2>
            <p>
              Twoje dane przetwarzamy wyłącznie w celu odpowiedzi na przesłane
              zapytanie oraz nawiązania kontaktu biznesowego — podstawa prawna:{" "}
              <strong>art. 6 ust. 1 lit. b i f RODO</strong> (wykonanie umowy /
              prawnie uzasadniony interes administratora).
            </p>
            <p>
              Nie przetwarzamy danych w celach marketingowych bez Twojej
              wyraźnej zgody.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Czas przechowywania danych</h2>
            <p>
              Dane przechowujemy przez okres niezbędny do obsługi zapytania
              i ewentualnej współpracy, nie dłużej niż <strong>3 lata</strong>{" "}
              od ostatniego kontaktu, chyba że przepisy prawa wymagają dłuższego
              okresu przechowywania (np. dokumentacja księgowa — 5 lat).
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Odbiorcy danych</h2>
            <p>
              Twoje dane mogą być przekazywane podmiotom świadczącym usługi na
              nasze zlecenie, wyłącznie w zakresie niezbędnym do ich wykonania:
            </p>
            <ul>
              <li>
                <strong>Vercel Inc.</strong> — hosting strony internetowej
                (serwery w UE / USA z odpowiednimi zabezpieczeniami SCCs)
              </li>
              <li>
                <strong>Dostawcy usług e-mail</strong> — do korespondencji
              </li>
            </ul>
            <p>
              Nie sprzedajemy ani nie udostępniamy danych podmiotom trzecim
              w celach marketingowych.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Twoje prawa</h2>
            <p>Przysługuje Ci prawo do:</p>
            <ul>
              <li><strong>Dostępu</strong> do swoich danych osobowych</li>
              <li><strong>Sprostowania</strong> nieprawidłowych danych</li>
              <li><strong>Usunięcia</strong> danych („prawo do bycia zapomnianym")</li>
              <li><strong>Ograniczenia</strong> przetwarzania</li>
              <li><strong>Przenoszenia</strong> danych</li>
              <li>
                <strong>Sprzeciwu</strong> wobec przetwarzania opartego na
                prawnie uzasadnionym interesie
              </li>
              <li>
                <strong>Wniesienia skargi</strong> do Prezesa Urzędu Ochrony
                Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa
              </li>
            </ul>
            <p>
              Aby skorzystać z powyższych praw, skontaktuj się z nami:{" "}
              <a href="mailto:info@automaly.pl">info@automaly.pl</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Pliki cookies</h2>
            <p>
              Strona może korzystać z podstawowych plików cookies niezbędnych
              do poprawnego działania (sesja, preferencje). Nie stosujemy cookies
              śledzących ani reklamowych bez Twojej zgody. Pliki cookies możesz
              wyłączyć w ustawieniach swojej przeglądarki.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Bezpieczeństwo danych</h2>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu
              ochrony Twoich danych osobowych przed nieuprawnionym dostępem,
              utratą lub zniszczeniem. Strona jest szyfrowana protokołem TLS
              (HTTPS).
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Zmiany polityki prywatności</h2>
            <p>
              Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki
              Prywatności. O wszelkich istotnych zmianach poinformujemy przez
              aktualizację daty na dole strony. Zachęcamy do regularnego
              zapoznawania się z treścią dokumentu.
            </p>
          </section>
        </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
