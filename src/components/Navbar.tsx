"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mountain, Menu, X, ChevronDown } from "lucide-react";

/* ─── Nav link definitions — keep in sync with app router ─── */
const navLinks = [
  { label: "About",      href: "/about" },
  {
    label: "Properties",
    href: "/properties",
    dropdown: [
      { label: "All Properties",  href: "/properties" },
      { label: "Apartments",      href: "/properties?type=apartment" },
      { label: "Houses",          href: "/properties?type=house" },
      { label: "Land",            href: "/properties?type=land" },
      { label: "New Projects",    href: "/properties?type=project" },
      { label: "Commercial",      href: "/properties?type=commercial" },
    ],
  },
  { label: "References", href: "/references" },   // ← /references  (not /about)
  { label: "Services",   href: "/service" },       // ← /service     (not /services)
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [dropOpen,  setDropOpen]  = useState<string | null>(null);
  const [mounted,   setMounted]   = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isScrolled = mounted && scrolled;

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        transition: "all .4s ease",
        padding: isScrolled ? "10px 0" : "18px 0",
        background: isScrolled ? "rgba(253,250,244,.97)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        boxShadow: isScrolled ? "0 2px 30px rgba(0,0,0,.08)" : "none",
      }}
    >
      {/* Colorful accent strip (only when scrolled) */}
      {isScrolled && (
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg,#0B6E4F 0%,#1A6BAD 25%,#5E2D8C 50%,#D45B3A 75%,#C9952A 100%)",
          }}
        />
      )}

      <nav
        style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* ── Logo ── */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div
            style={{
              width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg,#0B6E4F,#10A870)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 16px rgba(11,110,79,0.35)",
            }}
          >
            <Mountain size={20} color="white" />
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: isScrolled ? "#0D1117" : "white", lineHeight: 1, transition: "color .4s" }}>
              Alpine Estates
            </div>
            <div style={{ fontSize: 9, color: isScrolled ? "#6B7685" : "rgba(255,255,255,0.5)", letterSpacing: "1.5px", textTransform: "uppercase" as const, transition: "color .4s" }}>
              Premium Real Estate
            </div>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 28 }}
        >
          {navLinks.map((link) => (
            <div
              key={link.label}
              style={{ position: "relative" }}
              onMouseEnter={() => link.dropdown && setDropOpen(link.label)}
              onMouseLeave={() => setDropOpen(null)}
            >
              <Link
                href={link.href}
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  textDecoration: "none", fontSize: 14, fontWeight: 500,
                  color: isScrolled ? "#2C3340" : "rgba(255,255,255,0.85)",
                  transition: "color .3s", letterSpacing: ".2px",
                }}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={13}
                    style={{ transition: "transform .2s", transform: dropOpen === link.label ? "rotate(180deg)" : "none" }}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {link.dropdown && dropOpen === link.label && (
                <div
                  style={{
                    position: "absolute", top: "calc(100% + 14px)", left: "50%",
                    transform: "translateX(-50%)",
                    background: "white", borderRadius: 14, padding: "8px 0",
                    minWidth: 210,
                    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(0,0,0,0.06)", zIndex: 100,
                  }}
                >
                  {/* Arrow */}
                  <div style={{ position: "absolute", top: -6, left: "50%", transform: "translateX(-50%) rotate(45deg)", width: 12, height: 12, background: "white", border: "1px solid rgba(0,0,0,0.06)", borderRight: "none", borderBottom: "none" }} />

                  {link.dropdown.map((item, i) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{
                        display: "block", padding: "10px 20px",
                        fontSize: 13.5, color: i === 0 ? "#0B6E4F" : "#2C3340",
                        fontWeight: i === 0 ? 600 : 400,
                        textDecoration: "none", transition: "background .15s, color .15s",
                        borderBottom: i === 0 ? "1px solid rgba(0,0,0,0.05)" : "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "#F4F6F9";
                        (e.currentTarget as HTMLElement).style.color = "#0B6E4F";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = i === 0 ? "#0B6E4F" : "#2C3340";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── CTA + Phone ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="tel:+436991720480"
            style={{ fontSize: 13, color: isScrolled ? "#0B6E4F" : "rgba(255,255,255,0.65)", textDecoration: "none", fontWeight: 500, transition: "color .3s" }}
          >
            +43 699 1720 4805
          </a>
          <Link
            href="/contact"
            style={{
              padding: "10px 22px", borderRadius: 99,
              background: "linear-gradient(135deg,#C9952A,#F0C84A)",
              color: "#0D1117", fontWeight: 700, fontSize: 13,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(201,149,42,0.35)",
              fontFamily: "'Outfit',sans-serif",
            }}
          >
            Free Valuation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: isScrolled ? "#0D1117" : "white", padding: 4, display: "none" }}
          aria-label="Toggle menu"
        />
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(253,250,244,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "16px 24px", display: "flex", flexDirection: "column" as const, gap: 4 }}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{ padding: "12px 8px", fontSize: 16, color: "#2C3340", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ marginTop: 12, padding: "14px 24px", borderRadius: 99, background: "linear-gradient(135deg,#C9952A,#F0C84A)", color: "#0D1117", fontWeight: 700, fontSize: 15, textDecoration: "none", textAlign: "center" as const }}>
            Free Valuation →
          </Link>
        </div>
      )}
    </header>
  );
}