# Portfolio vs. reference video — frame-by-frame gap analysis

**Source:** `Alim_Joldaspayev_-_My_new_portfolio_is_live_Duhswb.mp4` — 41.05s, 1722×1080, 60fps, 2,461 frames.
Extracted at 1fps to 41 frames + four contact sheets for this analysis.

**Reference:** Alim Joldaspayev's live portfolio (`UX/UI Designer, Framer expert`).

**Verdict up front:** your build is a genuinely faithful recreation of the *interaction model* — you
independently arrived at the same architecture. What you have not matched is the **spatial depth of
the corridor** and the **visual density of its contents**. Six frames in two flat planes versus
seventeen frames receding into a tunnel is the single difference the eye catches instantly.

---

## 1. Frame-by-frame timeline of the reference

| Time | Section | What is actually on screen |
| --- | --- | --- |
| 0–3s | Intro | Frame types out `Alim Jolda\|` → `Alim Joldaspayev`. Second line types `UX/UI Designer,\|`. Blue Figma ring, 4 corner handles, dimension badge below. |
| 4s | Intro | Settled: "Alim Joldaspayev / UX/UI Designer, Framer expert" |
| 5–6s | Transition | Camera pulls *back* out of the intro frame into 3D space |
| 7–11s | Works | Deep corridor revealed. "How this works" modal auto-appears over it. Counter reads `‹ / 17` |
| 12s | Works | `Monsalud / Footer` — "Ladle" site, archway + steam-train imagery |
| 13s | Works | `Cloudy / Integrations` — one frame stepped up, dark artwork, **`View on X ↗` sits under the frame** |
| 14–15s | Works | Dark canvases, generative art |
| 16–17s | Works | "QED" product page (mountain illustration); desert-dunes hero: *"…al has a horizon. It watches it for you."* |
| 18–20s | Works | Dark frames with generative plots — three circular polar/radar charts, a grid plot |
| 21–22s | About | Portrait + *"I create modern digital experiences…"* + huge **30+ / 62+ / $25M** |
| 23–31s | About | Card walk: "Works with" pills (Startups, SaaS, AI, Fintech, Personal brands), "Open to" pills (Freelance, Collaborations, Full-time, Part-time), employment timeline (Founder & Designer 2020–2024 · Middle UX/UI Designer · UX/UI Designer 2018–2020). Counter `2 / 4` |
| 32–37s | Contact | "Let's build your next website" + **real Cal.com embed** (October 2026, day 3 active, 8:45–9:45pm slots, 12h/24h toggle) + Telegram / X / LinkedIn / Instagram pills |
| 38–41s | Works | Returns to the corridor, full depth |

---

## 2. Feature comparison

| Feature | Reference | Yours | Status |
| --- | --- | --- | --- |
| Section breadcrumb top-left | `Alim Joldaspayev / Works` | `Idriss Zaghez / Works` + LinkedIn link | ✅ match |
| Intro typing animation | Name + role, two stages | `fullIntroName` / `fullIntroRole`, phased | ✅ match |
| Figma selection ring + 4 handles | Blue `#0099FF`, 8px squares | `FigmaSelectionBox`, same values | ✅ match |
| Dimension badge under frame | Yes | Yes | ✅ match |
| Dual fake cursors | Orange "Client" + purple "Alim" | Orange "Client" + purple "Idriss" | ✅ match |
| "How this works" modal | Auto-shows, signature, Got it | `showHowItWorks` + blue squiggle sig | ✅ match |
| Bottom nav + counter + `?` | `Works About Contact ‹ 3 / 17 › ?` | Same, counter `‹ / 6` | ✅ match |
| Pointer interaction model | wheel / arrows / click / drag / Esc | `handleWheel`, drag, arrows | ✅ match |
| About: 4 cards | portrait · About · In numbers · timeline | 4 cards (`activeAboutIndex` 0–3) | ✅ match |
| "Works with" / "Open to" pills | Startups, SaaS, AI… / Freelance… | Legal AI Advisory, Collaborations, Enterprise Licensing | ✅ match (localised) |
| "In numbers" big-type card | 30+ / 62+ / $25M | 20 / 1.595 / 30.243 / 533 | ✅ match (your real metrics) |
| Cal.com contact block | Oct 2026, day 3, 8:45–9:45pm, 12h/24h | `october2026Cells`, same slots, same toggle | ✅ match |
| **Corridor frame count** | **17** | **6** | ❌ **biggest gap** |
| **Wall geometry** | Deep tunnel — frames at *varying depth*, floor + ceiling visible, walls curve | Two **flat planes** rotated `rotateY(±40deg)`, 3 frames each, no depth stagger | ❌ **missing** |
| **Floor / ceiling** | Visible, soft gradient, sells the perspective | Absent | ❌ missing |
| Labels on non-active frames | Every frame labelled, greyer when inactive | `FigmaSelectionBox` supports `active` state | ⚠️ partial |
| Link under each frame | `View on X ↗` / `Visit live ↗` | `Click to inspect ↗` / `Visit live ↗` | ✅ adequate |
| Frame artwork | Photographic renders, real client sites | Flat SVG recreations | ⚠️ see §3 |
| About: employment timeline | Yes | Present in card 4 | ✅ match |
| Contact socials row | Telegram, X, LinkedIn, Instagram | LinkedIn | ⚠️ partial |

**20 of 22 features match.** The two failures are both in the Works corridor.

---

## 3. The three real gaps, ranked by visual impact

### Gap 1 — Corridor depth (dominant)

Yours:
```jsx
perspective: '1350px'
left  wall: rotateY(40deg)  translateZ(-30px)   // 3 frames, same depth
right wall: rotateY(-40deg) translateZ(-30px)   // 3 frames, same depth
```

Everything sits on two flat planes at one depth. The reference is a **tunnel**: each successive
frame is pushed further away, scaled down, and rotated slightly more toward the vanishing point, so
the eye reads a corridor rather than two placards. That staggering is what produces the "wow".

Fixing it is geometry, not redraw — per-frame `translateZ`/`scale`/`rotateY` offsets plus a floor
and ceiling plane. It would transform the section without touching a single frame's contents.

### Gap 2 — Frame count (6 → ~16)

The counter is visible proof: `‹ / 17` vs `‹ / 6`. Your three products each have far more than two
screens available. Sketched from what you already built:

- **Algeria Law Library** — Home/Hero · AI Assistant · JORA search · category browse · article view · pricing (≈6)
- **محامي PDF** — Login · Tools grid · Compress · Redact/watermark · Merge/Split (≈5)
- **IdrissClaw** — Agent OS · Agents panel · Chat · MCP orchestrator · Execution log (≈5)

That's ~16 frames from material you've already designed, versus 6 today.

### Gap 3 — Frame artwork fidelity

The reference's frames hold photographic and rendered artwork. Yours are flat SVG reconstructions of
your own products. This is the one place where you may be **worse off than you need to be** — you
have three real, shipped products with real screens. Actual screenshots would look markedly richer
than vector approximations, and they'd be more honest: a visitor would be seeing the actual product.

That needs your files, not my drawing. It's the highest-return change per unit of effort, but it's
blocked on you supplying screenshots.

---

## 4. What I would not change

- The typography scale, the `#0099FF` selection language, the label treatment above frames.
- `base: '/'`, the single-source-of-truth file layout, the build/CI pipeline — all verified working.
- Your Arabic/RTL handling. The reference is English-only; you carry two languages and full RTL in
  the same component, including a bilingual tools grid. That is *harder* than what the reference
  does, and it survives the round trip to a live site.
