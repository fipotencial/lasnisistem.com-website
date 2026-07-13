# CLAUDE.md — Hollywood Lasni Sistem® (lasnisistem.com)

## Projekt

**Stranka:** Fi Potencial d.o.o.
**Produkt:** Hollywood Lasni Sistem® — premium lasni sistemi in lasulje
**Domena:** https://www.lasnisistem.com
**Stack:** Next.js App Router, TypeScript, Tailwind CSS, Framer Motion
**Gostovanje:** Netlify (auto-deploy iz GitHub)
**GitHub:** git@github.com:fipotencial/lasnisistem.com-website.git (branch: main)

## Kontakti

- **Email:** info@lasnisistem.com
- **Tel:** +386 31 444 868
- **Naslov:** Komenskega 1, 4000 Kranj
- **Facebook:** https://www.facebook.com/Lasnisistem/

## Jeziki

Stran je večjezična: `/sl` (primarni), `/en`, `/de`, `/ru`
Prevodi so v `src/lib/i18n/translations.ts`

## Okolje

- `.env.local` — lokalni razvoj (gitignored)
- Netlify env vars — produkcija
- `NEXT_PUBLIC_WEB3FORMS_KEY` — access key za kontaktni obrazec

## Ključne storitve

| Storitev | ID / podatek |
|---------|-------------|
| GA4 Measurement ID | G-J22495JBKV |
| Web3Forms access key | 533303e5-dc14-40eb-a6d4-e35e813dc40c |
| Netlify site | lasnisistemwebsite.netlify.app |
| GSC property | lasnisistem.com (Domain property) |

## Struktura strani

```
/sl                        — domača stran (pillar: izpadanje las)
/sl/hibridni-sistemi       — pillar: hibridni sistemi
/sl/lasulje                — pillar: lasulje
/sl/plesavost              — pillar: plešavost (4 jeziki, isti slug povsod; v nav + footerju)
/sl/kontakt                — kontakt + Web3Forms obrazec
/sl/poslanstvo             — o podjetju
/sl/mnenja-strank          — testimoniali
/sl/mediji                 — RTV Slovenija + press
/sl/svetovalni-studio      — lokacija + CTA
/sl/pravno-obvestilo       — pravne informacije
/sl/blog                   — blog index
/sl/blog/[slug]            — posamezni članki
```

## Blog članki

Shranjeni v `src/lib/blog/articles.ts` (+ `articles-en/de/ru.ts` za ostale jezike). Za dodajanje novega članka dodaj objekt v array z: `slug`, `title`, `excerpt`, `content`, `publishDate`, `readTime`, `image`.

**Pomembno:** članki se med jeziki mapirajo PO INDEKSU v arrayu — vrstni red mora biti enak v vseh 4 datotekah. Nov članek dodaj v vse štiri hkrati (SL-only članki so dovoljeni samo na koncu arraya), sicer se index mapping premakne.

## Kako deployati spremembe

```bash
git add <datoteke>
git commit -m "opis spremembe"
git push
```

Netlify samodejno zazna push in deploya. Deploy traja ~2 minuti.

## Redirecti (stara domena)

`izpadanje-las.si` ima v `.htaccess` redirect na `https://www.lasnisistem.com` (301).
Stari PHP URL-ji (`?iIdMeni=XXX`) so redirectani v `next.config.mjs` (22 pravil + catch-all).

## SEO — ključne datoteke

| Datoteka | Namen |
|---------|-------|
| `src/app/robots.ts` | robots.txt (AI boti dovoljeni) |
| `src/app/sitemap.ts` | sitemap.xml (81 strani, 4 jeziki) |
| `src/lib/seo.ts` | `buildAlternates`/`buildBlogAlternates` — canonical+hreflang helperji; VSAKA nova `page.tsx` mora klicati `buildAlternates` v `generateMetadata` |
| `src/lib/plesavostFaq.ts` | FAQ vir za `/plesavost` stran + FAQPage JSON-LD |
| `src/components/schema/OrganizationSchema.tsx` | LocalBusiness JSON-LD |
| `src/components/schema/ProductSchema.tsx` | Product + AggregateRating JSON-LD |
| `src/components/schema/FAQSchema.tsx` | FAQPage JSON-LD (8 vpr × 4 jeziki) |
| `src/components/schema/BreadcrumbSchema.tsx` | Breadcrumb JSON-LD |
| `src/components/CookieConsent.tsx` | GDPR banner + pogojni GA4 load |
| `src/components/LangProvider.tsx` | Dinamični html lang atribut |
| `next.config.mjs` | 301 redirecti iz PHP URL-jev |

**Gotcha (root cause avg position 44, popravljeno 13.7.2026):** Next.js metadata NE deep-mergea nested objektov — `alternates`/`openGraph` nastavljen na layout nivoju se podeduje/prepiše kot celota, ne po ključih. Posledica: vse podstrani so kanonizirale na homepage. Pravilo: `alternates` se NIKOLI ne nastavi v layoutu, vedno per-page prek `buildAlternates`.

**Title suffix:** root layout ima template `'%s | Lasni Sistem®'` — posamezni page title NE sme sam vsebovati brand suffixa (povzroči podvojen suffix). Homepage uporablja `title.absolute`.

## Status (13. julij 2026)

- ✅ Stran live na lasnisistem.com
- ✅ SSL aktiven (Netlify)
- ✅ GA4 deluje (ob cookie consent)
- ✅ GSC sitemap oddan (81 strani), resubmitted + reindex requested 13.7.2026
- ✅ Kontaktni obrazec deluje (Web3Forms)
- ✅ Redirecti z izpadanje-las.si aktivni
- ✅ SEO overhaul deployed 13.7.2026 (commits 104e132, dbf8ac9 — canonical/hreflang fix, /plesavost pillar, interno linkanje)
- 👀 Spremljaj "plešavost" impressions v GSC od cca. konca julija 2026
- ⏳ Google Business Profile — odloženo (največji off-site lever)
- ⏳ Google Ads — potrebno conversion tracking + Consent Mode v2 pred spendom
- ⏳ Mesečni lasulje buyer-guide blog posti — planirano
- ⏳ `/sl/lasulje` vsebinska globina vs. lasulje.si — TBD
