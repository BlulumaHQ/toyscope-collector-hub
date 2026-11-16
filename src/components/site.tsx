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
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 84 }}>
        <a href="/#top" aria-label="ToyScope home" style={{ display: "flex", alignItems: "center" }}><img className="navlogo" src="/brand/toyscope-logo-white.svg" alt="ToyScope" width={208} height={52} style={{ height: 52, width: "auto", display: "block" }} /></a>
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
          <img src="/brand/toyscope-logo-white.svg" alt="ToyScope" width={128} height={32} style={{ height: 32, width: "auto", display: "block", marginBottom: 6, alignSelf: "flex-start" }} />
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

const APPLE = "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701";
const PLAY = "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z";

export function AppIcon({ size }: { size: number }) {
  return <img className="appicon" src="/brand/toyscope-app-icon.png" alt="ToyScope app icon" width={size} height={size} style={{ width: size, height: size }} />;
}

export function StoreBadges({ icon }: { icon?: number }) {
  return (
    <div className="stores">
      {icon ? <AppIcon size={icon} /> : null}
      <div className="store" aria-label="iPhone app coming soon to the App Store">
        <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d={APPLE} /></svg>
        <div><div className="t1">Coming soon to the</div><div className="t2">App Store</div></div>
        <span className="soon">SOON</span>
      </div>
      <div className="store" aria-label="Android app coming soon to Google Play">
        <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d={PLAY} /></svg>
        <div><div className="t1">Coming soon to</div><div className="t2">Google Play</div></div>
        <span className="soon">SOON</span>
      </div>
    </div>
  );
}
