"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const floatingCards = [
  {
    id: 1,
    badge: "🔥 Hot Deal",
    badgeColor: "#FF6B35",
    title: "Penthouse Linz",
    location: "📍 4020 Linz, Old Town",
    price: "€890,000",
    area: "145 m²",
    rooms: "4 rooms",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&q=80",
    tag: "For Sale",
    tagBg: "#0B6E4F",
    style: { top: "14%", right: "5%", animDelay: "0s", rotate: "2deg" },
  },
  {
    id: 2,
    badge: "⭐ New",
    badgeColor: "#1A6BAD",
    title: "HYGGE Wels",
    location: "📍 4600 Wels",
    price: "€246,700",
    area: "72 m²",
    rooms: "2 rooms",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80",
    tag: "15 Available",
    tagBg: "#5E2D8C",
    style: { bottom: "22%", right: "3%", animDelay: "1.2s", rotate: "-2deg" },
  },
  {
    id: 3,
    badge: "🏡 Exclusive",
    badgeColor: "#C9952A",
    title: "Alpine Farmhouse",
    location: "📍 4800 Attnang",
    price: "€320,000",
    area: "190 m²",
    rooms: "6 rooms",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300&q=80",
    tag: "2400 m² Plot",
    tagBg: "#D45B3A",
    style: { top: "22%", left: "2%", animDelay: "0.6s", rotate: "-1.5deg" },
  },
];

const stats = [
  { value: "1,200+", label: "Properties Sold", icon: "🏠" },
  { value: "98%", label: "Client Satisfaction", icon: "⭐" },
  { value: "15 Yrs", label: "Experience", icon: "🏆" },
  { value: "320+", label: "Active Listings", icon: "📋" },
];

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [searchType, setSearchType] = useState<"buy" | "rent">("buy");
  const [location, setLocation] = useState("");
  const [propType, setPropType] = useState("all");

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* ── BACKGROUND ── */}
      <div
        ref={imgRef}
        style={{
          position: "absolute",
          inset: 0,
          top: "-12%",
          zIndex: 0,
          willChange: "transform",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,#061A12 0%,#0B3D2A 35%,#1A6BAD 70%,#0D1117 100%)",
          }}
        />
        {/* Mesh overlay blobs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(11,110,79,0.55) 0%,transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(26,107,173,0.4) 0%,transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "40%",
            width: 500,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(201,149,42,0.25) 0%,transparent 65%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Bottom gradient for text contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to top,rgba(6,14,10,0.98) 0%,rgba(6,14,10,0.7) 35%,rgba(6,14,10,0.3) 65%,transparent 100%)",
        }}
      />

      {/* ── FLOATING PROPERTY CARDS ── */}
      {floatingCards.map((card) => (
        <div
          key={card.id}
          style={{
            position: "absolute",
            zIndex: 3,
            width: 220,
            borderRadius: 18,
            overflow: "hidden",
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.08)",
            transform: `rotate(${card.style.rotate})`,
            animation: `floatCard 4s ease-in-out ${card.style.animDelay} infinite alternate`,
            top: card.style.top,
            right: card.style.right,
            left: card.style.left,
            bottom: card.style.bottom,
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          className="float-card"
        >
          <div style={{ position: "relative", height: 110, overflow: "hidden" }}>
            <img
              src={card.img}
              alt={card.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                background: card.badgeColor,
                borderRadius: 99,
                padding: "3px 10px",
                fontSize: 10,
                fontWeight: 700,
                color: "white",
                letterSpacing: 0.3,
              }}
            >
              {card.badge}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 8,
                right: 8,
                background: card.tagBg,
                borderRadius: 99,
                padding: "3px 10px",
                fontSize: 10,
                fontWeight: 600,
                color: "white",
              }}
            >
              {card.tag}
            </div>
          </div>
          <div style={{ padding: "12px 14px" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 15,
                fontWeight: 700,
                color: "white",
                marginBottom: 4,
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>
              {card.location}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                paddingTop: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#F0C84A",
                }}
              >
                {card.price}
              </span>
              <div style={{ display: "flex", gap: 6 }}>
                <span
                  style={{
                    fontSize: 9,
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 6,
                    padding: "3px 7px",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {card.area}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 6,
                    padding: "3px 7px",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {card.rooms}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ── HERO CONTENT ── */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "0 60px 72px",
        }}
      >
        {/* Eyebrow pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "7px 18px",
            borderRadius: 99,
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
            marginBottom: 28,
            animation: "fadeUp 0.7s 0.1s both",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#F0C84A",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "1.8px",
              textTransform: "uppercase" as const,
            }}
          >
            Premium Real Estate · Austria
          </span>
        </div>

        {/* ── FIXED HEADLINE — no overlap, clear block layout ── */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 680,
            animation: "fadeUp 0.7s 0.25s both",
            fontSize: "clamp(44px, 5.5vw, 76px)",
          }}
        >
          {/* Line 1: "Where" + green pill inline */}
          <span style={{ display: "block", marginBottom: 6 }}>
            Where{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#0B6E4F,#10A870)",
                borderRadius: 12,
                padding: "4px 18px 6px",
                fontStyle: "italic",
                fontWeight: 400,
                whiteSpace: "nowrap",
                display: "inline-block",
                lineHeight: 1.2,
              }}
            >
              Alpine beauty
            </span>
          </span>
          {/* Line 2: "meets" + gold pill inline */}
          <span style={{ display: "block" }}>
            meets{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#A07020,#C9952A)",
                borderRadius: 12,
                padding: "4px 18px 6px",
                fontWeight: 700,
                whiteSpace: "nowrap",
                display: "inline-block",
                lineHeight: 1.2,
              }}
            >
              your home.
            </span>
          </span>
        </h1>

        {/* Sub-heading */}
        <div style={{ animation: "fadeUp 0.7s 0.4s both", marginBottom: 40 }}>
          <p
            style={{
              display: "inline-block",
              color: "rgba(255,255,255,0.75)",
              fontSize: 17,
              lineHeight: 1.75,
              maxWidth: 520,
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(8px)",
              borderRadius: 12,
              padding: "12px 20px",
              borderLeft: "3px solid #C9952A",
            }}
          >
            We listen. We care. We find the right property for you — whether
            buying, selling or renting in the heart of Austria.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 48,
            animation: "fadeUp 0.7s 0.55s both",
            flexWrap: "wrap" as const,
          }}
        >
          <Link href="/properties" style={primaryBtnStyle}>
            Browse Properties →
          </Link>
          <Link href="/contact" style={outlineBtnStyle}>
            📞 Free Valuation
          </Link>
        </div>

        {/* ── SEARCH BAR ── */}
        <div style={{ animation: "fadeUp 0.7s 0.7s both" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 20,
              padding: 8,
              display: "flex",
              alignItems: "stretch",
              maxWidth: 760,
              boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
              flexWrap: "wrap" as const,
              gap: 0,
            }}
          >
            {/* Buy / Rent Toggle */}
            <div
              style={{
                display: "flex",
                borderRight: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {(["buy", "rent"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setSearchType(t)}
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: searchType === t ? 13 : 0,
                    background:
                      searchType === t
                        ? "linear-gradient(135deg,#D45B3A,#FF6B35)"
                        : "transparent",
                    color: searchType === t ? "white" : "rgba(255,255,255,0.6)",
                    fontWeight: searchType === t ? 700 : 500,
                    fontSize: 14,
                    cursor: "pointer",
                    textTransform: "capitalize" as const,
                    fontFamily: "'Outfit',sans-serif",
                    transition: "all 0.2s",
                  }}
                >
                  {t === "buy" ? "Buy" : "Rent"}
                </button>
              ))}
            </div>

            {/* Location input */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "0 18px",
                borderRight: "1px solid rgba(255,255,255,0.15)",
                minWidth: 140,
              }}
            >
              <span style={{ fontSize: 16, opacity: 0.5 }}>📍</span>
              <input
                type="text"
                placeholder="City, ZIP or region…"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "'Outfit',sans-serif",
                  width: "100%",
                }}
              />
            </div>

            {/* Property type */}
            <select
              value={propType}
              onChange={(e) => setPropType(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "rgba(255,255,255,0.7)",
                fontSize: 14,
                fontFamily: "'Outfit',sans-serif",
                padding: "0 18px",
                cursor: "pointer",
                borderRight: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <option style={{ background: "#0B3D2A", color: "white" }} value="all">All Types</option>
              <option style={{ background: "#0B3D2A", color: "white" }} value="apartment">Apartment</option>
              <option style={{ background: "#0B3D2A", color: "white" }} value="house">House</option>
              <option style={{ background: "#0B3D2A", color: "white" }} value="land">Land</option>
              <option style={{ background: "#0B3D2A", color: "white" }} value="commercial">Commercial</option>
            </select>

            {/* Search button */}
            <Link
              href={`/properties?type=${propType}&listing=${searchType}&location=${location}`}
              style={{
                padding: "14px 28px",
                borderRadius: 14,
                background: "linear-gradient(135deg,#0B6E4F,#10A870)",
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
                transition: "transform 0.2s, box-shadow 0.2s",
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              🔍 Search
            </Link>
          </div>

          {/* Quick links */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 16,
              flexWrap: "wrap" as const,
            }}
          >
            {["🏢 Apartments", "🏡 Houses", "🏗 New Projects", "🌿 Land", "🏪 Commercial"].map(
              (label) => (
                <Link
                  key={label}
                  href="/properties"
                  style={{
                    padding: "6px 16px",
                    borderRadius: 99,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 12,
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "all 0.2s",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 60px",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "22px 0",
                textAlign: "center",
                borderRight:
                  i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                animation: `fadeUp 0.5s ${0.1 * i + 0.8}s both`,
              }}
            >
              <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#F0C84A",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase" as const,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 130,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          gap: 6,
          animation: "bounce 2s infinite",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 9,
            letterSpacing: "2.5px",
            textTransform: "uppercase" as const,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom,rgba(255,255,255,0.35),transparent)",
          }}
        />
      </div>
    </section>
  );
}

const primaryBtnStyle: React.CSSProperties = {
  padding: "16px 36px",
  borderRadius: 99,
  background: "linear-gradient(135deg,#C9952A,#F0C84A)",
  color: "#0D1117",
  fontWeight: 700,
  fontSize: 15,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontFamily: "'Outfit',sans-serif",
  boxShadow: "0 12px 36px rgba(201,149,42,0.45)",
  transition: "transform 0.2s, box-shadow 0.2s",
};

const outlineBtnStyle: React.CSSProperties = {
  padding: "16px 36px",
  borderRadius: 99,
  border: "1.5px solid rgba(255,255,255,0.35)",
  color: "white",
  fontWeight: 500,
  fontSize: 15,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(8px)",
  fontFamily: "'Outfit',sans-serif",
};