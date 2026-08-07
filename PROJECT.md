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
Active — built 2026-07-21; refreshed 2026-07-28; restructured into two lanes 2026-08-01;
`hush-gauge`'s M1 and `blind-cite`'s public-and-M1-complete flip carded 2026-08-03.
**Re-carded 2026-08-05 (Decision D14):** both flagship cards had fallen behind their own repos and
are now current — `hush-gauge` is **complete (M0–M4)** with the full gate ledger including
`G4 NOT-RUN`, and `blind-cite`'s "well-powered null" is **withdrawn**, replaced by its own
pre-registered M1C extension finding DG at both surfaces. All eight linked repos are public and
**all eight now ship a research paper and presenter pack** on their default branch. The portfolio
is complete as a shareable artifact, and the open work is keeping it current as the underlying
projects advance.
**Write-ups linked 2026-08-07 (Decision D15):** all eight cards now point at their repo's paper +
presenter pack (+ plain-English rewrite where one exists), closing the last mechanical item D14
left open. No project repo has moved since 2026-08-05. **One carded number was wrong regardless:**
`dim-stage`'s "118 analytic tests" is 86 in a clean clone (the 2026-08-03 audit's `DS-2`, correct
all along) and the card now says 86 — which puts it knowingly *ahead* of `dim-stage`'s own README
until that repo's PR #46 lands.

## Next actions
1. Refresh cards as per-project next steps in GAPS-AND-NEXT.md land (e.g., ghost-patch higher-N
   re-run, dim-stage band re-derivation, blind-cite extending its other two models to power).
2. **Upstream fixes in flight (found 2026-08-07).** Three repos shipped a green CI badge over a
   workflow that executes zero tests — `dim-stage` (PR #46), `lossy-wall` (PR #44),
   `ghost-patch` (PR #26) — a defect that contradicts the portfolio's own verification brand.
   `dim-stage` PR #46 also carries the upstream half of `DS-2`: its README's "118 analytic tests"
   → 86, and a `norecursedirs` pin so the count means *this project's* tests whether or not the
   reference clone is present. **Until #46 merges, the card is knowingly ahead of its repo.**
   Still unstarted: `hush-gauge` has no CI at all, `blind-cite` ships no LICENSE (Unresolved).
3. ⚠️ **Re-snapshot the `research-portfolio-prep` NotebookLM notebook — open again.** D15 moved
   **ten** tracked rows: README, GAPS-AND-NEXT, Decisions, and all seven project cards it touched.
   (`PROJECT.md` is *not* a tracked row — it is on the manifest's deliberate-exclusion list.)
   *History:* the notebook was last repaired 2026-08-05 after D14 — seven `text` sources, post-repair
   drift check clean at 0 changed. That repair is what D15 has now partly undone.

## Boundaries
- Docs-only folder: markdown, no runnable code
- Every substantive number must trace to a linked public repo — verified, not taken from notes (Fact: README.md)
- Sanitized for external sharing; honesty caveats (injected gap, headline nulls, hobby scale) stay stated plainly, never softened
- Hobby-scale framing is the stated scope of the underlying work: cheap/small models, hard budget guards, judge-free deterministic oracles (Fact: METHODOLOGY.md)
