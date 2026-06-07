import Link from "next/link";

const services = [
  { icon: "💬", n: "01", title: "Free Consultation",       desc: "No-obligation consultation to understand your goals, timeline and individual wishes.", color: "#0B6E4F" },
  { icon: "📊", n: "02", title: "Market Valuation",        desc: "Market-appropriate pricing backed by current data and decades of local expertise.",     color: "#C9952A" },
  { icon: "📸", n: "03", title: "Premium Marketing",       desc: "Professional photography, drone footage, 3D tours and multi-portal distribution.",       color: "#D45B3A" },
  { icon: "🌐", n: "04", title: "Multi-Portal Reach",      desc: "Your property is placed on all leading Austrian and international platforms.",           color: "#1A6BAD" },
  { icon: "🔑", n: "05", title: "Targeted Viewings",       desc: "Pre-qualified buyers, documented viewings — saving your time, finding the right match.", color: "#5E2D8C" },
  { icon: "📣", n: "06", title: "Active Feedback",         desc: "Regular, transparent updates throughout the contract period. No silence, ever.",         color: "#0B6E4F" },
  { icon: "🏦", n: "07", title: "Financing Security",      desc: "Buyer financing verified through bank confirmations — protecting you from failed deals.", color: "#C9952A" },
  { icon: "⚖️", n: "08", title: "Legal Security",          desc: "Full legal support through long-term partnerships with trusted notaries and lawyers.",    color: "#D45B3A" },
  { icon: "🏛️", n: "09", title: "Notarial Authentication", desc: "We coordinate all notarial certifications required for a legally sound transfer.",       color: "#1A6BAD" },
  { icon: "🤝", n: "10", title: "Smooth Handover",         desc: "Complete, worry-free handover — documentation, keys, meter readings and all.",           color: "#5E2D8C" },
];

const expertItems = [
  { label: "Market value of built and unbuilt land (incl. rights & encumbrances)" },
  { label: "Valuation of single-family homes, apartment buildings, condominiums" },
  { label: "Market value reports for tax purposes (depreciation basis)" },
  { label: "Determination and review of appropriate rental prices" },
  { label: "Statements on existing appraisals and property exposés" },
  { label: "Utility value assessments (Nutzwertgutachten) for ownership division" },
];

const colorBar = ["#0B6E4F", "#1A6BAD", "#5E2D8C", "#D45B3A", "#C9952A"];

export default function ServicePage() {
  return (
    <div style={{ background: "#FDFAF4" }}>

      {/* ── Page Hero ── */}
      <div
        style={{
          position: "relative", height: 400,
          overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#061A12 0%,#0B3D2A 40%,#1A6BAD 100%)" }} />
        <div style={{ position: "absolute", top: "5%", left: "10%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle,rgba(11,110,79,.55),transparent 65%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", top: "15%", right: "8%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,149,42,.3),transparent 65%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(6,14,10,.75),transparent)" }} />

        {/* Colorful top strip */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${colorBar.join(",")})` }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", fontSize: 11, letterSpacing: "1.8px", textTransform: "uppercase" as const, fontWeight: 500, marginBottom: 20 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F0C84A", display: "inline-block", animation: "pulse 2s infinite" }} />
            Alpine Estates
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(48px,6vw,80px)", fontWeight: 300, color: "white", lineHeight: 1.05, marginBottom: 16 }}>
            Our{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#A07020,#F0C84A)", borderRadius: 10, padding: "2px 14px 5px", color: "white" }}>
              Services
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
            An all-in-one worry-free package — from first consultation to key handover.
          </p>
        </div>
      </div>

      {/* ── Service intro text ── */}
      <div style={{ background: "white", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "52px 40px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ width: 32, height: 2, borderRadius: 1, background: "#0B6E4F" }} />
            <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" as const, fontWeight: 600, color: "#0B6E4F" }}>What We Do</span>
            <div style={{ width: 32, height: 2, borderRadius: 1, background: "#0B6E4F" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,4vw,50px)", fontWeight: 300, color: "#0D1117", lineHeight: 1.2, marginBottom: 16 }}>
            We offer an <strong>all-in-one</strong> care-free package
          </h2>
          <p style={{ color: "#6B7685", fontSize: 17, lineHeight: 1.8 }}>
            We listen. We advise. We handle everything — so you don&apos;t have to. From market valuation to the final key handover, your property is in safe, experienced hands.
          </p>
        </div>
      </div>

      {/* ── 10 Service Cards ── */}
      <div style={{ background: "linear-gradient(135deg,#F4F6F9,#EEF2FF)", padding: "72px 40px" }}>
        <div
          style={{
            maxWidth: 1280, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "white",
                borderRadius: 18,
                padding: "32px 28px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                display: "flex", gap: 20, alignItems: "flex-start",
                transition: "transform .3s ease, box-shadow .3s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              className="svc-row-card"
            >
              {/* Left accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, width: 4, bottom: 0, background: s.color, borderRadius: "4px 0 0 4px" }} />

              {/* Number */}
              <div
                style={{
                  minWidth: 52, height: 52, borderRadius: 14,
                  background: s.color + "15",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: 22 }}>{s.icon}</span>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: s.color, letterSpacing: "1px" }}>{s.n}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#0D1117" }}>
                    {s.title}
                  </h3>
                </div>
                <p style={{ color: "#6B7685", fontSize: 14, lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .svc-row-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 44px rgba(0,0,0,0.10) !important;
          }
        `}</style>
      </div>

      {/* ── Financing tip banner ── */}
      <div style={{ background: "linear-gradient(135deg,#0B6E4F,#10A870)", padding: "52px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" as const }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>💡</div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase" as const, fontWeight: 600, marginBottom: 6 }}>Additional Service</p>
            <p style={{ color: "white", fontSize: 17, lineHeight: 1.7 }}>
              For prospective buyers, we additionally offer <strong>financing consultations</strong> through our long-standing banking partners — at no extra cost.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              padding: "13px 28px", borderRadius: 99,
              background: "white", color: "#074D38",
              fontWeight: 700, fontSize: 14, textDecoration: "none",
              flexShrink: 0, boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              fontFamily: "'Outfit',sans-serif",
            }}
          >
            Book Consultation →
          </Link>
        </div>
      </div>

      {/* ── Expert Office Section ── */}
      <div style={{ background: "white", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 32, height: 2, borderRadius: 1, background: "#5E2D8C" }} />
              <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" as const, fontWeight: 600, color: "#5E2D8C" }}>Expert Services</span>
              <div style={{ width: 32, height: 2, borderRadius: 1, background: "#5E2D8C" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "#0D1117", lineHeight: 1.15, marginBottom: 14 }}>
              <strong>Expert Office</strong> — Certified Valuations
            </h2>
            <p style={{ color: "#6B7685", fontSize: 16, lineHeight: 1.8 }}>
              Our certified court-appointed expert provides legally binding property valuations for courts, banks, and private clients since 2016.
            </p>
          </div>

          {/* Expertise checklist */}
          <div
            style={{
              background: "#FDFAF4",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 22, padding: "40px 44px",
              boxShadow: "0 8px 36px rgba(0,0,0,0.06)",
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 40px",
              marginBottom: 56,
            }}
          >
            <div style={{ gridColumn: "1/-1", marginBottom: 4 }}>
              <p style={{ fontSize: 11, textTransform: "uppercase" as const, letterSpacing: "1.5px", color: "#6B7685", fontWeight: 600 }}>Areas of Expertise</p>
            </div>
            {expertItems.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg,#5E2D8C,#8F5AC0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "white", flexShrink: 0, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 14, color: "#2C3340", lineHeight: 1.6 }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Expert profile card */}
          <div
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center",
              background: "linear-gradient(135deg,#F4F6F9,#EEF2FF)",
              borderRadius: 24, padding: "52px",
              border: "1px solid rgba(94,45,140,0.12)",
            }}
          >
            {/* Visual */}
            <div style={{ position: "relative" }}>
              <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 20, background: "linear-gradient(135deg,#5E2D8C,#1A6BAD)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, boxShadow: "0 20px 52px rgba(0,0,0,0.14)" }}>
                👩‍💼
              </div>
              <div style={{ position: "absolute", bottom: -18, right: -18, background: "linear-gradient(135deg,#5E2D8C,#8F5AC0)", borderRadius: 16, padding: "14px 20px", boxShadow: "0 8px 28px rgba(94,45,140,0.4)" }}>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, color: "white", lineHeight: 1 }}>2016</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", textTransform: "uppercase" as const, letterSpacing: "1px", fontWeight: 600 }}>Certified Since</p>
              </div>
            </div>

            {/* Quote + text */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 2, borderRadius: 1, background: "#5E2D8C" }} />
                <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" as const, fontWeight: 600, color: "#5E2D8C" }}>Certified Expert</span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,42px)", fontWeight: 300, color: "#0D1117", lineHeight: 1.2, marginBottom: 22 }}>
                Court-appointed &amp; <strong>Certified</strong>
              </h3>
              <div style={{ background: "white", borderRadius: 16, padding: "24px 28px", borderLeft: "4px solid #5E2D8C", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontStyle: "italic", color: "#2C3340", lineHeight: 1.75 }}>
                  "I have been a publicly sworn and court-certified expert since 2016, providing reliable and legally sound property valuations."
                </p>
              </div>
              <p style={{ color: "#6B7685", fontSize: 15, lineHeight: 1.8 }}>
                Properties appraised for courts, banks, and private clients — always with full legal precision and documented methodology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ padding: "60px 40px" }}>
        <div
          style={{
            maxWidth: 1280, margin: "0 auto",
            background: "linear-gradient(135deg,#074D38,#0B6E4F,#10A870)",
            backgroundSize: "200% 200%",
            borderRadius: 26, padding: "60px 64px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 32, flexWrap: "wrap" as const,
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -50, right: 60, width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase" as const, fontWeight: 600, marginBottom: 8 }}>Ready to get started?</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 300, color: "white", lineHeight: 1.2 }}>
              Let&apos;s talk about <em style={{ fontStyle: "italic", color: "#F0C84A" }}>your property.</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 14, position: "relative", zIndex: 1, flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ padding: "14px 32px", borderRadius: 99, background: "white", color: "#074D38", fontWeight: 700, fontSize: 15, textDecoration: "none", fontFamily: "'Outfit',sans-serif", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", transition: "transform .2s" }}>
              Contact Us →
            </Link>
            <Link href="/properties" style={{ padding: "14px 32px", borderRadius: 99, border: "1.5px solid rgba(255,255,255,0.4)", color: "white", fontWeight: 500, fontSize: 15, textDecoration: "none", background: "rgba(255,255,255,0.08)", fontFamily: "'Outfit',sans-serif" }}>
              Browse Listings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}