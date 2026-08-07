# Gaps & Next

*This portfolio is living. Here's what's unfinished, what would strengthen it, and what's next —
kept honest so a skeptic sees I know exactly where the edges are.*

---

## Do before sharing

- ✅ **Nothing is blocking.** All eight repos open cleanly for an outside reader.
- ✅ **`blind-cite`'s park has ended** (2026-08-03) — the repo re-published itself and resolved M1
  as Option C; the 2026-07-28 park (D6) and the state-change flag raised mid-audit are both
  resolved (Decisions.md D12). **Its M1 result was then superseded by the repo's own M1C extension
  (2026-08-04):** the "well-powered null" this file reported is withdrawn — DG occurs at both
  surfaces. Carded 2026-08-05 (D14).
- ✅ **`hush-gauge` is complete** (M0–M4, 2026-08-05) and carded in full, including `G4 NOT-RUN`
  (D14). Its card and this file no longer carry it as in-flight.
- ✅ **All eight repos ship a research paper and a presenter pack** on their default branch, and
  **all eight cards now link theirs** (2026-08-07, D15) — seven also link a plain-English 1:1
  rewrite; `hush-gauge` is the one repo without one.
- ⚠️ **Three repos ship a green CI badge over a workflow that runs zero tests** (found 2026-08-07):
  `dim-stage`, `lossy-wall` and `ghost-patch` loop `uv run "$f"` over `test_*.py` files that have
  no `__main__` runner, so every file imports, exits 0, and no test executes. Verified by running
  it (`uv run test_stats.py` → exit 0, silent; `uv run pytest -q test_stats.py` → 6 passed).
  `decay-pin` uses the same loop but its files *do* have runners, so its CI is real; `forge-gap`,
  `mute-map` and `blind-cite` invoke pytest properly. **`hush-gauge` has no CI workflow at all**
  and **`blind-cite` ships no LICENSE**. These belong to those repos, not this one — but a vacuous
  green badge is the worst possible artifact in a portfolio whose brand is verification, so it is
  named here rather than left to the audit report.
- ⚠️ **The audit's `DS-2` is live, and the fix landed here on 2026-08-07.** Its top-10 #3 said
  `dim-stage`'s carded "118 analytic tests" doesn't trace and the real number is 86. **It was
  right**, and a first pass at re-verifying it got the answer backwards: `uv run pytest` in a
  working copy that has the `.gitignore`d `refs/jacobian-lens/` reference clone in it collects
  **118**, of which **32 are Anthropic's tests, not this project's**. A clean clone — which is what
  CI and any reader gets — collects **86** (`--ignore=refs` reproduces it exactly). The card now
  says 86. The lesson is the portfolio's own: **a number measured in a dirty tree is not a
  measurement**, and the same discipline the projects apply to their data applies to the index that
  describes them. `dim-stage`'s own `README.md` still advertises 118 — that fix belongs to that repo.
- The audit report ([docs/audit-2026-08-03.md](docs/audit-2026-08-03.md)) remains the
  authoritative findings surface for the items not yet triaged into this ledger. Note it predates
  both flips above (blind-cite 2026-08-04, hush-gauge 2026-08-05) and **its per-item statuses are
  not maintained** — read it as a dated snapshot, not a live checklist, and re-verify any finding
  against a clean checkout before acting on it.

---

## Per-project next steps

| Project | What's unfinished / would strengthen it |
|---------|------------------------------------------|
| **blind-cite** | The v1-close question is settled — M1C answered it by running rather than deciding, and the measurement phase closed 2026-08-04 with no further extension permitted. What's left is scoped: **only `qwen-2.5-7b` was extended to power**, so `llama-3.1-8b` and `gemma-3-12b` sit at 0/20 with a 16.1% Wilson upper and must be read as *untested at N=80, not shown clean* — extending them is the single highest-value follow-on. **Provider routing is unpinned and repeat draws are not stable at temperature 0**, so no committed rate is exactly reproducible by re-running its wave; pinning it is a design change belonging to a future pre-registration, never a retrofit. **Stage heterogeneity** (engagement 35% on the original pairs vs 55–65% on the extension's) is reported and not adjusted for; an engagement-conditioned rate would have to be pre-registered before it could be reported. No cross-surface test was pre-registered or run, and the camouflage levers moved together, so the surface question stays descriptive. |
| **ghost-patch** | The final irrecoverability gate is **underpowered** (≤16 clean pairs/model). A higher-N re-run — or a stronger model where awareness actually exists — would let the back half be *resolved*, not just descriptive. |
| **dim-stage** | The workspace **band was transplanted by percentile**, not re-derived at small scale. Re-deriving the band from small-model diagnostics would close the top skeptic line. More scales (7B+) would map where/if readability switches on. |
| **decay-pin** | Strategy variants (summarize / head-tail) ran on **one model × one scenario**. Widening that grid would turn "specific to this config" into a general claim. Push N toward ~50 where CIs are wide. |
| **forge-gap** | A **live capability-ladder sweep** and a **self-hosted endpoint** are the two documented "roads not taken" — either would extend the story beyond the injected testbed. |
| **lossy-wall** | Undirected corrections and non-arithmetic families beyond the logic set; push the third-model slot back to the paper's exact roster if a stable small model is available. |
| **mute-map** | The v1 chain (M0–M3) closed 2026-07-28 and the **M4 close-out** landed 2026-07-29 (VOCAB-SPARING at 1.5B/3B, AS-SCORED ONLY). The S1 (7B) and S2 (lexical vs semantic) stretches were **declined for this repo** and banked as idea #13 in the J-lens follow-on backlog, where they compete in the seed-hunt on equal terms. Still open: collateral concentrates on a few fragile *probes* rather than damaging *primes* — worth a dedicated pass. |
| **hush-gauge** | **v1 is closed (M0–M4, 2026-08-05) and the arc is answered, not paused** — the closing decision is *not unified at these scales, with this instrument*, and no v2 is scoped. Moving that would need either a CI-clean causal effect at 1.5B/3B on this side — where the full band under the whole dose grid, the three single thirds, the case-pair span arm and three pairwise unions have all been searched with the causal clause never firing — or a gate-bearing effect at 0.5B on `mute-map`'s side, which its settled record excludes. What remains open is named rather than planned: **G4's underlying question is unknown, not absent** (exactly one candidate construction was tried, and a cleaner one is not ruled out by its failure); the **frame confound** in that candidate was pre-declared and never adjudicated, because V3 failed first; the composition-preserving flip sham is pre-registered (`D43`) and barred from retroactive use on M3's recorded candidate; and re-deriving the frozen oracle's form set against *edited* output — the ALL-CAPS shape the canary keeps flagging — is a named future decision with its own re-certification, never an edit to the frozen one. Trained-in (rather than in-context) secrecy via a LoRA successor is named and not run. |

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
