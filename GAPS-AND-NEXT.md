# Gaps & Next

*This portfolio is living. Here's what's unfinished, what would strengthen it, and what's next —
kept honest so a skeptic sees I know exactly where the edges are.*

---

## Do before sharing

- ✅ **Nothing is blocking.** Six of the seven repos open cleanly for an outside reader.
- ⏸️ **`blind-cite` is parked private** (2026-07-28) — its README claimed "M0 not yet started" while
  its own `PROJECT.md` reported M0 complete, and it referenced `m1.py`–`m3.py` that don't exist.
  Kept private until the M1 decision lands and the README tells one story.

---

## Per-project next steps

| Project | What's unfinished / would strengthen it |
|---------|------------------------------------------|
| **blind-cite** | Decide **M1**: run the pre-committed design for a *well-powered* null, or adopt the documented **multi-doc + filler** variant where the paper says the deception hides. Then scale N ≥ 20/cell. |
| **ghost-patch** | The final irrecoverability gate is **underpowered** (≤16 clean pairs/model). A higher-N re-run — or a stronger model where awareness actually exists — would let the back half be *resolved*, not just descriptive. |
| **dim-stage** | The workspace **band was transplanted by percentile**, not re-derived at small scale. Re-deriving the band from small-model diagnostics would close the top skeptic line. More scales (7B+) would map where/if readability switches on. |
| **decay-pin** | Strategy variants (summarize / head-tail) ran on **one model × one scenario**. Widening that grid would turn "specific to this config" into a general claim. Push N toward ~50 where CIs are wide. |
| **forge-gap** | A **live capability-ladder sweep** and a **self-hosted endpoint** are the two documented "roads not taken" — either would extend the story beyond the injected testbed. |
| **lossy-wall** | Undirected corrections and non-arithmetic families beyond the logic set; push the third-model slot back to the paper's exact roster if a stable small model is available. |
| **mute-map** | The v1 chain (M0–M3) is closed. Two optional stretches remain: **S1** extends the specificity-emergence curve to 7B, **S2** asks whether the switch is lexical or semantic (token mute button vs concept mute button). Also unresolved: collateral concentrates on a few fragile *probes* rather than damaging *primes* — worth a dedicated pass. |

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
  work — the same way I'd expect a skeptic to want that line drawn cleanly. Neither is published under
  my account: the `jacobian-lens` study copy (their code plus my plain-English rewrite of the paper)
  is private, precisely so it is never mistaken for my own work.

---

## Repo visibility (verified 2026-07-28)

| Repo | Visibility |
|------|-----------|
| dim-stage, forge-gap, decay-pin, lossy-wall, ghost-patch, mute-map | ✅ Public |
| blind-cite | ⏸️ Private — parked at M0 pending the M1 decision |
| portfolio-prep (fluency curriculum) | 🔒 Private by design — study material about my own gaps |
| jacobian-lens-study (Anthropic's code + my paper rewrite) | 🔒 Private by design — not my work |
