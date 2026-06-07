"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: `1.5px solid ${focused === name ? "#0B6E4F" : "#e8e4dc"}`,
    background: focused === name ? "white" : "#fdfaf4",
    color: "#0D1117",
    fontSize: 14,
    fontFamily: "'Outfit', sans-serif",
    outline: "none",
    transition: "all 0.2s",
    boxShadow: focused === name ? "0 0 0 4px rgba(11,110,79,0.08)" : "none",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#5e5e58",
    marginBottom: 6,
    fontFamily: "'Outfit', sans-serif",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #fdfaf4 0%, #f0ece4 40%, #e8f4ee 100%)",
        paddingTop: 112,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(11,110,79,0.04) 0%, rgba(16,168,112,0.08) 100%)",
          clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(11,110,79,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: -80,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,149,42,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 60px 100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
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
                  color: "#A07020",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Get in touch
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px, 4vw, 56px)",
                fontWeight: 400,
                color: "#0D1117",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Let's talk about
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #0B6E4F, #10A870)",
                  borderRadius: 10,
                  padding: "2px 14px 4px",
                  fontStyle: "italic",
                  color: "white",
                  display: "inline-block",
                  marginTop: 6,
                }}
              >
                your property.
              </span>
            </h1>

            <p
              style={{
                color: "#6B7685",
                fontSize: 16,
                lineHeight: 1.7,
                marginBottom: 48,
                fontFamily: "'Outfit', sans-serif",
                maxWidth: 420,
              }}
            >
              Whether you're buying, selling or just exploring your options —
              we'd love to hear from you. No obligation, no pressure.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
              {[
                {
                  icon: Phone,
                  color: "#0B6E4F",
                  grad: "linear-gradient(135deg, #074D38, #0B6E4F)",
                  label: "Phone",
                  value: "+43 123 456 789",
                  href: "tel:+43123456789",
                },
                {
                  icon: Mail,
                  color: "#C9952A",
                  grad: "linear-gradient(135deg, #A07020, #C9952A)",
                  label: "Email",
                  value: "info@alpineestates.at",
                  href: "mailto:info@alpineestates.at",
                },
                {
                  icon: MapPin,
                  color: "#1A6BAD",
                  grad: "linear-gradient(135deg, #0F4A80, #1A6BAD)",
                  label: "Office",
                  value: "Hauptplatz 1, 4020 Linz",
                  href: "#",
                },
                {
                  icon: Clock,
                  color: "#5E2D8C",
                  grad: "linear-gradient(135deg, #3E1A60, #5E2D8C)",
                  label: "Hours",
                  value: "Mon–Fri 9:00–18:00",
                  href: "#",
                },
              ].map(({ icon: Icon, grad, label, value, href, color }) => (
                <div
                  key={label}
                  style={{ display: "flex", alignItems: "center", gap: 16 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: grad,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 8px 20px ${color}33`,
                    }}
                  >
                    <Icon size={18} color="white" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 11,
                        color: "#9e9e97",
                        marginBottom: 3,
                        fontFamily: "'Outfit', sans-serif",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </p>
                    <a
                      href={href}
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#0D1117",
                        textDecoration: "none",
                        fontFamily: "'Outfit', sans-serif",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#0B6E4F")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "#0D1117")
                      }
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 16,
                background: "linear-gradient(135deg, rgba(11,110,79,0.06), rgba(16,168,112,0.10))",
                border: "1px solid rgba(11,110,79,0.15)",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
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
                }}
              >
                <CheckCircle2 size={22} color="white" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0B6E4F",
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: 2,
                  }}
                >
                  Response within 24 hours
                </p>
                <p style={{ fontSize: 12, color: "#6B7685", fontFamily: "'Outfit', sans-serif" }}>
                  We take every enquiry seriously — no auto-replies.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: FORM ── */}
          <div
            style={{
              background: "white",
              borderRadius: 28,
              padding: "44px 48px",
              boxShadow: "0 32px 80px rgba(0,0,0,0.09), 0 0 0 1px rgba(0,0,0,0.04)",
              position: "relative",
            }}
          >
            {/* Top accent strip */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                borderRadius: "28px 28px 0 0",
                background: "linear-gradient(90deg, #0B6E4F, #10A870, #C9952A, #F0C84A)",
              }}
            />

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(11,110,79,0.1), rgba(16,168,112,0.15))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <Send size={32} color="#0B6E4F" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 32,
                    color: "#0D1117",
                    marginBottom: 10,
                  }}
                >
                  Message sent!
                </h3>
                <p style={{ color: "#6B7685", fontSize: 15, fontFamily: "'Outfit', sans-serif" }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 30,
                    fontWeight: 600,
                    color: "#0D1117",
                    marginBottom: 8,
                  }}
                >
                  Send us a message
                </h2>
                <p
                  style={{
                    color: "#9e9e97",
                    fontSize: 14,
                    marginBottom: 32,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Fill out the form and we'll be in touch shortly.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>First name</label>
                      <input
                        type="text"
                        required
                        placeholder="Maria"
                        style={inputStyle("first")}
                        onFocus={() => setFocused("first")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Last name</label>
                      <input
                        type="text"
                        required
                        placeholder="Gruber"
                        style={inputStyle("last")}
                        onFocus={() => setFocused("last")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email address</label>
                    <input
                      type="email"
                      required
                      placeholder="maria@example.at"
                      style={inputStyle("email")}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="+43 123 456 789"
                      style={inputStyle("phone")}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>I'm interested in</label>
                    <select
                      style={{ ...inputStyle("interest"), cursor: "pointer" }}
                      onFocus={() => setFocused("interest")}
                      onBlur={() => setFocused(null)}
                    >
                      <option>Buying a property</option>
                      <option>Selling a property</option>
                      <option>Free valuation</option>
                      <option>Renting</option>
                      <option>General enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your requirements…"
                      style={{
                        ...inputStyle("message"),
                        resize: "none",
                        lineHeight: 1.6,
                      }}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "16px 24px",
                      borderRadius: 14,
                      background: "linear-gradient(135deg, #074D38, #0B6E4F, #10A870)",
                      color: "white",
                      fontWeight: 700,
                      fontSize: 15,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      fontFamily: "'Outfit', sans-serif",
                      boxShadow: "0 12px 36px rgba(11,110,79,0.35)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      letterSpacing: "0.3px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 18px 48px rgba(11,110,79,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(11,110,79,0.35)";
                    }}
                  >
                    Send Message
                    <Send size={16} />
                  </button>

                  <p style={{ textAlign: "center", fontSize: 12, color: "#9e9e97", fontFamily: "'Outfit', sans-serif" }}>
                    🔒 Your information is safe. We never share your data.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}