import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { INSTALL } from "@/lib/i18n-install";
import { StoreBadges } from "@/components/site";

const ic = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
const ICONS = {
  open: <svg {...ic}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg>,
  share: <svg {...ic}><path d="M12 3v12M8 7l4-4 4 4" /><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1" /></svg>,
  dots: <svg {...ic}><circle cx="12" cy="5" r="1.4" fill="currentColor" /><circle cx="12" cy="12" r="1.4" fill="currentColor" /><circle cx="12" cy="19" r="1.4" fill="currentColor" /></svg>,
  add: <svg {...ic}><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M12 8v8M8 12h8" /></svg>,
  check: <svg {...ic}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>,
};
const IOS_ICONS = [ICONS.open, ICONS.share, ICONS.add, ICONS.check];
const AND_ICONS = [ICONS.open, ICONS.dots, ICONS.add, ICONS.check];
const TILES = ["#F4B740", "#5AC8FA", "#34C759", "#FF6B6B", "#AF52DE", "#FF9F0A", "#64D2FF", "#30B0C7", "#FFD60A", "#8E8E93", "#FF375F"];

function HomeScreen({ label }: { label: string }) {
  return (
    <div className="phone" style={{ width: 280 }}>
      <div className="home">
        <div className="home-grid">
          {TILES.slice(0, 6).map((c, i) => <div key={i} className="home-app"><i style={{ background: c }} /><span /></div>)}
          <div className="home-app hl"><img src="/brand/toyscope-app-icon.png" alt="" /><b>{label}</b></div>
          {TILES.slice(6).map((c, i) => <div key={i} className="home-app"><i style={{ background: c }} /><span /></div>)}
        </div>
        <div className="home-dock">{["#34C759", "#5AC8FA", "#FF9F0A", "#8E8E93"].map((c) => <i key={c} style={{ background: c }} />)}</div>
      </div>
      <div className="island" />
    </div>
  );
}

export function InstallSection() {
  const { lang, appUrl } = useI18n();
  const x = INSTALL[lang];
  const [os, setOs] = useState<"ios" | "and">("ios");
  useEffect(() => {
    if (/android/i.test(navigator.userAgent)) setOs("and");
  }, []);
  const steps = os === "ios" ? x.ios : x.and;
  const icons = os === "ios" ? IOS_ICONS : AND_ICONS;
  return (
    <>
      <div id="install" className="install">
        <div className="wrap install-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="eyebrow">{x.eyebrow}</div>
            <h2 className="h2" style={{ margin: 0 }}>{x.h2}</h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 18, lineHeight: 1.55 }}>{x.lead}</p>
            <div className="ostabs" role="tablist">
              <button role="tab" aria-selected={os === "ios"} className={os === "ios" ? "on" : ""} onClick={() => setOs("ios")}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.8-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.5 1.3-.1 1.7-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.2 3-2.5 1-1.4 1.4-2.8 1.4-2.8 0 0-2.6-1-2.6-4.4zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z" /></svg>
                {x.iphone}
              </button>
              <button role="tab" aria-selected={os === "and"} className={os === "and" ? "on" : ""} onClick={() => setOs("and")}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.6 9.5l1.7-3a.4.4 0 0 0-.7-.4l-1.8 3A10.6 10.6 0 0 0 12 8a10.6 10.6 0 0 0-4.8 1.1l-1.8-3a.4.4 0 1 0-.7.4l1.7 3A9.6 9.6 0 0 0 2 17h20a9.6 9.6 0 0 0-4.4-7.5zM7.5 14.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>
                {x.android}
              </button>
            </div>
            <ol className="isteps">
              {steps.map(([t, d], i) => (
                <li key={t}>
                  <div className="ino">{i + 1}</div>
                  <div className="iic">{icons[i]}</div>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </li>
              ))}
            </ol>
            <div className="idone">{x.done}</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={appUrl} className="btn" style={{ background: "var(--blue)", color: "#fff", fontSize: 17, padding: "16px 26px", borderRadius: 14, minHeight: 52 }}>{x.heroCta}</a>
            </div>
          </div>
          <div className="install-side">
            <HomeScreen label={x.homeLabel} />
            <div className="qr">
              <img src="/brand/qr-app.svg" alt="QR code for app.toyscope.app" width={112} height={112} />
              <div><b>{x.qrTitle}</b><p>{x.qrText}</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="testband">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="eyebrow" style={{ color: "var(--gold)" }}>{x.testEyebrow}</div>
              <h2 className="h2" style={{ margin: 0 }}>{x.testH}</h2>
            </div>
            <a href="mailto:support@toyscope.app?subject=ToyScope%20beta%20bug" className="btn" style={{ background: "#fff", color: "var(--dark)", fontSize: 16, padding: "14px 22px", borderRadius: 12, minHeight: 48 }}>{x.testCta}</a>
          </div>
          <div className="three">
            {x.testItems.map(([t, d], i) => (
              <div key={t} className="tcard"><div className="tno">{i + 1}</div><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 28 }}>
            <StoreBadges icon={52} />
            <span style={{ color: "#8D94A5", fontSize: 14 }}>{x.storesNote}</span>
          </div>
        </div>
      </div>
    </>
  );
}
