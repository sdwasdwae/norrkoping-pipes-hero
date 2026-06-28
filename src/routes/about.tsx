import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Om oss — Norrköpings Rörinstallationer AB" },
      {
        name: "description",
        content:
          "Lär känna Norrköpings Rörinstallationer AB. Auktoriserad VVS-firma med yrkesstolthet sedan starten. Lokal expertis i Norrköping.",
      },
      { property: "og:title", content: "Om oss — Norrköpings Rörinstallationer AB" },
      {
        property: "og:description",
        content:
          "Auktoriserad VVS-firma med yrkesstolthet sedan starten. Lokal expertis i Norrköping.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none hover:opacity-80 transition-opacity">
            <span className="font-black text-lg tracking-tighter uppercase">Norrköpings Rör</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Installationer AB
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/about"
              activeProps={{ className: "font-bold" }}
              className="text-sm tracking-tight hover:text-primary transition-colors"
            >
              Om oss
            </Link>
            <a
              href="tel:0114004410"
              className="bg-foreground text-background px-4 py-2 text-sm font-bold tracking-tight hover:bg-primary transition-colors"
            >
              011-400 44 10
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-24 pb-20 border-b border-border">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-4">
            Om företaget
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-balance leading-[0.9] max-w-[14ch]">
            Lokalt hantverk.
            <br />
            Långsiktig kvalitet.
          </h1>
        </section>

        {/* Story */}
        <section className="py-24 grid md:grid-cols-12 gap-12 border-b border-border">
          <div className="md:col-span-5">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
              Vår historia
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl font-medium leading-relaxed">
              Norrköpings Rörinstallationer AB är ett auktoriserat VVS-företag med bas på Fredriksdalsgatan 25 i Norrköping. Vi har byggt vårt rykte på yrkesstolthet, punktlighet och ett genuint intresse för hantverket.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Från första kontakt till färdigt arbete lägger vi stor vikt vid tydlig kommunikation och att hålla vad vi lovar. Våra kunder återkommer — och det är det finaste betyg vi kan få.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 grid md:grid-cols-12 gap-12 border-b border-border">
          <div className="md:col-span-5">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
              Så arbetar vi
            </h2>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Tydlighet",
                text: "Inga dolda kostnader. Vi går igenom arbetet och offerten steg för steg innan vi sätter igång.",
              },
              {
                title: "Kvalitet",
                text: "Vi använder beprövade material och följer branschens regelverk — varje gång.",
              },
              {
                title: "Tillgänglighet",
                text: "Akuta vattenläckor väntar inte. När det brådskar finns vi på plats snabbt i hela Norrköpingsområdet.",
              },
              {
                title: "Lokal förankring",
                text: "Vi känner Norrköpings fastigheter och förutsättningar. Det gör oss snabbare och mer kostnadseffektiva.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage */}
        <section className="py-24 grid md:grid-cols-12 gap-12 border-b border-border">
          <div className="md:col-span-5">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
              Vårt upptagningsområde
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl font-medium leading-relaxed">
              Vi arbetar primärt i Norrköping med omnejd, men tar oss an uppdrag i hela Östergötland vid större projekt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Oavsett om du bor i villa, radhus eller lägenhet har vi kompetensen och utrustningen för att hjälpa dig.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 grid md:grid-cols-12 gap-12 border-b border-border">
          <div className="md:col-span-5">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
              Certifieringar & försäkringar
            </h2>
          </div>
          <div className="md:col-span-7 space-y-4">
            {[
              "Auktoriserat VVS-företag",
              "Säker Vatten-certifierad",
              "VVS-BKR registrerad",
              "Ansvarsförsäkrad personal",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="size-1.5 bg-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Vill du veta mer?</h2>
          <p className="text-muted-foreground max-w-[50ch] mx-auto">
            Tveka inte att höra av dig om du har frågor om ett projekt, jourärende eller en offertförfrågan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:0114004410"
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:brightness-110 transition-all inline-flex items-center justify-center"
            >
              Ring 011-400 44 10
            </a>
            <Link
              to="/"
              className="border border-input bg-background px-8 py-4 text-sm font-bold tracking-tight hover:bg-accent transition-colors inline-flex items-center justify-center"
            >
              Tillbaka till startsidan
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t-2 border-foreground">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Adress</span>
            <address className="not-italic font-bold text-lg">
              Fredriksdalsgatan 25
              <br />
              602 23 Norrköping
            </address>
          </div>
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Kontakt</span>
            <div className="flex flex-col font-bold text-lg">
              <a href="tel:0114004410" className="hover:text-primary transition-colors">
                011-400 44 10
              </a>
              <span className="text-muted-foreground text-sm font-normal">
                Mån–Fre: 07:00 – 16:00
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Certifiering</span>
            <div className="flex gap-4">
              <div className="size-12 bg-stone-200 border border-black/5 grid place-items-center">
                <span className="text-[8px] font-black uppercase leading-none text-center">
                  Säker
                  <br />
                  Vatten
                </span>
              </div>
              <div className="size-12 bg-stone-200 border border-black/5 grid place-items-center">
                <span className="text-[8px] font-black uppercase leading-none text-center">
                  VVS
                  <br />
                  BKR
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] uppercase text-muted-foreground">
            © 2024 Norrköpings Rörinstallationer AB
          </span>
          <span className="font-mono text-[10px] uppercase text-muted-foreground italic">
            Hantverk som håller i generationer
          </span>
        </div>
      </footer>
    </div>
  );
}
