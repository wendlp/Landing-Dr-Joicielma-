import { useState, useEffect } from "react";

// ─── Config ───────────────────────────────────────────────────────────────────

const WA_NUMBER = "5579998680956";
const WA_PHONE_DISPLAY = "(79) 99868-0956";
const INSTAGRAM = "@jocielmabarbosaa";

// CORREÇÃO: Removida a barra inicial para funcionar em subpastas no GitHub Pages
const LAWYER_PHOTO = "jocielma-barbosa.jpg";

// Estátua da Justiça para o hero
const JUSTICE_STATUE =
  "https://images.unsplash.com/photo-1649653084130-06638e40ca25?w=1400&h=900&fit=crop&auto=format&q=80";

// ─── Palette ──────────────────────────────────────────────────────────────────

const G = "#c4953a";   // gold
const GL = "#d4a84a";  // gold light (hover)
const BG = "#0d0d0b";  // obsidian
const S1 = "#111109";  // surface 1
const S2 = "#181612";  // surface 2
const CR = "#f0e6d0";  // cream text
const CD = "#a89878";  // cream dim
const MT = "#8c7d63";  // muted — raised for WCAG AA on dark bg
const GB = "rgba(196,149,58,0.22)"; // gold border

// ─── Helpers ──────────────────────────────────────────────────────────────────

function waLink(name = "") {
  const msg = name
    ? `Olá, Dra. Jocielma! Me chamo ${name.trim()} e gostaria de agendar uma consulta.`
    : "Olá, Dra. Jocielma! Gostaria de agendar uma consulta.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function WAIcon({ size = 20, color = "#0d0d0b" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.118 1.533 5.845L.057 23.428a.5.5 0 00.601.628l5.757-1.505A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.499-5.243-1.371l-.374-.213-3.876 1.013 1.02-3.744-.234-.387A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = ["Sobre", "Serviços", "Depoimentos", "Contato"];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(13,13,11,0.97)" : "rgba(13,13,11,0.75)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled ? `1px solid ${GB}` : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 36,
                height: 36,
                border: `1px solid ${G}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                className="serif"
                style={{ fontSize: 13, fontWeight: 600, color: G, letterSpacing: "0.05em" }}
              >
                JB
              </span>
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: G,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Jocielma Barbosa
            </span>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="desk-nav">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`}
                style={{
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  color: CD,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = CR)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = CD)}
              >
                {n}
              </a>
            ))}
            <a
              href="#contato"
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                color: G,
                border: `1px solid ${G}`,
                padding: "8px 18px",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = G;
                (e.currentTarget as HTMLElement).style.color = BG;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = G;
              }}
            >
              Consulta
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="mob-burger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: CR,
              padding: 4,
              display: "none",
            }}
          >
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              background: "rgba(13,13,11,0.99)",
              borderTop: `1px solid ${GB}`,
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  color: CD,
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {n}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              style={{
                fontSize: 13,
                color: G,
                border: `1px solid ${G}`,
                padding: "10px 20px",
                textDecoration: "none",
                textAlign: "center",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Consulta
            </a>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .desk-nav { display: none !important; }
          .mob-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: BG,
        overflow: "hidden",
      }}
    >
      {/* Background: justice statue */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${JUSTICE_STATUE})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.22,
          filter: "brightness(0.6) sepia(0.3)",
        }}
      />
      {/* Dark overlay gradient — stronger on left */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(13,13,11,0.97) 0%, rgba(13,13,11,0.75) 50%, rgba(13,13,11,0.4) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 32px 80px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div className="fade-up">
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              color: G,
              textTransform: "uppercase",
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            Advocacia Imobiliária e Extrajudicial · Sergipe
          </p>

          <h1
            className="serif"
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: CR,
              marginBottom: 20,
              letterSpacing: "-0.01em",
            }}
          >
            Protegendo seu{" "}
            <span style={{ color: G }}>patrimônio</span> com propósito.
          </h1>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.72,
              color: CD,
              marginBottom: 40,
              maxWidth: 480,
              textAlign: "justify",
            }}
          >
            Organização jurídica especializada em regularização de imóveis,
            família e sucessões. Para evitar conflitos e proteger o que você
            levou a vida inteira construindo.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 28px",
                background: G,
                color: BG,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = GL)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = G)}
            >
              <WAIcon size={17} />
              Falar no WhatsApp
            </a>
            <a
              href="#sobre"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "15px 28px",
                border: `1px solid ${CD}`,
                color: CR,
                textDecoration: "none",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = G;
                (e.currentTarget as HTMLElement).style.color = G;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = CD;
                (e.currentTarget as HTMLElement).style.color = CR;
              }}
            >
              Conheça o escritório
            </a>
          </div>
        </div>

        {/* Right: Stats box */}
        <div style={{ display: "flex", justifyContent: "flex-end" }} className="hero-stats-wrap">
          <div
            style={{
              border: `1px solid ${GB}`,
              background: "rgba(13,13,11,0.75)",
              backdropFilter: "blur(12px)",
              padding: "36px 40px",
              maxWidth: 420,
              width: "100%",
            }}
          >
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                color: G,
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              Números que importam
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "28px 40px",
              }}
            >
              {[
                { v: "2+", l: "Anos de experiência" },
                { v: "100+", l: "Casos concluídos" },
                { v: "100%", l: "Compromisso com o cliente" },
                { v: "6", l: "Áreas de atuação" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="serif"
                    style={{ fontSize: 40, fontWeight: 700, color: G, lineHeight: 1 }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      color: CD,
                      textTransform: "uppercase",
                      marginTop: 6,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-stats-wrap { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section
      id="sobre"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "85vh" }}
      className="about-grid"
    >
      {/* Photo */}
      <div
        style={{
          position: "relative",
          background: S2,
          overflow: "hidden",
          minHeight: 540,
        }}
      >
        <img
          src={LAWYER_PHOTO}
          alt="Dra. Jocielma Barbosa, advogada imobiliária em Sergipe"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
        {/* Bottom OAB badge */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: G,
            color: BG,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.18em",
            padding: "10px 28px",
            textTransform: "uppercase",
          }}
        >
          OAB/SE
        </div>
      </div>

      {/* Text */}
      <div
        style={{
          background: S1,
          padding: "80px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="about-text"
      >
        <p
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            color: G,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Sobre a advogada
        </p>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(30px, 3vw, 46px)",
            fontWeight: 700,
            color: CR,
            marginBottom: 24,
            lineHeight: 1.15,
          }}
        >
          Dra. Jocielma Barbosa
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.76,
            color: CD,
            marginBottom: 18,
            textAlign: "justify",
          }}
        >
          Advogada Imobiliária e Extrajudicial com foco em regularização de
          imóveis, família e sucessões. Nascida no interior de Sergipe, construiu
          sua trajetória com determinação. E é essa mesma determinação que ela
          coloca a serviço dos seus clientes.
        </p>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.76,
            color: CD,
            marginBottom: 32,
            textAlign: "justify",
          }}
        >
          Especializada em organização jurídica para proteger patrimônios e evitar
          conflitos, a Dra. Jocielma atua com atenção personalizada em cada caso,
          garantindo segurança jurídica e tranquilidade para você e sua família.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            "Advocacia Imobiliária e Extrajudicial",
            "Regularização de Imóveis · Inventário · Usucapião",
            "Planejamento Matrimonial e Sucessório",
          ].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{ width: 6, height: 6, borderRadius: "50%", background: G, flexShrink: 0 }}
              />
              <span style={{ fontSize: 14, color: CD }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-text { padding: 48px 28px !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="servicos" style={{ background: BG, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            marginBottom: 48,
            alignItems: "flex-end",
          }}
          className="srv-hdr"
        >
          <div>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                color: G,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Especialidades
            </p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(36px, 4vw, 60px)",
                fontWeight: 700,
                color: CR,
                lineHeight: 1,
              }}
            >
              Serviços
            </h2>
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.72,
              color: CD,
              textAlign: "justify",
            }}
          >
            Atuação especializada em direito imobiliário e extrajudicial.
            Soluções rápidas, seguras e feitas sob medida para proteger o que é
            seu.
          </p>
        </div>

        {/* Primary cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, marginBottom: 3 }}
          className="srv-primary"
        >
          {[
            {
              icon: "📋",
              title: "Inventário",
              desc: "Condução ágil e segura do inventário judicial e extrajudicial para partilha de bens com tranquilidade para toda a família.",
            },
            {
              icon: "🏠",
              title: "Usucapião",
              desc: "Regularização da posse e aquisição da propriedade por usucapião extrajudicial e judicial, com todo o suporte documental.",
            },
          ].map((s) => (
            <div
              key={s.title}
              style={{
                background: S1,
                border: `1px solid ${GB}`,
                padding: "40px 36px",
                position: "relative",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = G)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = GB)
              }
            >
              {/* Principal tag */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  border: `1px solid ${GB}`,
                  padding: "4px 10px",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: CD,
                  textTransform: "uppercase",
                }}
              >
                Principal
              </div>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3
                className="serif"
                style={{ fontSize: 26, fontWeight: 600, color: G, marginBottom: 12 }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.72,
                  color: CD,
                  marginBottom: 24,
                  textAlign: "justify",
                }}
              >
                {s.desc}
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  color: G,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Falar sobre este serviço →
              </a>
            </div>
          ))}
        </div>

        {/* Secondary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }} className="srv-secondary">
          {[
            {
              icon: "💍",
              title: "Planejamento Matrimonial",
              desc: "Pacto antenupcial, regime de bens e estratégias para proteger o patrimônio antes e durante o casamento ou união estável.",
            },
            {
              icon: "📄",
              title: "Regularização de Imóveis",
              desc: "Regularização fundiária, escrituras, registros e toda a documentação necessária para dar segurança jurídica ao seu imóvel.",
            },
            {
              icon: "👨‍👩‍👧",
              title: "Direito de Família",
              desc: "Divórcio, guarda, alimentos e demais questões familiares tratadas com sensibilidade e estratégia jurídica eficaz.",
            },
            {
              icon: "🏛",
              title: "Sucessões",
              desc: "Planejamento sucessório, testamentos e herança para organizar o seu patrimônio e garantir o futuro da sua família.",
            },
          ].map((s) => (
            <div
              key={s.title}
              style={{
                background: S2,
                border: `1px solid rgba(196,149,58,0.10)`,
                padding: "28px 24px",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = GB)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(196,149,58,0.10)")
              }
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
              <h4
                className="serif"
                style={{ fontSize: 17, fontWeight: 600, color: CR, marginBottom: 10 }}
              >
                {s.title}
              </h4>
              <p style={{ fontSize: 13, lineHeight: 1.68, color: MT, textAlign: "justify" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .srv-hdr { grid-template-columns: 1fr !important; gap: 20px !important; }
          .srv-primary { grid-template-columns: 1fr !important; }
          .srv-secondary { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .srv-secondary { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Quote ────────────────────────────────────────────────────────────────────

function Quote() {
  return (
    <section
      style={{
        background: G,
        padding: "100px 32px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div
          className="serif"
          style={{ fontSize: 48, color: "rgba(0,0,0,0.25)", lineHeight: 1, marginBottom: 24 }}
        >
          "
        </div>
        <blockquote
          className="serif"
          style={{
            fontSize: "clamp(22px, 2.8vw, 34px)",
            fontWeight: 600,
            color: BG,
            lineHeight: 1.45,
            fontStyle: "italic",
            margin: "0 0 28px",
          }}
        >
          Patrimônio não é só bem material. É a história de quem trabalhou,
          abriu mão e insistiu. Cuido disso com o mesmo respeito com que
          construí a minha.
        </blockquote>
        <cite
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "rgba(0,0,0,0.55)",
            textTransform: "uppercase",
            fontStyle: "normal",
          }}
        >
          Dra. Jocielma Barbosa
        </cite>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    initials: "MD",
    name: "Marcelo Drummond",
    role: "Empresário",
    text: "A Dra. Jocielma conduziu meu processo de divórcio com uma competência e humanidade que eu jamais esperava. Resultado excelente, comunicação impecável.",
  },
  {
    initials: "FL",
    name: "Fernanda Lacerda",
    role: "Diretora Executiva",
    text: "Contratamos o escritório para estruturar nossa operação societária. O trabalho foi rigoroso, ágil e nos deu total segurança para crescer.",
  },
  {
    initials: "RA",
    name: "Roberto Alves",
    role: "Médico",
    text: "Precisei de assessoria urgente num contrato imobiliário complexo. A Dra. Jocielma identificou riscos que eu jamais teria visto e resolveu tudo com maestria.",
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" style={{ background: S1, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            color: G,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          O que dizem os clientes
        </p>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(36px, 4vw, 58px)",
            fontWeight: 700,
            color: CR,
            marginBottom: 48,
          }}
        >
          Depoimentos
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="test-grid">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: BG,
                border: `1px solid ${GB}`,
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 28,
                position: "relative",
              }}
            >
              {/* Quote mark decoration */}
              <div
                className="serif"
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontSize: 40,
                  color: GB,
                  lineHeight: 1,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.76,
                  color: CD,
                  flex: 1,
                  textAlign: "justify",
                }}
              >
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: G,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="serif"
                    style={{ fontSize: 14, fontWeight: 700, color: BG }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: CR }}>
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      color: G,
                      textTransform: "uppercase",
                      marginTop: 2,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .test-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .test-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [name, setName] = useState("");

  const handleWA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    window.open(waLink(name), "_blank");
  };

  const inp: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: `1px solid ${GB}`,
    padding: "14px 16px",
    color: CR,
    fontSize: 15,
    fontFamily: "'Source Sans 3', sans-serif",
    outline: "none",
  };

  return (
    <section id="contato" style={{ background: BG, padding: "100px 32px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "flex-start",
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              color: G,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Entre em contato
          </p>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(30px, 3.5vw, 48px)",
              fontWeight: 700,
              color: CR,
              marginBottom: 20,
              lineHeight: 1.15,
            }}
          >
            Agende sua Consulta
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.72,
              color: CD,
              marginBottom: 36,
              textAlign: "justify",
            }}
          >
            O primeiro passo é simples: uma conversa. Me conte sua situação e
            vamos juntos encontrar o melhor caminho.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              { label: "WhatsApp", value: WA_PHONE_DISPLAY, href: waLink() },
              { label: "Instagram", value: INSTAGRAM, href: "https://www.instagram.com/jocielmabarbosaa/" },
              { label: "Atendimento", value: "Presencial e Online · Sergipe e todo o Brasil" },
              { label: "Horário", value: "Segunda a Sexta, das 9h às 18h" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    color: G,
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </p>
                {"href" in item ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 15,
                      color: CR,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = CR)}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontSize: 15, color: CR }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <div style={{ marginBottom: 8 }}>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                color: CD,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Seu nome
            </p>
            <form onSubmit={handleWA}>
              <input
                type="text"
                placeholder="Como posso te chamar?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inp}
                onFocus={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = G)
                }
                onBlur={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = GB)
                }
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  marginTop: 12,
                  padding: "16px",
                  background: G,
                  color: BG,
                  border: "none",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontFamily: "'Source Sans 3', sans-serif",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = GL)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = G)}
              >
                Abrir conversa no WhatsApp
              </button>
              <p
                style={{
                  fontSize: 12,
                  color: MT,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Abre o WhatsApp com sua mensagem já preenchida.
              </p>
            </form>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                margin: "24px 0",
              }}
            >
              <div style={{ flex: 1, height: 1, background: GB }} />
              <span style={{ fontSize: 12, color: MT, letterSpacing: "0.1em" }}>
                OU
              </span>
              <div style={{ flex: 1, height: 1, background: GB }} />
            </div>

            {/* Direct CTA */}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                padding: "18px",
                background: G,
                color: BG,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = GL)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = G)}
            >
              <WAIcon size={20} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{WA_PHONE_DISPLAY}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 2 }}>
                  Chamar no WhatsApp agora
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const currentYear = new Date().getFullYear(); // Adicionado para manter o ano dinâmico
  
  return (
    <footer
      style={{
        background: S1,
        borderTop: `1px solid ${GB}`,
        padding: "28px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <p style={{ fontSize: 11, color: MT, letterSpacing: "0.1em" }}>
          © {currentYear} Jocielma Barbosa Advocacia · OAB/SE
        </p>
        <div style={{ display: "flex", gap: 28 }}>
          {["Sobre", "Serviços", "Depoimentos", "Contato"].map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`}
              style={{
                fontSize: 11,
                color: MT,
                textDecoration: "none",
                letterSpacing: "0.1em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = G)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MT)}
            >
              {n}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp FAB ─────────────────────────────────────────────────────────────

function WAFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!show) return null;
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Falar no WhatsApp"
    >
      <WAIcon size={24} color="#fff" />
    </a>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Quote />
      <Testimonials />
      <Contact />
      <Footer />
      <WAFab />
    </>
  );
}
