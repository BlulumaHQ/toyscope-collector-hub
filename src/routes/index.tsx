import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PhoneMockup, StoreBadges, AppIcon } from "@/components/site";
import { SITE_URL } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

const TITLE = "ToyScope — Scan any toy. Know what it's worth.";
const DESC = "Scan any toy to get its original Japanese name, value in every condition and history. Show off your collection and buy from collectors.";
const OG = "https://toyscope.app/brand/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

const col = { display: "flex", flexDirection: "column" } as const;
const lead = { margin: 0, color: "var(--muted)", fontSize: 18, lineHeight: 1.55 } as const;
const card = { background: "#fff", color: "var(--ink)", borderRadius: 16, boxShadow: "0 20px 40px rgba(0,0,0,.35)", position: "absolute" } as const;
const svg = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const shotImgs: [string, string][] = [
  ["scan", "Scan screen with the camera pointed at a Transformers Optimus Prime"],
  ["result", "Scan result screen"],
  ["value", "Value and condition screen"],
  ["showcase", "Showcase feed"],
  ["market", "Marketplace screen"],
  ["item", "Listing detail screen"],
  ["profile", "Collector profile screen"],
];
const listings: [string, string, string, string, string][] = [
  ["t62", "DX Popynica Gatcha Spartan", "DX Popynica Gatcha Spartan", "$1,760", "@retro_rina · Tokyo"],
  ["t73", "Sun Vulcan Godaikin", "Sun Vulcan (Godaikin)", "$935", "@sentai_seoul · Seoul"],
  ["t78", "Vintage Barbie number 3 doll", "Vintage Barbie #3 Doll", "$1,760", "@barbie_vault · Montréal"],
];
const cmpFree = [true, true, true, false, false, false];

function Index() {
  const { t, appUrl } = useI18n();
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      {/* HERO */}
      <div id="top" style={{ background: "var(--dark)", color: "#fff", padding: "56px 0 96px", overflow: "hidden" }}>
        <div className="wrap hero-grid">
          <div style={{ ...col, gap: 24 }}>
            <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, background: "rgba(245,158,11,.14)", color: "var(--gold)", border: "1px solid rgba(245,158,11,.35)", padding: "8px 14px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />{t.hero.spots}
            </div>
            <h1 className="h1">{t.hero.h1a}<br />{t.hero.h1b}</h1>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55, color: "#B7BDCB", maxWidth: 540 }}>{t.hero.lead}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={appUrl} className="btn" style={{ background: "var(--blue)", color: "#fff", fontSize: 17, padding: "16px 26px", borderRadius: 14, minHeight: 52 }}>{t.hero.cta}</a>
              <a href="#how" className="btn" style={{ background: "rgba(255,255,255,.08)", color: "#fff", fontSize: 17, padding: "16px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,.18)", minHeight: 52 }}>{t.hero.see}</a>
            </div>
            <div style={{ ...col, gap: 12, marginTop: 4 }}>
              <StoreBadges icon={56} />
              <div style={{ color: "#8D94A5", fontSize: 14 }}>{t.hero.soon}</div>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: "40px -40px -40px 20px", borderRadius: 32, overflow: "hidden", opacity: 0.35 }}>
              <img src={"/images/shelves/c19.jpg"} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <PhoneMockup width={330} eager src={"/images/app/result.jpg"} alt="ToyScope scan result for a 1978 Popynica Condor Attacker, with its Japanese name" />
            <div style={{ ...card, left: -10, bottom: 60, padding: "14px 16px", width: 210 }}>
              <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>{t.hero.mint}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700 }}>$500–700</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{t.hero.looseComplete}: $180–250</div>
            </div>
            <div style={{ ...card, right: -6, top: 70, padding: "12px 14px" }}>
              <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>{t.hero.origName}</div>
              <div style={{ fontFamily: "var(--font-jp)", fontSize: 15, fontWeight: 700 }}>ポピニカ コンドルアタッカー</div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW */}
      <div id="how" style={{ padding: "96px 0" }}>
        <div className="wrap" style={{ ...col, gap: 48 }}>
          <div style={{ ...col, gap: 12, maxWidth: 640 }}>
            <div className="eyebrow">{t.how.eyebrow}</div>
            <h2 className="h2">{t.how.h2}</h2>
          </div>
          <div className="three">
            <div className="step">
              <img loading="lazy" src={"/images/toys/t08.jpg"} alt="Boxed 1978 Popynica toy photographed for scanning" style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }} />
              <div className="step-body"><div className="n">01</div><h3>{t.how.s1t}</h3><p>{t.how.s1p}</p></div>
            </div>
            <div className="step">
              <div style={{ height: 240, background: "#EEF1F7", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
                <img loading="lazy" src={"/images/app/value.jpg"} alt="ToyScope result screen showing the toy's details" style={{ width: 230, borderRadius: "22px 22px 0 0", display: "block", boxShadow: "0 10px 30px rgba(18,20,26,.15)" }} />
              </div>
              <div className="step-body"><div className="n">02</div><h3>{t.how.s2t}</h3><p>{t.how.s2p}</p></div>
            </div>
            <div className="step">
              <div style={{ height: 240, background: "var(--dark)", padding: 22, boxSizing: "border-box", ...col, justifyContent: "center", gap: 8, color: "#fff" }}>
                <div className="vrow"><span>{t.how.broken}</span><span>$40–70</span></div>
                <div className="vrow"><span>{t.how.looseGood}</span><span>$120–180</span></div>
                <div className="vrow"><span>{t.how.looseComplete}</span><span>$180–250</span></div>
                <div className="vrow" style={{ fontSize: 15, color: "#fff", fontWeight: 700, background: "rgba(56,81,163,.45)", margin: "0 -10px", padding: "6px 10px", borderRadius: 8 }}><span>{t.how.boxedYours}</span><span>$250–450</span></div>
                <div className="vrow"><span>{t.how.mint}</span><span>$500–700</span></div>
              </div>
              <div className="step-body"><div className="n">03</div><h3>{t.how.s3t}</h3><p>{t.how.s3p}</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* INSIDE */}
      <div style={{ background: "#E9ECF3", padding: "96px 0 72px", overflow: "hidden" }}>
        <div className="wrap" style={{ ...col, gap: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <div style={{ ...col, gap: 12, maxWidth: 640 }}>
              <div className="eyebrow">{t.inside.eyebrow}</div>
              <h2 className="h2">{t.inside.h2}</h2>
            </div>
            <div style={{ color: "var(--muted)", fontSize: 14 }}>{t.inside.swipe}</div>
          </div>
          <div className="screens">
            {shotImgs.map(([img, alt], i) => (
              <div className="shot" key={img}>
                <div style={{ ...col, gap: 6 }}><h3>{t.inside.shots[i]?.[0]}</h3><p>{t.inside.shots[i]?.[1]}</p></div>
                <PhoneMockup small width={250} src={`/images/app/${img}.jpg`} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT YOU GET */}
      <div style={{ background: "#fff", padding: "96px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap two">
          <div style={{ ...col, gap: 28 }}>
            <div style={{ ...col, gap: 12 }}>
              <div className="eyebrow">{t.built.eyebrow}</div>
              <h2 className="h2">{t.built.h2}</h2>
            </div>
            <div style={{ ...col, gap: 20 }}>
              <div className="feat"><div className="ico" style={{ fontFamily: "var(--font-jp)", fontWeight: 700 }}>あ</div><div><h3>{t.built.f1t}</h3><p>{t.built.f1p}</p></div></div>
              <div className="feat"><div className="ico"><svg {...svg}><path d="M12 8v4l3 2" /><circle cx="12" cy="12" r="9" /></svg></div><div><h3>{t.built.f2t}</h3><p>{t.built.f2p}</p></div></div>
              <div className="feat"><div className="ico"><svg {...svg}><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg></div><div><h3>{t.built.f3t}</h3><p>{t.built.f3p}</p></div></div>
              <div className="feat"><div className="ico"><svg {...svg}><path d="M4 7h16M4 12h16M4 17h10" /></svg></div><div><h3>{t.built.f4t}</h3><p>{t.built.f4p}</p></div></div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PhoneMockup width={320} src={"/images/app/value.jpg"} alt="ToyScope value screen with condition, confidence and missing accessories" />
          </div>
        </div>
      </div>

      {/* SHOWCASE */}
      <div id="showcase" style={{ padding: "96px 0" }}>
        <div className="wrap" style={{ ...col, gap: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <div style={{ ...col, gap: 12, maxWidth: 640 }}>
              <div className="eyebrow">{t.showcase.eyebrow}</div>
              <h2 className="h2">{t.showcase.h2}</h2>
              <p style={lead}>{t.showcase.p}</p>
            </div>
            <a href={appUrl} style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "none", fontSize: 16, minHeight: 44, display: "inline-flex", alignItems: "center" }}>{t.showcase.browse}</a>
          </div>
          <div className="gallery">
            <div className="g-tall"><img loading="lazy" src={"/images/shelves/c19.jpg"} alt="A shelf of Gatchaman toys" /><span className="pill" style={{ left: 12, bottom: 12, background: "rgba(0,0,0,.6)", fontWeight: 600, padding: "5px 10px" }}>@sonykun · {t.showcase.notForSale}</span></div>
            <div className="g-wide"><img loading="lazy" src={"/images/shelves/c04.jpg"} alt="Metal Hero bikes and a Space Sheriff base" /></div>
            <div><img loading="lazy" src={"/images/shelves/c07.jpg"} alt="Capsule Chogokin and Sentai figures" /></div>
            <div><img loading="lazy" src={"/images/shelves/c01.jpg"} alt="VF-1S and Jetfire side by side" /></div>
            <div><img loading="lazy" src={"/images/shelves/c11.jpg"} alt="Bioman base, Battle Fever and Goranger" /><span className="pill" style={{ left: 12, bottom: 12, background: "var(--gold-d)", padding: "5px 10px" }}>{t.showcase.offers}</span></div>
            <div className="g-wide"><img loading="lazy" src={"/images/shelves/c17.jpg"} alt="Voltron and the Power Rangers Command Center" /></div>
            <div><img loading="lazy" src={"/images/shelves/c10.jpg"} alt="Mazinger Z and Great Mazinger" /></div>
            <div><img loading="lazy" src={"/images/shelves/c20.jpg"} alt="Popynica boxes and the Skytank" /></div>
          </div>
        </div>
      </div>

      {/* MARKETPLACE */}
      <div style={{ background: "#fff", padding: "96px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ ...col, gap: 40 }}>
          <div style={{ ...col, gap: 12, maxWidth: 680 }}>
            <div className="eyebrow">{t.market.eyebrow}</div>
            <h2 className="h2">{t.market.h2}</h2>
            <p style={lead}>{t.market.p}</p>
          </div>
          <div className="listings">
            {listings.map(([img, alt, name, price, who]) => (
              <div className="listing" key={img}>
                <div style={{ position: "relative" }}><img loading="lazy" src={`/images/toys/${img}.jpg`} alt={alt} /><span className="pill" style={{ left: 12, top: 12, background: "#16A34A" }}>{t.market.forSale}</span></div>
                <div style={{ padding: "16px 18px", ...col, gap: 4 }}>
                  <div style={{ fontWeight: 600 }}>{name}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700 }}>{price}</div>
                  <div style={{ color: "var(--muted)", fontSize: 13 }}>{who}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOUNDERS */}
      <div id="founders" style={{ background: "var(--dark)", color: "#fff", padding: "104px 0" }}>
        <div className="wrap" style={{ ...col, gap: 48 }}>
          <div style={{ ...col, gap: 12, maxWidth: 720 }}>
            <div className="eyebrow" style={{ color: "var(--gold)" }}>{t.founders.eyebrow}</div>
            <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.05 }}>{t.founders.h2}</h2>
            <p style={{ ...lead, color: "#B7BDCB" }}>{t.founders.p}</p>
          </div>
          <div className="three">
            <div className="tier" style={{ background: "linear-gradient(180deg, #2A2210, #17140C)", border: "1px solid rgba(251,191,36,.45)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="badge" style={{ background: "#FEF3C7", color: "#92400E" }}>{t.founders.t1badge}</span><span style={{ color: "var(--gold)", fontWeight: 700, fontSize: 14 }}>{t.founders.t1left}</span></div>
              <div className="big">{t.founders.t1big}</div>
              <p style={{ color: "#D6CDB4" }}>{t.founders.t1p}</p>
              <div className="bar"><div style={{ width: "10%", background: "var(--gold)" }} /></div>
            </div>
            <div className="tier" style={{ background: "#161A24", border: "1px solid rgba(142,162,221,.45)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="badge" style={{ background: "#E0E7FF", color: "#3730A3" }}>{t.founders.t2badge}</span><span style={{ color: "#9DB0FF", fontWeight: 700, fontSize: 14 }}>{t.founders.t2left}</span></div>
              <div className="big">{t.founders.t2big}</div>
              <p style={{ color: "#B7BDCB" }}>{t.founders.t2p}</p>
              <div className="bar"><div style={{ width: "0%", background: "var(--blue-l)" }} /></div>
            </div>
            <div className="tier" style={{ background: "#12151D", border: "1px solid rgba(255,255,255,.12)" }}>
              <div style={{ display: "flex" }}><span className="badge" style={{ background: "rgba(255,255,255,.1)", color: "#C9CEDA" }}>{t.founders.t3badge}</span></div>
              <div className="big">{t.founders.t3big}</div>
              <p style={{ color: "#B7BDCB" }}>{t.founders.t3p}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href={appUrl} className="btn" style={{ background: "var(--gold)", color: "#1A1406", fontWeight: 700, fontSize: 17, padding: "16px 28px", borderRadius: 14, minHeight: 52 }}>{t.founders.cta}</a>
            <span style={{ color: "#8D94A5", fontSize: 14 }}>{t.founders.note}</span>
          </div>
        </div>
      </div>

      {/* FREE VS PRO */}
      <div style={{ padding: "96px 0" }}>
        <div className="wrap" style={{ ...col, gap: 32 }}>
          <h2 className="h2" style={{ fontSize: 40, lineHeight: 1.2 }}>{t.cmp.h2}</h2>
          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 22, overflow: "hidden" }}>
            <div className="cmp" style={{ background: "var(--page)", fontWeight: 700, fontSize: 14, borderBottom: "1px solid var(--line)" }}><div /><div>{t.cmp.free}</div><div style={{ color: "var(--blue)" }}>{t.cmp.pro}</div></div>
            {t.cmp.rows.map((f, i) => (
              <div className="cmp" key={i}><div>{f}</div>{cmpFree[i] ? <div>✓</div> : <div className="no">—</div>}<div>{i === 3 ? t.cmp.upTo30 : "✓"}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" style={{ background: "#fff", padding: "96px 0", borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ ...col, gap: 36 }}>
          <h2 className="h2" style={{ fontSize: 40, lineHeight: 1.2 }}>{t.faq.h2}</h2>
          <div className="faq">
            {t.faq.items.map(([q, a]) => (<div key={q}><h3>{q}</h3><p>{a}</p></div>))}
          </div>
        </div>
      </div>

      {/* GET THE APP */}
      <div id="app" style={{ background: "var(--dark)", color: "#fff", padding: "88px 0" }}>
        <div className="wrap getapp">
          <AppIcon size={168} />
          <div style={{ ...col, gap: 16 }}>
            <div className="eyebrow" style={{ color: "var(--blue-l)" }}>{t.app.eyebrow}</div>
            <h2 className="h2" style={{ margin: 0 }}>{t.app.h2}</h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: "#B7BDCB", maxWidth: 620 }}>{t.app.p1}<a href={appUrl} style={{ color: "#fff", fontWeight: 600 }}>app.toyscope.app</a>{t.app.p2}</p>
            <StoreBadges />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "var(--blue)", color: "#fff", padding: "80px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ ...col, gap: 10, maxWidth: 620 }}>
            <h2 className="h2" style={{ lineHeight: 1.05 }}>{t.cta.h2}</h2>
            <p style={{ margin: 0, fontSize: 18, color: "#DCE2F4" }}>{t.cta.p}</p>
          </div>
          <a href={appUrl} className="btn" style={{ background: "#fff", color: "var(--blue)", fontWeight: 700, fontSize: 17, padding: "16px 28px", borderRadius: 14, minHeight: 52 }}>{t.cta.btn}</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
