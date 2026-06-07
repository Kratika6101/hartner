"use client";

import { useState } from "react";
import Link from "next/link";

type RefStatus = "sold" | "rented" | "all";

const references = [
  { id: 1,  title: "Ökologisches Einfamilienhaus",         location: "4611 Buchkirchen",      status: "sold"   as const, type: "House",      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=75", year: "2024" },
  { id: 2,  title: "NEUBAU – Produktions / Lagerhalle",    location: "4470 Enns",             status: "rented" as const, type: "Commercial",  img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75", year: "2024" },
  { id: 3,  title: "Gartenwohnung im gepflegten Viertel",  location: "4072 Alkoven",          status: "rented" as const, type: "Apartment",   img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75", year: "2024" },
  { id: 4,  title: "Moderne Eigentumswohnung",             location: "4600 Wels",             status: "sold"   as const, type: "Apartment",   img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=75", year: "2023" },
  { id: 5,  title: "Traumhafte Terrassen-Wohnung",         location: "4600 Wels",             status: "sold"   as const, type: "Apartment",   img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=75", year: "2023" },
  { id: 6,  title: "Gewerbeobjekt mit Büroflächen",        location: "4600 Wels",             status: "sold"   as const, type: "Commercial",  img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=75", year: "2023" },
  { id: 7,  title: "Penthouse mit Alpenblick",             location: "4020 Linz",             status: "sold"   as const, type: "Apartment",   img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=75", year: "2023" },
  { id: 8,  title: "Alpine Landhausvilla",                 location: "4800 Attnang-Puchheim", status: "sold"   as const, type: "House",       img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=75", year: "2023" },
  { id: 9,  title: "Bürofläche Innenstadt",                location: "1030 Vienna",           status: "rented" as const, type: "Commercial",  img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=75", year: "2022" },
  { id: 10, title: "Familienhaus mit Garten",              location: "4600 Schleißheim",      status: "sold"   as const, type: "House",       img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=75", year: "2022" },
  { id: 11, title: "Neubau Eigentumswohnung",              location: "4662 Laakirchen",       status: "sold"   as const, type: "Apartment",   img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=75", year: "2022" },
  { id: 12, title: "Produktionshalle mit Lager",           location: "4641 Steinhaus",        status: "rented" as const, type: "Commercial",  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=75", year: "2022" },
  { id: 13, title: "Dachgeschoss-Wohnung Wien",            location: "1120 Vienna",           status: "sold"   as const, type: "Apartment",   img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=75", year: "2022" },
  { id: 14, title: "Einfamilienhaus Salzburg",             location: "5061 Elsbethen",        status: "sold"   as const, type: "House",       img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=75", year: "2021" },
  { id: 15, title: "Lagerfläche mit Büro",                 location: "4641 Steinhaus",        status: "rented" as const, type: "Commercial",  img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75", year: "2021" },
  { id: 16, title: "Baugrundstück Regau",                  location: "4844 Regau",            status: "sold"   as const, type: "Land",        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=75", year: "2021" },
  { id: 17, title: "Zinshaus Linz",                        location: "4020 Linz",             status: "sold"   as const, type: "Commercial",  img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75", year: "2021" },
  { id: 18, title: "Reihenwohnhaus Wels",                  location: "4600 Wels",             status: "sold"   as const, type: "House",       img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75", year: "2021" },
];

const ITEMS_PER_PAGE = 9;

const statusConfig = {
  sold:   { label: "Successfully Sold",   bg: "linear-gradient(135deg,#0B6E4F,#10A870)", icon: "✅" },
  rented: { label: "Successfully Rented", bg: "linear-gradient(135deg,#1A6BAD,#4DA8F5)", icon: "🔑" },
};

const typeColors: Record<string, string> = {
  House:      "#C9952A",
  Apartment:  "#0B6E4F",
  Commercial: "#D45B3A",
  Land:       "#1A6BAD",
};

export default function ReferencesPage() {
  const [filter, setFilter] = useState<RefStatus>("all");
  const [page,   setPage]   = useState(1);

  const filtered   = filter === "all" ? references : references.filter((r) => r.status === filter);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleFilter = (f: RefStatus) => { setFilter(f); setPage(1); };

  return (
    <div style={{ background: "#FDFAF4", minHeight: "100vh" }}>

      {/* ── Page Hero ── */}
      <div style={{ position: "relative", height: 380, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#061A12 0%,#0B3D2A 40%,#1A6BAD 100%)" }} />
        <div style={{ position: "absolute", top: "10%", left: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(11,110,79,.55),transparent 65%)", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,149,42,.3),transparent 65%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(6,14,10,.75),transparent)" }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", fontSize: 11, letterSpacing: "1.8px", textTransform: "uppercase" as const, fontWeight: 500, marginBottom: 20 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F0C84A", display: "inline-block" }} />
            Our Track Record
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(48px,6vw,78px)", fontWeight: 300, color: "white", lineHeight: 1.05, marginBottom: 14 }}>
            Our{" "}
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg,#A07020,#F0C84A)", borderRadius: 10, padding: "2px 14px 5px", color: "white" }}>
              References
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16 }}>
            Over 1,200 successfully sold and rented properties across Austria.
          </p>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div style={{ background: "linear-gradient(135deg,#074D38,#0B6E4F)", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {[
          { num: "1,200+", label: "Properties Closed",  icon: "🏠" },
          { num: "98%",    label: "Client Satisfaction", icon: "⭐" },
          { num: "15 Yrs", label: "Market Experience",   icon: "🏆" },
        ].map((s, i) => (
          <div key={s.label} style={{ padding: "28px 20px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 700, color: "#F0C84A", lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "1.3px", textTransform: "uppercase" as const, fontWeight: 500, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 40px 80px" }}>

        {/* Filter bar */}
        <div
          style={{
            background: "white", borderRadius: 16, padding: "18px 24px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap" as const, gap: 16, marginBottom: 40,
          }}
        >
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3vw,42px)", fontWeight: 300, color: "#0D1117", lineHeight: 1 }}>
              Our <strong>References</strong>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 400, color: "#6B7685", marginLeft: 12 }}>
                ({filtered.length} properties)
              </span>
            </h2>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            {(["all", "sold", "rented"] as RefStatus[]).map((f) => (
              <button
                key={f}
                onClick={() => handleFilter(f)}
                style={{
                  padding: "9px 20px", borderRadius: 99,
                  border: "1.5px solid",
                  borderColor: filter === f ? "#0B6E4F" : "#E5E8ED",
                  background: filter === f ? "#0B6E4F" : "white",
                  color: filter === f ? "white" : "#2C3340",
                  fontSize: 13, fontWeight: 500, cursor: "pointer",
                  fontFamily: "'Outfit',sans-serif",
                  transition: "all .2s",
                }}
              >
                {f === "all" ? "🔍 All" : f === "sold" ? "✅ Sold" : "🔑 Rented"}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {paginated.map((ref) => {
            const cfg = statusConfig[ref.status];
            return (
              <div
                key={ref.id}
                style={{
                  borderRadius: 18, overflow: "hidden",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  transition: "transform .3s ease, box-shadow .3s ease",
                  cursor: "default",
                }}
                className="ref-card"
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ref.img}
                    alt={ref.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }}
                    className="ref-card-img"
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 55%)" }} />

                  {/* Status ribbon */}
                  <div
                    style={{
                      position: "absolute", top: 0, left: 0, right: 0,
                      padding: "9px 14px", background: cfg.bg,
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}
                  >
                    <span style={{ color: "white", fontSize: 12, fontWeight: 700, letterSpacing: ".3px" }}>
                      {cfg.icon} {cfg.label}
                    </span>
                    <span style={{ background: "rgba(255,255,255,0.22)", borderRadius: 99, padding: "2px 10px", color: "white", fontSize: 10, fontWeight: 600 }}>
                      {ref.year}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "18px 20px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#6B7685", fontSize: 12, marginBottom: 8 }}>
                    <span>📍</span>
                    {ref.location}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 19, fontWeight: 600, color: "#0D1117",
                      lineHeight: 1.35, marginBottom: 14,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}
                  >
                    {ref.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid #F4F6F9" }}>
                    <span
                      style={{
                        padding: "4px 12px", borderRadius: 99, fontSize: 11, fontWeight: 600,
                        background: typeColors[ref.type] + "18",
                        color: typeColors[ref.type] || "#0B6E4F",
                      }}
                    >
                      {ref.type}
                    </span>
                    <span style={{ color: ref.status === "sold" ? "#0B6E4F" : "#1A6BAD", fontWeight: 600, fontSize: 12 }}>
                      {cfg.icon} {ref.status === "sold" ? "Sold" : "Rented"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 52 }}>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              style={pBtnStyle(false, page === 1)}
            >←</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button key={p} onClick={() => setPage(p)} style={pBtnStyle(p === page, false)}>
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              style={pBtnStyle(false, page === totalPages)}
            >→</button>
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <div style={{ padding: "0 40px 60px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", background: "linear-gradient(135deg,#074D38,#0B6E4F,#10A870)", borderRadius: 26, padding: "56px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" as const, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: 60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase" as const, fontWeight: 600, marginBottom: 8 }}>Join our success stories</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 300, color: "white", lineHeight: 1.2 }}>
              Sell or rent your property <em style={{ fontStyle: "italic", color: "#F0C84A" }}>with us.</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 14, position: "relative", zIndex: 1 }}>
            <Link href="/contact" style={{ padding: "14px 30px", borderRadius: 99, background: "white", color: "#074D38", fontWeight: 700, fontSize: 14, textDecoration: "none", fontFamily: "'Outfit',sans-serif" }}>
              Free Valuation →
            </Link>
            <Link href="/properties" style={{ padding: "14px 30px", borderRadius: 99, border: "1.5px solid rgba(255,255,255,0.4)", color: "white", fontWeight: 500, fontSize: 14, textDecoration: "none", background: "rgba(255,255,255,0.08)", fontFamily: "'Outfit',sans-serif" }}>
              Browse Listings
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .ref-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 52px rgba(0,0,0,0.12) !important; }
        .ref-card:hover .ref-card-img { transform: scale(1.06); }
        @media (max-width: 900px) { .ref-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .ref-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function pBtnStyle(active: boolean, disabled: boolean): React.CSSProperties {
  return {
    width: 40, height: 40, borderRadius: 10,
    border: "1.5px solid", borderColor: active ? "#0B6E4F" : "#E5E8ED",
    background: active ? "#0B6E4F" : "white",
    color: active ? "white" : disabled ? "#C0C7D0" : "#2C3340",
    fontWeight: active ? 700 : 500, fontSize: 14,
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "'Outfit',sans-serif", transition: "all .2s",
    opacity: disabled ? 0.5 : 1,
    display: "flex", alignItems: "center", justifyContent: "center",
  };
}