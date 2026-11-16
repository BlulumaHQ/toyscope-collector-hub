# ToyScope Collector Hub

Build the marketing landing page for ToyScope at toyscope.app. Recreate the reference design below EXACTLY: same sections, order, copy, colors, fonts, spacing, images and responsive behavior. Do not add, remove or rewrite copy.

Stack: React + Vite + Tailwind (static site, no backend, no auth, no database). Single page "/" plus three simple text pages:
- /privacy, /terms, /support: same nav and footer, a title, and a short placeholder paragraph "Coming soon. Questions? hello@toyscope.app". (Real legal text will be pasted later.)

Design tokens (from the reference):
- Fonts (Google Fonts): Space Grotesk 500/600/700 for headings and logo, Inter 400–700 for body, Noto Sans JP 500/700 for Japanese text.
- Colors: page #F5F6F8, ink #12141A, muted #596070, borders #E4E7EE, dark sections #0D1017, brand blue #2E4FE8 (light blue #6E8BFF on dark), Founder gold #FBBF24 / #F59E0B, Founding badge #E0E7FF/#3730A3, Founder badge #FEF3C7/#92400E.
- Content max-width 1200px, 32px side padding (20px on phones).

Must keep:
- The iPhone mockups: tall phone frames (aspect ratio 393/852, radius ~54px, dark bezel, small dynamic-island pill) with the screenshot filling the screen (object-fit cover, top aligned). Make this a reusable PhoneMockup component.
- "Inside the app" section: horizontal scroll-snap row of 7 phones with a title + one line above each, App Store style; scrolls sideways on desktop and mobile.
- Showcase gallery grid (4 columns, tall/wide tiles; 2 columns on phones).
- Founders section with the three tier cards and progress bars.
- Free vs Pro comparison table, FAQ (2 columns, 1 on phones), final blue CTA, footer.
- At <=900px: hero and two-column sections stack, 3-column grids become 1 column, nav links hide (keep logo + "Open the app" button), headings scale down (h1 44px, h2 34px).
- Anchor links in the nav scroll smoothly to #how, #showcase, #founders, #faq.
- All "Open the app" / "Join free" / "Claim my Founder number" / "Start scanning" buttons link to https://app.toyscope.app
- Footer Privacy/Terms/Support links use internal routes (/privacy, /terms, /support), not full URLs.
- Images: use the exact https://app.toyscope.app/... URLs from the reference for now (they are public). Use loading="lazy" except the hero.
- Accessibility: real <a>/<button>, alt text as in the reference, 44px min touch targets.
- SEO: <title>ToyScope — Scan any toy. Know what it's worth.</title>, meta description "Scan any toy to get its original Japanese name, value in every condition and history. Show off your collection and buy from collectors.", Open Graph title/description/image (use https://app.toyscope.app/landing/t-result.jpg), favicon from https://app.toyscope.app/icon-192.png.

Reference design (HTML with inline styles; the <helmet> block holds the fonts and the responsive CSS):

<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Space+Grotesk:wght@500;600;700&amp;family=Noto+Sans+JP:wght@500;700&amp;display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F5F6F8}
a{color:#2E4FE8}a:hover{color:#1E3BC2}
.wrap{max-width:1200px;margin:0 auto;padding:0 32px;box-sizing:border-box}
.hero-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:56px;align-items:center}
.three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:48px;align-items:center}
.gallery{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-rows:220px;gap:12px}
.g-tall{grid-row:span 2}
.g-wide{grid-column:span 2}
.listings{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.nav-links{display:flex;gap:28px;align-items:center}
.faq{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 48px}
.phone{position:relative;flex:none;aspect-ratio:393/852;border-radius:54px;background:#0B0C10;padding:11px;box-sizing:border-box;box-shadow:0 0 0 1.5px #3A3F4B inset,0 30px 70px rgba(13,16,23,.35)}
.phone img.scr{width:100%;height:100%;object-fit:cover;object-position:top;border-radius:44px;display:block}
.island{position:absolute;top:22px;left:50%;transform:translateX(-50%);width:30%;height:26px;border-radius:20px;background:#000}
.screens{display:flex;gap:28px;overflow-x:auto;scroll-snap-type:x mandatory;padding:8px 32px 28px;margin:0 -32px}
.shot{flex:none;width:250px;display:flex;flex-direction:column;gap:18px;scroll-snap-align:start}
.cmp{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)}
@media (max-width:900px){
.hero-grid,.two{grid-template-columns:minmax(0,1fr);gap:40px}
.three,.listings,.faq{grid-template-columns:minmax(0,1fr)}
.gallery{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:160px}
.nav-links{display:none}
.wrap{padding:0 20px}
.h1{font-size:44px!important}
.h2{font-size:34px!important}
}
</style>
</helmet>
<div style="font-family: Inter, system-ui, sans-serif; color: #12141A; background: #F5F6F8; width: 100%">

<!-- NAV -->
<div style="background: #0D1017; color: #fff">
<div class="wrap" style="display: flex; align-items: center; justify-content: space-between; height: 72px">
<a href="#top" aria-label="ToyScope home" style="text-decoration: none; font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 24px; color: #fff; letter-spacing: -0.02em">Toy<span style="color: #6E8BFF">Scope</span></a>
<div class="nav-links">
<a href="#how" style="color: #C9CEDA; text-decoration: none; font-size: 15px; font-weight: 500">How it works</a>
<a href="#showcase" style="color: #C9CEDA; text-decoration: none; font-size: 15px; font-weight: 500">Showcase</a>
<a href="#founders" style="color: #C9CEDA; text-decoration: none; font-size: 15px; font-weight: 500">Founders</a>
<a href="#faq" style="color: #C9CEDA; text-decoration: none; font-size: 15px; font-weight: 500">FAQ</a>
</div>
<a href="https://app.toyscope.app" style="background: #fff; color: #0D1017; text-decoration: none; font-weight: 600; font-size: 15px; padding: 12px 20px; border-radius: 12px; min-height: 44px; box-sizing: border-box; display: inline-flex; align-items: center">Open the app</a>
</div>
</div>

<!-- HERO -->
<div id="top" style="background: #0D1017; color: #fff; padding: 56px 0 96px; overflow: hidden">
<div class="wrap hero-grid">
<div style="display: flex; flex-direction: column; gap: 24px">
<div style="display: inline-flex; align-self: flex-start; align-items: center; gap: 10px; background: rgba(245,158,11,.14); color: #FBBF24; border: 1px solid rgba(245,158,11,.35); padding: 8px 14px; border-radius: 999px; font-size: 14px; font-weight: 600">
<span style="width: 8px; height: 8px; border-radius: 50%; background: #FBBF24"></span>18 of 20 lifetime Founder spots left
</div>
<h1 class="h1" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 64px; line-height: 1.02; letter-spacing: -0.03em; font-weight: 700">Scan any toy.<br>Know what it is, what it’s worth, and where it came from.</h1>
<p style="margin: 0; font-size: 19px; line-height: 1.55; color: #B7BDCB; max-width: 540px">Point your camera at a vintage robot, a carded figure or a boxed Chogokin. ToyScope gives you its original Japanese name, a value for every condition, its history, and a collector community to show it off or sell it.</p>
<div style="display: flex; gap: 12px; flex-wrap: wrap">
<a href="https://app.toyscope.app" style="background: #2E4FE8; color: #fff; text-decoration: none; font-weight: 600; font-size: 17px; padding: 16px 26px; border-radius: 14px; min-height: 52px; box-sizing: border-box; display: inline-flex; align-items: center">Join free — claim your Founder spot</a>
<a href="#how" style="background: rgba(255,255,255,.08); color: #fff; text-decoration: none; font-weight: 600; font-size: 17px; padding: 16px 24px; border-radius: 14px; border: 1px solid rgba(255,255,255,.18); min-height: 52px; box-sizing: border-box; display: inline-flex; align-items: center">See how it works</a>
</div>
<div style="display: flex; gap: 18px; flex-wrap: wrap; color: #8D94A5; font-size: 14px">
<span>Works in your phone’s browser today</span><span aria-hidden="true">·</span><span>iPhone and Android apps coming soon</span>
</div>
</div>
<div style="position: relative; display: flex; justify-content: center">
<div style="position: absolute; inset: 40px -40px -40px 20px; border-radius: 32px; overflow: hidden; opacity: .35">
<img src="https://app.toyscope.app/img/c/c19.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block">
</div>
<div class="phone" style="width: 330px">
<img class="scr" src="https://app.toyscope.app/landing/t-result.jpg" alt="ToyScope scan result for a 1978 Popynica Condor Attacker, with its Japanese name">
<div class="island"></div>
</div>
<div style="position: absolute; left: -10px; bottom: 60px; background: #fff; color: #12141A; border-radius: 16px; padding: 14px 16px; box-shadow: 0 20px 40px rgba(0,0,0,.35); width: 210px">
<div style="font-size: 12px; color: #596070; font-weight: 600">Mint in box</div>
<div style="font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 700">$500–700</div>
<div style="font-size: 12px; color: #596070">Loose, complete: $180–250</div>
</div>
<div style="position: absolute; right: -6px; top: 70px; background: #fff; color: #12141A; border-radius: 16px; padding: 12px 14px; box-shadow: 0 20px 40px rgba(0,0,0,.35)">
<div style="font-size: 12px; color: #596070; font-weight: 600">Original name</div>
<div style="font-family: 'Noto Sans JP', sans-serif; font-size: 15px; font-weight: 700">ポピニカ コンドルアタッカー</div>
</div>
</div>
</div>
</div>

<!-- HOW IT WORKS -->
<div id="how" style="padding: 96px 0">
<div class="wrap" style="display: flex; flex-direction: column; gap: 48px">
<div style="display: flex; flex-direction: column; gap: 12px; max-width: 640px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #2E4FE8">How it works</div>
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 44px; line-height: 1.08; letter-spacing: -0.02em">Three taps from “what is this?” to “what’s it worth?”</h2>
</div>
<div class="three">
<div style="background: #fff; border: 1px solid #E4E7EE; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column">
<img src="https://app.toyscope.app/img/t/t08.jpg" alt="Boxed 1978 Popynica toy photographed for scanning" style="width: 100%; height: 240px; object-fit: cover; display: block">
<div style="padding: 22px; display: flex; flex-direction: column; gap: 8px">
<div style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 15px; color: #2E4FE8">01</div>
<h3 style="margin: 0; font-size: 22px; font-family: 'Space Grotesk', sans-serif">Snap a photo</h3>
<p style="margin: 0; color: #596070; line-height: 1.55">Open the camera and shoot the toy, the box or the stamp on its foot. Add more angles for a sharper answer.</p>
</div>
</div>
<div style="background: #fff; border: 1px solid #E4E7EE; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column">
<div style="height: 240px; background: #EEF1F7; display: flex; align-items: flex-end; justify-content: center; overflow: hidden">
<img src="https://app.toyscope.app/landing/t-value.jpg" alt="ToyScope result screen showing the toy's details" style="width: 230px; border-radius: 22px 22px 0 0; display: block; box-shadow: 0 10px 30px rgba(18,20,26,.15)">
</div>
<div style="padding: 22px; display: flex; flex-direction: column; gap: 8px">
<div style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 15px; color: #2E4FE8">02</div>
<h3 style="margin: 0; font-size: 22px; font-family: 'Space Grotesk', sans-serif">Know exactly what it is</h3>
<p style="margin: 0; color: #596070; line-height: 1.55">Name, maker, series and year, plus the original Japanese name you can copy and search on Yahoo Auctions or Mercari.</p>
</div>
</div>
<div style="background: #fff; border: 1px solid #E4E7EE; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column">
<div style="height: 240px; background: #0D1017; padding: 22px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; gap: 8px; color: #fff">
<div style="display: flex; justify-content: space-between; font-size: 14px; color: #B7BDCB"><span>Broken / parts</span><span>$40–70</span></div>
<div style="display: flex; justify-content: space-between; font-size: 14px; color: #B7BDCB"><span>Loose, good</span><span>$120–180</span></div>
<div style="display: flex; justify-content: space-between; font-size: 14px; color: #B7BDCB"><span>Loose, complete</span><span>$180–250</span></div>
<div style="display: flex; justify-content: space-between; font-size: 15px; color: #fff; font-weight: 700; background: rgba(46,79,232,.35); margin: 0 -10px; padding: 6px 10px; border-radius: 8px"><span>Boxed, opened · yours</span><span>$250–450</span></div>
<div style="display: flex; justify-content: space-between; font-size: 14px; color: #B7BDCB"><span>Mint in box</span><span>$500–700</span></div>
</div>
<div style="padding: 22px; display: flex; flex-direction: column; gap: 8px">
<div style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 15px; color: #2E4FE8">03</div>
<h3 style="margin: 0; font-size: 22px; font-family: 'Space Grotesk', sans-serif">See its value in every condition</h3>
<p style="margin: 0; color: #596070; line-height: 1.55">Not one vague number: a price range for each condition, so you know what a box or a missing missile is worth.</p>
</div>
</div>
</div>
</div>
</div>

<!-- INSIDE THE APP -->
<div style="background: #E9ECF3; padding: 96px 0 72px; overflow: hidden">
<div class="wrap" style="display: flex; flex-direction: column; gap: 40px">
<div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; flex-wrap: wrap">
<div style="display: flex; flex-direction: column; gap: 12px; max-width: 640px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #2E4FE8">Inside the app</div>
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 44px; line-height: 1.08; letter-spacing: -0.02em">Everything a collector needs, in one app</h2>
</div>
<div style="color: #596070; font-size: 14px">Swipe to see more →</div>
</div>
<div class="screens">
<div class="shot"><div style="display: flex; flex-direction: column; gap: 6px"><h3 style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 20px">Point and scan</h3><p style="margin: 0; color: #596070; font-size: 14px; line-height: 1.5">Full-screen camera. Add the back, the box or the foot stamp for a sharper match.</p></div><div class="phone" style="width: 250px; padding: 9px; border-radius: 42px"><img class="scr" src="https://app.toyscope.app/landing/t-scan.jpg" alt="Scan screen with the camera on a toy" style="border-radius: 34px"><div class="island" style="top: 17px; height: 21px"></div></div></div>
<div class="shot"><div style="display: flex; flex-direction: column; gap: 6px"><h3 style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 20px">Know what it is</h3><p style="margin: 0; color: #596070; font-size: 14px; line-height: 1.5">Name, maker, year and the original Japanese name, in about seven seconds.</p></div><div class="phone" style="width: 250px; padding: 9px; border-radius: 42px"><img class="scr" src="https://app.toyscope.app/landing/t-result.jpg" alt="Scan result screen" style="border-radius: 34px"><div class="island" style="top: 17px; height: 21px"></div></div></div>
<div class="shot"><div style="display: flex; flex-direction: column; gap: 6px"><h3 style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 20px">See what it’s worth</h3><p style="margin: 0; color: #596070; font-size: 14px; line-height: 1.5">A value for its condition, how sure the match is, and what’s missing.</p></div><div class="phone" style="width: 250px; padding: 9px; border-radius: 42px"><img class="scr" src="https://app.toyscope.app/landing/t-value.jpg" alt="Value and condition screen" style="border-radius: 34px"><div class="island" style="top: 17px; height: 21px"></div></div></div>
<div class="shot"><div style="display: flex; flex-direction: column; gap: 6px"><h3 style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 20px">Show off your shelf</h3><p style="margin: 0; color: #596070; font-size: 14px; line-height: 1.5">The Showcase feed: collections from collectors around the world.</p></div><div class="phone" style="width: 250px; padding: 9px; border-radius: 42px"><img class="scr" src="https://app.toyscope.app/landing/t-showcase.jpg" alt="Showcase feed" style="border-radius: 34px"><div class="island" style="top: 17px; height: 21px"></div></div></div>
<div class="shot"><div style="display: flex; flex-direction: column; gap: 6px"><h3 style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 20px">Shop the Marketplace</h3><p style="margin: 0; color: #596070; font-size: 14px; line-height: 1.5">Search, filter and sort toys for sale. Trending finds up top.</p></div><div class="phone" style="width: 250px; padding: 9px; border-radius: 42px"><img class="scr" src="https://app.toyscope.app/landing/t-market.jpg" alt="Marketplace screen" style="border-radius: 34px"><div class="island" style="top: 17px; height: 21px"></div></div></div>
<div class="shot"><div style="display: flex; flex-direction: column; gap: 6px"><h3 style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 20px">Message the seller</h3><p style="margin: 0; color: #596070; font-size: 14px; line-height: 1.5">Scan estimate beside the asking price. Contact in the app, email hidden.</p></div><div class="phone" style="width: 250px; padding: 9px; border-radius: 42px"><img class="scr" src="https://app.toyscope.app/landing/t-item.jpg" alt="Listing detail screen" style="border-radius: 34px"><div class="island" style="top: 17px; height: 21px"></div></div></div>
<div class="shot"><div style="display: flex; flex-direction: column; gap: 6px"><h3 style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 20px">Follow collectors</h3><p style="margin: 0; color: #596070; font-size: 14px; line-height: 1.5">Profiles with their cabinets, what they collect and what they sell.</p></div><div class="phone" style="width: 250px; padding: 9px; border-radius: 42px"><img class="scr" src="https://app.toyscope.app/landing/t-profile.jpg" alt="Collector profile screen" style="border-radius: 34px"><div class="island" style="top: 17px; height: 21px"></div></div></div>
</div>
</div>
</div>

<!-- WHAT YOU GET -->
<div style="background: #fff; padding: 96px 0; border-top: 1px solid #E4E7EE; border-bottom: 1px solid #E4E7EE">
<div class="wrap two">
<div style="display: flex; flex-direction: column; gap: 28px">
<div style="display: flex; flex-direction: column; gap: 12px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #2E4FE8">Built for collectors</div>
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 44px; line-height: 1.08; letter-spacing: -0.02em">More than a price tag</h2>
</div>
<div style="display: flex; flex-direction: column; gap: 20px">
<div style="display: flex; gap: 16px"><div style="flex: none; width: 44px; height: 44px; border-radius: 12px; background: #E8ECFD; color: #2E4FE8; display: grid; place-items: center; font-family: 'Noto Sans JP', sans-serif; font-weight: 700">あ</div><div><h3 style="margin: 0 0 4px; font-size: 18px">Original names in Japanese</h3><p style="margin: 0; color: #596070; line-height: 1.55">The name it was sold under in Japan, ready to copy, so you can find it in Japanese shops and auctions.</p></div></div>
<div style="display: flex; gap: 16px"><div style="flex: none; width: 44px; height: 44px; border-radius: 12px; background: #E8ECFD; color: #2E4FE8; display: grid; place-items: center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></svg></div><div><h3 style="margin: 0 0 4px; font-size: 18px">Its history</h3><p style="margin: 0; color: #596070; line-height: 1.55">Which show it came from, which line it belongs to, and what makes this release different from the reissue.</p></div></div>
<div style="display: flex; gap: 16px"><div style="flex: none; width: 44px; height: 44px; border-radius: 12px; background: #E8ECFD; color: #2E4FE8; display: grid; place-items: center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg></div><div><h3 style="margin: 0 0 4px; font-size: 18px">Original or reproduction?</h3><p style="margin: 0; color: #596070; line-height: 1.55">Signs to check before you buy, and a warning on grails that are often faked.</p></div></div>
<div style="display: flex; gap: 16px"><div style="flex: none; width: 44px; height: 44px; border-radius: 12px; background: #E8ECFD; color: #2E4FE8; display: grid; place-items: center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"/></svg></div><div><h3 style="margin: 0 0 4px; font-size: 18px">What’s missing</h3><p style="margin: 0; color: #596070; line-height: 1.55">The missiles, stickers and inserts it came with, so you know what a complete one looks like.</p></div></div>
</div>
</div>
<div style="display: flex; justify-content: center">
<div class="phone" style="width: 320px">
<img class="scr" src="https://app.toyscope.app/landing/t-value.jpg" alt="ToyScope value screen with condition, confidence and missing accessories">
<div class="island"></div>
</div>
</div>
</div>
</div>

<!-- SHOWCASE -->
<div id="showcase" style="padding: 96px 0">
<div class="wrap" style="display: flex; flex-direction: column; gap: 40px">
<div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; flex-wrap: wrap">
<div style="display: flex; flex-direction: column; gap: 12px; max-width: 640px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #2E4FE8">Showcase</div>
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 44px; line-height: 1.08; letter-spacing: -0.02em">Show off the shelf you spent years building</h2>
<p style="margin: 0; color: #596070; font-size: 18px; line-height: 1.55">Not selling? Share your collection anyway. Collectors follow, like and comment. Turn on “Open to offers” if the right price might change your mind.</p>
</div>
<a href="https://app.toyscope.app" style="color: #2E4FE8; font-weight: 600; text-decoration: none; font-size: 16px; min-height: 44px; display: inline-flex; align-items: center">Browse the Showcase →</a>
</div>
<div class="gallery">
<div class="g-tall" style="border-radius: 18px; overflow: hidden; position: relative"><img src="https://app.toyscope.app/img/c/c19.jpg" alt="A shelf of Gatchaman toys" style="width: 100%; height: 100%; object-fit: cover; display: block"><span style="position: absolute; left: 12px; bottom: 12px; background: rgba(0,0,0,.6); color: #fff; font-size: 12px; font-weight: 600; padding: 5px 10px; border-radius: 999px">@sonykun · Not for sale</span></div>
<div class="g-wide" style="border-radius: 18px; overflow: hidden"><img src="https://app.toyscope.app/img/c/c04.jpg" alt="Metal Hero bikes and a Space Sheriff base" style="width: 100%; height: 100%; object-fit: cover; display: block"></div>
<div style="border-radius: 18px; overflow: hidden"><img src="https://app.toyscope.app/img/c/c07.jpg" alt="Capsule Chogokin and Sentai figures" style="width: 100%; height: 100%; object-fit: cover; display: block"></div>
<div style="border-radius: 18px; overflow: hidden"><img src="https://app.toyscope.app/img/c/c01.jpg" alt="VF-1S and Jetfire side by side" style="width: 100%; height: 100%; object-fit: cover; display: block"></div>
<div style="border-radius: 18px; overflow: hidden; position: relative"><img src="https://app.toyscope.app/img/c/c11.jpg" alt="Bioman base, Battle Fever and Goranger" style="width: 100%; height: 100%; object-fit: cover; display: block"><span style="position: absolute; left: 12px; bottom: 12px; background: #F59E0B; color: #fff; font-size: 12px; font-weight: 700; padding: 5px 10px; border-radius: 999px">Open to offers</span></div>
<div class="g-wide" style="border-radius: 18px; overflow: hidden"><img src="https://app.toyscope.app/img/c/c17.jpg" alt="Voltron and the Power Rangers Command Center" style="width: 100%; height: 100%; object-fit: cover; display: block"></div>
<div style="border-radius: 18px; overflow: hidden"><img src="https://app.toyscope.app/img/c/c10.jpg" alt="Mazinger Z and Great Mazinger" style="width: 100%; height: 100%; object-fit: cover; display: block"></div>
<div style="border-radius: 18px; overflow: hidden"><img src="https://app.toyscope.app/img/c/c20.jpg" alt="Popynica boxes and the Skytank" style="width: 100%; height: 100%; object-fit: cover; display: block"></div>
</div>
</div>
</div>

<!-- MARKETPLACE -->
<div style="background: #fff; padding: 96px 0; border-top: 1px solid #E4E7EE; border-bottom: 1px solid #E4E7EE">
<div class="wrap" style="display: flex; flex-direction: column; gap: 40px">
<div style="display: flex; flex-direction: column; gap: 12px; max-width: 680px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #2E4FE8">Marketplace</div>
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 44px; line-height: 1.08; letter-spacing: -0.02em">Buy from collectors who know what they have</h2>
<p style="margin: 0; color: #596070; font-size: 18px; line-height: 1.55">Every listing starts with a scan, so you see the scan estimate next to the asking price. Message the seller in the app; your email stays private.</p>
</div>
<div class="listings">
<div style="border: 1px solid #E4E7EE; border-radius: 20px; overflow: hidden; background: #fff"><div style="position: relative"><img src="https://app.toyscope.app/img/t/t62.jpg" alt="DX Popynica Gatcha Spartan" style="width: 100%; height: 260px; object-fit: cover; display: block"><span style="position: absolute; left: 12px; top: 12px; background: #16A34A; color: #fff; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 999px">For sale</span></div><div style="padding: 16px 18px; display: flex; flex-direction: column; gap: 4px"><div style="font-weight: 600">DX Popynica Gatcha Spartan</div><div style="font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700">$1,760</div><div style="color: #596070; font-size: 13px">@retro_rina · Tokyo</div></div></div>
<div style="border: 1px solid #E4E7EE; border-radius: 20px; overflow: hidden; background: #fff"><div style="position: relative"><img src="https://app.toyscope.app/img/t/t73.jpg" alt="Sun Vulcan Godaikin" style="width: 100%; height: 260px; object-fit: cover; display: block"><span style="position: absolute; left: 12px; top: 12px; background: #16A34A; color: #fff; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 999px">For sale</span></div><div style="padding: 16px 18px; display: flex; flex-direction: column; gap: 4px"><div style="font-weight: 600">Sun Vulcan (Godaikin)</div><div style="font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700">$935</div><div style="color: #596070; font-size: 13px">@sentai_seoul · Seoul</div></div></div>
<div style="border: 1px solid #E4E7EE; border-radius: 20px; overflow: hidden; background: #fff"><div style="position: relative"><img src="https://app.toyscope.app/img/t/t78.jpg" alt="Vintage Barbie number 3 doll" style="width: 100%; height: 260px; object-fit: cover; display: block"><span style="position: absolute; left: 12px; top: 12px; background: #16A34A; color: #fff; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 999px">For sale</span></div><div style="padding: 16px 18px; display: flex; flex-direction: column; gap: 4px"><div style="font-weight: 600">Vintage Barbie #3 Doll</div><div style="font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700">$1,760</div><div style="color: #596070; font-size: 13px">@barbie_vault · Montréal</div></div></div>
</div>
</div>
</div>

<!-- FOUNDERS -->
<div id="founders" style="background: #0D1017; color: #fff; padding: 104px 0">
<div class="wrap" style="display: flex; flex-direction: column; gap: 48px">
<div style="display: flex; flex-direction: column; gap: 12px; max-width: 720px">
<div style="font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #FBBF24">Founding members</div>
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 48px; line-height: 1.05; letter-spacing: -0.02em">Get in early. Keep your number forever.</h2>
<p style="margin: 0; color: #B7BDCB; font-size: 18px; line-height: 1.55">Every early member gets a numbered badge on their profile. The earlier you join, the better your deal.</p>
</div>
<div class="three">
<div style="border-radius: 24px; padding: 30px; background: linear-gradient(180deg, #2A2210, #17140C); border: 1px solid rgba(251,191,36,.45); display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="background: #FEF3C7; color: #92400E; font-size: 13px; font-weight: 700; padding: 4px 12px; border-radius: 999px">Founder #1–20</span><span style="color: #FBBF24; font-weight: 700; font-size: 14px">18 left</span></div>
<div style="font-family: 'Space Grotesk', sans-serif; font-size: 38px; font-weight: 700; line-height: 1.05">Pro free for life</div>
<p style="margin: 0; color: #D6CDB4; line-height: 1.55">Unlimited scanning and selling, never a bill. Keep it by adding 5 toys to your collection in your first 30 days.</p>
<div style="height: 6px; border-radius: 999px; background: rgba(255,255,255,.12); overflow: hidden"><div style="width: 10%; height: 100%; background: #FBBF24"></div></div>
</div>
<div style="border-radius: 24px; padding: 30px; background: #161A24; border: 1px solid rgba(110,139,255,.45); display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="background: #E0E7FF; color: #3730A3; font-size: 13px; font-weight: 700; padding: 4px 12px; border-radius: 999px">Founding #21–200</span><span style="color: #9DB0FF; font-weight: 700; font-size: 14px">180 left</span></div>
<div style="font-family: 'Space Grotesk', sans-serif; font-size: 38px; font-weight: 700; line-height: 1.05">6 months free</div>
<p style="margin: 0; color: #B7BDCB; line-height: 1.55">Then $19.99 a year, locked for as long as you stay. That’s half the regular price, for good.</p>
<div style="height: 6px; border-radius: 999px; background: rgba(255,255,255,.12); overflow: hidden"><div style="width: 0%; height: 100%; background: #6E8BFF"></div></div>
</div>
<div style="border-radius: 24px; padding: 30px; background: #12151D; border: 1px solid rgba(255,255,255,.12); display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; justify-content: space-between; align-items: center"><span style="background: rgba(255,255,255,.1); color: #C9CEDA; font-size: 13px; font-weight: 700; padding: 4px 12px; border-radius: 999px">Everyone after</span></div>
<div style="font-family: 'Space Grotesk', sans-serif; font-size: 38px; font-weight: 700; line-height: 1.05">7-day free trial</div>
<p style="margin: 0; color: #B7BDCB; line-height: 1.55">Then $39.99 a year for Pro. Browsing, saving and messaging sellers stay free.</p>
</div>
</div>
<div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap">
<a href="https://app.toyscope.app" style="background: #FBBF24; color: #1A1406; text-decoration: none; font-weight: 700; font-size: 17px; padding: 16px 28px; border-radius: 14px; min-height: 52px; box-sizing: border-box; display: inline-flex; align-items: center">Claim my Founder number</a>
<span style="color: #8D94A5; font-size: 14px">Sign up with your email. No password, no card.</span>
</div>
</div>
</div>

<!-- FREE VS PRO -->
<div style="padding: 96px 0">
<div class="wrap" style="display: flex; flex-direction: column; gap: 32px">
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 40px; letter-spacing: -0.02em">Free to browse. Pro to scan and sell.</h2>
<div style="background: #fff; border: 1px solid #E4E7EE; border-radius: 22px; overflow: hidden">
<div class="cmp" style="background: #F5F6F8; font-weight: 700; font-size: 14px; border-bottom: 1px solid #E4E7EE"><div style="padding: 16px 20px"></div><div style="padding: 16px 20px">Free</div><div style="padding: 16px 20px; color: #2E4FE8">Pro</div></div>
<div class="cmp" style="border-bottom: 1px solid #EEF0F4"><div style="padding: 16px 20px">Browse Showcase and Marketplace</div><div style="padding: 16px 20px">✓</div><div style="padding: 16px 20px">✓</div></div>
<div class="cmp" style="border-bottom: 1px solid #EEF0F4"><div style="padding: 16px 20px">Message sellers and make offers</div><div style="padding: 16px 20px">✓</div><div style="padding: 16px 20px">✓</div></div>
<div class="cmp" style="border-bottom: 1px solid #EEF0F4"><div style="padding: 16px 20px">Save toys and follow collectors</div><div style="padding: 16px 20px">✓</div><div style="padding: 16px 20px">✓</div></div>
<div class="cmp" style="border-bottom: 1px solid #EEF0F4"><div style="padding: 16px 20px">Scan toys: name, value, history</div><div style="padding: 16px 20px; color: #8D94A5">—</div><div style="padding: 16px 20px">✓ up to 30 a day</div></div>
<div class="cmp" style="border-bottom: 1px solid #EEF0F4"><div style="padding: 16px 20px">Share to Showcase</div><div style="padding: 16px 20px; color: #8D94A5">—</div><div style="padding: 16px 20px">✓</div></div>
<div class="cmp"><div style="padding: 16px 20px">List toys for sale</div><div style="padding: 16px 20px; color: #8D94A5">—</div><div style="padding: 16px 20px">✓</div></div>
</div>
</div>
</div>

<!-- FAQ -->
<div id="faq" style="background: #fff; padding: 96px 0; border-top: 1px solid #E4E7EE">
<div class="wrap" style="display: flex; flex-direction: column; gap: 36px">
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 40px; letter-spacing: -0.02em">Questions</h2>
<div class="faq">
<div><h3 style="margin: 0 0 6px; font-size: 18px">What kinds of toys does it know?</h3><p style="margin: 0; color: #596070; line-height: 1.55">Vintage and modern collectibles: Japanese robots and Chogokin, Super Sentai, Kenner Star Wars, G.I. Joe, Transformers, Gunpla, soft vinyl, Barbie, Hot Wheels and more.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 18px">How accurate are the prices?</h3><p style="margin: 0; color: #596070; line-height: 1.55">They’re AI estimates from your photos and recent market prices: a guide, not an offer. For rare pieces, get an expert to authenticate before you buy or sell.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 18px">Does ToyScope handle payment?</h3><p style="margin: 0; color: #596070; line-height: 1.55">No. Buyers and sellers agree on payment and pickup or shipping between themselves. Your email is never shown to other collectors.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 18px">When will the iPhone and Android apps launch?</h3><p style="margin: 0; color: #596070; line-height: 1.55">[LAUNCH DATE]. Until then, ToyScope works in your phone’s browser: open app.toyscope.app and add it to your home screen.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 18px">Is my Founder deal really for life?</h3><p style="margin: 0; color: #596070; line-height: 1.55">Yes. Founders #1–20 keep Pro free for as long as ToyScope runs, after adding 5 toys in their first 30 days. Founding members keep their $19.99 price as long as they stay subscribed.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 18px">Who can join?</h3><p style="margin: 0; color: #596070; line-height: 1.55">Anyone 13 or older. Selling and messaging sellers are for members 18 and older.</p></div>
</div>
</div>
</div>

<!-- FINAL CTA -->
<div style="background: #2E4FE8; color: #fff; padding: 80px 0">
<div class="wrap" style="display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap">
<div style="display: flex; flex-direction: column; gap: 10px; max-width: 620px">
<h2 class="h2" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 44px; line-height: 1.05; letter-spacing: -0.02em">What’s on your shelf worth?</h2>
<p style="margin: 0; font-size: 18px; color: #DCE3FF">Find out in seconds, and claim your Founder number while there are spots left.</p>
</div>
<a href="https://app.toyscope.app" style="background: #fff; color: #2E4FE8; text-decoration: none; font-weight: 700; font-size: 17px; padding: 16px 28px; border-radius: 14px; min-height: 52px; box-sizing: border-box; display: inline-flex; align-items: center">Start scanning — free</a>
</div>
</div>

<!-- FOOTER -->
<div style="background: #0D1017; color: #8D94A5; padding: 48px 0">
<div class="wrap" style="display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; align-items: center">
<div style="display: flex; flex-direction: column; gap: 6px">
<div style="font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 20px; color: #fff">Toy<span style="color: #6E8BFF">Scope</span></div>
<div style="font-size: 13px">ToyScope is not affiliated with any toy maker or brand. © 2026 ToyScope</div>
</div>
<div style="display: flex; gap: 24px; flex-wrap: wrap; font-size: 14px">
<a href="https://toyscope.app/privacy" style="color: #C9CEDA; text-decoration: none; min-height: 44px; display: inline-flex; align-items: center">Privacy</a>
<a href="https://toyscope.app/terms" style="color: #C9CEDA; text-decoration: none; min-height: 44px; display: inline-flex; align-items: center">Terms</a>
<a href="https://toyscope.app/support" style="color: #C9CEDA; text-decoration: none; min-height: 44px; display: inline-flex; align-items: center">Support</a>
<a href="mailto:hello@toyscope.app" style="color: #C9CEDA; text-decoration: none; min-height: 44px; display: inline-flex; align-items: center">hello@toyscope.app</a>
</div>
</div>
</div>

</div>

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9ffa296a-1e33-4cf3-b418-d1a9ad74827c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
