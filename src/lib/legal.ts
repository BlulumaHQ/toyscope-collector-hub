// Legal text shared with the app (app.toyscope.app). English is the governing version.
export type LegalDoc = { t: string; s: [string, string][] };
export const LEGAL: { updated: string; privacy: LegalDoc; terms: LegalDoc; refunds: LegalDoc } = {
 "updated": "November 16, 2026",
 "privacy": {
  "t": "Privacy Policy",
  "s": [
   [
    "Who we are",
    "ToyScope is operated by Sony Lin, doing business as Bluluma Design, Richmond, British Columbia, Canada. Our privacy officer is responsible for how we handle your personal information. Contact: Sony Lin, support@toyscope.app."
   ],
   [
    "The short version",
    "We collect only what we need to identify and value your toys and run the app. We do not sell your data. We do not use ad trackers, advertising pixels or session-recording tools. Your saved toys are private unless you choose to share them."
   ],
   [
    "What we collect",
    "• Account: email address, display name, and your age range (we ask for your birth month and year to confirm you are old enough, then keep only the age range).\n• Profile (optional): photo, city, bio and what you collect. We never show more than your city.\n• Scan photos and results: the photos you take and the AI result, so we can show them back to you in Recent scans and Saved.\n• Saved toys, folders, listings and My Collection photos you add.\n• Contact messages: when you contact a seller, we forward your message by email and keep a copy for 30 days for safety and abuse reports.\n• Purchases: if you subscribe, our payment provider (Paddle on the web, or Apple or Google in their app stores) tells us your subscription status. We never see your full card details.\n• Device and app data: basic technical data needed to run the app securely (app version, device type, crash reports).\n• Usage statistics: only if you turn on “Share anonymous usage stats”. It is off by default."
   ],
   [
    "How we use it",
    "• To identify toys, estimate value and show history and tips.\n• To run your account, Saved folders, listings and the Contact relay.\n• To keep ToyScope safe: prevent fraud, spam and abuse, and review reports.\n• To improve recognition, but only from corrections and feedback you send us, and from scan photos only if you turn on “Help improve recognition” (off by default).\n• To send product news by email only if you opted in. You can unsubscribe in any email or in Settings."
   ],
   [
    "AI processing",
    "To create a result, your scan photos are sent to a third-party AI service, Google (Gemini API) and OpenAI (GPT API), through OpenRouter, which processes them under a contract that limits how it may use them. We ask for your permission before your first scan. AI results are estimates and can be wrong."
   ],
   [
    "Who we share it with",
    "We share personal information only with service providers that help us run ToyScope, under contracts that protect it:\n• Google — AI processing of scan photos\n• Supabase — database, accounts and file storage\n• Cloudflare — image storage and delivery\n• Resend — sending emails and Contact messages\n• Paddle — web checkout, billing and sales tax (Paddle is the merchant of record for web purchases)\n• Apple / Google — in-app subscriptions, once ToyScope is in their stores\nWe also share information when the law requires it, to protect people from harm, or as part of a business sale (you would be notified). Anything you make public — your profile, My Collection photos and listings — can be seen by other users."
   ],
   [
    "Where your data is stored",
    "Our service providers may store and process data in the United States and other countries. When your information is outside Canada it may be accessible to authorities there under local law. We assess these transfers before making them."
   ],
   [
    "How long we keep it",
    "We keep your account data while your account is open. When you delete your account, we delete your personal information within 30 days, and remove it from backups within 90 days. Contact relay copies are deleted after 30 days. We may keep limited records longer where the law requires it, such as purchase records."
   ],
   [
    "Your rights",
    "You can access, correct, download or delete your information, and withdraw consent, at any time in Settings or by emailing support@toyscope.app. We reply within 30 days. We will not treat you differently for using these rights.\n• Canada: you can complain to the Office of the Privacy Commissioner of Canada, or in Quebec to the Commission d’accès à l’information.\n• United States: depending on your state (for example California), you may have rights to know, delete, correct and opt out of the sale or sharing of personal information. We do not sell or share personal information for advertising."
   ],
   [
    "Children",
    "ToyScope is not for children under 13. We do not knowingly collect personal information from children under 13; if we learn we have, we delete it. Users aged 13 to 17 cannot sell, use Contact, or have a public profile."
   ],
   [
    "Security",
    "We use encryption in transit, access controls and other safeguards. No system is perfectly secure. If a breach creates a real risk of significant harm, we will notify you and the regulators as the law requires."
   ],
   [
    "Changes",
    "We will tell you in the app before important changes take effect."
   ],
   [
    "Contact",
    "Sony Lin, doing business as Bluluma Design, Richmond, British Columbia, Canada. Privacy officer: support@toyscope.app."
   ]
  ]
 },
 "terms": {
  "t": "Terms of Use",
  "s": [
   [
    "Agreement",
    "These Terms are an agreement between you and Sony Lin, doing business as Bluluma Design (“ToyScope”, “we”). By using ToyScope you agree to them and to our Privacy Policy."
   ],
   [
    "Who can use ToyScope",
    "You must be at least 13. If you are under the age of majority where you live, a parent or guardian must agree to these Terms for you. You must be 18 or older to sell, list items or use Contact."
   ],
   [
    "Your account",
    "Keep your login secure and your information accurate. You are responsible for activity on your account. One person, one account."
   ],
   [
    "AI estimates are not appraisals",
    "ToyScope uses AI to suggest what a toy is, its condition and an estimated value. Results can be wrong and are for information only. They are not a professional appraisal, authentication or an offer to buy. Check important details yourself and use an expert for valuable items before buying, selling or insuring."
   ],
   [
    "Your content",
    "You keep ownership of the photos and text you add. You give ToyScope a non-exclusive, worldwide, royalty-free licence to host, store, display and process your content to run and improve the service as described in the Privacy Policy. You confirm you have the rights to everything you upload. You can delete your content at any time."
   ],
   [
    "Buying and selling between collectors",
    "ToyScope is not a party to any sale. We do not handle payments, shipping or returns, and we do not check or guarantee items, listings or users. Deals are between buyer and seller. Sellers must describe items honestly, including whether an item is an original, a reissue, a reproduction or custom. Never pay by wire transfer, crypto or gift card."
   ],
   [
    "Things you must not do",
    "Don’t list or post: counterfeit items presented as genuine, stolen or recalled items, weapons, adult content, or anything illegal; harass others; spam; scrape the app; share someone else’s personal information; misuse the Contact relay; or try to break or reverse-engineer ToyScope."
   ],
   [
    "Reports and moderation",
    "You can report or block any user or content. We review reports, usually within 24 hours, and may remove content or suspend accounts that break these Terms."
   ],
   [
    "Subscriptions and payments",
    "On the web, ToyScope Pro is sold by our reseller Paddle.com, which is the merchant of record for these orders: Paddle processes the payment, collects any sales tax or VAT, handles billing questions and refunds, and its Buyer Terms (paddle.com/legal/checkout-buyer-terms) also apply. If you subscribe in the Apple App Store or Google Play, that store bills you under its own terms. Subscriptions renew automatically each year until you cancel, at least 24 hours before renewal. Free trials convert to paid unless cancelled before they end. Refunds are covered by our Refund Policy at toyscope.app/refunds."
   ],
   [
    "Trademarks and brands",
    "Toy names, characters and brands shown in ToyScope belong to their owners. ToyScope is not affiliated with or endorsed by any toy maker or brand."
   ],
   [
    "Copyright complaints",
    "If you believe content on ToyScope infringes your copyright, see our Copyright Policy."
   ],
   [
    "Ending your use",
    "You can delete your account at any time. We may suspend or end accounts that break these Terms or put others at risk."
   ],
   [
    "Disclaimers and liability",
    "ToyScope is provided “as is”. To the extent the law allows, we are not liable for indirect or consequential losses, or for losses from transactions between users, and our total liability is limited to the amount you paid us in the 12 months before the claim. Nothing in these Terms limits rights you have under consumer protection law that cannot be waived."
   ],
   [
    "Governing law",
    "These Terms are governed by the laws of British Columbia and the federal laws of Canada that apply there, without taking away any mandatory consumer rights you have where you live."
   ],
   [
    "Changes and contact",
    "We will notify you in the app before important changes. Questions: support@toyscope.app."
   ]
  ]
 },
 "refunds": {
  "t": "Refund Policy",
  "s": [
   [
    "Who handles your payment",
    "On the web, ToyScope Pro is sold through our reseller Paddle.com, which is the merchant of record for these orders. Paddle processes the payment, issues your receipt and handles refunds. If you subscribed in the Apple App Store or Google Play, refunds are handled by Apple or Google under their own policies."
   ],
   [
    "Free trial",
    "If your plan includes a free trial, you can cancel at any time before the trial ends and you will not be charged."
   ],
   [
    "14-day money-back guarantee",
    "If you are not happy with ToyScope Pro, you can request a full refund within 14 days of your first payment or of a renewal payment. No questions asked."
   ],
   [
    "After 14 days",
    "After 14 days we do not usually give partial refunds for the rest of the billing year, but you can cancel at any time and keep Pro until the end of the period you already paid for. Nothing more will be charged."
   ],
   [
    "How to ask for a refund",
    "Email support@toyscope.app with the email address you used at checkout, or reply to your Paddle receipt, or contact Paddle directly at paddle.net. Refunds go back to the original payment method, usually within 5–10 business days."
   ],
   [
    "Founding and Lifetime members",
    "Founders #1–20 never pay for Pro, so there is nothing to refund. Founding members #21–200 can request a refund under the same rules as everyone else; their half price stays with their account if they come back later."
   ],
   [
    "Your rights",
    "Nothing in this policy limits rights you have under consumer protection law where you live."
   ],
   [
    "Contact",
    "Questions about billing? Email support@toyscope.app."
   ]
  ]
 }
};
