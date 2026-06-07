"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";
import { Property } from "@/lib/types";

const TYPE_FILTERS = [
  { label: "All",        value: "all" },
  { label: "🏢 Apartments", value: "apartment" },
  { label: "🏡 Houses",     value: "house" },
  { label: "🌿 Land",       value: "land" },
  { label: "🏗 New Projects",value: "project" },
  { label: "🏪 Commercial", value: "commercial" },
];

const LISTING_FILTERS = [
  { label: "For Sale", value: "sale" },
  { label: "For Rent", value: "rent" },
];

const SORT_OPTIONS = [
  { label: "Newest First",    value: "newest" },
  { label: "Price: Low → High", value: "price_asc" },
  { label: "Price: High → Low", value: "price_desc" },
];

export default function PropertiesPage() {
  const searchParams = useSearchParams();

  const [typeFilter,    setTypeFilter]    = useState(searchParams.get("type")     || "all");
  const [listingFilter, setListingFilter] = useState(searchParams.get("listing")  || "");
  const [locationQuery, setLocationQuery] = useState(searchParams.get("location") || "");
  const [sort,          setSort]          = useState("newest");
  const [searchInput,   setSearchInput]   = useState(searchParams.get("location") || "");

  /* ── Filter + sort ── */
  const filtered: Property[] = properties
    .filter((p) => {
      if (typeFilter && typeFilter !== "all" && p.type !== typeFilter) return false;
      if (listingFilter && p.listing !== listingFilter) return false;
      if (locationQuery && !p.location.toLowerCase().includes(locationQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price_asc")  return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ background: "#FDFAF4", minHeight: "100vh" }}>

      {/* ── Page Hero ── */}
      <div
        style={{
          position: "relative",
          height: 340,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#061A12 0%,#0B3D2A 40%,#1A6BAD 100%)" }} />
        <div style={{ position: "absolute", top: "10%", left: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(11,110,79,.55),transparent 65%)", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,149,42,.3),transparent 65%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(6,14,10,.7),transparent)" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 99,
              background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)", fontSize: 11, letterSpacing: "1.8px",
              textTransform: "uppercase" as const, fontWeight: 500, marginBottom: 18,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F0C84A", display: "inline-block" }} />
            Browse Listings
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(44px,6vw,76px)",
              fontWeight: 300, color: "white", lineHeight: 1.05,
            }}
          >
            Find Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#0B6E4F,#10A870)",
                borderRadius: 10, padding: "2px 14px 5px",
                fontStyle: "italic",
              }}
            >
              Property
            </span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginTop: 14 }}>
            {filtered.length} listing{filtered.length !== 1 ? "s" : ""} found across Austria
          </p>
        </div>
      </div>

      {/* ── Sticky Filter Bar ── */}
      <div
        style={{
          position: "sticky", top: 76, zIndex: 100,
          background: "rgba(253,250,244,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1280, margin: "0 auto",
            padding: "14px 40px",
            display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" as const,
          }}
        >
          {/* Type filters */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setTypeFilter(f.value)}
                style={{
                  padding: "7px 16px", borderRadius: 99, fontSize: 13, fontWeight: 500,
                  border: "1.5px solid",
                  borderColor: typeFilter === f.value ? "#0B6E4F" : "#E5E8ED",
                  background: typeFilter === f.value ? "#0B6E4F" : "white",
                  color: typeFilter === f.value ? "white" : "#2C3340",
                  cursor: "pointer", transition: "all .2s",
                  fontFamily: "'Outfit',sans-serif",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div style={{ width: 1, height: 28, background: "#E5E8ED", flexShrink: 0 }} />

          {/* Buy / Rent */}
          <div style={{ display: "flex", gap: 6 }}>
            <button
              onClick={() => setListingFilter("")}
              style={{
                padding: "7px 14px", borderRadius: 99, fontSize: 12, fontWeight: 500,
                border: "1.5px solid",
                borderColor: !listingFilter ? "#C9952A" : "#E5E8ED",
                background: !listingFilter ? "rgba(201,149,42,0.1)" : "white",
                color: !listingFilter ? "#A07020" : "#6B7685",
                cursor: "pointer", transition: "all .2s",
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              All
            </button>
            {LISTING_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setListingFilter(f.value)}
                style={{
                  padding: "7px 14px", borderRadius: 99, fontSize: 12, fontWeight: 500,
                  border: "1.5px solid",
                  borderColor: listingFilter === f.value ? "#C9952A" : "#E5E8ED",
                  background: listingFilter === f.value ? "rgba(201,149,42,0.1)" : "white",
                  color: listingFilter === f.value ? "#A07020" : "#6B7685",
                  cursor: "pointer", transition: "all .2s",
                  fontFamily: "'Outfit',sans-serif",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div style={{ marginLeft: "auto", display: "flex", gap: 10, alignItems: "center" }}>
            {/* Location search */}
            <div
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "white", border: "1.5px solid #E5E8ED",
                borderRadius: 10, padding: "7px 14px",
                transition: "border-color .2s",
              }}
            >
              <span style={{ fontSize: 14, opacity: 0.5 }}>📍</span>
              <input
                type="text"
                placeholder="City or ZIP…"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setLocationQuery(e.target.value);
                }}
                style={{
                  border: "none", outline: "none",
                  fontSize: 13, color: "#2C3340",
                  fontFamily: "'Outfit',sans-serif",
                  background: "transparent", width: 140,
                }}
              />
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{
                padding: "8px 14px", borderRadius: 10,
                border: "1.5px solid #E5E8ED", background: "white",
                fontSize: 13, color: "#2C3340",
                fontFamily: "'Outfit',sans-serif",
                cursor: "pointer", outline: "none",
              }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 40px 80px" }}>

        {/* Result count */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <p style={{ color: "#6B7685", fontSize: 14 }}>
            Showing <strong style={{ color: "#0D1117" }}>{filtered.length}</strong> properties
            {typeFilter !== "all" && <span> · <span style={{ color: "#0B6E4F", fontWeight: 600 }}>{typeFilter}</span></span>}
            {listingFilter && <span> · <span style={{ color: "#C9952A", fontWeight: 600 }}>{listingFilter === "sale" ? "For Sale" : "For Rent"}</span></span>}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="prop-grid">
            {filtered.map((p) => (
              <div key={p.id}>{p.title}</div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div
            style={{
              textAlign: "center", padding: "80px 20px",
              background: "white", borderRadius: 22,
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: "#0D1117", marginBottom: 10 }}>
              No properties found
            </h3>
            <p style={{ color: "#6B7685", fontSize: 15, marginBottom: 24 }}>
              Try adjusting your filters or search a different location.
            </p>
            <button
              onClick={() => { setTypeFilter("all"); setListingFilter(""); setLocationQuery(""); setSearchInput(""); }}
              style={{
                padding: "12px 28px", borderRadius: 99,
                background: "linear-gradient(135deg,#0B6E4F,#10A870)",
                color: "white", fontWeight: 600, fontSize: 14,
                border: "none", cursor: "pointer",
                fontFamily: "'Outfit',sans-serif",
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}