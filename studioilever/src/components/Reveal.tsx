import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: "text" | "image";
};

export function Reveal({ children, className = "", delayMs = 0, variant = "text" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined;
  const motion = variant === "image" ? "reveal-img" : "reveal";

  return (
    <div ref={ref} className={`${motion} ${visible ? "is-visible" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}