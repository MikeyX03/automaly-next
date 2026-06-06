import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin — Automaly.pl",
  description: "Regulamin świadczenia usług przez Automaly.pl.",
};

export default function RegulamPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <p className="legal-label">Dokument prawny</p>
          <h1 className="legal-title">Regulamin</h1>
          <p className="legal-meta">Wersja 1.0 · Obowiązuje od 1 czerwca 2026</p>
        </header>

        <div className="legal-body">
          <section className="legal-section">
            <h2>§ 1 Postanowienia ogólne</h2>
            <ol>
              <li>Niniejszy Regulamin określa zasady świadczenia usług drogą elektroniczną oraz na podstawie umów zawieranych za pośrednictwem serwisu automaly.pl (dalej: „Serwis"), prowadzonego przez Automaly.pl (dalej: „Usługodawca").</li>
              <li>Korzystanie z Serwisu jest równoznaczne z akceptacją niniejszego Regulaminu.</li>
              <li>Regulamin dostępny jest w każdym czasie pod adresem <a href="https://automaly.pl/regulamin">automaly.pl/regulamin</a>.</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>§ 2 Dane Usługodawcy</h2>
            <ul>
              <li><strong>Firma:</strong> Automaly.pl</li>
              <li><strong>Adres e-mail:</strong> <a href="mailto:info@automaly.pl">info@automaly.pl</a></li>
              <li><strong>Telefon:</strong> <a href="tel:+48698724699">+48 698 724 699</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>§ 3 Zakres usług</h2>
            <p>Usługodawca świadczy w szczególności następujące usługi:</p>
            <ol>
              <li>projektowanie i tworzenie stron internetowych oraz aplikacji webowych,</li>
              <li>wdrażanie automatyzacji procesów biznesowych (n8n, Make, Zapier i inne),</li>
              <li>integracje API oraz łączenie systemów i narzędzi cyfrowych,</li>
              <li>wdrażanie rozwiązań opartych na sztucznej inteligencji (AI),</li>
              <li>budowa chatbotów i agentów AI,</li>
              <li>szkolenia z zakresu AI i automatyzacji,</li>
              <li>utrzymanie, wsparcie techniczne i rozwijanie wdrożonych systemów.</li>
            </ol>
            <p>Szczegółowy zakres i warunki każdego zlecenia określa indywidualna oferta lub umowa zawierana z Klientem.</p>
          </section>

          <section className="legal-section">
            <h2>§ 4 Zawarcie umowy</h2>
            <ol>
              <li>Złożenie formularza kontaktowego lub zgłoszenie przez e-mail bądź telefon stanowi zaproszenie do negocjacji, a nie ofertę w rozumieniu Kodeksu cywilnego.</li>
              <li>Umowa zostaje zawarta z chwilą pisemnego (w tym e-mailowego) potwierdzenia przez obie strony jej warunków lub podpisania stosownej umowy.</li>
              <li>Usługodawca zastrzega sobie prawo do odmowy realizacji zlecenia bez podania przyczyny.</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>§ 5 Wynagrodzenie i płatności</h2>
            <ol>
              <li>Wynagrodzenie za usługi ustalane jest indywidualnie i wskazywane w ofercie lub umowie.</li>
              <li>Faktury wystawiane są zgodnie z ustalonym harmonogramem płatności lub po zakończeniu zlecenia.</li>
              <li>Płatności realizowane są przelewem bankowym na rachunek wskazany na fakturze.</li>
              <li>W przypadku opóźnienia w płatności Usługodawca uprawniony jest do naliczenia ustawowych odsetek za opóźnienie.</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>§ 6 Prawa własności intelektualnej</h2>
            <ol>
              <li>Z chwilą pełnej zapłaty wynagrodzenia Usługodawca przenosi na Klienta autorskie prawa majątkowe do powstałych w ramach zlecenia utworów na polach eksploatacji wskazanych w umowie, chyba że strony postanowiły inaczej.</li>
              <li>Do momentu pełnej zapłaty Usługodawca zachowuje pełnię praw do wykonanych prac.</li>
              <li>Usługodawca zastrzega sobie prawo do prezentowania zrealizowanych projektów w portfolio, chyba że Klient zastrzeże inaczej na piśmie.</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>§ 7 Odpowiedzialność</h2>
            <ol>
              <li>Usługodawca nie ponosi odpowiedzialności za szkody wynikające z nieprawidłowego użytkowania wdrożonych systemów przez Klienta lub osoby trzecie.</li>
              <li>Całkowita odpowiedzialność Usługodawcy wobec Klienta ograniczona jest do wysokości wynagrodzenia zapłaconego za dane zlecenie.</li>
              <li>Usługodawca nie ponosi odpowiedzialności za przerwy w funkcjonowaniu usług zewnętrznych (API, chmura, narzędzia trzecich dostawców) pozostające poza jego kontrolą.</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>§ 8 Ochrona danych osobowych</h2>
            <p>Zasady przetwarzania danych osobowych opisuje odrębna <a href="/polityka-prywatnosci">Polityka Prywatności</a> dostępna pod adresem automaly.pl/polityka-prywatnosci.</p>
          </section>

          <section className="legal-section">
            <h2>§ 9 Reklamacje</h2>
            <ol>
              <li>Reklamacje należy składać drogą elektroniczną na adres <a href="mailto:info@automaly.pl">info@automaly.pl</a>.</li>
              <li>Reklamacja powinna zawierać opis problemu oraz dane umożliwiające identyfikację zlecenia.</li>
              <li>Usługodawca rozpatrzy reklamację w terminie 14 dni kalendarzowych od jej otrzymania.</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>§ 10 Zmiany Regulaminu</h2>
            <ol>
              <li>Usługodawca zastrzega sobie prawo do zmiany niniejszego Regulaminu.</li>
              <li>O zmianach Klienci posiadający aktywne umowy zostaną powiadomieni drogą e-mailową z co najmniej 14-dniowym wyprzedzeniem.</li>
              <li>Dalsze korzystanie z usług po wejściu zmian w życie oznacza ich akceptację.</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>§ 11 Postanowienia końcowe</h2>
            <ol>
              <li>W sprawach nieuregulowanych stosuje się przepisy prawa polskiego, w szczególności Kodeksu cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.</li>
              <li>Wszelkie spory strony będą starały się rozstrzygać polubownie. W razie braku porozumienia sądem właściwym jest sąd siedziby Usługodawcy.</li>
              <li>Regulamin wchodzi w życie z dniem 1 czerwca 2026 r.</li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
