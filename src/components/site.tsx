import { Link } from "@tanstack/react-router";
import { APP_URL } from "@/lib/site";

export function PhoneMockup({ src, alt, width, small, eager }: { src: string; alt: string; width: number; small?: boolean; eager?: boolean }) {
  return (
    <div className={small ? "phone sm" : "phone"} style={{ width }}>
      <img className="scr" src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
      <div className="island" />
    </div>
  );
}

export function Nav() {
  return (
    <div style={{ background: "var(--dark)", color: "#fff" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="/#top" aria-label="ToyScope home" className="logo" style={{ fontSize: 24 }}>Toy<span>Scope</span></a>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/#showcase">Showcase</a>
          <a href="/#founders">Founders</a>
          <a href="/#faq">FAQ</a>
        </div>
        <a href={APP_URL} className="btn" style={{ background: "#fff", color: "var(--dark)", fontSize: 15, padding: "12px 20px", borderRadius: 12, minHeight: 44 }}>Open the app</a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div style={{ background: "var(--dark)", color: "#8D94A5", padding: "48px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div className="logo" style={{ fontSize: 20 }}>Toy<span>Scope</span></div>
          <div style={{ fontSize: 13 }}>ToyScope is not affiliated with any toy maker or brand. © {new Date().getFullYear()} ToyScope. Website by <a href="https://bluluma.com" style={{ color: "#C9CEDA" }}>Bluluma Design</a></div>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontSize: 14 }}>
          <Link to="/privacy" className="flink">Privacy</Link>
          <Link to="/terms" className="flink">Terms</Link>
          <Link to="/support" className="flink">Support</Link>
          <a href="mailto:hello@toyscope.app" className="flink">hello@toyscope.app</a>
        </div>
      </div>
    </div>
  );
}

export function TextPage({ title }: { title: string }) {
  return (
    <div>
      <Nav />
      <div className="wrap" style={{ padding: "96px 32px", minHeight: "50vh" }}>
        <h1 className="h2">{title}</h1>
        <p style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.55 }}>Coming soon. Questions? <a href="mailto:hello@toyscope.app">hello@toyscope.app</a></p>
      </div>
      <Footer />
    </div>
  );
}
