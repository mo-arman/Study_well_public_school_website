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
- Multi-step Admissions form (frontend only — backend/payment not connected yet)
- SEO basics: metadata, sitemap.xml, robots.txt
- Accessibility: visible keyboard focus, reduced-motion support
- Fully responsive (mobile/tablet/desktop)

## 6. Abhi kya baaki hai (next steps)

- Real content + photos/videos from school
- Real domain + DNS setup
- Backend connection for Admissions/Enquiry/Careers forms (email or database)
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
