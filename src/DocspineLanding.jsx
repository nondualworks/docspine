import { useState, useEffect } from "react";

const DocspineLanding = () => {
  const [hoveredSpine, setHoveredSpine] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const serif = "'EB Garamond', Georgia, serif";
  const sans = "'IBM Plex Sans', system-ui, sans-serif";
  const mono = "'JetBrains Mono', monospace";

  const isDark = theme === "dark";
  const emerald = "#34d399";

  const t = isDark ? {
    bg: "#0c0c0b",
    bgCard: "rgba(255,255,255,0.025)",
    border: "rgba(255,255,255,0.06)",
    borderHover: "rgba(255,255,255,0.12)",
    fg: "#f5f5f4",
    fgMuted: "#a8a29e",
    fgDim: "#78716c",
    fgSubtle: "#57534e",
    emeraldDim: "rgba(52, 211, 153, 0.12)",
    navBg: "rgba(12, 12, 11, 0.9)",
    termBg: "#0e0e0d",
    glowAlpha: "0.04",
    badBg: "rgba(239, 68, 68, 0.03)",
    badBorder: "rgba(239, 68, 68, 0.1)",
    badColor: "#ef444480",
    spineText: "rgba(0,0,0,0.6)",
    quoteBorder: `${emerald}40`,
    selection: emerald,
    selectionText: "#0c0c0b",
    linkBorder: "40",
    shadow: "none",
    pillBg: "rgba(255,255,255,0.04)",
    spineAlpha: "90",
  } : {
    bg: "#fafaf9",
    bgCard: "#ffffff",
    border: "#e7e5e4",
    borderHover: "#d6d3d1",
    fg: "#1c1917",
    fgMuted: "#57534e",
    fgDim: "#78716c",
    fgSubtle: "#a8a29e",
    emeraldDim: "rgba(52, 211, 153, 0.08)",
    navBg: "rgba(250, 250, 249, 0.92)",
    termBg: "#1c1917",
    glowAlpha: "0.06",
    badBg: "rgba(239, 68, 68, 0.04)",
    badBorder: "rgba(239, 68, 68, 0.15)",
    badColor: "#dc2626a0",
    spineText: "rgba(0,0,0,0.55)",
    quoteBorder: `${emerald}60`,
    selection: emerald,
    selectionText: "#ffffff",
    linkBorder: "50",
    shadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
    pillBg: "rgba(0,0,0,0.04)",
    spineAlpha: "70",
  };

  const domainColors = { checkout: "#fbbf24", identity: "#a78bfa", platform: "#38bdf8", observability: "#fb7185" };
  const diataxisColors = { tutorial: emerald, howto: "#fbbf24", reference: "#38bdf8", explanation: "#a78bfa" };

  const spines = [
    { name: "payment-api", domain: "checkout", height: 85, docs: 12 },
    { name: "cart-service", domain: "checkout", height: 65, docs: 8 },
    { name: "auth-service", domain: "identity", height: 92, docs: 15 },
    { name: "user-profile", domain: "identity", height: 55, docs: 6 },
    { name: "sso-gateway", domain: "identity", height: 70, docs: 9 },
    { name: "ci-runner", domain: "platform", height: 78, docs: 11 },
    { name: "base-images", domain: "platform", height: 60, docs: 7 },
    { name: "secret-mgmt", domain: "platform", height: 45, docs: 4 },
    { name: "log-pipeline", domain: "observability", height: 88, docs: 14 },
    { name: "alert-engine", domain: "observability", height: 50, docs: 5 },
  ];

  const Eyebrow = ({ children, color }) => (
    <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: color || (isDark ? emerald : t.fgDim), fontFamily: sans, marginBottom: "0.75rem" }}>{children}</div>
  );

  const SpineLogo = ({ size = 20 }) => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: size }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const d = Math.abs(i - 2);
        return <div key={i} style={{ width: `${size / 5 - 1}px`, height: `${size - d * (size * 0.15)}px`, borderRadius: "1.5px", background: `rgba(52,211,153,${0.35 + (1 - d / 5) * 0.55})` }} />;
      })}
    </div>
  );

  const ThemeToggle = () => (
    <button onClick={() => setTheme(isDark ? "light" : "dark")} style={{ background: "none", border: `1px solid ${t.border}`, borderRadius: "6px", padding: "0.35rem 0.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s", color: t.fgDim, width: 32, height: 32 }} title={isDark ? "Light mode" : "Dark mode"}>
      {isDark ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );

  const TermLine = ({ delay, children, prefix = "$" }) => (
    <div style={{ opacity: 0, animation: `termFade 0.4s ease ${delay}s forwards`, display: "flex", gap: "0.5rem", lineHeight: 1.7 }}>
      {prefix && <span style={{ color: emerald, userSelect: "none" }}>{prefix}</span>}
      <span>{children}</span>
    </div>
  );

  return (
    <div style={{ background: t.bg, color: t.fg, minHeight: "100vh", fontFamily: sans, WebkitFontSmoothing: "antialiased", overflow: "hidden", transition: "background 0.35s, color 0.35s" }}>
      <style>{`
        @keyframes termFade { from { opacity:0; transform:translateY(4px) } to { opacity:1; transform:translateY(0) } }
        @keyframes pulseGlow { 0%,100% { opacity:${t.glowAlpha} } 50% { opacity:${parseFloat(t.glowAlpha) * 2} } }
        @keyframes slideUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        ::selection { background: ${t.selection}; color: ${t.selectionText}; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { color: ${emerald}; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>

      {/* ── Nav ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "1.25rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: t.navBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: `1px solid ${t.border}`, transition: "background 0.35s, border-color 0.35s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <SpineLogo size={22} />
          <span style={{ fontFamily: sans, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "-0.02em", color: t.fg }}>Docspine</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          {[
            { label: "Spec", href: "#spec" },
            { label: "CLI", href: "#get-started" },
            { label: "Demo", href: "https://nondualworks.github.io/docspine-demo/", external: true },
            { label: "GitHub", href: "https://github.com/nondualworks/docspine-docs", external: true },
          ].map(item => (
            <a key={item.label} href={item.href} target={item.external ? "_blank" : "_self"} style={{ fontFamily: sans, fontSize: "0.75rem", fontWeight: 500, color: t.fgDim, textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = t.fg} onMouseLeave={e => e.target.style.color = t.fgDim}>{item.label}</a>
          ))}
          <ThemeToggle />
          <div style={{ padding: "0.4rem 0.85rem", background: t.emeraldDim, borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600, color: emerald, fontFamily: mono, letterSpacing: "0.02em" }}>Apache-2.0</div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "8rem 2rem 4rem", position: "relative" }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: `radial-gradient(ellipse, rgba(52,211,153,${t.glowAlpha}) 0%, transparent 70%)`, animation: "pulseGlow 6s ease infinite", pointerEvents: "none" }} />

        <Eyebrow color={emerald}>Open Spec + Reference CLI</Eyebrow>

        <h1 style={{ fontFamily: serif, fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.08, color: t.fg, maxWidth: "800px", marginBottom: "1.5rem", transition: "color 0.35s" }}>
          Your AI is only as good<br />as your docs.
        </h1>

        <p style={{ fontFamily: sans, fontSize: "1.1rem", fontWeight: 300, color: t.fgMuted, maxWidth: "580px", lineHeight: 1.65, marginBottom: "2.5rem", transition: "color 0.35s" }}>
          Docspine prescribes{" "}
          <a href="https://diataxis.fr" target="_blank" style={{ color: diataxisColors.tutorial, textDecoration: "none", borderBottom: `1px solid ${diataxisColors.tutorial}${t.linkBorder}` }}>Diataxis</a>
          {" "}for structure and{" "}
          <a href="https://llmstxt.org" target="_blank" style={{ color: diataxisColors.reference, textDecoration: "none", borderBottom: `1px solid ${diataxisColors.reference}${t.linkBorder}` }}>llms.txt</a>
          {" "}for AI readability — both existing standards. It wraps them in a lightweight contract that works with any doc framework and any CI system.
        </p>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "4rem" }}>
          <a href="#get-started" style={{ display: "inline-flex", alignItems: "center", padding: "0.7rem 1.5rem", background: emerald, color: isDark ? "#0c0c0b" : "#fff", borderRadius: "8px", fontFamily: sans, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", transition: "transform 0.15s, box-shadow 0.15s" }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 4px 20px ${emerald}30`; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>Get Started</a>
          <a href="https://nondualworks.github.io/docspine-demo/" target="_blank" style={{ display: "inline-flex", alignItems: "center", padding: "0.7rem 1.5rem", background: t.bgCard, color: t.fgMuted, border: `1px solid ${t.border}`, borderRadius: "8px", fontFamily: sans, fontSize: "0.82rem", fontWeight: 500, textDecoration: "none", boxShadow: t.shadow, transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={e => { e.target.style.borderColor = t.borderHover; e.target.style.color = t.fg; }}
            onMouseLeave={e => { e.target.style.borderColor = t.border; e.target.style.color = t.fgMuted; }}>View Demo →</a>
        </div>

        {/* Mini bookshelf */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", padding: "1.5rem 2rem", background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "12px", animation: "slideUp 0.8s ease 0.3s backwards", boxShadow: t.shadow, transition: "background 0.35s, border-color 0.35s" }}>
          {spines.map((s, i) => (
            <div key={s.name} onMouseEnter={() => setHoveredSpine(i)} onMouseLeave={() => setHoveredSpine(null)}
              style={{ width: "28px", height: `${s.height * 1.4}px`, borderRadius: "3px 3px 1px 1px", background: hoveredSpine === i ? domainColors[s.domain] : `${domainColors[s.domain]}${t.spineAlpha}`, transition: "all 0.25s ease", transform: hoveredSpine === i ? "translateY(-6px)" : "translateY(0)", cursor: "pointer", position: "relative", boxShadow: hoveredSpine === i ? `0 8px 24px ${domainColors[s.domain]}25` : (isDark ? "none" : "0 1px 2px rgba(0,0,0,0.06)"), display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ writingMode: "vertical-rl", textOrientation: "mixed", fontSize: "0.5rem", fontFamily: mono, fontWeight: 500, color: t.spineText, letterSpacing: "0.03em", whiteSpace: "nowrap", overflow: "hidden", maxHeight: `${s.height * 1.4 - 12}px` }}>{s.name}</span>
              {hoveredSpine === i && (
                <div style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: isDark ? "#1c1917" : "#fff", border: `1px solid ${t.border}`, borderRadius: "6px", padding: "0.4rem 0.65rem", whiteSpace: "nowrap", zIndex: 10, boxShadow: isDark ? "none" : "0 4px 12px rgba(0,0,0,0.08)" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 600, color: t.fg, fontFamily: sans }}>{s.name}</div>
                  <div style={{ fontSize: "0.55rem", color: t.fgDim, fontFamily: mono }}>{s.domain} · {s.docs} pages</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.65rem", color: t.fgSubtle, fontFamily: mono, marginTop: "0.75rem" }}>10 services · 4 domains · one searchable hub</p>
      </section>

      {/* ── Philosophy ── */}
      <section style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <Eyebrow>Philosophy</Eyebrow>
        <h2 style={{ fontFamily: serif, fontSize: "2.2rem", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2, color: t.fg, marginBottom: "1.5rem" }}>We didn't invent anything.</h2>
        <p style={{ fontFamily: sans, fontSize: "0.95rem", fontWeight: 300, color: t.fgMuted, lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "680px" }}>
          <a href="https://diataxis.fr" target="_blank">Diataxis</a> already exists — a proven framework for structuring technical documentation by Daniele Procida.{" "}
          <a href="https://llmstxt.org" target="_blank">llms.txt</a> already exists — a proposal by Jeremy Howard for making websites AI-readable.{" "}
          MkDocs, Starlight, Docusaurus already exist. CI pipelines already exist.
        </p>
        <p style={{ fontFamily: serif, fontSize: "1.35rem", fontWeight: 400, fontStyle: "italic", color: t.fg, lineHeight: 1.6, maxWidth: "620px", borderLeft: `2px solid ${t.quoteBorder}`, paddingLeft: "1.25rem" }}>
          The value is in the composition, not the components.
        </p>
      </section>

      {/* ── The Spec ── */}
      <section id="spec" style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <Eyebrow>The Spec</Eyebrow>
        <h2 style={{ fontFamily: serif, fontSize: "2rem", fontWeight: 500, letterSpacing: "-0.02em", color: t.fg, marginBottom: "2.5rem" }}>Three layers. That's it.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {[
            { num: "01", title: "Structure", desc: "Follow Diataxis: tutorials, how-to guides, reference, explanation. Recommended for new projects. Existing teams bring their docs as-is.", color: diataxisColors.tutorial, link: { text: "diataxis.fr", url: "https://diataxis.fr" } },
            { num: "02", title: "Contract", desc: "Three files: docspine.yaml (manifest), Justfile (build targets), docs-registry.yaml (registry). Framework-agnostic, CI-agnostic.", color: diataxisColors.howto, link: null },
            { num: "03", title: "Aggregator", desc: "Any conforming aggregator produces: a landing page, llms.txt for AI readability, and a search index. One hub for all your services.", color: diataxisColors.reference, link: { text: "llmstxt.org", url: "https://llmstxt.org" } },
          ].map(layer => (
            <div key={layer.num} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "1.75rem", transition: "border-color 0.2s", cursor: "default", boxShadow: t.shadow }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${layer.color}${isDark ? '30' : '50'}`}
              onMouseLeave={e => e.currentTarget.style.borderColor = t.border}>
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ fontFamily: mono, fontSize: "0.65rem", color: layer.color, fontWeight: 500 }}>{layer.num}</span>
              </div>
              <h3 style={{ fontFamily: sans, fontSize: "1.05rem", fontWeight: 600, color: t.fg, letterSpacing: "-0.01em", marginBottom: "0.65rem" }}>{layer.title}</h3>
              <p style={{ fontFamily: sans, fontSize: "0.78rem", fontWeight: 400, color: t.fgDim, lineHeight: 1.6, marginBottom: layer.link ? "0.75rem" : 0 }}>{layer.desc}</p>
              {layer.link && <a href={layer.link.url} target="_blank" style={{ fontFamily: mono, fontSize: "0.65rem", color: layer.color, textDecoration: "none", borderBottom: `1px dashed ${layer.color}50` }}>{layer.link.text} ↗</a>}
            </div>
          ))}
        </div>
      </section>

      {/* ── The CLI ── */}
      <section id="get-started" style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <Eyebrow>The CLI</Eyebrow>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
          <h2 style={{ fontFamily: serif, fontSize: "2rem", fontWeight: 500, letterSpacing: "-0.02em", color: t.fg }}>One binary. Five commands.</h2>
          <span style={{ fontFamily: mono, fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", color: emerald, background: t.emeraldDim, padding: "0.25rem 0.65rem", borderRadius: "4px", whiteSpace: "nowrap" }}>COMING SOON</span>
        </div>
        <p style={{ fontFamily: sans, fontSize: "0.88rem", fontWeight: 300, color: t.fgMuted, lineHeight: 1.65, marginBottom: "2.5rem", maxWidth: "600px" }}>
          The reference implementation. Scaffolds the contract, validates your setup, builds a searchable doc hub, and serves an MCP endpoint for AI-powered doc access from your IDE.
        </p>

        {/* Terminal — always dark */}
        <div style={{ background: t.termBg, border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "#2a2724"}`, borderRadius: "10px", overflow: "hidden" }}>
          <div style={{ padding: "0.65rem 1rem", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", opacity: 0.7 }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fbbf24", opacity: 0.7 }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", opacity: 0.7 }} />
            <span style={{ fontFamily: mono, fontSize: "0.6rem", color: "#57534e", marginLeft: "0.5rem" }}>docspine</span>
          </div>
          <div style={{ padding: "1.25rem 1.5rem", fontFamily: mono, fontSize: "0.72rem", color: "#a8a29e", lineHeight: 1.8 }}>
            <TermLine delay={0.2}>docspine scaffold</TermLine>
            <TermLine delay={0.6} prefix=" "><span style={{ color: "#78716c" }}>? Service name:</span> <span style={{ color: "#f5f5f4" }}>payment-api</span></TermLine>
            <TermLine delay={0.9} prefix=" "><span style={{ color: "#78716c" }}>? Team:</span> <span style={{ color: "#f5f5f4" }}>fintech-core</span></TermLine>
            <TermLine delay={1.2} prefix=" "><span style={{ color: "#78716c" }}>? Framework:</span> <span style={{ color: "#f5f5f4" }}>mkdocs</span></TermLine>
            <TermLine delay={1.5} prefix=" "><span style={{ color: emerald }}>✓</span> mkdocs found (v1.6.1)</TermLine>
            <TermLine delay={1.8} prefix=" "><span style={{ color: emerald }}>✓</span> Created docspine.yaml, Justfile, docs/</TermLine>
            <div style={{ height: "0.75rem" }} />
            <TermLine delay={2.4}>docspine aggregate</TermLine>
            <TermLine delay={2.8} prefix=" "><span style={{ color: emerald }}>✓</span> 10 services built · Pagefind indexed · llms.txt generated</TermLine>
            <div style={{ height: "0.75rem" }} />
            <TermLine delay={3.4}>docspine mcp</TermLine>
            <TermLine delay={3.8} prefix=" "><span style={{ color: emerald }}>✓</span> MCP server ready — query your docs from any IDE</TermLine>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem", marginTop: "1.5rem" }}>
          {[
            { cmd: "scaffold", desc: "Generate contract files" },
            { cmd: "validate", desc: "Check schema" },
            { cmd: "doctor", desc: "Health check" },
            { cmd: "aggregate", desc: "Build the hub" },
            { cmd: "mcp", desc: "AI doc access" },
          ].map(c => (
            <div key={c.cmd} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "8px", padding: "0.75rem", textAlign: "center", boxShadow: t.shadow }}>
              <div style={{ fontFamily: mono, fontSize: "0.68rem", color: emerald, fontWeight: 500, marginBottom: "0.25rem" }}>{c.cmd}</div>
              <div style={{ fontFamily: sans, fontSize: "0.6rem", color: t.fgDim }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <Eyebrow>Why This Matters</Eyebrow>
        <h2 style={{ fontFamily: serif, fontSize: "2rem", fontWeight: 500, letterSpacing: "-0.02em", color: t.fg, marginBottom: "1.5rem" }}>Structured docs → smarter AI</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div style={{ background: t.badBg, border: `1px solid ${t.badBorder}`, borderRadius: "10px", padding: "1.75rem" }}>
            <div style={{ fontFamily: mono, fontSize: "0.6rem", fontWeight: 600, color: "#ef4444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>WITHOUT STRUCTURE</div>
            <div style={{ fontFamily: mono, fontSize: "0.72rem", color: t.fgDim, lineHeight: 1.8 }}>
              <div><span style={{ color: t.fgSubtle }}>→</span> "How do I auth against payment-api?"</div>
              <div style={{ color: t.badColor, marginTop: "0.5rem", fontStyle: "italic" }}>"I found several docs that mention authentication. Here's a general overview based on fragments I could piece together..."</div>
            </div>
          </div>
          <div style={{ background: t.emeraldDim, border: `1px solid ${emerald}18`, borderRadius: "10px", padding: "1.75rem" }}>
            <div style={{ fontFamily: mono, fontSize: "0.6rem", fontWeight: 600, color: emerald, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>WITH DOCSPINE + MCP</div>
            <div style={{ fontFamily: mono, fontSize: "0.72rem", color: t.fgDim, lineHeight: 1.8 }}>
              <div><span style={{ color: t.fgSubtle }}>→</span> "How do I auth against payment-api?"</div>
              <div style={{ color: emerald, marginTop: "0.5rem" }}>"Here's the how-to guide from payment-api/how-to/authentication.md with code examples and the current OAuth2 flow."</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credits ── */}
      <section style={{ padding: "5rem 2rem 3rem", maxWidth: "900px", margin: "0 auto" }}>
        <Eyebrow>Standing on Shoulders</Eyebrow>
        <h2 style={{ fontFamily: serif, fontSize: "1.75rem", fontWeight: 500, letterSpacing: "-0.02em", color: t.fg, marginBottom: "2rem" }}>Docspine composes. It doesn't invent.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            { name: "Diataxis", author: "Daniele Procida", url: "https://diataxis.fr", desc: "The documentation structure framework. Tutorials, how-to guides, reference, explanation.", color: diataxisColors.tutorial },
            { name: "llms.txt", author: "Jeremy Howard", url: "https://llmstxt.org", desc: "A proposal for making websites AI-readable. A table of contents for machines.", color: diataxisColors.reference },
          ].map(credit => (
            <a key={credit.name} href={credit.url} target="_blank" style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: "10px", padding: "1.5rem", textDecoration: "none", transition: "border-color 0.2s", display: "block", boxShadow: t.shadow }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${credit.color}${isDark ? '30' : '50'}`}
              onMouseLeave={e => e.currentTarget.style.borderColor = t.border}>
              <div style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 600, color: t.fg, marginBottom: "0.25rem" }}>{credit.name} <span style={{ color: credit.color, fontSize: "0.75rem" }}>↗</span></div>
              <div style={{ fontFamily: mono, fontSize: "0.6rem", color: credit.color, marginBottom: "0.65rem" }}>by {credit.author}</div>
              <div style={{ fontFamily: sans, fontSize: "0.78rem", color: t.fgDim, lineHeight: 1.55 }}>{credit.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: "3rem 2rem", maxWidth: "900px", margin: "0 auto", borderTop: `1px solid ${t.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <SpineLogo size={16} />
          <span style={{ fontFamily: sans, fontSize: "0.72rem", color: t.fgSubtle }}>Docspine · Apache-2.0 · <a href="https://github.com/nondualworks" target="_blank" style={{ color: t.fgDim }}>Nondual Works</a></span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { text: "Spec", url: "#spec" },
            { text: "Demo", url: "https://nondualworks.github.io/docspine-demo/", external: true },
            { text: "GitHub", url: "https://github.com/nondualworks/docspine-docs", external: true },
          ].map(l => (
            <a key={l.text} href={l.url} target={l.external ? "_blank" : "_self"} style={{ fontFamily: mono, fontSize: "0.65rem", color: t.fgDim, textDecoration: "none" }}>{l.text}</a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default DocspineLanding;
