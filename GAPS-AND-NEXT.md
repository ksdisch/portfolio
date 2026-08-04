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

## Proposed queue (2026-08-03 audit + its review loops)

**Status: proposed, not triaged.** D12 reserves triage of the audit's items to Kyle; this section
is an agent-drafted *sequencing* for him to accept, reorder, or reject, and nothing in it has been
decided. The report ([docs/audit-2026-08-03.md](docs/audit-2026-08-03.md)) stays the authoritative
list.

**Next up — hush-gauge M2/G3 stats carding** (D11's trigger fired: **hush-gauge** PR #10 merged
2026-08-03; source `docs/M2-RESULTS.md` on its `main`, `a964878`). Two follow-ups ride along, same
repo:
- **HG-1 / top-10 #9** (should-fix) — hush-gauge's `docs/M1-RESULTS.md`:52 sources its
  freeze-provenance claim to `4b77cf8`, which the squash merge left **unreachable from `main`**.
  The commit is alive on `origin/feat/m1-probe-panel` (`3d4419e → 4b77cf8 → 5c9f916`), and the card
  echoes the claim. **The discipline held — only the pointer is broken**, so the fix is to repoint
  at that branch, never to soften the claim.
- **F6 from this repo's PR #9 review** (nice-to-have) — HG-3's quoted evidence cites a
  squash-orphaned *portfolio* SHA. Same defect, other direction; cheapest while the repo is open.

**Remaining ranked items** (audit top-10; #1 landed as *this repo's* PR #10):
2. **Make CI real in dim-stage and ghost-patch** (S; DS-1, GP-1) — both workflows loop
   `uv run "$f"` over test files as plain scripts, so every file imports, exits 0, and **zero
   tests execute** under a green badge. Fix: `uv run pytest` plus an assert on collected count.
3. **dim-stage carded test count 118 → 86** (S; DS-2) — pairs with #2's collected-count guard.
4. **dim-stage band-transplant rebuttal reworded** (S; DS-3) — the card cites per-layer
   diagnostics that were pre-declared but never computed; GAPS' phrasing is the honest one.
5. **lossy-wall "2/350 padded reclaims" → 2/340** (S; LW-1) — hand-recounted from the trial log.
6. **Runnability pass on four READMEs** (M; MM-1, LW-4, GP-2, BC-4, plus FG-1 and HG-4) —
   mute-map, lossy-wall, ghost-patch and blind-cite ship no setup or run instructions, against
   this README's "open, run, and poke any of them" promise.
7. **dim-stage's README brought up to the whole repo** (M; DS-4, DS-5) — the four stretch stages
   are invisible from it, and its ledger row says "D1–D14" against an actual D1–D31.
8. **Staleness sweep across the six repos the paper-landing wave outran** (S–M; MM-4, FG-4, DP-1,
   LW-2, GP-3, TO-1, plus DP-2/LW-3's "fresh scaffold" CLAUDE.md files).
10. **forge-gap accuracy trio** (S; FG-2, FG-3, FG-5) — note **FG-3 is wrong in *this* repo**:
    `projects/forge-gap.md`'s blind-spot caveat says "~10% of llama-8b's misses" where the
    share-of-misses is **~18% (4/22)**. It *understates* a disclosed blind spot, so it is a
    one-line correction here rather than a per-repo session.

#2–#4 all touch dim-stage and can share a pass; ghost-patch's half of #2 stands alone.

**Rides along on any portfolio-docs session:** F12 from this repo's PR #9 review — the audit
report's citation-convention block (`docs/audit-2026-08-03.md`:51-71, grown to 21 lines across
four revisions) now runs longer than the finding it prefaces. Placement only; every sentence true.

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
