import { useEffect } from "react";
import { faqPageJsonLd, localBusinessJsonLd } from "../data/site";

function setJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function JsonLdLocalBusiness() {
  useEffect(() => {
    setJsonLd("jsonld-local-business", localBusinessJsonLd());
  }, []);
  return null;
}

export function JsonLdFaq() {
  useEffect(() => {
    setJsonLd("jsonld-faq", faqPageJsonLd());
    return () => {
      document.getElementById("jsonld-faq")?.remove();
    };
  }, []);
  return null;
}