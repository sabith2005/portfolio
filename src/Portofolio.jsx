import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "Java", level: 80, icon: "☕" },
  { name: "PHP", level: 78, icon: "🐘" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "HTML & CSS", level: 90, icon: "🌐" },
  { name: "ASP.NET", level: 72, icon: "🔷" },
  { name: "MySQL", level: 78, icon: "🗄️" },
  { name: "Android Studio", level: 70, icon: "📱" },
  { name: "GitHub", level: 75, icon: "🔧" },
];

const PROJECTS = [
  {
    title: "MediCare Plus",
    description: "A healthcare management system with role-based login for patients, doctors, and admins. Built with PHP & MySQL.",
    tags: ["PHP", "MySQL", "Web"],
    icon: "🏥",
    link: "https://github.com/sabith2005",
  },
  {
    title: "Event Management System",
    description: "Full-featured event management platform built using ASP.NET MVC with REST API integration.",
    tags: ["ASP.NET", "MVC", "API"],
    icon: "📅",
    link: "https://github.com/sabith2005",
  },
  {
    title: "TechCare Mobile App",
    description: "Android-based repair service application developed using Android Studio for managing tech repair requests.",
    tags: ["Android", "Java", "Mobile"],
    icon: "📱",
    link: "https://github.com/sabith2005",
  },
  {
    title: "Alert Sri App",
    description: "An emergency alert mobile system built to notify users about critical situations across Sri Lanka.",
    tags: ["Android", "Mobile", "Alerts"],
    icon: "🚨",
    link: "https://github.com/sabith2005",
  },
];

const EDUCATION = [
  {
    degree: "Higher Diploma in Software Engineering",
    school: "Cardiff Metropolitan University",
    year: "2024 – 2026",
    icon: "🎓",
  },
  {
    degree: "OTHM Level 3 Foundation",
    school: "Foundation Programme",
    year: "2023",
    icon: "📜",
  },
  {
    degree: "GCE O/L Examination",
    school: "Sri Lanka",
    year: "Completed",
    icon: "📚",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setVisible((v) => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  const handleSend = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fafaf8", color: "#1a1a1a", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(1.5rem, 6vw, 6rem)",
        background: scrolled ? "rgba(250,250,248,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px"
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700 }}>
          S<span style={{ fontStyle: "italic", color: "#8b6f47" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_LINKS.map((n) => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.07em",
              color: active === n ? "#8b6f47" : "#555",
              textTransform: "uppercase",
              borderBottom: active === n ? "1.5px solid #8b6f47" : "1.5px solid transparent",
              paddingBottom: "2px", transition: "all 0.2s", fontFamily: "inherit"
            }}>{n}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "0 clamp(1.5rem, 8vw, 8rem)",
        background: "linear-gradient(135deg, #fafaf8 55%, #f0ebe3 100%)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ maxWidth: "680px", zIndex: 1 }}>
          <p style={{ fontSize: "0.82rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8b6f47", marginBottom: "1.5rem", fontWeight: 500 }}>
            Junior Software Developer · Kandy, Sri Lanka
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 700, lineHeight: 1.08,
            margin: "0 0 1.5rem", letterSpacing: "-2px"
          }}>
            Sabith<br />
            <span style={{ fontStyle: "italic", color: "#8b6f47" }}>Shafeek</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#666", lineHeight: 1.85, maxWidth: "460px", marginBottom: "2.5rem" }}>
            A motivated developer skilled in Java, PHP, JavaScript and full-stack web development. Passionate about building real-world software solutions.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("Projects")}
              style={{
                background: "#1a1a1a", color: "#fff", border: "none",
                padding: "0.85rem 2rem", borderRadius: "2rem",
                fontSize: "0.88rem", fontWeight: 500, cursor: "pointer",
                letterSpacing: "0.03em", transition: "background 0.2s", fontFamily: "inherit"
              }}
              onMouseEnter={e => e.target.style.background = "#8b6f47"}
              onMouseLeave={e => e.target.style.background = "#1a1a1a"}
            >View Projects</button>
            <a href="https://github.com/sabith2005" target="_blank" rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "transparent", color: "#1a1a1a",
                border: "1.5px solid #1a1a1a", padding: "0.85rem 2rem",
                borderRadius: "2rem", fontSize: "0.88rem", fontWeight: 500,
                cursor: "pointer", letterSpacing: "0.03em", textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1a1a"; }}
            >GitHub ↗</a>
          </div>
          <div style={{ display: "flex", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
            {[["📧", "sabithahmed074@gmail.com"], ["📞", "+94 742785814"], ["📍", "Kandy, Sri Lanka"]].map(([icon, val]) => (
              <span key={val} style={{ fontSize: "0.78rem", color: "#888" }}>{icon} {val}</span>
            ))}
          </div>
        </div>
        <div style={{
          position: "absolute", right: "6vw", top: "50%", transform: "translateY(-50%)",
          width: "340px", height: "340px", borderRadius: "50%",
          background: "rgba(139,111,71,0.07)", border: "1px solid rgba(139,111,71,0.14)",
          display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none"
        }}>
          <div style={{
            width: "240px", height: "240px", borderRadius: "50%",
            background: "rgba(139,111,71,0.11)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Playfair Display', serif", fontSize: "4.5rem", color: "#8b6f47", fontStyle: "italic"
          }}>SS</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "8rem clamp(1.5rem, 8vw, 8rem)",
        opacity: visible["about"] ? 1 : 0,
        transform: visible["about"] ? "none" : "translateY(30px)",
        transition: "all 0.7s ease"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "flex-start", maxWidth: "1000px" }}>
          <div>
            <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b6f47", marginBottom: "1rem", fontWeight: 500 }}>About Me</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, margin: "0 0 1.5rem", lineHeight: 1.2 }}>
              Building <em style={{ color: "#8b6f47" }}>real-world</em><br />solutions
            </h2>
            <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              I'm a Junior Software Developer from Kandy, Sri Lanka, currently completing my Higher Diploma in Software Engineering at Cardiff Metropolitan University.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "2rem", fontSize: "0.95rem" }}>
              Skilled in Java, PHP, JavaScript, ASP.NET, and MySQL — I've built full-stack web apps and Android mobile applications. I also gained professional experience as an Administrative Assistant at Izumi Traders, managing databases and digital systems.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <a href="https://linkedin.com/in/sabith2005" target="_blank" rel="noreferrer"
                style={{ fontSize: "0.85rem", color: "#8b6f47", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid #8b6f47", paddingBottom: "2px" }}>
                LinkedIn ↗
              </a>
              <a href="https://github.com/sabith2005" target="_blank" rel="noreferrer"
                style={{ fontSize: "0.85rem", color: "#8b6f47", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid #8b6f47", paddingBottom: "2px" }}>
                GitHub ↗
              </a>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#aaa", marginBottom: "1.5rem", fontWeight: 500 }}>Education</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {EDUCATION.map((ed) => (
                <div key={ed.degree} style={{
                  background: "#fff", borderRadius: "1rem", padding: "1.25rem 1.5rem",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex", gap: "1rem", alignItems: "flex-start"
                }}>
                  <span style={{ fontSize: "1.5rem" }}>{ed.icon}</span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", margin: "0 0 0.25rem" }}>{ed.degree}</p>
                    <p style={{ color: "#888", fontSize: "0.78rem", margin: 0 }}>{ed.school} · {ed.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{
        padding: "8rem clamp(1.5rem, 8vw, 8rem)",
        background: "#f5f0ea",
        opacity: visible["skills"] ? 1 : 0,
        transform: visible["skills"] ? "none" : "translateY(30px)",
        transition: "all 0.7s ease"
      }}>
        <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b6f47", marginBottom: "1rem", fontWeight: 500 }}>Skills</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, margin: "0 0 0.75rem", lineHeight: 1.2 }}>
          My <em style={{ color: "#8b6f47" }}>toolkit</em>
        </h2>
        <p style={{ color: "#888", marginBottom: "3rem", fontSize: "0.92rem" }}>Programming · Web · Mobile · Database · Tools</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem", maxWidth: "960px" }}>
          {SKILLS.map((s, i) => (
            <div key={s.name} style={{
              background: "#fff", borderRadius: "1rem", padding: "1.25rem 1.5rem",
              border: "1px solid rgba(0,0,0,0.06)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <span style={{ fontWeight: 500, fontSize: "0.92rem" }}>{s.icon} {s.name}</span>
                <span style={{ fontSize: "0.82rem", color: "#8b6f47", fontWeight: 600 }}>{s.level}%</span>
              </div>
              <div style={{ height: "4px", background: "#ece7df", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: "2px", background: "linear-gradient(90deg, #8b6f47, #c9a876)",
                  width: visible["skills"] ? `${s.level}%` : "0%",
                  transition: `width 1s ease ${i * 0.08}s`
                }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{
        padding: "8rem clamp(1.5rem, 8vw, 8rem)",
        opacity: visible["projects"] ? 1 : 0,
        transform: visible["projects"] ? "none" : "translateY(30px)",
        transition: "all 0.7s ease"
      }}>
        <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b6f47", marginBottom: "1rem", fontWeight: 500 }}>Projects</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, margin: "0 0 0.75rem", lineHeight: 1.2 }}>
          What I've <em style={{ color: "#8b6f47" }}>built</em>
        </h2>
        <p style={{ color: "#888", marginBottom: "3.5rem", fontSize: "0.92rem" }}>4 projects · Web & Mobile Development</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", maxWidth: "1000px" }}>
          {PROJECTS.map((p) => (
            <div key={p.title}
              style={{
                background: "#fff", borderRadius: "1.25rem", padding: "2rem",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.04)"; }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "0.875rem", background: "#f5f0ea", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", fontSize: "1.6rem" }}>
                {p.icon}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.75rem" }}>{p.title}</h3>
              <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: 1.75, margin: "0 0 1.25rem" }}>{p.description}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontSize: "0.72rem", padding: "0.25rem 0.75rem", borderRadius: "2rem", background: "#f5f0ea", color: "#8b6f47", fontWeight: 600 }}>{t}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer"
                style={{ fontSize: "0.82rem", color: "#8b6f47", textDecoration: "none", fontWeight: 600, borderBottom: "1px solid #8b6f47", paddingBottom: "1px" }}>
                View on GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "8rem clamp(1.5rem, 8vw, 8rem)",
        background: "#1a1a1a", color: "#fff",
        opacity: visible["contact"] ? 1 : 0,
        transform: visible["contact"] ? "none" : "translateY(30px)",
        transition: "all 0.7s ease"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", maxWidth: "1000px", alignItems: "flex-start" }}>
          <div>
            <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a876", marginBottom: "1rem", fontWeight: 500 }}>Contact</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, margin: "0 0 1.5rem", lineHeight: 1.1 }}>
              Let's work<br /><em style={{ color: "#c9a876" }}>together</em>
            </h2>
            <p style={{ color: "#aaa", lineHeight: 1.85, marginBottom: "2.5rem", fontSize: "0.92rem" }}>
              Open to new opportunities, freelance projects, or just a friendly chat about software development.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {[
                ["📧", "Email", "sabithahmed074@gmail.com"],
                ["📞", "Phone", "+94 742785814"],
                ["📍", "Location", "Kandy, Sri Lanka"],
                ["💼", "LinkedIn", "linkedin.com/in/sabith2005"],
                ["🐙", "GitHub", "github.com/sabith2005"],
              ].map(([icon, label, val]) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                  <div>
                    <p style={{ fontSize: "0.7rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>{label}</p>
                    <p style={{ fontSize: "0.87rem", color: "#ccc", margin: 0 }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div style={{ padding: "3rem", textAlign: "center", background: "rgba(255,255,255,0.04)", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", margin: "0 0 0.75rem" }}>Message Sent!</h3>
                <p style={{ color: "#aaa", fontSize: "0.9rem" }}>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { placeholder: "Your Name", key: "name", type: "text" },
                  { placeholder: "Your Email", key: "email", type: "email" },
                ].map(({ placeholder, key, type }) => (
                  <input key={key} placeholder={placeholder} type={type}
                    value={form[key]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{
                      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "0.75rem", padding: "1rem 1.25rem", color: "#fff",
                      fontSize: "0.92rem", outline: "none", fontFamily: "inherit"
                    }} />
                ))}
                <textarea placeholder="Your Message" rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "0.75rem", padding: "1rem 1.25rem", color: "#fff",
                    fontSize: "0.92rem", outline: "none", resize: "none", fontFamily: "inherit"
                  }} />
                <button onClick={handleSend}
                  style={{
                    background: "#c9a876", color: "#1a1a1a", border: "none",
                    padding: "1rem 2.5rem", borderRadius: "2rem", fontSize: "0.9rem",
                    fontWeight: 600, cursor: "pointer", letterSpacing: "0.05em",
                    alignSelf: "flex-start", transition: "opacity 0.2s", fontFamily: "inherit"
                  }}
                  onMouseEnter={e => e.target.style.opacity = "0.82"}
                  onMouseLeave={e => e.target.style.opacity = "1"}
                >Send Message →</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", color: "#555", padding: "2rem clamp(1.5rem, 6vw, 6rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#777" }}>Sabith Shafeek</span>
        <span style={{ fontSize: "0.78rem" }}>© {new Date().getFullYear()} · Junior Software Developer · Kandy, Sri Lanka</span>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder, textarea::placeholder { color: #555; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}</style>
    </div>
  );
}
