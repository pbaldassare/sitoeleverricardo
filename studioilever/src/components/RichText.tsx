import type { ReactNode } from "react";

const markOnDark = "rounded-sm bg-white/25 px-0.5 font-semibold text-white not-italic";
const markDefault = "rounded-sm bg-sand/70 px-0.5 font-semibold text-sage not-italic";

/** Evidenzia frasi racchiuse tra **doppi asterischi**. */
export function RichText({ text, onDark, className = "" }: { text: string; onDark?: boolean; className?: string }) {
  const markClass = onDark ? markOnDark : markDefault;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={`inline ${className}`.trim()}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <mark key={i} className={markClass}>
              {part.slice(2, -2)}
            </mark>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

export function CatchyLead({ children }: { children: ReactNode }) {
  return <p className="text-base leading-relaxed text-ink md:text-lg">{children}</p>;
}