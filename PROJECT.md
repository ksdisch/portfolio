# PROJECT.md

## Purpose
Interview-prep portfolio that presents six reproduce-and-measure AI-failure reproduction projects as one body of work — a method-first index, an honesty charter, per-project cards, and per-project learn guides — sanitized so a hiring manager can open, run, and poke any linked repo.

## Scope
**In scope (current phase):**
- Curating the index (README.md), the Methodology & Honesty Charter, the six project cards (`projects/`), and the six learn guides (`learn/`)
- Keeping every stat on a card traceable to its linked public repo
- The fluency curriculum: LEARNING-ROADMAP.md (learn), PRACTICE.md (drill), GAPS-AND-NEXT.md (living edges)

**Out of scope / deferred / never:**
- No code is copied into this folder — cards link out to the real repos (Fact: README.md)
- The six project repos evolve in their own repos; this folder only reflects them
- Reference clones `reclaim-eval` and `jacobian-lens` are the paper authors' packages, used as cross-check oracles — never carded as Kyle's work (Fact: README.md, GAPS-AND-NEXT.md)
- `trajectory-otel` is scaffold-stage substrate, not carded until M0 exists (Fact: GAPS-AND-NEXT.md)

## Current status
Active — built 2026-07-21; all six linked repos verified public 2026-07-21; nothing blocks sharing (Fact: GAPS-AND-NEXT.md). The portfolio is complete as a shareable artifact; the open work is fluency practice and keeping cards in sync as the underlying projects advance.

## Next actions
1. Work the PRACTICE.md fluency gates project-by-project, `dim-stage` first (the surface probed hardest), using the `learn/` guides — focus on layers 3–4 (stats and harness internals) per LEARNING-ROADMAP.md.
2. Update the `blind-cite` card when its M1 direction is decided and run in the blind-cite repo (well-powered null on the pre-committed design vs. the multi-doc + filler variant).
3. Refresh cards as per-project next steps in GAPS-AND-NEXT.md land (e.g., ghost-patch higher-N re-run, dim-stage band re-derivation).

## Boundaries
- Docs-only folder: markdown, no runnable code
- Every substantive number must trace to a linked public repo — verified, not taken from notes (Fact: README.md)
- Sanitized for external sharing; honesty caveats (injected gap, headline nulls, hobby scale) stay stated plainly, never softened
- Hobby-scale framing is the stated scope of the underlying work: cheap/small models, hard budget guards, judge-free deterministic oracles (Fact: METHODOLOGY.md)
