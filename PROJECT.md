# PROJECT.md

## Purpose
Public-facing portfolio that presents eight reproduce-and-measure AI-failure projects, in two lanes (model internals and agent reliability), as one body of work — a method-first index, an honesty charter, and per-project cards — sanitized so a hiring manager can open, run, and poke any linked repo.

## Scope
**In scope (current phase):**
- Curating the index (README.md), the Methodology & Honesty Charter, and the eight project cards (`projects/`)
- Keeping every stat on a card traceable to its project's repo (all eight public)
- GAPS-AND-NEXT.md as the living-edges doc

**Moved out (2026-07-28):** the fluency curriculum — LEARNING-ROADMAP.md (learn), PRACTICE.md (drill), and the `learn/` guides — now lives in the private [ksdisch/portfolio-prep](https://github.com/ksdisch/portfolio-prep). It is study material about my own gaps: useful to me, misleading to a reader who lands on it without context (Decision: Decisions.md D5).

**Out of scope / deferred / never:**
- No code is copied into this folder — cards link out to the real repos (Fact: README.md)
- The eight project repos evolve in their own repos; this folder only reflects them
- The paper authors' own reference packages are cross-check oracles — never carded as Kyle's work (Fact: README.md, GAPS-AND-NEXT.md)
- `trajectory-otel` is scaffold-stage substrate, not carded until M0 exists (Fact: GAPS-AND-NEXT.md)

## Current status
Active — built 2026-07-21; refreshed 2026-07-28; restructured into two lanes with `hush-gauge`
carded in progress 2026-08-01; `hush-gauge`'s M1 results (G1/G2 pre-committed nulls) carded
2026-08-03; `blind-cite`'s public-and-M1-complete flip carded 2026-08-03. All eight linked repos
are public. The portfolio is complete as a shareable artifact; the open work is keeping cards in
sync as the underlying projects advance — `hush-gauge` first among them.

## Next actions
1. Card `blind-cite`'s v1 close when its D11 is decided (the repo proposes closing at M1 — M2 would suppress a rate already ~0 and M3 would ablate a phenomenon that occurred twice; the call is Kyle's and is logged Proposed, not decided).
2. Refresh cards as per-project next steps in GAPS-AND-NEXT.md land (e.g., ghost-patch higher-N re-run, dim-stage band re-derivation).
3. Card `hush-gauge`'s M2/G3 stats from `docs/M2-RESULTS.md` on its `main` — PR #10 **merged 2026-08-03** (G3 FAIL at all three scales), so D11's trigger has fired and the card's status-only carry should now become stats. M1's G1/G2 nulls were carded 2026-08-03. After M2 lands, the card follows the detachable M3/G4 if it runs. mute-map's S1/S2 stretches were declined for that repo and banked in the J-lens follow-on backlog.

## Boundaries
- Docs-only folder: markdown, no runnable code
- Every substantive number must trace to a linked public repo — verified, not taken from notes (Fact: README.md)
- Sanitized for external sharing; honesty caveats (injected gap, headline nulls, hobby scale) stay stated plainly, never softened
- Hobby-scale framing is the stated scope of the underlying work: cheap/small models, hard budget guards, judge-free deterministic oracles (Fact: METHODOLOGY.md)
