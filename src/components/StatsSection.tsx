"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 1200, suffix: "+",  label: "Properties Sold",     icon: "🏠" },
  { target: 98,   suffix: "%",  label: "Client Satisfaction", icon: "⭐" },
  { target: 15,   suffix: "",   label: "Years Experience",    icon: "🏆" },
  { target: 320,  suffix: "+",  label: "Active Listings",     icon: "📋" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref    = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const steps   = 70;
        const delay   = 1800 / steps;
        const step    = target / steps;
        let   current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, delay);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {count.toLocaleString("de-DE")}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#074D38,#0B6E4F)",
        borderRadius: "0 0 30px 30px",
        margin: "0 32px",
        boxShadow: "0 12px 48px rgba(11,110,79,0.3)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "12px 0",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "28px 16px",
              textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 44,
                fontWeight: 700,
                color: "#F0C84A",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              <Counter target={s.target} suffix={s.suffix} />
            </div>
            <div
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "1.3px",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}