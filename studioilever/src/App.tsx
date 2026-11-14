import { useState, type ReactNode } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { blogPosts } from "./data/blog";
import { areas, contact, images, services } from "./data/content";
import { faqItems } from "./data/faq";
import { metodoHighlights, metodoSections } from "./data/metodo";
import { JsonLdFaq, JsonLdLocalBusiness } from "./components/JsonLd";
import { PageMeta } from "./components/PageMeta";
import { Reveal } from "./components/Reveal";
import { RichText } from "./components/RichText";

const nav = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/metodo", label: "Metodo" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/contatti", label: "Contatti" },
];

function mapsSearchUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col">
      <a href="#main-content" className="skip-link">
        Vai al contenuto
      </a>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-ivory/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 md:gap-4 md:px-6 md:py-3">
          <Link to="/" className="flex min-h-11 items-center">
            <img src={images.logo} alt="Studio ILEVER — psicologia Conegliano" className="h-9 w-auto md:h-10" width={120} height={40} />
          </Link>
          <nav className="hidden flex-wrap justify-end gap-1 md:flex" aria-label="Menu principale">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    isActive ? "bg-sage text-white" : "text-muted hover:bg-sage/10 hover:text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <nav className="grid grid-cols-3 gap-2 border-t border-black/5 px-3 pb-2.5 pt-2 sm:grid-cols-6 md:hidden" aria-label="Menu mobile">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex min-h-11 items-center justify-center rounded-full px-2 text-center text-xs font-semibold shadow-sm sm:text-sm ${
                  isActive ? "bg-sage text-white" : "bg-white text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

function telHref(number: string) {
  return `tel:${number.replace(/[^\d+]/g, "")}`;
}

function SiteFooter() {
  const people = [contact.ricardo, contact.teresa];

  return (
    <footer className="border-t border-black/10 bg-ink pb-[env(safe-area-inset-bottom)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <img src={images.logo} alt="Studio ILEVER" className="mb-4 h-9 w-auto brightness-0 invert" />
            <p className="font-[family-name:var(--font-display)] text-lg leading-snug">{contact.studio}</p>
            <address className="mt-4 space-y-3 text-sm not-italic text-white/80">
              <p>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/45">Sede</span>
                <a href={mapsSearchUrl()} className="hover:underline" rel="noopener noreferrer" target="_blank">
                  {contact.address}
                </a>
              </p>
              <p>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/45">Telefono studio</span>
                <a href={telHref(contact.phone)} className="font-medium text-white hover:underline">
                  {contact.phone}
                </a>
                <span className="mt-0.5 block text-xs text-white/50">Lunedì–venerdì</span>
              </p>
            </address>
          </div>

          {people.map((person) => (
            <div key={person.email} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold leading-snug">{person.name}</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Cellulare</dt>
                  <dd className="mt-1">
                    <a href={telHref(person.mobile)} className="font-medium text-white/90 hover:underline">
                      {person.mobile}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Email</dt>
                  <dd className="mt-1 break-all">
                    <a href={`mailto:${person.email}`} className="text-white/90 hover:underline">
                      {person.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-white/50">
          {contact.studio} · {contact.address} · {contact.piva}
        </p>
      </div>
    </footer>
  );
}

function HighlightCard({
  title,
  text,
  to,
  cta,
  delayMs = 0,
}: {
  title: string;
  text: string;
  to: string;
  cta: string;
  delayMs?: number;
}) {
  return (
    <Reveal delayMs={delayMs} className="h-full w-full">
      <Link
        to={to}
        className="group flex h-full min-h-44 w-full flex-col rounded-2xl border border-sage/15 bg-white p-6 shadow-sm transition hover:border-sage/40 hover:shadow-md"
      >
        <h3 className="font-[family-name:var(--font-display)] text-xl text-sage">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          <RichText text={text} />
        </p>
        <span className="mt-4 inline-block text-sm font-semibold text-sage group-hover:underline">{cta} →</span>
      </Link>
    </Reveal>
  );
}

function HomePage() {
  return (
    <Shell>
      <section
        className="relative min-h-[62dvh] bg-cover bg-center text-white sm:min-h-[70vh]"
        style={{ backgroundImage: `linear-gradient(rgba(21,32,28,0.55), rgba(21,32,28,0.55)), url(${images.hero})` }}
      >
        <div className="mx-auto flex min-h-[62dvh] max-w-6xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[70vh] sm:py-20 md:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-white/80 sm:text-sm sm:tracking-[0.25em]">
              Dott. Ricardo Ileyassoff e Dott.ssa Teresa Verardo
            </p>
            <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-[1.75rem] leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
              Psicologia clinica,
              <span className="mt-1 block text-sand">psicoterapia e psicoanalisi</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90">
              <RichText onDark text="Un percorso **accogliente e riservato** — Conegliano, Italia e online." />
            </p>
            <Link
              to="/contatti"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold tracking-wide text-sage shadow-lg ring-2 ring-white/30"
            >
              Primo colloquio gratuito
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-sage">
            Un ambiente{" "}
            <span className="underline decoration-sand decoration-4 underline-offset-4">accogliente e riservato</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            <RichText text="Dopo un **primo contatto telefonico** fissiamo un appuntamento conoscitivo. Sedute **in studio** o **online** (FaceTime, WhatsApp, Skype). Anche **spagnolo** e **francese**." />
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal variant="image" delayMs={0}>
            <img
              src={images.homeRicardo}
              alt="Dott. Ricardo Ileyassoff, psicologo — Studio ILEVER Conegliano"
              className="h-64 w-full rounded-2xl object-cover md:h-80"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal variant="image" delayMs={120}>
            <img
              src={images.homeTeresa}
              alt="Dott.ssa Teresa Verardo, psicologa — Studio ILEVER"
              className="h-64 w-full rounded-2xl object-cover md:h-80"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-sage">FAQ e Blog</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <HighlightCard
            title="FAQ"
            text="Risposte su **primo colloquio**, **sedute online**, lingue e **prenotazioni**."
            to="/faq"
            cta="Domande frequenti"
            delayMs={0}
          />
          <HighlightCard
            title="Blog"
            text="**Pubblicazioni** e approfondimenti sul metodo, incluso il libro **Parlami così ti posso vedere**."
            to="/blog"
            cta="Vai al blog"
            delayMs={100}
          />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-sage">Di cosa ci occupiamo</h2>
          </Reveal>
          <ul className="mt-6 grid list-none gap-2 p-0 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="rounded-xl border border-transparent bg-ivory px-4 py-3 text-sm transition hover:border-sage/20">
                <RichText text={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-sage">Aree di intervento</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.title} delayMs={i * 80} className="h-full">
              <article className="h-full rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                <img src={a.image} alt="" className="max-w-[60px] object-contain" loading="lazy" decoding="async" aria-hidden />
                <h3 className="mt-4 font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted">
                  <RichText text={a.text} />
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Shell>
  );
}

function ChiSiamoPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <Reveal>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-sage">Biografia e esperienze</h1>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal delayMs={0}>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <Reveal variant="image">
                <img src={images.ricardo} alt="Ricardo Ileyassoff" className="mb-4 w-full rounded-xl object-cover" />
              </Reveal>
              <h2 className="text-xl font-semibold">Dott. Ricardo Ileyassoff</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <RichText text="Laureato a **Buenos Aires** e **Padova**, iscritto all’**Ordine della Regione Veneto**. La **psicoanalisi** ha accompagnato il percorso con la **cecità**: ascolto della **voce**, tono e ritmo come segnali empatici." />
              </p>
            </article>
          </Reveal>
          <Reveal delayMs={120}>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <Reveal variant="image">
                <img src={images.teresa} alt="Teresa Verardo" className="mb-4 w-full rounded-xl object-cover" />
              </Reveal>
              <h2 className="text-xl font-semibold">Dott.ssa Teresa Verardo</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <RichText text="Formazione a **Buenos Aires** e in **Europa**. Esperienza in **pediatria** e clinica ambulatoriale. Dalle lettere alla **psicoanalisi**: cura dell’**identità** e delle **radici**." />
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </Shell>
  );
}

function MetodoPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Metodo</p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-sage md:text-5xl">Un viaggio di scoperta</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            <RichText text="**Psicologia clinica**, **psicoterapia** e **psicoanalisi** con il metodo della **libera associazione**: un percorso che **non segue una tabella prestabilita**, ma si adatta a ciò che emergi in seduta." />
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
            <Reveal variant="image">
              <img src={images.metodo} alt="" className="h-full min-h-56 w-full rounded-2xl object-cover" />
            </Reveal>
            <Reveal variant="image" delayMs={100}>
              <img src={images.metodoAlt} alt="" className="h-full min-h-56 w-full rounded-2xl object-cover" />
            </Reveal>
          </div>
          <Reveal delayMs={80}>
            <aside className="flex h-full flex-col justify-center rounded-2xl border border-sage/20 bg-sage/5 p-6">
              <h2 className="font-[family-name:var(--font-display)] text-xl text-sage">In sintesi</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink">
                {metodoHighlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sage" aria-hidden>
                      ·
                    </span>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
              <Link
                to="/contatti"
                className="mt-6 inline-flex rounded-full bg-sage px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-sage-light"
              >
                Prenota un colloquio
              </Link>
            </aside>
          </Reveal>
        </div>

        <div className="mt-12 space-y-8">
          {metodoSections.map((section, i) => (
            <Reveal key={section.title} delayMs={i * 60}>
              <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-sage">{section.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
                  {section.paragraphs.map((p) => (
                    <p key={p}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-2xl bg-ink px-6 py-8 text-center text-white md:px-10">
            <p className="font-[family-name:var(--font-display)] text-xl">Cominciamo a conoscerci?</p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/80">
              <RichText
                onDark
                text="Dopo un **primo contatto telefonico** si fissa un appuntamento per comprendere le **motivazioni** della richiesta."
              />
            </p>
            <Link to="/contatti" className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-sage">
              Vai ai contatti
            </Link>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Shell>
      <JsonLdFaq />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14 md:px-6">
        <Reveal>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-sage">Domande frequenti</h1>
        </Reveal>
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-black/5 bg-ivory/40 p-3 shadow-sm md:p-4">
            <div className="flex flex-col gap-2.5">
            {faqItems.map((item, i) => (
              <div key={item.q} className="overflow-hidden rounded-xl border border-black/5 bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex min-h-12 w-full items-center gap-3 px-4 py-3 text-left text-[0.95rem] font-medium md:px-5"
                >
                  <span className="min-w-0 flex-1">
                    <RichText text={item.q} />
                  </span>
                  <span className="shrink-0 text-sage">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <p className="border-t border-black/5 px-4 pb-3 pt-2 text-sm leading-relaxed text-muted md:px-5 md:pb-4">
                    <RichText text={item.a} />
                  </p>
                )}
              </div>
            ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

function BlogPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <Reveal>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-sage">Blog e pubblicazioni</h1>
        </Reveal>
        <div className="mt-8 space-y-5">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delayMs={i * 90}>
            <Link
              to={`/blog/${post.slug}`}
              className="block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:border-sage/30"
            >
              {post.cover && (
                <img src={post.cover} alt={post.title} className="h-44 w-full object-cover sm:h-48" loading="lazy" decoding="async" />
              )}
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-muted">{post.date}</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-sage">{post.title}</h2>
                {post.subtitle && <p className="mt-1 text-sm font-medium">{post.subtitle}</p>}
                <p className="mt-3 text-sm text-muted">
                  <RichText text={post.excerpt} />
                </p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
          <p className="text-muted">Articolo non trovato.</p>
          <Link to="/blog" className="mt-4 inline-block text-sage font-medium">
            ← Torna al blog
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <Reveal>
          <Link to="/blog" className="text-sm font-medium text-sage">
            ← Blog
          </Link>
        </Reveal>
        {post.cover && (
          <Reveal variant="image" className="mt-6">
            <img src={post.cover} alt={post.title} className="w-full rounded-2xl object-cover" loading="lazy" decoding="async" />
          </Reveal>
        )}
        <Reveal>
          <p className="mt-4 text-xs uppercase tracking-wide text-muted">{post.date}</p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-sage">{post.title}</h1>
          {post.subtitle && <p className="mt-2 text-muted">{post.subtitle}</p>}
        </Reveal>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          {post.body.map((p, i) => (
            <Reveal key={p} delayMs={i * 70}>
              <p>
                <RichText text={p} />
              </p>
            </Reveal>
          ))}
        </div>
      </article>
    </Shell>
  );
}

function ContattiPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14 md:px-6">
        <Reveal>
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-sage sm:text-4xl">Cominciamo a conoscerci?</h1>
          <p className="mt-4 text-base text-muted">
            <RichText text={`Riceviamo a **Conegliano** (provincia di Treviso). **Lunedì–venerdì**:`} />{" "}
            <a href={telHref(contact.phone)} className="font-semibold text-sage underline-offset-2 hover:underline">
              {contact.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">
            <a href={mapsSearchUrl()} className="font-medium text-sage hover:underline" rel="noopener noreferrer" target="_blank">
              {contact.address}
            </a>
          </p>
        </Reveal>
        <Reveal variant="image" className="mt-8 max-w-xl">
          <img src={images.ricardoContatti} alt="" className="w-full rounded-2xl object-cover" />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Reveal delayMs={0}>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold">{contact.ricardo.name}</h2>
              <p className="mt-2 text-sm text-muted">
                <a href={telHref(contact.ricardo.mobile)} className="font-medium text-sage hover:underline">
                  {contact.ricardo.mobile}
                </a>
              </p>
              <a className="text-sm text-sage" href={`mailto:${contact.ricardo.email}`}>
                {contact.ricardo.email}
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold">{contact.teresa.name}</h2>
              <p className="mt-2 text-sm text-muted">
                <a href={telHref(contact.teresa.mobile)} className="font-medium text-sage hover:underline">
                  {contact.teresa.mobile}
                </a>
              </p>
              <a className="text-sm text-sage" href={`mailto:${contact.teresa.email}`}>
                {contact.teresa.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Shell>
  );
}

export default function App() {
  return (
    <>
      <PageMeta />
      <JsonLdLocalBusiness />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chi-siamo" element={<ChiSiamoPage />} />
      <Route path="/metodo" element={<MetodoPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/contatti" element={<ContattiPage />} />
      </Routes>
    </>
  );
}
