import { createFileRoute } from "@tanstack/react-router";
import heroPipes from "@/assets/hero-pipes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Norrköpings Rörinstallationer AB – VVS & Rörmokare" },
      {
        name: "description",
        content:
          "Auktoriserad VVS-firma på Fredriksdalsgatan 25 i Norrköping. Installation, badrum, värme och akut jour. Ring 011-400 44 10.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg tracking-tighter uppercase">Norrköpings Rör</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Installationer AB
            </span>
          </div>
          <a
            href="tel:0114004410"
            className="bg-foreground text-background px-4 py-2 text-sm font-bold tracking-tight hover:bg-primary transition-colors"
          >
            011-400 44 10
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section
          className="pt-24 pb-20 border-b border-border"
          style={{ animation: "reveal-up 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Grundat i Norrköping
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-balance leading-[0.9]">
                Trygg VVS.
                <br />
                Lokalt hantverk.
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end justify-between">
              <p className="max-w-[45ch] text-lg text-pretty text-muted-foreground">
                Vi utför allt inom VVS-installation, badrumsrenovering och värmesystem
                med fokus på kvalitet och långsiktighet.
              </p>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <a
                  href="tel:0114004410"
                  className="bg-primary text-primary-foreground px-8 py-4 text-center text-lg font-bold hover:brightness-110 transition-all"
                >
                  Ring direkt: 011-400 44 10
                </a>
                <span className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="size-2 rounded-full bg-green-600 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase">
                    Tillgänglig för akuta ärenden
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="py-12">
          <img
            src={heroPipes}
            alt="Kopparrör och mässingskopplingar på arbetsbänk"
            className="w-full aspect-[21/9] object-cover grayscale hover:grayscale-0 transition-all duration-700 outline-1 -outline-offset-1 outline-black/5"
          />
        </section>

        {/* Services */}
        <section className="py-24 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              { n: "01 / SERVICE", t: "VVS Installation", d: "Kompletta installationer för nybygge och renovering av villor och lägenheter." },
              { n: "02 / VÅTRUM", t: "Badrum", d: "Vi skapar trygga och estetiska badrumslösningar med certifierad personal." },
              { n: "03 / ENERGI", t: "Värmesystem", d: "Optimering och installation av värmepumpar och moderna värmelösningar." },
            ].map((s) => (
              <div key={s.t} className="bg-background p-8 hover:bg-stone-50 transition-colors">
                <span className="font-mono text-[10px] text-muted-foreground mb-6 block">{s.n}</span>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
            <div className="p-8 bg-primary/5 hover:bg-primary/10 transition-colors">
              <span className="font-mono text-[10px] text-primary mb-6 block">04 / JOUR</span>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-primary">Akut Rörmokare</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                När olyckan är framme finns vi snabbt på plats i hela Norrköpingsområdet.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials + About */}
        <section className="py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-8">
            <h2 className="text-4xl font-black tracking-tight uppercase">Vad kunderna säger</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 py-2">
                <div className="flex gap-1 mb-2">
                  <span className="text-primary text-sm">★★★★★</span>
                </div>
                <blockquote className="text-lg font-medium italic mb-2 tracking-tight">
                  "Riktigt duktiga killar! Skulle inte använda någon annan rörmokare! Billiga o bäst!"
                </blockquote>
                <cite className="font-mono text-[10px] uppercase not-italic text-muted-foreground">
                  — Emma Svensson
                </cite>
              </div>
              <div className="border-l-2 border-primary pl-6 py-2">
                <div className="flex gap-1 mb-2">
                  <span className="text-primary text-sm">★★★★★</span>
                </div>
                <blockquote className="text-lg font-medium italic mb-2 tracking-tight">
                  "Snabb och utmärkt service. Trevlig personal."
                </blockquote>
                <cite className="font-mono text-[10px] uppercase not-italic text-muted-foreground">
                  — Lennart
                </cite>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-8 space-y-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Om oss</h2>
            <p className="text-xl font-medium leading-relaxed">
              Norrköpings Rörinstallationer AB är din pålitliga partner för alla typer av
              rörarbeten. Med bas på Fredriksdalsgatan servar vi både privatpersoner och
              företag med fokus på yrkesstolthet.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <div className="flex items-center gap-3 text-sm">
                <span className="size-1.5 bg-foreground" />
                <span>Auktoriserat VVS-företag</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="size-1.5 bg-foreground" />
                <span>Ansvarsförsäkrad personal</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="size-1.5 bg-foreground" />
                <span>5,0 stjärnor på Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-24 border-t-2 border-foreground">
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
      </main>
    </div>
  );
}
