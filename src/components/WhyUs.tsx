"use client";

import { useEffect, useRef } from "react";

const items = [
  {
    icon: "🔍",
    title: "Deep Local Knowledge",
    body: "15+ years navigating the Austrian property market. We know every valley, every neighbourhood, every opportunity.",
    iconBg: "linear-gradient(135deg,#0B6E4F,#10A870)",
  },
  {
    icon: "🤝",
    title: "We Truly Listen",
    body: "Your vision drives every search. We tailor our service to your individual wishes — no templates, no shortcuts.",
    iconBg: "linear-gradient(135deg,#A07020,#C9952A)",
  },
  {
    icon: "🛡",
    title: "Transparent Process",
    body: "Clear pricing, honest timelines and plain-language contracts. You'll never be left guessing.",
    iconBg: "linear-gradient(135deg,#D45B3A,#FF6B35)",
  },
  {
    icon: "📈",
    title: "Maximum Value",
    body: "Whether buying or selling, our negotiation expertise and market data ensure you get the best outcome.",
    iconBg: "linear-gradient(135deg,#5E2D8C,#8F5AC0)",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("wc-visible")),
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#0D1117 0%,#2C3340 100%)",
        padding: "90px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: "-160px", right: "-160px", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(11,110,79,.28),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-120px", left: "-80px", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,149,42,.14),transparent 70%)", pointerEvents: "none" }} />

      <div
        style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 72, alignItems: "center",
          position: "relative", zIndex: 1,
        }}
      >
        {/* ── Left text ── */}
        <div>
          {/* tag */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, borderRadius: 1, background: "#C9952A" }} />
            <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" as const, fontWeight: 600, color: "#F0C84A" }}>
              Why Choose Us
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(38px,4vw,58px)",
              fontWeight: 300, color: "white",
              lineHeight: 1.12, marginBottom: 22,
            }}
          >
            Real estate is our{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg,#0B6E4F,#10A870)",
                borderRadius: 10, padding: "2px 12px 4px",
                color: "white",
              }}
            >
              passion.
            </span>
            <br />
            <span style={{ color: "#F0C84A" }}>Your trust</span> is our reward.
          </h2>

          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.85, maxWidth: 420, marginBottom: 36 }}>
            We go beyond finding four walls — we help you find the place where life unfolds exactly as you imagined. 15 years, over 1,200 properties, one commitment.
          </p>

          {/* Quote card */}
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderLeft: "3px solid #C9952A",
              borderRadius: "0 14px 14px 0",
              padding: "20px 24px",
              marginBottom: 36,
            }}
          >
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
              "Satisfied clients are especially important to us. That is why we are always reachable — even outside office hours."
            </p>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 32 }}>
            {[
              { num: "1,200+", lbl: "Properties" },
              { num: "98%",    lbl: "Satisfaction" },
              { num: "15 Yrs", lbl: "Experience" },
            ].map((s) => (
              <div key={s.lbl}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 700, color: "#F0C84A", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "1px", textTransform: "uppercase" as const, marginTop: 3 }}>
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {items.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="why-card-anim"
              style={{
                padding: "26px",
                borderRadius: 18,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                transition: "all .3s ease",
                transitionDelay: `${i * 80}ms`,
                opacity: 0,
                transform: "translateY(24px)",
              }}
            >
              <div
                style={{
                  width: 46, height: 46, borderRadius: 13,
                  background: item.iconBg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, marginBottom: 14,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 19, fontWeight: 600, color: "white", marginBottom: 8,
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 13.5, lineHeight: 1.7 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card-anim { cursor: default; }
        .wc-visible { opacity: 1 !important; transform: none !important; }
        .why-card-anim:hover {
          background: rgba(255,255,255,0.11) !important;
          border-color: rgba(255,255,255,0.22) !important;
          transform: translateY(-4px) !important;
        }
        @media (max-width: 900px) {
          .why-grid-inner { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}