import { blogPosts } from "./blog";
import { contact, images } from "./content";
import { faqItems } from "./faq";

export const SITE_URL = "https://www.studioilever.com";

export const defaultMeta = {
  title: "Studio ILEVER | Psicologia e psicoterapia a Conegliano",
  description:
    "Studio Professionale Associato ILEVER: psicologia clinica, psicoterapia e psicoanalisi a San Pietro di Feletto (Conegliano, TV). Primo colloquio gratuito. Anche online.",
};

export const routeMeta: Record<string, { title: string; description: string }> = {
  "/": defaultMeta,
  "/chi-siamo": {
    title: "Chi siamo | Studio ILEVER — Conegliano",
    description:
      "Dott. Ricardo Ileyassoff e Dott.ssa Teresa Verardo: biografie, formazione e esperienza clinica nello studio di Conegliano e provincia di Treviso.",
  },
  "/metodo": {
    title: "Metodo | Libera associazione — Studio ILEVER",
    description:
      "Psicoterapia e psicoanalisi con libera associazione: un percorso personalizzato in studio a Conegliano o online.",
  },
  "/faq": {
    title: "FAQ | Domande frequenti — Studio ILEVER",
    description:
      "Primo colloquio gratuito, sedute online, lingue (italiano, spagnolo, francese) e come prenotare lo studio a Conegliano.",
  },
  "/blog": {
    title: "Blog | Studio ILEVER",
    description: "Articoli su psicologia, psicoterapia e pubblicazioni dello Studio ILEVER.",
  },
  "/contatti": {
    title: "Contatti | Studio ILEVER — Conegliano (TV)",
    description: `Prenota un colloquio: ${contact.address}. Tel. ${contact.phone}. Lunedì–venerdì.`,
  },
};

/** shortcut: coordinate approssimate della sede, aggiornare se Maps cambia il pin */
const geo = { latitude: 45.9078, longitude: 12.2685 };

export function canonicalPath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

export function resolvePageMeta(pathname: string, blogSlug?: string) {
  const path = canonicalPath(pathname);
  if (path.startsWith("/blog/") && blogSlug) {
    const post = blogPosts.find((p) => p.slug === blogSlug);
    if (post) {
      return {
        title: `${post.title} | Studio ILEVER`,
        description: post.excerpt.replace(/\*\*/g, ""),
        path,
      };
    }
  }
  const meta = routeMeta[path] ?? defaultMeta;
  return { title: meta.title, description: meta.description, path };
}

export function localBusinessJsonLd() {
  const image = `${SITE_URL}${images.hero}`;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#studio`,
    name: contact.studio,
    alternateName: "Studio ILEVER",
    url: SITE_URL,
    image,
    logo: `${SITE_URL}${images.logo}`,
    telephone: contact.phone,
    email: [contact.ricardo.email, contact.teresa.email],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Cervano 52/C1",
      addressLocality: "San Pietro di Feletto",
      addressRegion: "Treviso",
      postalCode: "31020",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Conegliano" },
      { "@type": "AdministrativeArea", name: "Provincia di Treviso" },
      { "@type": "Country", name: "Italia" },
    ],
    knowsLanguage: ["it", "es", "fr"],
    description: defaultMeta.description,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q.replace(/\*\*/g, ""),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\*\*/g, ""),
      },
    })),
  };
}

export const sitemapPaths = [
  "/",
  "/chi-siamo",
  "/metodo",
  "/faq",
  "/blog",
  "/contatti",
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];