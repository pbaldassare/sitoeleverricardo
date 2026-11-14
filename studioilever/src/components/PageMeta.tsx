import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { resolvePageMeta, SITE_URL } from "../data/site";

function upsertMeta(selector: string, create: () => HTMLElement, content: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    el = create() as HTMLMetaElement | HTMLLinkElement;
    document.head.appendChild(el);
  }
  if (el.tagName === "META") (el as HTMLMetaElement).content = content;
  else if (el.tagName === "LINK") (el as HTMLLinkElement).href = content;
}

export function PageMeta() {
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const { title, description, path } = resolvePageMeta(pathname, slug);
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    const ogImage = `${SITE_URL}/media/2021/05/riccerdo-home.jpg`;

    document.title = title;

    upsertMeta('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.name = "description";
      return m;
    }, description);

    upsertMeta('meta[property="og:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    }, title);

    upsertMeta('meta[property="og:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    }, description);

    upsertMeta('meta[property="og:url"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    }, url);

    upsertMeta('meta[property="og:image"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:image");
      return m;
    }, ogImage);

    upsertMeta('meta[name="twitter:title"]', () => {
      const m = document.createElement("meta");
      m.name = "twitter:title";
      return m;
    }, title);

    upsertMeta('meta[name="twitter:description"]', () => {
      const m = document.createElement("meta");
      m.name = "twitter:description";
      return m;
    }, description);

    upsertMeta('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.rel = "canonical";
      return l;
    }, url);
  }, [pathname, slug]);

  return null;
}