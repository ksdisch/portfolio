# Gaps & Next

*This portfolio is living. Here's what's unfinished, what would strengthen it, and what's next —
kept honest so a skeptic sees I know exactly where the edges are.*

---

## Do before sharing

- ✅ **Nothing is blocking.** All eight repos open cleanly for an outside reader.
- ✅ **`blind-cite`'s park has ended** (2026-08-03) — the repo re-published itself, resolved M1 as
  Option C, then ran it to a well-powered null at both surfaces; its README now tells one story
  and the `m1.py` it once referenced exists and renders the verdict. The 2026-07-28 park (D6) and
  the state-change flag raised mid-audit are both resolved (Decisions.md D12), and this file, the
  card, `README.md`, `PROJECT.md` and `Sources.md` were refreshed to match.
- The audit report ([docs/audit-2026-08-03.md](docs/audit-2026-08-03.md)) remains the
  authoritative findings surface for the items not yet triaged into this ledger.

---

## Proposed next steps (2026-08-03 audit)

**Status: proposed, not triaged.** D12 reserves triage of the audit's items to Kyle. The report
([docs/audit-2026-08-03.md](docs/audit-2026-08-03.md)) is the authoritative list — its findings and
its own ranked top-10 — and nothing here reorders, closes, or replaces any of them. This is a
pointer to the two things that are actionable now, not a plan of record.

**Next session — hush-gauge M2/G3 stats carding.** D11's trigger fired: hush-gauge PR #10 merged
2026-08-03; source `docs/M2-RESULTS.md` on that repo's `main`. Fold in **HG-1** while there —
hush-gauge's `docs/M1-RESULTS.md`:52 sources its freeze-provenance claim to `4b77cf8`, which the
squash merge left **unreachable from `main`**. That commit is alive on `origin/feat/m1-probe-panel`
(`3d4419e → 4b77cf8 → 5c9f916`), and the card echoes the claim. **The discipline held — only the
pointer is broken**, so repoint it; never soften the claim.

**Wrong on this repo's own cards.** These audit findings have a *portfolio card* as their subject,
so they are fixable here in a docs-only pass without touching any project repo — worth separating
out, because the ranked list files them under their projects:
- `projects/dim-stage.md`:69 — "118 analytic tests" against a suite that collects **86** (DS-2,
  graded **critical**; it is the first command the card hands a stranger).
- `projects/dim-stage.md`:63-65 — says per-layer diagnostics are "reported alongside"; they were
  pre-declared but never computed (DS-3, graded **critical**).
- `projects/forge-gap.md`:12 — "(11 stages, S0–S11)", which enumerates twelve (FG-2).
- `projects/forge-gap.md`:47-48 — "~10% of llama-8b's misses" where the share-of-misses is **~18%**
  (4/22), *understating* a disclosed blind spot (FG-3).
- `docs/audit-2026-08-03.md` — the report's own hygiene: HG-3's quoted evidence cites a
  squash-orphaned portfolio SHA (F6 from PR #9's review), and the citation-convention block near
  the top now runs longer than the finding it prefaces (F12, placement only).

Everything else in the audit's ranked top-10 — repo-side CI, README runnability, the staleness
sweep — changes files in the project repos and stays in the report, un-triaged.

**Needs Kyle, not a session:**
- **blind-cite v1 close** — its D11 proposes closing at M1; logged *Proposed*, his call.
- **The `1e82eb5` commit body** says "22 spots" where the durable record says 18. Correcting a
  pushed commit message needs a force-push, which he reserves to himself.

---

## Per-project next steps

| Project | What's unfinished / would strengthen it |
|---------|------------------------------------------|
| **blind-cite** | M1 ran both surfaces at N=20/cell and returned a **well-powered null**; the open call is whether v1 closes there (the repo's D11, *Proposed*) — M2 would suppress a rate already ~0 and M3 would ablate a phenomenon that occurred twice. To push the null instead, two escalations are pre-named and each needs its own argued addendum: a frozen title pool assigned by post-shuffle doc *position*, and same-theme filler generation under a new verifier contract. The n=2 contrast is an existence proof; a rate would need a surface where DG actually occurs. |
| **ghost-patch** | The final irrecoverability gate is **underpowered** (≤16 clean pairs/model). A higher-N re-run — or a stronger model where awareness actually exists — would let the back half be *resolved*, not just descriptive. |
| **dim-stage** | The workspace **band was transplanted by percentile**, not re-derived at small scale. Re-deriving the band from small-model diagnostics would close the top skeptic line. More scales (7B+) would map where/if readability switches on. |
| **decay-pin** | Strategy variants (summarize / head-tail) ran on **one model × one scenario**. Widening that grid would turn "specific to this config" into a general claim. Push N toward ~50 where CIs are wide. |
| **forge-gap** | A **live capability-ladder sweep** and a **self-hosted endpoint** are the two documented "roads not taken" — either would extend the story beyond the injected testbed. |
| **lossy-wall** | Undirected corrections and non-arithmetic families beyond the logic set; push the third-model slot back to the paper's exact roster if a stable small model is available. |
| **mute-map** | The v1 chain (M0–M3) closed 2026-07-28 and the **M4 close-out** landed 2026-07-29 (VOCAB-SPARING at 1.5B/3B, AS-SCORED ONLY). The S1 (7B) and S2 (lexical vs semantic) stretches were **declined for this repo** and banked as idea #13 in the J-lens follow-on backlog, where they compete in the seed-hunt on equal terms. Still open: collateral concentrates on a few fragile *probes* rather than damaging *primes* — worth a dedicated pass. |
| **hush-gauge** | v1's measurement chain has decided. M1 (probe panel + detection + silent leak) merged 2026-08-02 (hush-gauge PR #6): **G1 and G2 both FAIL at all three scales, pre-committed nulls** — a passing v1 per the repo's kickoff. M2 (causal ablation) is decided — G3 FAIL at all three scales — and its **PR #10 merged 2026-08-03**, so the stats are ready to card here from `docs/M2-RESULTS.md` on `main`; that carding is the immediate next step. After that, the detachable M3 (off-switch unification, G4) is the one undecided gate. The card follows whatever each gate decides. |

---

## Substrate & pipeline

- **`trajectory-otel` (observability substrate) — not carded, scaffold stage.** An OpenTelemetry span
  model for an agent's `reason → act → observe` loop (so any run is a flame graph with a one-line
  root-cause verdict), plus four harness-reliability primitives the shipped OTel specs lack. **M0 not
  yet built.** It's the natural "see one agent loop run" tool under all of this; finishing M0 would
  give the portfolio an infrastructure piece to sit beside the reproductions.
- **More reproductions.** The engine is repeatable; the pipeline should keep pulling recent
  failure-mode papers (agent-reliability and interpretability), scored the same judge-free,
  pre-registered way. Each new run compounds the "repeatability" story more than polishing any one
  card.
- **Reference clones (not mine, excluded from cards).** `reclaim-eval` (`collapseindex`) and
  `jacobian-lens` (`anthropics`) are the *paper authors'* packages, cloned locally as cross-check
  oracles for `lossy-wall` and `dim-stage` respectively. They are correctly **not** presented as my
  work — the same way I'd expect a skeptic to want that line drawn cleanly. **Neither is published
  under my account** — verify it against the repo list. `reclaim-eval` exists only as a local clone.
  Anthropic's `jacobian-lens` was briefly a public fork here, carrying my plain-English rewrite of
  their paper on top of their code; it was **deleted on 2026-07-28** and the study copy moved to a
  private repo, precisely so their package is never mistaken for my own work.

---

## Repo visibility (verified 2026-08-03)

| Repo | Visibility |
|------|-----------|
| dim-stage, forge-gap, decay-pin, lossy-wall, ghost-patch, mute-map, hush-gauge, blind-cite | ✅ Public |
| portfolio-prep (fluency curriculum) | 🔒 Private by design — study material about my own gaps |
| jacobian-lens-study (Anthropic's code + my paper rewrite) | 🔒 Private by design — not my work |
