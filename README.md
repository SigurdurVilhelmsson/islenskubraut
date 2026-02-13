# Íslenskubraut — Kennsluspjöld

Vefverkfæri til að búa til prentvæn kennsluspjöld fyrir íslenskukennslu. Hannað fyrir kennara í íslenskunámi innflytjenda og flóttamanna við Kvennaskólann í Reykjavík.

## Um verkefnið

Verkfærið hjálpar kennurum að búa til **plastað A4 spjöld** sem nemendur nota í kennslustofunni. Spjöldin innihalda orðaforða skiptan í efnisflokka og setningaramma sem gefa nemandanum strúktúr til að lýsa myndum munnlega á íslensku.

### Efnisflokkar

- **Dýr** — gæludýr, villt dýr, húsdýr
- **Matur og drykkur** — tegundir, bragð, undirbúningur
- **Farartæki** — á landi, sjó og í lofti
- **Manneskja** — útlit, starf, athafnir
- **Staðir og byggingar** — tegundir og athafnir
- **Föt og klæðnaður** — tegundir, litir, efni

### Erfiðleikastig

- **A1 (Byrjandi)** — Einföld orð og stuttir setningarammar
- **A2 (Grunnþekking)** — Tengdar setningar og fleiri lýsingarorð
- **B1 (Miðstig)** — Frjálsari rammar, samanburður, rökstuðningur

## Tækni

- **Framework:** Next.js 14 (App Router) með TypeScript
- **Útlit:** Tailwind CSS
- **PDF:** @react-pdf/renderer
- **Letur:** Source Sans 3, Noto Sans (styðja íslenska stafi)

## Uppsetning

```bash
npm install
npm run dev
```

Opnaðu [http://localhost:3000](http://localhost:3000) í vafranum.

## Bygging

```bash
npm run build
npm start
```

## Skráarskipan

```
src/
├── app/           # Next.js síður og API routes
├── components/    # React componentar
├── data/          # Gögn (efnisflokkar, orðaforði)
├── lib/           # PDF útbúnaður
└── styles/        # CSS stílar
docs/
└── KENNSLUHANDBOK.md  # Leiðbeiningar fyrir kennara
```

## Leyfi

MIT
