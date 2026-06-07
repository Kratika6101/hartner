"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Award, Users, MapPin, TrendingUp, Heart, Shield, Star, ArrowUpRight } from "lucide-react";

const TEAM = [
  {
    name: "Thomas Hartner",
    role: "Founder & CEO",
    bio: "20+ years of luxury real estate experience across Austria. Former head of international sales at a Vienna-based property group.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
    accent: "#0B6E4F",
  },
  {
    name: "Sophie Maier",
    role: "Head of Sales",
    bio: "Specialist in premium residential properties. Knows every neighbourhood in Upper Austria inside out.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
    accent: "#C9952A",
  },
  {
    name: "Markus Huber",
    role: "Property Advisor",
    bio: "Expert in investment properties and new development projects. Bilingual consultant serving international clients.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    accent: "#1A6BAD",
  },
  {
    name: "Anna Gruber",
    role: "Client Relations",
    bio: "Dedicated to making every client's journey smooth and enjoyable — from first contact to final handover.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    accent: "#5E2D8C",
  },
];

const VALUES = [
  {
    icon: Heart,
    title: "Client First",
    desc: "Every decision we make is guided by what's best for our clients. We listen, we advise, we deliver.",
    color: "#D45B3A",
    bg: "rgba(212,91,58,0.08)",
  },
  {
    icon: Shield,
    title: "Transparency",
    desc: "No hidden fees, no surprises. You'll always know exactly where things stand throughout the process.",
    color: "#0B6E4F",
    bg: "rgba(11,110,79,0.08)",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards — in market knowledge, presentation and personal service.",
    color: "#C9952A",
    bg: "rgba(201,149,42,0.08)",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We're not just your agent. We're your trusted partner in one of the most important decisions of your life.",
    color: "#1A6BAD",
    bg: "rgba(26,107,173,0.08)",
  },
];

const STATS = [
  { icon: "🏠", value: "1,200+", label: "Properties Sold" },
  { icon: "⭐", value: "98%", label: "Client Satisfaction" },
  { icon: "🏆", value: "15 Yrs", label: "Experience" },
  { icon: "📋", value: "320+", label: "Active Listings" },
  { icon: "🌍", value: "12", label: "Cities Covered" },
  { icon: "💶", value: "€2.4B+", label: "Total Volume" },
];

export default function AboutPage() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".about-reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fdfaf4",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* ── HERO BANNER ── */}
      <section
        style={{
          position: "relative",
          minHeight: 520,
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          paddingTop: 100,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #061A12 0%, #0B3D2A 40%, #1A6BAD 80%, #0D1117 100%)",
          }}
        />
        {/* Mesh blobs */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "20%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(11,110,79,0.45) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            right: "10%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,149,42,0.3) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "60px 60px 72px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div
              style={{
                width: 36,
                height: 2,
                background: "linear-gradient(90deg, #C9952A, #F0C84A)",
                borderRadius: 1,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#F0C84A",
              }}
            >
              Our Story
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(44px, 5vw, 72px)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.1,
              marginBottom: 24,
              maxWidth: 660,
            }}
          >
            Austria's most{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A07020, #C9952A)",
                borderRadius: 10,
                padding: "2px 16px 4px",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              trusted
            </span>
            <br />
            real estate partner.
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 17,
              lineHeight: 1.75,
              maxWidth: 520,
              padding: "12px 20px",
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(8px)",
              borderRadius: 12,
              borderLeft: "3px solid #C9952A",
            }}
          >
            Founded in 2009, Alpine Estates has helped over 1,200 families find
            their perfect home across Austria. We combine local expertise with
            unmatched personal service.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #074D38, #0B6E4F)",
          padding: "0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 60px",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="about-reveal"
              style={{
                padding: "28px 0",
                textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#F0C84A",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "1.2px",
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

      {/* ── OUR STORY ── */}
      <section style={{ padding: "100px 0", background: "#fdfaf4" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 60px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Image collage */}
          <div
            className="about-reveal"
            style={{
              position: "relative",
              height: 480,
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80"
              alt="Alpine Estate"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "65%",
                height: "70%",
                objectFit: "cover",
                borderRadius: 20,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&q=80"
              alt="Alpine Farmhouse"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "58%",
                height: "60%",
                objectFit: "cover",
                borderRadius: 20,
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}
            />
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                top: "38%",
                right: "2%",
                background: "linear-gradient(135deg, #0B6E4F, #10A870)",
                borderRadius: 16,
                padding: "16px 20px",
                boxShadow: "0 16px 40px rgba(11,110,79,0.35)",
                textAlign: "center",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1,
                }}
              >
                15
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                Years
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className="about-reveal"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #0B6E4F, #10A870)", borderRadius: 1 }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#0B6E4F" }}>
                Since 2009
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 400,
                color: "#0D1117",
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Built on trust,
              <br />
              driven by results.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "#4a4a45", fontSize: 15, lineHeight: 1.75 }}>
              <p>
                Alpine Estates was founded with a simple belief: that buying or
                selling property should be a positive, empowering experience —
                not a stressful one.
              </p>
              <p>
                Our team of local experts combines deep market knowledge with
                genuine care for every client. Whether you're a first-time buyer
                or a seasoned investor, we treat your goals as our own.
              </p>
              <p>
                Over 15 years, we've grown into Austria's most referred
                independent agency, with offices in Linz, Wels, and Salzburg.
              </p>
            </div>

            <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
              <Link
                href="/properties"
                style={{
                  padding: "14px 32px",
                  borderRadius: 99,
                  background: "linear-gradient(135deg, #0B6E4F, #10A870)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 12px 32px rgba(11,110,79,0.3)",
                }}
              >
                Browse Properties <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact"
                style={{
                  padding: "14px 32px",
                  borderRadius: 99,
                  border: "1.5px solid #0B6E4F",
                  color: "#0B6E4F",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        style={{
          padding: "80px 0 100px",
          background: "linear-gradient(180deg, #f4f0e8 0%, #fdfaf4 100%)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #C9952A, #F0C84A)", borderRadius: 1 }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#A07020" }}>
                What drives us
              </span>
              <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #F0C84A, #C9952A)", borderRadius: 1 }} />
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(34px, 4vw, 52px)",
                fontWeight: 400,
                color: "#0D1117",
              }}
            >
              Our core{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A07020, #C9952A)",
                  borderRadius: 10,
                  padding: "2px 14px 4px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                values
              </span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="about-reveal"
                  style={{
                    padding: "32px 28px",
                    borderRadius: 20,
                    background: "white",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                    opacity: 0,
                    transform: "translateY(28px)",
                    transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: v.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={24} color={v.color} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#0D1117",
                      marginBottom: 10,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#6B7685", lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "80px 0 100px", background: "#fdfaf4" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #0B6E4F, #10A870)", borderRadius: 1 }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#0B6E4F" }}>
                The team
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(34px, 4vw, 52px)",
                fontWeight: 400,
                color: "#0D1117",
              }}
            >
              The people behind{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0B6E4F, #10A870)",
                  borderRadius: 10,
                  padding: "2px 14px 4px",
                  fontStyle: "italic",
                  color: "white",
                }}
              >
                Alpine Estates
              </span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="about-reveal"
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  opacity: 0,
                  transform: "translateY(28px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                {/* Top accent */}
                <div style={{ height: 4, background: member.accent }} />
                {/* Photo */}
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }} />
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#0D1117",
                      marginBottom: 4,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: member.accent,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: 12,
                    }}
                  >
                    {member.role}
                  </p>
                  <p style={{ fontSize: 13, color: "#6B7685", lineHeight: 1.6 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          padding: "80px 60px",
          background: "linear-gradient(135deg, #061A12, #0B3D2A, #074D38)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(34px, 4vw, 52px)",
            fontWeight: 400,
            color: "white",
            marginBottom: 16,
          }}
        >
          Ready to find your{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #A07020, #C9952A)",
              borderRadius: 10,
              padding: "2px 14px 4px",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            perfect home?
          </span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
          Request a free, no-obligation valuation or browse our full portfolio today.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              padding: "16px 40px",
              borderRadius: 99,
              background: "linear-gradient(135deg, #C9952A, #F0C84A)",
              color: "#0D1117",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 12px 36px rgba(201,149,42,0.45)",
            }}
          >
            Free Valuation →
          </Link>
          <Link
            href="/properties"
            style={{
              padding: "16px 40px",
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
            }}
          >
            Browse Listings
          </Link>
        </div>
      </section>
    </div>
  );
}