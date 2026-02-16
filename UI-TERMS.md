# UI Terms — English / Icelandic

This document lists all user-facing text in the Íslenskubraut application.
The **English** column shows the intended meaning (Claude's internal concept).
The **Icelandic** column shows the current text in the codebase.

Edit the **Icelandic** column as needed, and the codebase can be updated to match.

---

## Table of Contents

1. [Site Header & Footer](#1-site-header--footer)
2. [Home Page](#2-home-page)
3. [Category Page](#3-category-page)
4. [Level Selector](#4-level-selector)
5. [Download Button](#5-download-button)
6. [Card Preview Labels](#6-card-preview-labels)
7. [Question Card Labels](#7-question-card-labels)
8. [Section Dividers](#8-section-dividers)
9. [Error Messages (UI)](#9-error-messages-ui)
10. [Error Messages (API)](#10-error-messages-api)
11. [Metadata (HTML head)](#11-metadata-html-head)
12. [Category Names & Descriptions](#12-category-names--descriptions)
13. [Sub-Category Names — Dýr (Animals)](#13-sub-category-names--dýr-animals)
14. [Sub-Category Names — Matur og drykkur (Food & Drink)](#14-sub-category-names--matur-og-drykkur-food--drink)
15. [Sub-Category Names — Farartæki (Vehicles)](#15-sub-category-names--farartæki-vehicles)
16. [Sub-Category Names — Manneskja (People)](#16-sub-category-names--manneskja-people)
17. [Sub-Category Names — Staðir og byggingar (Places & Buildings)](#17-sub-category-names--staðir-og-byggingar-places--buildings)
18. [Sub-Category Names — Föt og klæðnaður (Clothing)](#18-sub-category-names--föt-og-klæðnaður-clothing)
19. [Sentence Frames — Dýr](#19-sentence-frames--dýr)
20. [Sentence Frames — Matur og drykkur](#20-sentence-frames--matur-og-drykkur)
21. [Sentence Frames — Farartæki](#21-sentence-frames--farartæki)
22. [Sentence Frames — Manneskja](#22-sentence-frames--manneskja)
23. [Sentence Frames — Staðir og byggingar](#23-sentence-frames--staðir-og-byggingar)
24. [Sentence Frames — Föt og klæðnaður](#24-sentence-frames--föt-og-klæðnaður)
25. [Examples (per category, per level)](#25-examples-per-category-per-level)
26. [Teacher Notes (per level)](#26-teacher-notes-per-level)
27. [Guiding Questions](#27-guiding-questions)
28. [PDF-Only Text](#28-pdf-only-text)
29. [Guiding Question Answer Options — Dýr](#29-guiding-question-answer-options--dýr)
30. [Guiding Question Answer Options — Matur og drykkur](#30-guiding-question-answer-options--matur-og-drykkur)
31. [Guiding Question Answer Options — Farartæki](#31-guiding-question-answer-options--farartæki)
32. [Guiding Question Answer Options — Manneskja](#32-guiding-question-answer-options--manneskja)
33. [Guiding Question Answer Options — Staðir og byggingar](#33-guiding-question-answer-options--staðir-og-byggingar)
34. [Guiding Question Answer Options — Föt og klæðnaður](#34-guiding-question-answer-options--föt-og-klæðnaður)

---

## 1. Site Header & Footer

**File:** `src/app/layout.tsx`

| English | Icelandic (current) | Notes |
|---|---|---|
| Icelandic Path (site name) | Íslenskubraut | Brand name — may not need translation |
| Teaching Cards (subtitle) | Kennsluspjöld | |
| All categories (nav link) | Allir flokkar | |
| Icelandic Path — Women's School in Reykjavík | Íslenskubraut — Kvennaskólinn í Reykjavík | Footer |
| Tool for teachers in Icelandic language instruction for immigrants and refugees | Verkfæri fyrir kennara í íslenskunámi innflytjenda og flóttamanna | Footer description |

---

## 2. Home Page

**File:** `src/app/page.tsx`

| English | Icelandic (current) | Notes |
|---|---|---|
| Teaching cards for Icelandic instruction | Kennsluspjöld fyrir íslenskukennslu | Main heading |
| Choose a topic and difficulty level to create printable cards that support students in describing images orally in Icelandic. | Veldu efnisflokk og erfiðleikastig til að búa til prentvæn spjöld sem styðja nemendur í að lýsa myndum munnlega á íslensku. | Hero description |
| Choose a category | Veldu flokk | Step 1 heading |
| Animals, food, vehicles and more | Dýr, matur, farartæki og fleira | Step 1 description |
| Choose a level | Veldu stig | Step 2 heading |
| A1 beginner, A2 basic knowledge, B1 intermediate | A1 byrjandi, A2 grunnþekking, B1 miðstig | Step 2 description |
| Download | Hladdu niður | Step 3 heading |
| Get a PDF to print and laminate | Fáðu PDF til að prenta og plasta | Step 3 description |

---

## 3. Category Page

**File:** `src/app/spjald/[flokkur]/page.tsx`

| English | Icelandic (current) | Notes |
|---|---|---|
| All categories (breadcrumb) | Allir flokkar | |
| Choose difficulty level | Veldu erfiðleikastig | Section label |
| Question card (tab) | Spurningaspjald | Tab label |
| Vocabulary (tab) | Orðaforði | Tab label |
| Sentence frames (tab) | Setningarammar | Tab label |
| View card | Skoða spjald | Link on category cards (`CategoryCard.tsx`) |

---

## 4. Level Selector

**File:** `src/components/LevelSelector.tsx`

| English | Icelandic (current) | Notes |
|---|---|---|
| A1 | A1 | CEFR level code |
| Beginner | Byrjandi | A1 description |
| A2 | A2 | CEFR level code |
| Basic knowledge / Elementary | Grunnþekking | A2 description |
| B1 | B1 | CEFR level code |
| Intermediate | Miðstig | B1 description |

---

## 5. Download Button

**File:** `src/components/DownloadButton.tsx`

| English | Icelandic (current) | Notes |
|---|---|---|
| Creating PDF... (loading state) | Bý til PDF... | |
| Download PDF | Hlaða niður PDF | |
| An error occurred during download. Try again. | Villa kom upp við niðurhal. Reyndu aftur. | Alert message |

---

## 6. Card Preview Labels

**File:** `src/components/SpjaldPreview.tsx`

| English | Icelandic (current) | Notes |
|---|---|---|
| Front side — Vocabulary | Framhlið — Orðaforði | Preview section label |
| Back side — Sentence frames | Bakhlið — Setningarammar | Preview section label |
| Sentence frames | Setningarammar | Card heading on back side |
| Example | Dæmi | Section label |
| For teachers: | Fyrir kennara: | Teacher note prefix |

---

## 7. Question Card Labels

**File:** `src/components/SpurningaSpjald.tsx`

These labels appear next to icons on the question card. They categorize the type of question being asked.

| Icon | English | Icelandic (current) | Notes |
|---|---|---|---|
| 📚 | Categories / Types | Flokkar | Question about classification |
| 👁️ | Appearance | Útlit | Question about how it looks |
| ✋ | Texture / Feel | Áferð | Question about touch/texture |
| 🔊 | Sound | Hljóð | Question about sounds it makes |
| 👃 | Smell | Lykt | Question about smell |
| 👅 | Taste | Bragð | Question about taste |
| 🧱 | Material | Efniviður | Question about what it's made of |
| 🔷 | Shape | Lögun | Question about shape |
| 🎯 | Purpose / Use | Notagildi | Question about purpose |
| 👤 | Who? | Hver? | Context question — who |
| 📍 | Where? | Hvar? | Context question — where |
| 🕐 | When? | Hvenær? | Context question — when |

**Note:** In `src/lib/pdf.ts`, these same labels appear without Icelandic special characters (for PDF rendering): Utlit, Aferd, Hljod, Bragd, Efnividur, Logun, Hvenar. This may be a bug or font limitation.

| PDF label | Web label | Notes |
|---|---|---|
| Utlit | Útlit | Missing accent |
| Aferd | Áferð | Missing accent and ð |
| Hljod | Hljóð | Missing accent |
| Bragd | Bragð | Missing ð |
| Efnividur | Efniviður | Missing accent |
| Logun | Lögun | Missing ö |
| Hvenar? | Hvenær? | Missing æ |

---

## 8. Section Dividers

**File:** `src/components/SpurningaSpjald.tsx`, `src/lib/pdf.ts`

| English | Icelandic (current) | Notes |
|---|---|---|
| Purpose and context | Notagildi og samhengi | Divider between main questions and context questions |
| Question card | Spurningaspjald | Card heading |
| Icelandic Path — Women's School in Reykjavík | Íslenskubraut — Kvennaskólinn í Reykjavík | Card footer |

---

## 9. Error Messages (UI)

**File:** `src/app/spjald/[flokkur]/page.tsx`

| English | Icelandic (current) | Notes |
|---|---|---|
| Category not found | Flokkur fannst ekki | Error heading |
| This category does not exist. Choose another category from the front page. | Þessi flokkur er ekki til. Veldu annan flokk af forsíðunni. | Error message |
| Go back | Til baka | Back link |

---

## 10. Error Messages (API)

**File:** `src/app/api/pdf/route.ts`

| English | Icelandic (current) | Notes |
|---|---|---|
| Missing category or level parameter | Vantar flokkur eða stig parameter | 400 error |
| Invalid level. Use A1, A2, or B1. | Ógilt stig. Notaðu A1, A2, eða B1. | 400 error |
| Category not found | Flokkur fannst ekki | 404 error |
| Error creating PDF | Villa við að búa til PDF | 500 error |

---

## 11. Metadata (HTML head)

**File:** `src/app/layout.tsx`

| English | Icelandic (current) | Notes |
|---|---|---|
| Icelandic Path — Teaching Cards | Íslenskubraut — Kennsluspjöld | Page title |
| Tool for creating printable teaching cards for Icelandic instruction. For teachers in Icelandic language instruction for immigrants and refugees. | Verkfæri til að búa til prentvæn kennsluspjöld fyrir íslenskukennslu. Fyrir kennara í íslenskunámi innflytjenda og flóttamanna. | Meta description |
| Icelandic, teaching, cards, Icelandic instruction, immigrants | íslenska, kennsla, spjöld, íslenskukennsla, innflytjendur | Keywords |

---

## 12. Category Names & Descriptions

**Files:** `src/data/categories/*.ts`

| English Name | Icelandic Name | English Description | Icelandic Description |
|---|---|---|---|
| Animals | Dýr | Vocabulary about animals — pets, wild animals and livestock | Orðaforði um dýr — gæludýr, villt dýr og húsdýr |
| Food and drink | Matur og drykkur | Vocabulary about food and drink — types, taste and preparation | Orðaforði um mat og drykk — tegundir, bragð og undirbúning |
| Vehicles | Farartæki | Vocabulary about vehicles — on land, sea and in the air | Orðaforði um farartæki — á landi, sjó og í lofti |
| Person / People | Manneskja | Vocabulary about people — appearance, profession and activities | Orðaforði um fólk — útlit, starf og athafnir |
| Places and buildings | Staðir og byggingar | Vocabulary about places — types of buildings and what you do there | Orðaforði um staði — tegundir bygginga og hvað maður gerir þar |
| Clothes and clothing | Föt og klæðnaður | Vocabulary about clothes — types, colors, materials and when they are used | Orðaforði um föt — tegundir, litir, efni og hvenær þau eru notuð |

---

## 13. Sub-Category Names & Options — Dýr (Animals)

**File:** `src/data/categories/dyr.ts`

| English | Icelandic (current) | Options (Icelandic) |
|---|---|---|
| Type | Tegund | gæludýr, villt dýr, húsdýr (búfénaður) |
| Biological classification | Líffræðilegur flokkur | spendýr, fugl, fiskur, skriðdýr, froskdýr, skordýr |
| Habitat | Búsvæði | á landi, í vatni, í lofti, á landi og í vatni |
| Appearance | Útlit | hefur feld, hefur fjaðrir, hefur hreistur, hefur hala, hefur gogg, hefur horn, hefur fjóra fætur, hefur tvo fætur, flýgur, syndir, hleypur |
| Size | Stærð | lítið, meðalstórt, stórt, mjög stórt |
| Diet | Fæða | étur plöntur (grasæta), étur kjöt (kjötæta), étur bæði (alæta) |

---

## 14. Sub-Category Names & Options — Matur og drykkur (Food & Drink)

**File:** `src/data/categories/matur.ts`

| English | Icelandic (current) | Options (Icelandic) |
|---|---|---|
| Type | Tegund | ávöxtur, grænmeti, kjöt, fiskur, mjólkurvara, sælgæti, brauð/korn, drykkur |
| Taste | Bragð | sætt, salt, súrt, beiskt, kryddað/sterkt |
| Texture/form | Áferð/form | mjúkt, hart, fljótandi, þurrt |
| Preparation | Undirbúningur | hrátt, soðið, steikt, bakað, heitt, kalt, frosið |
| Where | Hvar | í eldhúsinu, í ísskápnum, í búðinni, á veitingastað |
| When | Hvenær | í morgunmat, í hádegismat, í kvöldmat, sem millimál, alltaf/hvenær sem er |

---

## 15. Sub-Category Names & Options — Farartæki (Vehicles)

**File:** `src/data/categories/farartaeki.ts`

| English | Icelandic (current) | Options (Icelandic) |
|---|---|---|
| Type | Tegund | bíll, rúta, hjól/reiðhjól, mótorhjól, lest, flugvél, skip/bátur, sleði, hlaupahjól |
| Where it goes | Hvar fer það | á landi, á sjó/vatni, í lofti, á snjó |
| Size | Stærð | lítið, meðalstórt, stórt, risastórt |
| Characteristics / Features | Eiginleikar | hefur hjól, hefur ekki hjól, með vél, án vélar, hraðvirkt, hægvirkt |
| When used | Hvenær notað | á veturna, á sumrin, allt árið, í sérstökum tilfellum |
| Number of passengers | Fjöldi farþega | einn, fáir, margir |

---

## 16. Sub-Category Names & Options — Manneskja (People)

**File:** `src/data/categories/manneskja.ts`

| English | Icelandic (current) | Options (Icelandic) |
|---|---|---|
| Status (alive/dead/fictional) | Staða | á lífi, látin, skálduð persóna |
| Fame | Frægð | fræg, ekki fræg |
| Profession/role | Starf/hlutverk | leikari, íþróttamaður, söngvari, stjórnmálamaður, nemandi, kennari, læknir, lögreglumaður, kokkur, listamaður |
| Age | Aldur | barn, unglingur, fullorðinn, aldraður/öldruð |
| Appearance | Útlit | há/hár, lág/lágur, ung/ungur, gömul/gamall, með sítt hár, með stutt hár, sköllótt, með gleraugu, án gleraugna, með skegg, án skeggs |
| Activities | Athafnir | vinnur, lærir, syngur, spilar, ferðast, eldar, les, teiknar |

---

## 17. Sub-Category Names & Options — Staðir og byggingar (Places & Buildings)

**File:** `src/data/categories/stadir.ts`

| English | Icelandic (current) | Options (Icelandic) |
|---|---|---|
| Type | Tegund | hús, íbúð, skóli, sjúkrahús, búð/verslun, veitingastaður, safn, kirkja, sundlaug, leikvöllur |
| Location | Staðsetning | í bænum/borginni, í úthverfi, á landi/sveitinni, við sjóinn, í fjöllunum |
| Size | Stærð | lítill/lítið, meðalstór/meðalstórt, stór/stórt |
| What you do there | Hvað gerir maður þar | borðar, verslar, syndir, lærir, vinnur, sefur, leikur sér |

---

## 18. Sub-Category Names & Options — Föt og klæðnaður (Clothing)

**File:** `src/data/categories/klaednadur.ts`

| English | Icelandic (current) | Options (Icelandic) |
|---|---|---|
| Type | Tegund | bolur/stuttermabolur, peysa, skyrta, buxur, pilsið/pils, jakki, úlpa, sokkar, skór, húfa, hanskar, trefill |
| Color | Litur | rauður/rautt, blár/blátt, grænn/grænt, gulur/gult, svartur/svart, hvítur/hvítt, bleikur/bleikt, brúnn/brúnt |
| Material | Efni | úr ull, úr bómull, úr leðri, úr plasti |
| When | Hvenær | á veturna, á sumrin, allt árið, þegar rignir, í sérstakar tilefni |
| Which body part | Á hvaða líkamshluta | á höfðinu, á efri hluta líkamans, á neðri hluta líkamans, á fótunum, á höndunum |

---

## 19. Sentence Frames — Dýr

**File:** `src/data/categories/dyr.ts`

### A1

| English | Icelandic (current) |
|---|---|
| This is an animal. | Þetta er dýr. |
| It is ___. | Það er ___. |
| It has ___. | Það hefur ___. |
| It is ___. | Það er ___. |
| It sounds ___. | Það hljómar ___. |
| You use it to ___. | Maður notar það til að ___. |

### A2

| English | Icelandic (current) |
|---|---|
| This is a ___ that lives ___. | Þetta er ___ sem býr ___. |
| It has ___ and ___. | Það hefur ___ og ___. |
| It eats ___. | Það étur ___. |
| It feels ___ to touch. | Það finnst ___ við snertingu. |
| You find it ___. | Maður finnur það ___. |
| You use it ___. | Maður notar það ___. |

### B1

| English | Icelandic (current) |
|---|---|
| I think this is a ___ because ___. | Ég held að þetta sé ___ vegna þess að ___. |
| This animal is ___ and ___. | Þetta dýr er ___ og ___. |
| It is similar to ___ but unlike ___. | Það er líkt ___ en ólíkt ___. |
| It is ___ to touch because ___. | Það er ___ að snerta vegna þess að ___. |
| It is most often used by ___ to ___. | Það er oftast notað af ___ til að ___. |

---

## 20. Sentence Frames — Matur og drykkur

**File:** `src/data/categories/matur.ts`

### A1

| English | Icelandic (current) |
|---|---|
| This is ___. | Þetta er ___. |
| It is ___. | Það er ___. |
| You eat it ___. | Maður borðar það ___. |
| It is ___. | Það er ___. |
| You use it to ___. | Maður notar það til að ___. |

### A2

| English | Icelandic (current) |
|---|---|
| This is a ___ that is ___. | Þetta er ___ sem er ___. |
| You eat/drink it ___. | Maður borðar/drekkur það ___. |
| It is ___. | Það er ___. |
| It feels ___ to touch. | Það finnst ___ við snertingu. |
| It is made of ___. | Það er gert úr ___. |
| You find it ___. | Maður finnur það ___. |
| You use it ___. | Maður notar það ___. |

### B1

| English | Icelandic (current) |
|---|---|
| This is a ___ that tastes ___. | Þetta er ___ sem bragðast ___. |
| It is often eaten/drunk ___. | Það er oft borðað/drukkið ___. |
| I think ___. | Mér finnst ___. |
| It is ___ to touch because ___. | Það er ___ að snerta vegna þess að ___. |
| It is made of ___ which is ___. | Það er gert úr ___ sem er ___. |
| It is most often used by ___ to ___. | Það er oftast notað af ___ til að ___. |

---

## 21. Sentence Frames — Farartæki

**File:** `src/data/categories/farartaeki.ts`

### A1

| English | Icelandic (current) |
|---|---|
| This is ___. | Þetta er ___. |
| It goes ___. | Það fer ___. |
| It is ___. | Það er ___. |
| It sounds ___. | Það hljómar ___. |
| You use it to ___. | Maður notar það til að ___. |

### A2

| English | Icelandic (current) |
|---|---|
| This is a ___ that goes ___. | Þetta er ___ sem fer ___. |
| It has ___ and is ___. | Það hefur ___ og er ___. |
| It feels ___ to touch. | Það finnst ___ við snertingu. |
| It is made of ___. | Það er gert úr ___. |
| You find it ___. | Maður finnur það ___. |
| You use it ___. | Maður notar það ___. |

### B1

| English | Icelandic (current) |
|---|---|
| This vehicle is a ___ that is used to ___. | Þetta farartæki er ___ sem er notað til að ___. |
| It can carry ___ and goes ___. | Það getur flutt ___ og fer ___. |
| It is ___ to touch because ___. | Það er ___ að snerta vegna þess að ___. |
| It is made of ___ which is ___. | Það er gert úr ___ sem er ___. |
| It is most often used by ___ to ___. | Það er oftast notað af ___ til að ___. |

---

## 22. Sentence Frames — Manneskja

**File:** `src/data/categories/manneskja.ts`

### A1

| English | Icelandic (current) |
|---|---|
| This is ___. | Þetta er ___. |
| She/He is ___. | Hún/Hann er ___. |
| She/He ___. | Hún/Hann ___. |
| You use it to ___. | Maður notar það til að ___. |

### A2

| English | Icelandic (current) |
|---|---|
| This is a ___ who is ___. | Þetta er ___ sem er ___. |
| She/He is ___ and ___. | Hún/Hann er ___ og ___. |
| She/He works as ___. | Hún/Hann vinnur sem ___. |
| You find it ___. | Maður finnur það ___. |
| You use it ___. | Maður notar það ___. |

### B1

| English | Icelandic (current) |
|---|---|
| I think this is a ___ because ___. | Ég held að þetta sé ___ vegna þess að ___. |
| This person is ___ and is known/unknown for ___. | Þessi manneskja er ___ og er þekkt/óþekkt fyrir ___. |
| It is most often used by ___ to ___. | Það er oftast notað af ___ til að ___. |

---

## 23. Sentence Frames — Staðir og byggingar

**File:** `src/data/categories/stadir.ts`

### A1

| English | Icelandic (current) |
|---|---|
| This is ___. | Þetta er ___. |
| You ___ there. | Maður ___ þar. |
| It is ___. | Það er ___. |
| You use it to ___. | Maður notar það til að ___. |

### A2

| English | Icelandic (current) |
|---|---|
| This is a ___ that is ___. | Þetta er ___ sem er ___. |
| You go there to ___. | Maður fer þangað til að ___. |
| It is made of ___. | Það er gert úr ___. |
| You find it ___. | Maður finnur það ___. |
| You use it ___. | Maður notar það ___. |

### B1

| English | Icelandic (current) |
|---|---|
| This is a ___ that is located ___. | Þetta er ___ sem er staðsett ___. |
| People go there to ___ and ___. | Fólk fer þangað til að ___ og ___. |
| It is ___ to touch because ___. | Það er ___ að snerta vegna þess að ___. |
| It is made of ___ which is ___. | Það er gert úr ___ sem er ___. |
| It is most often used by ___ to ___. | Það er oftast notað af ___ til að ___. |

---

## 24. Sentence Frames — Föt og klæðnaður

**File:** `src/data/categories/klaednadur.ts`

### A1

| English | Icelandic (current) |
|---|---|
| This is ___. | Þetta er ___. |
| It is ___. | Það er ___. |
| It is ___. | Það er ___. |
| You use it to ___. | Maður notar það til að ___. |

### A2

| English | Icelandic (current) |
|---|---|
| This is a ___ that is ___. | Þetta er ___ sem er ___. |
| You wear it ___. | Maður klæðist því ___. |
| It feels ___ to touch. | Það finnst ___ við snertingu. |
| It is made of ___. | Það er gert úr ___. |
| You find it ___. | Maður finnur það ___. |
| You use it ___. | Maður notar það ___. |

### B1

| English | Icelandic (current) |
|---|---|
| This is a ___ made of ___ that you use ___. | Þetta er ___ úr ___ sem maður notar ___. |
| It is ___ and suits well ___. | Það er ___ og hentar vel ___. |
| It is ___ to touch because ___. | Það er ___ að snerta vegna þess að ___. |
| It is made of ___ which is ___. | Það er gert úr ___ sem er ___. |
| It is most often used by ___ to ___. | Það er oftast notað af ___ til að ___. |

---

## 25. Examples (per category, per level)

**Files:** `src/components/SpjaldPreview.tsx`, `src/lib/pdf.ts`

### Dýr (Animals)

| Level | English | Icelandic (current) |
|---|---|---|
| A1 | This is an animal. It is big. It has fur. | Þetta er dýr. Það er stórt. Það hefur feld. |
| A2 | This is an animal that lives in water. It has scales and swims. It eats plants. | Þetta er dýr sem býr í vatni. Það hefur hreistur og syndir. Það étur plöntur. |
| B1 | I think this is a dolphin because it swims and lives in the ocean. This animal is gray and smart. It is similar to a whale but unlike a fish. | Ég held að þetta sé delfínn vegna þess að hann syndir og býr í sjónum. Þetta dýr er grátt og snjallt. Það er líkt hval en ólíkt fisk. |

### Matur og drykkur (Food & Drink)

| Level | English | Icelandic (current) |
|---|---|---|
| A1 | This is a fruit. It is sweet. You eat it for breakfast. | Þetta er ávöxtur. Það er sætt. Maður borðar það í morgunmat. |
| A2 | This is a vegetable that is green. You eat it raw. It is healthy. | Þetta er grænmeti sem er grænt. Maður borðar það hrátt. Það er hollt. |
| B1 | This is a fruit that tastes sweet and sour. It is often eaten as a snack. I think it is very good. | Þetta er ávöxtur sem bragðast sætt og súrt. Það er oft borðað sem millimál. Mér finnst það mjög gott. |

### Farartæki (Vehicles)

| Level | English | Icelandic (current) |
|---|---|---|
| A1 | This is a car. It goes on land. It is big. | Þetta er bíll. Það fer á landi. Það er stórt. |
| A2 | This is a ship that goes on the sea. It doesn't have wheels and is big. | Þetta er skip sem fer á sjó. Það hefur ekki hjól og er stórt. |
| B1 | This vehicle is an airplane that is used to travel long distances. It can carry many people and goes in the air. | Þetta farartæki er flugvél sem er notað til að ferðast langar leiðir. Það getur flutt marga og fer í lofti. |

### Manneskja (People)

| Level | English | Icelandic (current) |
|---|---|---|
| A1 | This is a teacher. She is young. She reads. | Þetta er kennari. Hún er ung. Hún les. |
| A2 | This is a woman who is tall. She is young and distinguished. She works as a doctor. | Þetta er kona sem er há. Hún er ung og mynduleg. Hún vinnur sem læknir. |
| B1 | I think this is a singer because she is famous and sings. This person is young and is known for music. | Ég held að þetta sé söngvari vegna þess að hún er fræg og syngur. Þessi manneskja er ung og er þekkt fyrir tónlist. |

### Staðir og byggingar (Places & Buildings)

| Level | English | Icelandic (current) |
|---|---|---|
| A1 | This is a school. You learn there. | Þetta er skóli. Maður lærir þar. |
| A2 | This is a swimming pool that is in the town. You go there to swim. | Þetta er sundlaug sem er í bænum. Maður fer þangað til að synda. |
| B1 | This is a museum that is located in the city. People go there to learn and look at art. | Þetta er safn sem er staðsett í borginni. Fólk fer þangað til að læra og skoða list. |

### Föt og klæðnaður (Clothing)

| Level | English | Icelandic (current) |
|---|---|---|
| A1 | This is a coat. It is blue. | Þetta er úlpa. Það er blátt. |
| A2 | This is a sweater that is red. You wear it in winter. | Þetta er peysa sem er rauð. Maður klæðist því á veturna. |
| B1 | This is a leather jacket that you use in winter. It is black and suits well in cold weather. | Þetta er jakki úr leðri sem maður notar á veturna. Það er svart og hentar vel í kulda. |

---

## 26. Teacher Notes (per level)

**Files:** `src/components/SpjaldPreview.tsx`, `src/lib/pdf.ts`

| Level | English | Icelandic (current) |
|---|---|---|
| A1 | The student points at words on the card and forms simple sentences. Help the student choose the right words and say a complete sentence. | Nemandi bendir á orð af spjaldinu og myndar einfaldar setningar. Hjálpið nemandanum að velja rétt orð og segja heil(a) setningu. |
| A2 | The student connects two or three sentences. Encourage the student to use different words from the sub-categories. | Nemandi tengir saman tvær eða þrjár setningar. Hvetjið nemandann til að nota mismunandi orð úr undirflokkunum. |
| B1 | The student uses sentence frames as a base but adds their own ideas. Encourage comparison and reasoning. | Nemandi notar setningaramma sem grunn en bætir við eigin hugmyndum. Hvetjið til samanburðar og rökstuðnings. |

**Note:** The A1 teacher note has a minor difference between the two files: `SpjaldPreview.tsx` says "segja heil setning" while `pdf.ts` says "segja heila setningu". These should be consistent.

---

## 27. Guiding Questions

These are the questions shown on the question card (spurningaspjald). Each category has its own set, but many share the same wording. Listed here are the unique question texts across all categories.

| English | Icelandic (current) | Used in categories |
|---|---|---|
| What kind of animal is this? | Hvers konar dýr er þetta? | Dýr |
| What kind of food is this? | Hvers konar matur er þetta? | Matur |
| What kind of vehicle is this? | Hvers konar farartæki er þetta? | Farartæki |
| What kind of person is this? | Hvers konar manneskja er þetta? | Manneskja |
| What kind of place is this? | Hvers konar staður er þetta? | Staðir |
| What kind of clothing is this? | Hvers konar klæðnaður er þetta? | Klæðnaður |
| How does it look? | Hvernig lítur það út? | Dýr, Matur, Farartæki, Klæðnaður |
| How does this look? | Hvernig lítur þetta út? | Staðir |
| How does she/he look? | Hvernig lítur hún/hann út? | Manneskja |
| How does it feel to touch? | Hvernig finnst það við snertingu? | Dýr, Matur, Klæðnaður |
| What sound does it make? | Hvaða hljóð gefur það frá sér? | Dýr, Farartæki |
| How does it taste? | Hvernig bragðast það? | Matur |
| How does it smell? | Hvernig lyktar af því? | Matur |
| How does it smell there? | Hvernig lyktar þar? | Staðir |
| What shape does it have? | Hvaða lögun hefur það? | Dýr, Matur, Farartæki, Manneskja, Staðir, Klæðnaður |
| What is it made of? | Úr hverju er það gert? | Farartæki, Staðir, Klæðnaður |
| What is it used for? | Til hvers er það notað? | Dýr, Matur, Farartæki, Staðir, Klæðnaður |
| What is she/he known for? | Til hvers er hún/hann þekktur? | Manneskja |
| What is this used for? | Til hvers er þetta notað? | Staðir |
| Who uses this? | Hver notar þetta? | All categories |
| Where can you find this? | Hvar er hægt að finna þetta? | Dýr, Matur |
| Where can you use/find this? | Hvar er hægt að nota/finna þetta? | Farartæki |
| Where can you find this person? | Hvar er hægt að finna þessa manneskju? | Manneskja |
| Where can you use this? | Hvar er hægt að nota þetta? | Klæðnaður |
| Where is this? | Hvar er þetta? | Staðir |
| When is this seen? | Hvenær er þetta sést? | Dýr |
| When is this used? | Hvenær er þetta notað? | Matur, Farartæki, Staðir, Klæðnaður |
| When is she/he active? | Hvenær er hún/hann virk/virkur? | Manneskja |

---

## 28. PDF-Only Text

**File:** `src/lib/pdf.ts`

| English | Icelandic (current) | Notes |
|---|---|---|
| Sentence frames | Setningarammar | Page 2 title |
| Example | Dæmi | Section label |
| For teachers: | Fyrir kennara: | Teacher note prefix |
| Question card | Spurningaspjald | Page 3 title |
| Purpose and context | Notagildi og samhengi | Section divider |
| Icelandic Path — Women's School in Reykjavík — [Category] [Level] | Íslenskubraut — Kvennaskólinn í Reykjavík — [Flokkur] [Stig] | Page footer (all 3 pages) |

---

## 29. Guiding Question Answer Options — Dýr

**File:** `src/data/categories/dyr.ts`

### Hvers konar dýr er þetta? (📚)

| Level | Options (Icelandic) |
|---|---|
| A1 | gæludýr, villt dýr, húsdýr |
| A2 | gæludýr, villt dýr, húsdýr, spendýr, fugl, fiskur |
| B1 | gæludýr, villt dýr, húsdýr, spendýr, fugl, fiskur, skriðdýr, froskdýr, skordýr |

### Hvernig lítur það út? (👁️)

| Level | Options (Icelandic) |
|---|---|
| A1 | feldur, fjaðrir, hreistur, hali |
| A2 | feldur, fjaðrir, hreistur, hali, goggur, horn, fjórir fætur, tveir fætur |
| B1 | feldur, fjaðrir, hreistur, hali, goggur, horn, fjórir fætur, tveir fætur, flýgur, syndir, hleypur |

### Hvernig finnst það við snertingu? (✋)

| Level | Options (Icelandic) |
|---|---|
| A1 | mjúkt, hart, sléttt, gróft |
| A2 | mjúkt, hart, sléttt, gróft, þungt, létt, blautt, þurrt |
| B1 | mjúkt, hart, sléttt, gróft, þungt, létt, blautt, þurrt, loðið, hálkt, stinnt, sveigjanlegt |

### Hvaða hljóð gefur það frá sér? (🔊)

| Level | Options (Icelandic) |
|---|---|
| A1 | hátt, lágt, þögult |
| A2 | hátt, lágt, þögult, gelur, mjallar, öskrar, súðar, hringir |
| B1 | hátt, lágt, þögult, gelur, mjallar, öskrar, súðar, hringir, hvæsir, umar, dúnar, þrymir |

### Hvaða lögun hefur það? (🔷)

| Level | Options (Icelandic) |
|---|---|
| A1 | stórt, lítið, kringlótt, fernt |
| A2 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt |
| B1 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt, sporöskjulaga, þríhyrningslaga, sívalningslaga, óreglulegt |

### Til hvers er það notað? (🎯)

| Level | Options (Icelandic) |
|---|---|
| A1 | til að gæta, til að klappa, til að borða |
| A2 | til að gæta, til að klappa, til að borða, til að hjálpa, til að vinna, til að leika sér |
| B1 | til að gæta, til að klappa, til að borða, til að hjálpa, til að vinna, til að leika sér, til að verja, til að rannsaka |

### Hver notar þetta? (👤)

| Level | Options (Icelandic) |
|---|---|
| A1 | allir, börn, fullorðnir |
| A2 | allir, börn, fullorðnir, bændur, dýralæknar, veiðimenn |
| B1 | allir, börn, fullorðnir, bændur, dýralæknar, veiðimenn, sérfræðingar, ferðamenn |

### Hvar er hægt að finna þetta? (📍)

| Level | Options (Icelandic) |
|---|---|
| A1 | heima, úti, á bæ |
| A2 | heima, úti, á bæ, í dýragarðinum, í náttúrunni, í sjónum |
| B1 | heima, úti, á bæ, í dýragarðinum, í náttúrunni, í sjónum, á hálendinu, í skóginum |

### Hvenær er þetta sést? (🕐)

| Level | Options (Icelandic) |
|---|---|
| A1 | á morgnana, á daginn, á kvöldin, alltaf |
| A2 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar |
| B1 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, í sérstökum tilvikum, daglega, sjaldan, oft |

---

## 30. Guiding Question Answer Options — Matur og drykkur

**File:** `src/data/categories/matur.ts`

### Hvers konar matur er þetta? (📚)

| Level | Options (Icelandic) |
|---|---|
| A1 | ávöxtur, grænmeti, kjöt, drykkur |
| A2 | ávöxtur, grænmeti, kjöt, fiskur, mjólkurvara, sælgæti, brauð/korn, drykkur |
| B1 | ávöxtur, grænmeti, kjöt, fiskur, mjólkurvara, sælgæti, brauð/korn, drykkur, krydd, sósa |

### Hvernig lítur það út? (👁️)

| Level | Options (Icelandic) |
|---|---|
| A1 | rautt, grænt, gult, hvítt |
| A2 | rautt, grænt, gult, hvítt, brúnt, appelsínugult, stórt, lítið |
| B1 | rautt, grænt, gult, hvítt, brúnt, appelsínugult, stórt, lítið, kringlótt, langt, flatt |

### Hvernig bragðast það? (👅)

| Level | Options (Icelandic) |
|---|---|
| A1 | sætt, salt, súrt, beiskt |
| A2 | sætt, salt, súrt, beiskt, kryddað, sterkt, milt, ferskt |
| B1 | sætt, salt, súrt, beiskt, kryddað, sterkt, milt, ferskt, bragðmikið, bragðlaust, sælgæti-sætt, náttúrulega sætt |

### Hvernig finnst það við snertingu? (✋)

| Level | Options (Icelandic) |
|---|---|
| A1 | mjúkt, hart, sléttt, gróft |
| A2 | mjúkt, hart, sléttt, gróft, þungt, létt, heitt, kalt, blautt, þurrt |
| B1 | mjúkt, hart, sléttt, gróft, þungt, létt, heitt, kalt, blautt, þurrt, loðið, hálkt, stinnt, sveigjanlegt |

### Hvernig lyktar af því? (👃)

| Level | Options (Icelandic) |
|---|---|
| A1 | gott, vont, ekkert |
| A2 | gott, vont, ekkert, ferskt, sterkt, milt |
| B1 | gott, vont, ekkert, ferskt, sterkt, milt, ilmandi, stingandi, sætt, beiskt |

### Hvaða lögun hefur það? (🔷)

| Level | Options (Icelandic) |
|---|---|
| A1 | stórt, lítið, kringlótt, fernt |
| A2 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt |
| B1 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt, sporöskjulaga, þríhyrningslaga, sívalningslaga, óreglulegt |

### Til hvers er það notað? (🎯)

| Level | Options (Icelandic) |
|---|---|
| A1 | til að borða, til að drekka |
| A2 | til að borða, til að drekka, til að elda með, til að baka með |
| B1 | til að borða, til að drekka, til að elda með, til að baka með, til að næra sig, til að njóta |

### Hver notar þetta? (👤)

| Level | Options (Icelandic) |
|---|---|
| A1 | allir, börn, fullorðnir |
| A2 | allir, börn, fullorðnir, kokkar, bakarar |
| B1 | allir, börn, fullorðnir, kokkar, bakarar, sérfræðingar, ferðamenn |

### Hvar er hægt að finna þetta? (📍)

| Level | Options (Icelandic) |
|---|---|
| A1 | heima, í búð, á veitingastað |
| A2 | heima, í búð, á veitingastað, í skólanum, úti |
| B1 | heima, í búð, á veitingastað, í skólanum, úti, á markaði, í garðinum |

### Hvenær er þetta notað? (🕐)

| Level | Options (Icelandic) |
|---|---|
| A1 | á morgnana, á daginn, á kvöldin, alltaf |
| A2 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum |
| B1 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum, í sérstökum tilvikum, í hátíðum, daglega, sjaldan, oft |

---

## 31. Guiding Question Answer Options — Farartæki

**File:** `src/data/categories/farartaeki.ts`

### Hvers konar farartæki er þetta? (📚)

| Level | Options (Icelandic) |
|---|---|
| A1 | bíll, rúta, hjól, flugvél, skip |
| A2 | bíll, rúta, hjól, mótorhjól, lest, flugvél, skip/bátur, sleði |
| B1 | bíll, rúta, hjól, mótorhjól, lest, flugvél, skip/bátur, sleði, hlaupahjól, sportvagn, þyrla |

### Hvernig lítur það út? (👁️)

| Level | Options (Icelandic) |
|---|---|
| A1 | stórt, lítið, með hjólum, án hjóla |
| A2 | stórt, lítið, með hjólum, án hjóla, langt, stuttt, hátt, lágt |
| B1 | stórt, lítið, með hjólum, án hjóla, langt, stuttt, hátt, lágt, straumlínulaga, fernt, hraðvirkt |

### Hvaða hljóð gefur það frá sér? (🔊)

| Level | Options (Icelandic) |
|---|---|
| A1 | hátt, lágt, þögult |
| A2 | hátt, lágt, þögult, súðar, hringir, öskrar |
| B1 | hátt, lágt, þögult, súðar, hringir, öskrar, hvæsir, umar, dúnar, þrymir |

### Úr hverju er það gert? (🧱)

| Level | Options (Icelandic) |
|---|---|
| A1 | úr málmi, úr plasti, úr tré |
| A2 | úr málmi, úr plasti, úr tré, úr steini, úr gleri |
| B1 | úr málmi, úr plasti, úr tré, úr steini, úr gleri, úr endurunnru efni, úr náttúrulegum efnum, úr gerviefnum |

### Hvaða lögun hefur það? (🔷)

| Level | Options (Icelandic) |
|---|---|
| A1 | stórt, lítið, kringlótt, fernt |
| A2 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt |
| B1 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt, sporöskjulaga, þríhyrningslaga, sívalningslaga, óreglulegt |

### Til hvers er það notað? (🎯)

| Level | Options (Icelandic) |
|---|---|
| A1 | til að ferðast, til að flytja, til að leika sér |
| A2 | til að ferðast, til að flytja, til að leika sér, til að vinna |
| B1 | til að ferðast, til að flytja, til að leika sér, til að vinna, til að keppa, til að bjarga |

### Hver notar þetta? (👤)

| Level | Options (Icelandic) |
|---|---|
| A1 | allir, börn, fullorðnir |
| A2 | allir, börn, fullorðnir, bílstjórar, flugmenn, sjómenn |
| B1 | allir, börn, fullorðnir, bílstjórar, flugmenn, sjómenn, sérfræðingar, ferðamenn, iðnaðarmenn |

### Hvar er hægt að nota/finna þetta? (📍)

| Level | Options (Icelandic) |
|---|---|
| A1 | á götunni, á sjónum, í loftinu |
| A2 | á götunni, á sjónum, í loftinu, á þjóðveginum, á flugvellinum |
| B1 | á götunni, á sjónum, í loftinu, á þjóðveginum, á flugvellinum, í höfninni, á lestarbraut |

### Hvenær er þetta notað? (🕐)

| Level | Options (Icelandic) |
|---|---|
| A1 | á morgnana, á daginn, á kvöldin, alltaf |
| A2 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum |
| B1 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum, í sérstökum tilvikum, í hátíðum, daglega, sjaldan, oft |

---

## 32. Guiding Question Answer Options — Manneskja

**File:** `src/data/categories/manneskja.ts`

### Hvers konar manneskja er þetta? (📚)

| Level | Options (Icelandic) |
|---|---|
| A1 | barn, fullorðinn, gamall/gömul |
| A2 | barn, unglingur, fullorðinn, aldraður/öldruð, fræg, ekki fræg |
| B1 | barn, unglingur, fullorðinn, aldraður/öldruð, fræg, ekki fræg, á lífi, látin, skálduð persóna |

### Hvernig lítur hún/hann út? (👁️)

| Level | Options (Icelandic) |
|---|---|
| A1 | há/hár, lág/lágur, ung/ungur, gömul/gamall |
| A2 | há/hár, lág/lágur, ung/ungur, gömul/gamall, með sítt hár, með stutt hár, með gleraugu |
| B1 | há/hár, lág/lágur, ung/ungur, gömul/gamall, með sítt hár, með stutt hár, sköllótt, með gleraugu, með skegg, án skeggs |

### Hvaða lögun hefur það? (🔷)

| Level | Options (Icelandic) |
|---|---|
| A1 | stórt, lítið, hátt, lágt |
| A2 | stórt, lítið, hátt, lágt, langt, stuttt, þykkt, mjótt |
| B1 | stórt, lítið, hátt, lágt, langt, stuttt, þykkt, mjótt, sporöskjulaga, kringlótt |

### Til hvers er hún/hann þekktur? (🎯)

| Level | Options (Icelandic) |
|---|---|
| A1 | til að vinna, til að læra, til að leika sér |
| A2 | til að vinna, til að læra, til að leika sér, til að syngja, til að lækna, til að kenna |
| B1 | til að vinna, til að læra, til að leika sér, til að syngja, til að lækna, til að kenna, til að stjórna, til að skapa |

### Hver notar þetta? (👤)

| Level | Options (Icelandic) |
|---|---|
| A1 | allir, börn, fullorðnir |
| A2 | allir, börn, fullorðnir, nemendur, kennarar, læknar, íþróttamenn |
| B1 | allir, börn, fullorðnir, nemendur, kennarar, læknar, íþróttamenn, sérfræðingar, listamenn, ferðamenn, iðnaðarmenn |

### Hvar er hægt að finna þessa manneskju? (📍)

| Level | Options (Icelandic) |
|---|---|
| A1 | heima, í vinnunni, í skólanum |
| A2 | heima, í vinnunni, í skólanum, á sjúkrahúsi, á leikvelli |
| B1 | heima, í vinnunni, í skólanum, á sjúkrahúsi, á leikvelli, á sviði, í sjónvarpi, á ferðalagi |

### Hvenær er hún/hann virk/virkur? (🕐)

| Level | Options (Icelandic) |
|---|---|
| A1 | á morgnana, á daginn, á kvöldin, alltaf |
| A2 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum |
| B1 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum, í sérstökum tilvikum, í hátíðum, daglega, sjaldan, oft |

---

## 33. Guiding Question Answer Options — Staðir og byggingar

**File:** `src/data/categories/stadir.ts`

### Hvers konar staður er þetta? (📚)

| Level | Options (Icelandic) |
|---|---|
| A1 | hús, skóli, búð, sundlaug |
| A2 | hús, íbúð, skóli, sjúkrahús, búð/verslun, veitingastaður, safn, kirkja, sundlaug, leikvöllur |
| B1 | hús, íbúð, skóli, sjúkrahús, búð/verslun, veitingastaður, safn, kirkja, sundlaug, leikvöllur, bókasafn, íþróttahús |

### Hvernig lítur þetta út? (👁️)

| Level | Options (Icelandic) |
|---|---|
| A1 | stórt, lítið, hátt, lágt |
| A2 | stórt, lítið, hátt, lágt, gamalt, nýtt, fallegt, ljótt |
| B1 | stórt, lítið, hátt, lágt, gamalt, nýtt, fallegt, ljótt, nútímalegt, sögulegt |

### Hvernig lyktar þar? (👃)

| Level | Options (Icelandic) |
|---|---|
| A1 | gott, vont, ekkert |
| A2 | gott, vont, ekkert, ferskt, sterkt, milt |
| B1 | gott, vont, ekkert, ferskt, sterkt, milt, ilmandi, stingandi, sætt, beiskt |

### Úr hverju er það gert? (🧱)

| Level | Options (Icelandic) |
|---|---|
| A1 | úr tré, úr steini, úr málmi |
| A2 | úr tré, úr steini, úr málmi, úr gleri, úr plasti |
| B1 | úr tré, úr steini, úr málmi, úr gleri, úr plasti, úr endurunnru efni, úr náttúrulegum efnum, úr gerviefnum |

### Hvaða lögun hefur það? (🔷)

| Level | Options (Icelandic) |
|---|---|
| A1 | stórt, lítið, kringlótt, fernt |
| A2 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt |
| B1 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt, sporöskjulaga, þríhyrningslaga, sívalningslaga, óreglulegt |

### Til hvers er þetta notað? (🎯)

| Level | Options (Icelandic) |
|---|---|
| A1 | til að búa, til að læra, til að versla |
| A2 | til að búa, til að læra, til að versla, til að vinna, til að hvílast |
| B1 | til að búa, til að læra, til að versla, til að vinna, til að hvílast, til að stunda íþróttir, til að skemmta sér |

### Hver notar þetta? (👤)

| Level | Options (Icelandic) |
|---|---|
| A1 | allir, börn, fullorðnir |
| A2 | allir, börn, fullorðnir, nemendur, kennarar, læknar |
| B1 | allir, börn, fullorðnir, nemendur, kennarar, læknar, sérfræðingar, listamenn, ferðamenn, iðnaðarmenn |

### Hvar er þetta? (📍)

| Level | Options (Icelandic) |
|---|---|
| A1 | í bænum, úti á landi, við sjóinn |
| A2 | í bænum, úti á landi, við sjóinn, í úthverfi, í fjöllunum |
| B1 | í bænum, úti á landi, við sjóinn, í úthverfi, í fjöllunum, í miðborginni, á hálendinu |

### Hvenær er þetta notað? (🕐)

| Level | Options (Icelandic) |
|---|---|
| A1 | á morgnana, á daginn, á kvöldin, alltaf |
| A2 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum |
| B1 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum, í sérstökum tilvikum, í hátíðum, daglega, sjaldan, oft |

---

## 34. Guiding Question Answer Options — Föt og klæðnaður

**File:** `src/data/categories/klaednadur.ts`

### Hvers konar klæðnaður er þetta? (📚)

| Level | Options (Icelandic) |
|---|---|
| A1 | bolur, buxur, jakki, skór |
| A2 | bolur, peysa, skyrta, buxur, pilsið, jakki, úlpa, sokkar, skór, húfa |
| B1 | bolur, peysa, skyrta, buxur, pilsið, jakki, úlpa, sokkar, skór, húfa, hanskar, trefill |

### Hvernig lítur það út? (👁️)

| Level | Options (Icelandic) |
|---|---|
| A1 | rautt, blátt, grænt, svart, hvítt |
| A2 | rautt, blátt, grænt, svart, hvítt, gult, bleikt, brúnt, stórt, lítið |
| B1 | rautt, blátt, grænt, svart, hvítt, gult, bleikt, brúnt, stórt, lítið, mynstur, einlitt |

### Hvernig finnst það við snertingu? (✋)

| Level | Options (Icelandic) |
|---|---|
| A1 | mjúkt, hart, sléttt, gróft |
| A2 | mjúkt, hart, sléttt, gróft, þungt, létt, heitt, kalt, blautt, þurrt |
| B1 | mjúkt, hart, sléttt, gróft, þungt, létt, heitt, kalt, blautt, þurrt, loðið, hálkt, stinnt, sveigjanlegt |

### Úr hverju er það gert? (🧱)

| Level | Options (Icelandic) |
|---|---|
| A1 | úr ull, úr bómull, úr leðri, úr plasti |
| A2 | úr ull, úr bómull, úr leðri, úr plasti, úr tré, úr málmi, úr steini, úr gleri |
| B1 | úr ull, úr bómull, úr leðri, úr plasti, úr tré, úr málmi, úr steini, úr gleri, úr endurunnru efni, úr náttúrulegum efnum, úr gerviefnum |

### Hvaða lögun hefur það? (🔷)

| Level | Options (Icelandic) |
|---|---|
| A1 | stórt, lítið, kringlótt, fernt |
| A2 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt |
| B1 | stórt, lítið, kringlótt, fernt, langt, stuttt, hátt, lágt, flatt, þykkt, sporöskjulaga, þríhyrningslaga, sívalningslaga, óreglulegt |

### Til hvers er það notað? (🎯)

| Level | Options (Icelandic) |
|---|---|
| A1 | til að hlýja sér, til að verja sig, til að líta vel út |
| A2 | til að hlýja sér, til að verja sig, til að líta vel út, til að stunda íþróttir |
| B1 | til að hlýja sér, til að verja sig, til að líta vel út, til að stunda íþróttir, til að vinna, til að vera þægilegur |

### Hver notar þetta? (👤)

| Level | Options (Icelandic) |
|---|---|
| A1 | allir, börn, fullorðnir |
| A2 | allir, börn, fullorðnir, nemendur, íþróttamenn |
| B1 | allir, börn, fullorðnir, nemendur, íþróttamenn, sérfræðingar, listamenn, ferðamenn, iðnaðarmenn |

### Hvar er hægt að nota þetta? (📍)

| Level | Options (Icelandic) |
|---|---|
| A1 | inni, úti, í skólanum |
| A2 | inni, úti, í skólanum, í vinnunni, í íþróttum |
| B1 | inni, úti, í skólanum, í vinnunni, í íþróttum, á hátíð, á ferðalagi |

### Hvenær er þetta notað? (🕐)

| Level | Options (Icelandic) |
|---|---|
| A1 | á morgnana, á daginn, á kvöldin, alltaf |
| A2 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum |
| B1 | á morgnana, á daginn, á kvöldin, alltaf, á veturna, á sumrin, um helgar, á virkum dögum, í sérstökum tilvikum, í hátíðum, daglega, sjaldan, oft |

---

## How to Use This Document

1. **Review** the Icelandic column for each section
2. **Edit** any Icelandic text that needs correction directly in this file
3. **Save** the file
4. The codebase can then be updated to match your corrected translations

When editing, feel free to:
- Fix grammar, declension, or word choice
- Replace ambiguous single-word translations with clearer alternatives
- Add notes in the "Notes" column about context or preferred alternatives
- Flag items you want to discuss further
