"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, Camera, Users, BadgeInfo } from "lucide-react";

const PROPERTY_LINKS = [
  { label: "Apartments", href: "/properties?type=apartment" },
  { label: "Houses", href: "/properties?type=house" },
  { label: "Land", href: "/properties?type=land" },
  { label: "New Projects", href: "/properties?badge=new" },
  { label: "Commercial", href: "/properties?type=commercial" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "References", href: "/references" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { icon: Camera, href: "https://instagram.com", label: "Instagram", color: "#E1306C" },
  { icon: BadgeInfo, href: "https://facebook.com", label: "Facebook", color: "#1877F2" },
  { icon: Users, href: "https://linkedin.com", label: "LinkedIn", color: "#0A66C2" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #061A12 0%, #0B2D1E 45%, #0D1117 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Decorative background blobs */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(11,110,79,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,149,42,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Top accent strip */}
      <div
        style={{
          height: 3,
          background: "linear-gradient(90deg, #0B6E4F 0%, #10A870 25%, #C9952A 60%, #F0C84A 100%)",
        }}
      />

      {/* Main footer content */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 60px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.4fr",
            gap: 60,
            marginBottom: 60,
          }}
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #0B6E4F, #10A870)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 8px 20px rgba(11,110,79,0.35)",
                }}
              >
                <span style={{ fontSize: 22 }}>⛰</span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  Alpine Estates
                </p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "2px", textTransform: "uppercase" }}>
                  Premium Real Estate
                </p>
              </div>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 14,
                lineHeight: 1.75,
                maxWidth: 320,
                marginBottom: 28,
              }}
            >
              Premium real estate across Austria. We listen to your wishes and
              find fair, satisfying solutions for everyone involved.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: Phone, value: "+43 123 456 789", href: "tel:+43123456789", color: "#10A870" },
                { icon: Mail, value: "info@alpineestates.at", href: "mailto:info@alpineestates.at", color: "#F0C84A" },
                { icon: MapPin, value: "Hauptplatz 1, 4020 Linz, Austria", href: "#", color: "#FF6B35" },
              ].map(({ icon: Icon, value, href, color }) => (
                <a
                  key={value}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 13,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = color)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                >
                  <Icon size={14} color={color} />
                  {value}
                </a>
              ))}
            </div>
          </div>

          {/* Properties links */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#10A870",
                marginBottom: 20,
              }}
            >
              Properties
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {PROPERTY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0C84A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#10A870", flexShrink: 0, display: "inline-block" }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#F0C84A",
                marginBottom: 20,
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0C84A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#F0C84A", flexShrink: 0, display: "inline-block" }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: 20,
              }}
            >
              Stay Updated
            </h4>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.6, marginBottom: 18 }}>
              Get new listings and market insights straight to your inbox.
            </p>

            {/* Newsletter form */}
            <div
              style={{
                display: "flex",
                gap: 0,
                marginBottom: 32,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                overflow: "hidden",
              }}
            >
              <input
                type="email"
                placeholder="your@email.at"
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  outline: "none",
                  padding: "12px 16px",
                  color: "white",
                  fontSize: 13,
                  fontFamily: "'Outfit', sans-serif",
                  minWidth: 0,
                }}
              />
              <button
                style={{
                  padding: "12px 16px",
                  background: "linear-gradient(135deg, #0B6E4F, #10A870)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                <ArrowUpRight size={16} color="white" />
              </button>
            </div>

            {/* Social icons */}
            <div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 14 }}>
                Follow us
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {SOCIAL.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = color + "22";
                      (e.currentTarget as HTMLElement).style.borderColor = color + "66";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={16} color="rgba(255,255,255,0.65)" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
            marginBottom: 28,
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © 2026 Alpine Estates GmbH. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Imprint", "Terms"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: 12,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(11,110,79,0.25)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,168,112,0.4)";
              (e.currentTarget as HTMLElement).style.color = "#10A870";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
            }}
            title="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}