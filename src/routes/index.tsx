import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PhoneMockup, StoreBadges, AppIcon } from "@/components/site";
import { APP_URL, SITE_URL } from "@/lib/site";

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

const shots: [string, string, string, string][] = [
  ["Point and scan", "Full-screen camera. Add the back, the box or the foot stamp for a sharper match.", "scan", "Scan screen with the camera pointed at a Transformers Optimus Prime"],
  ["Know what it is", "Name, maker, year and the original Japanese name, in about seven seconds.", "result", "Scan result screen"],
  ["See what it’s worth", "A value for its condition, how sure the match is, and what’s missing.", "value", "Value and condition screen"],
  ["Show off your shelf", "The Showcase feed: collections from collectors around the world.", "showcase", "Showcase feed"],
  ["Shop the Marketplace", "Search, filter and sort toys for sale. Trending finds up top.", "market", "Marketplace screen"],
  ["Message the seller", "Scan estimate beside the asking price. Contact in the app, email hidden.", "item", "Listing detail screen"],
  ["Follow collectors", "Profiles with their cabinets, what they collect and what they sell.", "profile", "Collector profile screen"],
];
const listings: [string, string, string, string, string][] = [
  ["t62", "DX Popynica Gatcha Spartan", "DX Popynica Gatcha Spartan", "$1,760", "@retro_rina · Tokyo"],
  ["t73", "Sun Vulcan Godaikin", "Sun Vulcan (Godaikin)", "$935", "@sentai_seoul · Seoul"],
  ["t78", "Vintage Barbie number 3 doll", "Vintage Barbie #3 Doll", "$1,760", "@barbie_vault · Montréal"],
];
const cmp: [string, boolean, string][] = [
  ["Browse Showcase and Marketplace", true, "✓"],
  ["Message sellers and make offers", true, "✓"],
  ["Save toys and follow collectors", true, "✓"],
  ["Scan toys: name, value, history", false, "✓ up to 30 a day"],
  ["Share to Showcase", false, "✓"],
  ["List toys for sale", false, "✓"],
];
const faqs = [
  ["What kinds of toys does it know?", "Vintage and modern collectibles: Japanese robots and Chogokin, Super Sentai, Kenner Star Wars, G.I. Joe, Transformers, Gunpla, soft vinyl, Barbie, Hot Wheels and more."],
  ["How accurate are the prices?", "They’re AI estimates from your photos and recent market prices: a guide, not an offer. For rare pieces, get an expert to authenticate before you buy or sell."],
  ["Does ToyScope handle payment?", "No. Buyers and sellers agree on payment and pickup or shipping between themselves. Your email is never shown to other collectors."],
  ["When will the iPhone and Android apps launch?", "We’re finishing them now. Until they launch, ToyScope works in your phone’s browser: open app.toyscope.app and add it to your home screen."],
  ["Is my Founder deal really for life?", "Yes. Founders #1–20 keep Pro free for as long as ToyScope runs, after adding 5 toys in their first 30 days. Founding members keep their $19.99 price as long as they stay subscribed."],
  ["Who can join?", "Anyone 13 or older. Selling and messaging sellers are for members 18 and older."],
];

function Index() {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      {/* HERO */}
      <div id="top" style={{ background: "var(--dark)", color: "#fff", padding: "56px 0 96px", overflow: "hidden" }}>
        <div className="wrap hero-grid">
          <div style={{ ...col, gap: 24 }}>
            <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, background: "rgba(245,158,11,.14)", color: "var(--gold)", border: "1px solid rgba(245,158,11,.35)", padding: "8px 14px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />18 of 20 lifetime Founder spots left
            </div>
            <h1 className="h1">Scan any toy.<br />Know what it is, what it’s worth, and where it came from.</h1>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55, color: "#B7BDCB", maxWidth: 540 }}>Point your camera at a vintage robot, a carded figure or a boxed Chogokin. ToyScope gives you its original Japanese name, a value for every condition, its history, and a collector community to show it off or sell it.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={APP_URL} className="btn" style={{ background: "var(--blue)", color: "#fff", fontSize: 17, padding: "16px 26px", borderRadius: 14, minHeight: 52 }}>Join free — claim your Founder spot</a>
              <a href="#how" className="btn" style={{ background: "rgba(255,255,255,.08)", color: "#fff", fontSize: 17, padding: "16px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,.18)", minHeight: 52 }}>See how it works</a>
            </div>
            <div style={{ ...col, gap: 12, marginTop: 4 }}>
              <StoreBadges icon={56} />
              <div style={{ color: "#8D94A5", fontSize: 14 }}>iPhone and Android apps are coming soon. Use ToyScope in your phone’s browser today.</div>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: "40px -40px -40px 20px", borderRadius: 32, overflow: "hidden", opacity: 0.35 }}>
              <img src={"/images/shelves/c19.jpg"} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <PhoneMockup width={330} eager src={"/images/app/result.jpg"} alt="ToyScope scan result for a 1978 Popynica Condor Attacker, with its Japanese name" />
            <div style={{ ...card, left: -10, bottom: 60, padding: "14px 16px", width: 210 }}>
              <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>Mint in box</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700 }}>$500–700</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>Loose, complete: $180–250</div>
            </div>
            <div style={{ ...card, right: -6, top: 70, padding: "12px 14px" }}>
              <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600 }}>Original name</div>
              <div style={{ fontFamily: "var(--font-jp)", fontSize: 15, fontWeight: 700 }}>ポピニカ コンドルアタッカー</div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW */}
      <div id="how" style={{ padding: "96px 0" }}>
        <div className="wrap" style={{ ...col, gap: 48 }}>
          <div style={{ ...col, gap: 12, maxWidth: 640 }}>
            <div className="eyebrow">How it works</div>
            <h2 className="h2">Three taps from “what is this?” to “what’s it worth?”</h2>
          </div>
          <div className="three">
            <div className="step">
              <img loading="lazy" src={"/images/toys/t08.jpg"} alt="Boxed 1978 Popynica toy photographed for scanning" style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }} />
              <div className="step-body"><div className="n">01</div><h3>Snap a photo</h3><p>Open the camera and shoot the toy, the box or the stamp on its foot. Add more angles for a sharper answer.</p></div>
            </div>
            <div className="step">
              <div style={{ height: 240, background: "#EEF1F7", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
                <img loading="lazy" src={"/images/app/value.jpg"} alt="ToyScope result screen showing the toy's details" style={{ width: 230, borderRadius: "22px 22px 0 0", display: "block", boxShadow: "0 10px 30px rgba(18,20,26,.15)" }} />
              </div>
              <div className="step-body"><div className="n">02</div><h3>Know exactly what it is</h3><p>Name, maker, series and year, plus the original Japanese name you can copy and search on Yahoo Auctions or Mercari.</p></div>
            </div>
            <div className="step">
              <div style={{ height: 240, background: "var(--dark)", padding: 22, boxSizing: "border-box", ...col, justifyContent: "center", gap: 8, color: "#fff" }}>
                <div className="vrow"><span>Broken / parts</span><span>$40–70</span></div>
                <div className="vrow"><span>Loose, good</span><span>$120–180</span></div>
                <div className="vrow"><span>Loose, complete</span><span>$180–250</span></div>
                <div className="vrow" style={{ fontSize: 15, color: "#fff", fontWeight: 700, background: "rgba(56,81,163,.45)", margin: "0 -10px", padding: "6px 10px", borderRadius: 8 }}><span>Boxed, opened · yours</span><span>$250–450</span></div>
                <div className="vrow"><span>Mint in box</span><span>$500–700</span></div>
              </div>
              <div className="step-body"><div className="n">03</div><h3>See its value in every condition</h3><p>Not one vague number: a price range for each condition, so you know what a box or a missing missile is worth.</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* INSIDE */}
      <div style={{ background: "#E9ECF3", padding: "96px 0 72px", overflow: "hidden" }}>
        <div className="wrap" style={{ ...col, gap: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <div style={{ ...col, gap: 12, maxWidth: 640 }}>
              <div className="eyebrow">Inside the app</div>
              <h2 className="h2">Everything a collector needs, in one app</h2>
            </div>
            <div style={{ color: "var(--muted)", fontSize: 14 }}>Swipe to see more →</div>
          </div>
          <div className="screens">
            {shots.map(([t, d, img, alt]) => (
              <div className="shot" key={img}>
                <div style={{ ...col, gap: 6 }}><h3>{t}</h3><p>{d}</p></div>
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
              <div className="eyebrow">Built for collectors</div>
              <h2 className="h2">More than a price tag</h2>
            </div>
            <div style={{ ...col, gap: 20 }}>
              <div className="feat"><div className="ico" style={{ fontFamily: "var(--font-jp)", fontWeight: 700 }}>あ</div><div><h3>Original names in Japanese</h3><p>The name it was sold under in Japan, ready to copy, so you can find it in Japanese shops and auctions.</p></div></div>
              <div className="feat"><div className="ico"><svg {...svg}><path d="M12 8v4l3 2" /><circle cx="12" cy="12" r="9" /></svg></div><div><h3>Its history</h3><p>Which show it came from, which line it belongs to, and what makes this release different from the reissue.</p></div></div>
              <div className="feat"><div className="ico"><svg {...svg}><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg></div><div><h3>Original or reproduction?</h3><p>Signs to check before you buy, and a warning on grails that are often faked.</p></div></div>
              <div className="feat"><div className="ico"><svg {...svg}><path d="M4 7h16M4 12h16M4 17h10" /></svg></div><div><h3>What’s missing</h3><p>The missiles, stickers and inserts it came with, so you know what a complete one looks like.</p></div></div>
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
              <div className="eyebrow">Showcase</div>
              <h2 className="h2">Show off the shelf you spent years building</h2>
              <p style={lead}>Not selling? Share your collection anyway. Collectors follow, like and comment. Turn on “Open to offers” if the right price might change your mind.</p>
            </div>
            <a href={APP_URL} style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "none", fontSize: 16, minHeight: 44, display: "inline-flex", alignItems: "center" }}>Browse the Showcase →</a>
          </div>
          <div className="gallery">
            <div className="g-tall"><img loading="lazy" src={"/images/shelves/c19.jpg"} alt="A shelf of Gatchaman toys" /><span className="pill" style={{ left: 12, bottom: 12, background: "rgba(0,0,0,.6)", fontWeight: 600, padding: "5px 10px" }}>@sonykun · Not for sale</span></div>
            <div className="g-wide"><img loading="lazy" src={"/images/shelves/c04.jpg"} alt="Metal Hero bikes and a Space Sheriff base" /></div>
            <div><img loading="lazy" src={"/images/shelves/c07.jpg"} alt="Capsule Chogokin and Sentai figures" /></div>
            <div><img loading="lazy" src={"/images/shelves/c01.jpg"} alt="VF-1S and Jetfire side by side" /></div>
            <div><img loading="lazy" src={"/images/shelves/c11.jpg"} alt="Bioman base, Battle Fever and Goranger" /><span className="pill" style={{ left: 12, bottom: 12, background: "var(--gold-d)", padding: "5px 10px" }}>Open to offers</span></div>
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
            <div className="eyebrow">Marketplace</div>
            <h2 className="h2">Buy from collectors who know what they have</h2>
            <p style={lead}>Every listing starts with a scan, so you see the scan estimate next to the asking price. Message the seller in the app; your email stays private.</p>
          </div>
          <div className="listings">
            {listings.map(([img, alt, name, price, who]) => (
              <div className="listing" key={img}>
                <div style={{ position: "relative" }}><img loading="lazy" src={`/images/toys/${img}.jpg`} alt={alt} /><span className="pill" style={{ left: 12, top: 12, background: "#16A34A" }}>For sale</span></div>
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
            <div className="eyebrow" style={{ color: "var(--gold)" }}>Founding members</div>
            <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.05 }}>Get in early. Keep your number forever.</h2>
            <p style={{ ...lead, color: "#B7BDCB" }}>Every early member gets a numbered badge on their profile. The earlier you join, the better your deal.</p>
          </div>
          <div className="three">
            <div className="tier" style={{ background: "linear-gradient(180deg, #2A2210, #17140C)", border: "1px solid rgba(251,191,36,.45)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="badge" style={{ background: "#FEF3C7", color: "#92400E" }}>Founder #1–20</span><span style={{ color: "var(--gold)", fontWeight: 700, fontSize: 14 }}>18 left</span></div>
              <div className="big">Pro free for life</div>
              <p style={{ color: "#D6CDB4" }}>Unlimited scanning and selling, never a bill. Keep it by adding 5 toys to your collection in your first 30 days.</p>
              <div className="bar"><div style={{ width: "10%", background: "var(--gold)" }} /></div>
            </div>
            <div className="tier" style={{ background: "#161A24", border: "1px solid rgba(142,162,221,.45)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="badge" style={{ background: "#E0E7FF", color: "#3730A3" }}>Founding #21–200</span><span style={{ color: "#9DB0FF", fontWeight: 700, fontSize: 14 }}>180 left</span></div>
              <div className="big">6 months free</div>
              <p style={{ color: "#B7BDCB" }}>Then $19.99 a year, locked for as long as you stay. That’s half the regular price, for good.</p>
              <div className="bar"><div style={{ width: "0%", background: "var(--blue-l)" }} /></div>
            </div>
            <div className="tier" style={{ background: "#12151D", border: "1px solid rgba(255,255,255,.12)" }}>
              <div style={{ display: "flex" }}><span className="badge" style={{ background: "rgba(255,255,255,.1)", color: "#C9CEDA" }}>Everyone after</span></div>
              <div className="big">7-day free trial</div>
              <p style={{ color: "#B7BDCB" }}>Then $39.99 a year for Pro. Browsing, saving and messaging sellers stay free.</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href={APP_URL} className="btn" style={{ background: "var(--gold)", color: "#1A1406", fontWeight: 700, fontSize: 17, padding: "16px 28px", borderRadius: 14, minHeight: 52 }}>Claim my Founder number</a>
            <span style={{ color: "#8D94A5", fontSize: 14 }}>Sign up with your email. No password, no card.</span>
          </div>
        </div>
      </div>

      {/* FREE VS PRO */}
      <div style={{ padding: "96px 0" }}>
        <div className="wrap" style={{ ...col, gap: 32 }}>
          <h2 className="h2" style={{ fontSize: 40, lineHeight: 1.2 }}>Free to browse. Pro to scan and sell.</h2>
          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 22, overflow: "hidden" }}>
            <div className="cmp" style={{ background: "var(--page)", fontWeight: 700, fontSize: 14, borderBottom: "1px solid var(--line)" }}><div /><div>Free</div><div style={{ color: "var(--blue)" }}>Pro</div></div>
            {cmp.map(([f, free, pro]) => (
              <div className="cmp" key={f}><div>{f}</div>{free ? <div>✓</div> : <div className="no">—</div>}<div>{pro}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" style={{ background: "#fff", padding: "96px 0", borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ ...col, gap: 36 }}>
          <h2 className="h2" style={{ fontSize: 40, lineHeight: 1.2 }}>Questions</h2>
          <div className="faq">
            {faqs.map(([q, a]) => (<div key={q}><h3>{q}</h3><p>{a}</p></div>))}
          </div>
        </div>
      </div>

      {/* GET THE APP */}
      <div id="app" style={{ background: "var(--dark)", color: "#fff", padding: "88px 0" }}>
        <div className="wrap getapp">
          <AppIcon size={168} />
          <div style={{ ...col, gap: 16 }}>
            <div className="eyebrow" style={{ color: "var(--blue-l)" }}>The ToyScope app</div>
            <h2 className="h2" style={{ margin: 0 }}>Coming soon to iPhone and Android</h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, color: "#B7BDCB", maxWidth: 620 }}>Look for this icon on the App Store and Google Play. The apps aren’t out yet. Until they are, open <a href={APP_URL} style={{ color: "#fff", fontWeight: 600 }}>app.toyscope.app</a> on your phone and add it to your home screen.</p>
            <StoreBadges />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "var(--blue)", color: "#fff", padding: "80px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ ...col, gap: 10, maxWidth: 620 }}>
            <h2 className="h2" style={{ lineHeight: 1.05 }}>What’s on your shelf worth?</h2>
            <p style={{ margin: 0, fontSize: 18, color: "#DCE2F4" }}>Find out in seconds, and claim your Founder number while there are spots left.</p>
          </div>
          <a href={APP_URL} className="btn" style={{ background: "#fff", color: "var(--blue)", fontWeight: 700, fontSize: 17, padding: "16px 28px", borderRadius: 14, minHeight: 52 }}>Start scanning — free</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
