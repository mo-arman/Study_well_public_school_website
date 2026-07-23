# School Website — Setup Guide

Yeh Next.js 14 (App Router) + TypeScript + Tailwind CSS project hai, tumhare
existing stack (React + Vercel) ke saath compatible.

## 1. Local setup

```bash
npm install
npm run dev
```

Browser mein `http://localhost:3000` khol ke dekh lo.

## 2. Content update karna (SABSE ZAROORI)

Poori website ka text/content ek hi jagah se control hota hai:

**`lib/siteConfig.ts`** — yahan school ka naam, tagline, contact info, stats,
"why choose us" cards, academic levels, facilities list, testimonials — sab
kuch hai. Jab school se real content mile, sirf isi file ko edit karo.

Har jagah jahan placeholder hai, `// TODO` comment se marked hai — search
karke saare TODOs dhoondh sakte ho:

```bash
grep -rn "TODO" app components lib
```

## 2.5 Logo — IMPORTANT

`public/images/logo-placeholder.png` abhi ek **screenshot se crop kiya hua**
logo hai (temporary, thoda low-res hai). School se original high-res
logo file (PNG with transparent background, ideally 500×500px+) mangwa ke
usi naam se replace kar dena — poori site automatically update ho jayegi
(Header + Footer dono isi file ko reference karte hain).

## 3. Real images add karna

Abhi har image ki jagah `[ placeholder text ]` wala box hai (Hero, About,
Gallery, etc.). Jab photos mil jaayein:

1. Unhe `public/images/` folder mein daalo
2. Next.js ke `<Image>` component se replace karo (better performance ke liye)
   ya simple `<img src="/images/photo.jpg" />` bhi chalega

## 3.5 Backend — Forms ab REAL kaam karte hain

Contact, Admissions, aur Careers — teeno forms ab **FormSubmit.co** (free
service, zero signup/API key) ke through kaam karte hain. Jab koi bhare,
seedha email pe mail chala jayega.

**⚠️ ZAROORI ONE-TIME STEP:** FormSubmit kisi bhi naye email address pe
pehli baar mail bhejne se pehle ek confirmation email bhejta hai. School
office/principal jis email pe forms aane chahiye (abhi
`lib/siteConfig.ts` mein `email`, `admissionsEmail`, `careersEmail` set
hain), **usi email ka inbox check karke ek confirmation link pe click
karna hoga** — bas ek hi baar. Uske baad har submission turant email pe
aa jayegi, koi extra step nahi.

Test karne ka tarika: deploy hone ke baad khud apni site pe jaake Contact
form bharo apne email se, phir school ke inbox mein "Confirm your
FormSubmit email" wala mail dhoondho aur confirm kar do.

Alag departments ko alag email chahiye (jaise Admissions Principal ko
jaye, Careers HR ko) toh `siteConfig.ts` mein `admissionsEmail` /
`careersEmail` alag-alag daal dena — dono ko independently confirm karna
padega.

## 3.6 Google Maps — abhi approximate hai, exact karna ho toh

Contact page pe ab ek working Google Maps embed hai (school ke naam se
search karke). Yeh kaafi accurate hoga agar Google Maps pe school already
listed hai, lekin agar exact building pin chahiye:

1. Phone mein Google Maps app kholo, school ki exact location search karo
2. Us pin ko tap karo → **Share** → **Embed a map**
3. Wahan se milne wala iframe `src="..."` URL copy karo
4. `lib/siteConfig.ts` mein `mapEmbedUrl` field mein wahi URL paste kar do

## 3.7 Naye Features (Gallery lightbox, FAQ, Notices, Alumni, Cookies, Push Notifications)

**Gallery lightbox** — koi bhi photo pe tap karo, full-screen mein khulega.
Swipe (mobile) ya arrow keys/buttons (desktop) se navigate kar sakte ho,
Escape ya X se band. `app/gallery/page.tsx` mein hai — content edit karne
ke liye real photo URLs se placeholders replace kar dena.

**FAQ page** (`/faq`) — accordion style, questions/answers
`lib/siteConfig.ts` ke `faqs` array mein hain. Naya sawaal add karna ho
toh bas array mein ek naya `{ question, answer }` object daal do.

**Notices/Circulars page** (`/notices`) — `lib/siteConfig.ts` ke
`notices` array se aata hai. Naya circular daalna ho toh array ke
**upar** (start mein) ek naya object daalo — newest sabse upar dikhega.

**Alumni page** (`/alumni`) — `lib/siteConfig.ts` ke `alumni` array se.
Abhi sab placeholder hain, real alumni stories milne pe update kar dena.

**Cookie consent banner** — pehli visit pe neeche ek banner dikhega,
Accept/Decline dabane ke baad dobara nahi dikhega (browser mein yaad
rehta hai). `components/CookieConsent.tsx` mein hai.

**Push Notifications (circulars/events ke liye) — free 5-minute setup:**

Push notification ke liye ek chhota sa backend chahiye hota hai
(subscriptions store karna, phir bhejna) — isliye humne **OneSignal**
use kiya hai, jo yeh sab free mein khud handle karta hai, koi coding
nahi lagti roz ke use ke liye:

1. [onesignal.com](https://onesignal.com) pe free account banao
2. New App banao → Platform mein **"Web Push"** choose karo
3. Apna site URL daalo (Vercel wala `.vercel.app` URL, ya real domain
   jab ho jaye)
4. Setup complete hone pe ek **App ID** milega (jaisa
   `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
5. Yeh App ID copy karke `lib/siteConfig.ts` mein `oneSignalAppId` field
   mein paste kar do
6. Deploy hote hi header mein 🔔 bell icon click karne pe visitors
   notification permission allow kar sakenge

**Uske baad jab bhi naya circular/event daalna ho:**
- OneSignal ke apne dashboard mein login karo → **"New Push"** → message
  likho → Send. Bas itna hi — koi code change nahi chahiye, school office
  khud yeh kar sakta hai (ek baar sikha dena kaafi hai)

## 4. Deploy on Vercel (jaisa tumhare doosre projects mein kiya)

1. Is folder ko GitHub repo mein push karo:
   ```bash
   git init
   git add .
   git commit -m "Initial school website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com) pe jaake "Import Project" → GitHub repo select karo
3. Framework auto-detect ho jayega (Next.js) — bas "Deploy" dabao
4. Jab domain kharid lo, Vercel project settings → Domains mein add karo, aur
   registrar ke DNS mein Vercel ke diye records daal do

## 5. Abhi kya complete hai

- Home page (Hero, Stats, About preview, Why Choose Us, Academics preview, Gallery preview, Testimonials, CTA)
- Sticky header + mobile menu + ERP dropdown
- Footer
- Inner pages (stub/placeholder content): About, Academics, Facilities, Gallery, Events, Careers, Contact, ERP logins (Student/Parent/Teacher)
- Multi-step Admissions form — **now actually emails the school office** on submit (via FormSubmit)
- Contact/Enquiry form — **now actually emails the school office** on submit
- Careers form — **now actually emails the school office with resume attachment** on submit
- Google Maps embed on Contact page
- Gallery lightbox (full-screen, swipe, keyboard nav)
- FAQ page (accordion)
- Notices/Circulars page
- Alumni success stories page
- Cookie consent banner
- Push notifications ready (needs a 5-min free OneSignal signup — see section 3.7)
- SEO basics: metadata, sitemap.xml, robots.txt
- Accessibility: visible keyboard focus, reduced-motion support
- Fully responsive (mobile/tablet/desktop)

## 6. Abhi kya baaki hai (next steps)

- Real content + photos/videos from school
- Real domain + DNS setup
- **FormSubmit email confirmation** — do this once per email address (see section 3.5) or form submissions won't arrive
- **OneSignal App ID** — needed to activate push notifications (see section 3.7)
- Admissions payment/document-upload step (currently just captures details)
- ERP integration (currently just login UI, no real auth)
- Fee structure, holiday list, downloadable brochure/prospectus PDFs
- Google Maps embed (paste URL in `siteConfig.mapEmbedUrl`)
- Dark mode (not built yet — flag if the school actually wants this, it's rare for school sites)

## 7. File structure

```
app/                  → pages (App Router — each folder = one route)
components/           → Header, Footer, WhatsApp button, PageHeader
components/sections/  → Home page section blocks
lib/siteConfig.ts     → ALL editable content lives here
```
