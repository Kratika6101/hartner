import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PropertyCard from "@/components/PropertyCard";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonals";
import { properties } from "@/lib/data";
import Link from "next/link";

const services = [
  { icon: "📊", title: "Valuation",       desc: "Market-accurate pricing using current data and local expertise.",    n: "01", color: "#0B6E4F" },
  { icon: "📸", title: "Marketing",       desc: "Professional photography, drone, 3D tours and multi-portal reach.", n: "02", color: "#C9952A" },
  { icon: "⚖️", title: "Legal & Finance", desc: "Contract support, notary coordination, and bank confirmations.",     n: "03", color: "#D45B3A" },
  { icon: "🏗️", title: "New Projects",    desc: "Exclusive off-plan access before they reach the open market.",       n: "04", color: "#1A6BAD" },
  { icon: "🌍", title: "International",   desc: "Multilingual team serving buyers across Europe.",                    n: "05", color: "#5E2D8C" },
  { icon: "📈", title: "Investment",      desc: "Yield analysis, portfolio planning and ROI projections.",            n: "06", color: "#0B6E4F" },
];

export default function HomePage() {
  const featured = properties.slice(0, 6);

  return (
    <>
      <Hero />
      <StatsSection />

      {/* ── Featured Properties ── */}
      <section className="sec props-section" id="properties">
        <div className="sec-inner">
          <div className="sec-header">
            <div>
              <div className="sec-tag">
                <div className="sec-tag-line" style={{ background: "#C9952A" }} />
                <span className="sec-tag-txt" style={{ color: "#C9952A" }}>Featured Listings</span>
              </div>
              <h2 className="sec-title">Top <strong>Properties</strong></h2>
            </div>
            <Link href="/properties" className="view-all-btn">View All Listings →</Link>
          </div>

          {/* Filter pills */}
          <div className="filter-bar">
            <button className="fpill active">All</button>
            <button className="fpill">🏢 Apartments</button>
            <button className="fpill">🏡 Houses</button>
            <button className="fpill">🌿 Land</button>
            <button className="fpill">🏗 New Projects</button>
            <button className="fpill">🏪 Commercial</button>
            <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
              <select className="fsel">
                <option>All regions</option>
                <option>Upper Austria</option>
                <option>Vienna</option>
                <option>Salzburg</option>
              </select>
              <select className="fsel">
                <option>Any price</option>
                <option>Up to €200k</option>
                <option>€200k–€500k</option>
                <option>€500k+</option>
              </select>
            </div>
          </div>

          <div className="prop-grid">
            {featured.map((p) => (
              <div key={p.id}>{p.title}</div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />

      {/* ── Services ── */}
      <section className="sec services-section" id="services">
        <div className="sec-inner">
          <div className="sec-header">
            <div>
              <div className="sec-tag">
                <div className="sec-tag-line" style={{ background: "#0B6E4F" }} />
                <span className="sec-tag-txt" style={{ color: "#0B6E4F" }}>What We Offer</span>
              </div>
              <h2 className="sec-title">Our <strong>Services</strong></h2>
            </div>
            <Link href="/service" className="view-all-btn">Full Service Details →</Link>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="svc-card reveal">
                <div className="svc-num">{s.n}</div>
                <div className="svc-emoji">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="sec about-teaser">
        <div className="sec-inner">
          <div className="about-teaser-grid">
            <div className="at-img-wrap reveal">
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: 22,
                  background: "linear-gradient(135deg,#0B3D2A,#1A6BAD)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 80,
                  boxShadow: "0 22px 56px rgba(0,0,0,0.14)",
                }}
              >
                🏔️
              </div>
              <div className="at-badge">
                <div className="at-badge-num">15+</div>
                <div className="at-badge-lbl">Years Trusted</div>
              </div>
            </div>
            <div className="reveal" style={{ paddingLeft: 8 }}>
              <div className="sec-tag">
                <div className="sec-tag-line" style={{ background: "#0B6E4F" }} />
                <span className="sec-tag-txt" style={{ color: "#0B6E4F" }}>About Alpine Estates</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "clamp(36px,4vw,54px)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  marginBottom: 20,
                  color: "#0D1117",
                }}
              >
                A team that goes the{" "}
                <em style={{ fontStyle: "italic", color: "#0B6E4F" }}>extra mile</em> for you.
              </h2>
              <p style={{ color: "#6B7685", fontSize: 16, lineHeight: 1.85, marginBottom: 14 }}>
                Founded in Wels, Upper Austria, Alpine Estates has built a reputation as the
                region&apos;s most trusted real estate partner — combining deep local expertise
                with a genuinely personal approach.
              </p>
              <p style={{ color: "#6B7685", fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
                Our multilingual team covers apartments, houses, land, new projects and commercial
                properties across all of Austria.
              </p>
              <div className="at-tags">
                <span className="at-tag at-tag-g">🏡 Residential</span>
                <span className="at-tag at-tag-o">💼 Commercial</span>
                <span className="at-tag at-tag-b">🌍 International</span>
                <span className="at-tag at-tag-g">🏗 New Projects</span>
                <span className="at-tag at-tag-o">📊 Investment</span>
              </div>
              <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
                <Link
                  href="/about"
                  style={{
                    padding: "14px 32px",
                    borderRadius: 99,
                    background: "linear-gradient(135deg,#C9952A,#F0C84A)",
                    color: "#0D1117",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    boxShadow: "0 8px 28px rgba(201,149,42,0.4)",
                  }}
                >
                  Meet The Team →
                </Link>
                <Link
                  href="/references"
                  style={{
                    padding: "14px 32px",
                    borderRadius: 99,
                    border: "1.5px solid #0B6E4F",
                    color: "#0B6E4F",
                    fontWeight: 500,
                    fontSize: 15,
                    textDecoration: "none",
                    background: "rgba(11,110,79,0.05)",
                  }}
                >
                  Our References
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ── CTA Banner ── */}
      <div className="cta-section">
        <div className="cta-inner">
          <div className="cta-text" style={{ position: "relative", zIndex: 1 }}>
            <p>Ready when you are</p>
            <h2>Find your perfect <em>Alpine home</em> today.</h2>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="cta-btn-wh">Free Valuation →</Link>
            <Link href="/properties" className="cta-btn-br">Browse Listings</Link>
          </div>
        </div>
      </div>
    </>
  );
}