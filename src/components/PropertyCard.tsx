"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, Maximize2, BedDouble, ArrowUpRight, Star } from "lucide-react";

const PROPERTIES = [
  {
    id: "p1",
    badge: "🔥 Hot Deal",
    badgeColor: "#FF6B35",
    title: "Modern Penthouse Linz",
    location: "4020 Linz, Old Town",
    price: "€890,000",
    area: 145,
    rooms: 4,
    type: "Apartment",
    listing: "sale",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    tag: "For Sale",
    tagBg: "#0B6E4F",
  },
  {
    id: "p2",
    badge: "⭐ New Project",
    badgeColor: "#1A6BAD",
    title: "HYGGE Residences Wels",
    location: "4600 Wels, City Centre",
    price: "€246,700",
    area: 72,
    rooms: 2,
    type: "Apartment",
    listing: "sale",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    tag: "15 Available",
    tagBg: "#5E2D8C",
  },
  {
    id: "p3",
    badge: "🏡 Exclusive",
    badgeColor: "#C9952A",
    title: "Alpine Farmhouse Estate",
    location: "4800 Attnang-Puchheim",
    price: "€320,000",
    area: 190,
    rooms: 6,
    type: "House",
    listing: "sale",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    tag: "2400 m² Plot",
    tagBg: "#D45B3A",
  },
  {
    id: "p4",
    badge: "🏆 Top Pick",
    badgeColor: "#0B6E4F",
    title: "Luxury Villa Gmunden",
    location: "4810 Gmunden, Lakeside",
    price: "€1,250,000",
    area: 280,
    rooms: 7,
    type: "House",
    listing: "sale",
    img: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=600&q=80",
    tag: "Lakefront",
    tagBg: "#074D38",
  },
  {
    id: "p5",
    badge: "🌿 Nature",
    badgeColor: "#10A870",
    title: "Countryside Retreat Steyr",
    location: "4400 Steyr, Rural",
    price: "€185,000",
    area: 120,
    rooms: 4,
    type: "House",
    listing: "sale",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    tag: "For Sale",
    tagBg: "#0B6E4F",
  },
  {
    id: "p6",
    badge: "🏢 Commercial",
    badgeColor: "#1A6BAD",
    title: "Premium Office Salzburg",
    location: "5020 Salzburg, Mirabell",
    price: "€4,200/mo",
    area: 310,
    rooms: 0,
    type: "Commercial",
    listing: "rent",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tag: "For Rent",
    tagBg: "#5E2D8C",
  },
];

const FILTERS = ["All", "For Sale", "For Rent", "Houses", "Apartments", "Commercial"];

export default function FeaturedProperties() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-card").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = PROPERTIES.filter((p) => {
    if (active === "All") return true;
    if (active === "For Sale") return p.listing === "sale";
    if (active === "For Rent") return p.listing === "rent";
    if (active === "Houses") return p.type === "House";
    if (active === "Apartments") return p.type === "Apartment";
    if (active === "Commercial") return p.type === "Commercial";
    return true;
  });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(180deg, #fdfaf4 0%, #f4f0e8 100%)",
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decoration */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(11,110,79,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,149,42,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>

        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div
              style={{
                width: 36,
                height: 2,
                background: "linear-gradient(90deg, #0B6E4F, #10A870)",
                borderRadius: 1,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#0B6E4F",
              }}
            >
              Featured Listings
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 400,
                color: "#0D1117",
                lineHeight: 1.1,
              }}
            >
              Top{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0B6E4F, #10A870)",
                  borderRadius: 10,
                  padding: "2px 16px 4px",
                  fontStyle: "italic",
                  color: "white",
                  display: "inline-block",
                }}
              >
                properties
              </span>
            </h2>
            <Link
              href="/properties"
              style={{
                padding: "12px 28px",
                borderRadius: 99,
                border: "1.5px solid #0B6E4F",
                color: "#0B6E4F",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                fontFamily: "'Outfit', sans-serif",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              className="view-all-btn"
            >
              View All Listings <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Filter pills */}
        <div style={{ display: "flex", gap: 10, marginBottom: 40, flexWrap: "wrap" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "8px 20px",
                borderRadius: 99,
                border: `1.5px solid ${active === f ? "#0B6E4F" : "#dededa"}`,
                background: active === f ? "#0B6E4F" : "white",
                color: active === f ? "white" : "#4a4a45",
                fontWeight: active === f ? 600 : 400,
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "'Outfit', sans-serif",
                transition: "all 0.2s",
                boxShadow: active === f ? "0 4px 16px rgba(11,110,79,0.3)" : "none",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 28,
          }}
        >
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <p style={{ color: "#6B7685", fontSize: 15, marginBottom: 20, fontFamily: "'Outfit', sans-serif" }}>
            Showing {filtered.length} of 320+ active listings
          </p>
          <Link
            href="/properties"
            style={{
              padding: "16px 48px",
              borderRadius: 99,
              background: "linear-gradient(135deg, #0B6E4F, #10A870)",
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Outfit', sans-serif",
              boxShadow: "0 12px 36px rgba(11,110,79,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Browse All Properties →
          </Link>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: typeof PROPERTIES[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/properties/${property.id}`}
      style={{ textDecoration: "none", display: "block" }}
      className="reveal-card"
    >
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 20,
          overflow: "hidden",
          background: "white",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: hovered
            ? "0 24px 64px rgba(0,0,0,0.13)"
            : "0 4px 24px rgba(0,0,0,0.06)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          opacity: 1,
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
          <img
            src={property.img}
            alt={property.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            loading="lazy"
          />
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hovered
                ? "linear-gradient(to top, rgba(6,26,18,0.65) 0%, transparent 55%)"
                : "linear-gradient(to top, rgba(6,26,18,0.45) 0%, transparent 50%)",
              transition: "all 0.3s",
            }}
          />

          {/* Badge top-left */}
          <span
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              background: property.badgeColor,
              borderRadius: 99,
              padding: "4px 12px",
              fontSize: 11,
              fontWeight: 700,
              color: "white",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: 0.3,
            }}
          >
            {property.badge}
          </span>

          {/* Tag top-right */}
          <span
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              background: property.tagBg,
              borderRadius: 99,
              padding: "4px 12px",
              fontSize: 11,
              fontWeight: 600,
              color: "white",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {property.tag}
          </span>

          {/* Arrow on hover */}
          <div
            style={{
              position: "absolute",
              bottom: 14,
              right: 14,
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0) scale(1)" : "translateY(8px) scale(0.8)",
              transition: "all 0.3s",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <ArrowUpRight size={16} color="#0B6E4F" />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 22px 22px" }}>
          {/* Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              color: "#9e9e97",
              fontSize: 12,
              marginBottom: 8,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <MapPin size={12} />
            <span>{property.location}</span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 600,
              color: hovered ? "#0B6E4F" : "#0D1117",
              lineHeight: 1.25,
              marginBottom: 14,
              transition: "color 0.2s",
            }}
          >
            {property.title}
          </h3>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 16,
              color: "#5e5e58",
              fontSize: 13,
              marginBottom: 18,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Maximize2 size={13} color="#0B6E4F" />
              {property.area} m²
            </span>
            {property.rooms > 0 && (
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <BedDouble size={13} color="#0B6E4F" />
                {property.rooms} rooms
              </span>
            )}
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Star size={12} color="#C9952A" fill="#C9952A" />
              {property.type}
            </span>
          </div>

          {/* Price bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 16,
              borderTop: "1px solid #efefeb",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#0B6E4F",
                lineHeight: 1,
              }}
            >
              {property.price}
            </span>
            <span
              style={{
                padding: "5px 12px",
                borderRadius: 8,
                background: "linear-gradient(135deg, rgba(11,110,79,0.08), rgba(16,168,112,0.12))",
                color: "#0B6E4F",
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {property.listing === "rent" ? "For Rent" : "For Sale"}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}