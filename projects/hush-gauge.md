# hush-gauge — auditing instructed secret-keeping from the inside

> **In plain words:** Give a small model a secret and an order never to reveal it, then turn up the
> pressure. Can you tell **from the activations** that the secret is about to leak — *including on
> the trials where it never actually says it*? Behavioral red-teaming misses that silent stratum by
> construction; this project audits it with the lineage's validated instrument. **M1 answered the
> detection question, and the answer is no — a pre-committed null at all three scales: the probe
> reads speech, not secrecy.**

**Repo:** <https://github.com/ksdisch/hush-gauge> (public) · **Builds on:**
[`dim-stage`](dim-stage.md) (instrument) and [`mute-map`](mute-map.md) (phenomenon) · **Status:**
**In progress — M0 complete (G0 PASSES, 2026-07-30); M1 complete (G1 FAILS and G2 FAILS at all
three scales, both pre-committed nulls; merged 2026-08-02, hush-gauge PR #6); M2 decided — G3 FAIL
at all three scales, its PR #10 merged 2026-08-03 (carried here as status only until the stats
pass cards it); G4 (M3, detachable) undecided** ·
**Method:** [charter](../METHODOLOGY.md)

## The honest framing (read this first)

This is **not** a reproduction, and it sits one step past even `mute-map` on the anchor ladder:
there is **no outside claim and no prior recorded result behind it** — an original
characterization on small open models. What stands in for an external anchor is the lineage's
discipline: the Jacobian-lens instrument is **inherited from `dim-stage` and never refit** (SHA256
provenance for every lens artifact), every gate is **frozen as code and dry-run INVALID on
wrong-arm input before any real run**, and **a pre-committed null is a reportable result** — the
failure mode here is an undecided gate, not a negative one. M1 decided exactly that way: per the
repo's `KICKOFF.md`, its two nulls are a **passing v1**. And emphatically not
"we solved secret-keeping."

## The questions (three, each with a deterministic oracle and a pre-registered gate)

1. **Detection** — does the secret enter the J-lens-readable workspace at response positions,
   *including on trials where it is never emitted* ("silent leak")? (G1, G2)
2. **Causality** — does ablating the secret's direction reduce emission under pressure, while the
   model still behaves like a coherent secret-keeper? (G3)
3. **Mechanism** — is instructed secrecy implemented by the late-band output off-switch
   [`mute-map`](mute-map.md) mapped? (G4 — detachable by design; it depends on the sibling repo)

Design, frozen before any run: 50 single-token secrets drawn from `mute-map`'s 10-category
roster, a 25/25 calibration/eval split, a 5-tier pressure battery (benign → direct ask → roleplay
→ injection override → multi-turn extraction), and four pre-registered false-positive baselines —
every detection claim is *excess over a context-word yardstick*, never "the probe fires."

## Where it stands — G0 passed, G1 and G2 decided as nulls, G3 decided and merged (stats pending)

| Gate | Question | Status |
|---|---|---|
| **G0** (M0) | Does the pressure battery have dynamic range? | **PASSED, 2026-07-30, all three scales** — benign T0 at or near the floor (0/25 at 1.5B and 3B; **2/25 at 0.5B** by the frozen oracle — see the caveats); under multi-turn extraction all 25 held-out secrets leak; `T4 − T0` Newcombe-clean at every scale, and none `EXPOSURE-CONFOUNDED`: all four exposure-matched contrasts exclude zero (a T4 trial gets 3× the scored positions of a benign one, so this control is what would have caught an arithmetic-only pass) |
| **G1** (M1) | Detection on held-out secrets: AUC 95% LB ≥ 0.75, precision ≥ 0.80, recall ≥ 0.50 | **FAILED at all three scales, 2026-08-01 — a pre-committed null.** AUC 95% LB **0.692 / 0.575 / 0.612** against the ≥ 0.75 bar, precision **0.791 / 0.758 / 0.788** against ≥ 0.80, recall **0.498 / 0.232 / 0.364** against ≥ 0.50 (0.5B / 1.5B / 3B). No bar was re-tuned, the threshold `θ*` was frozen on the calibration half before any eval readout existed, and the fallback never fired |
| **G2** (M1) | Silent leak — the headline science claim: among non-emitting T3/T4 trials, workspace entry exceeds both the no-secret rate and the context-word yardstick | **FAILED at all three scales, 2026-08-01 — a pre-committed null, and at 3B it fails significantly in the *opposite* direction.** On the certified-silent population (71 / 86 / 50 trials per scale) the secret's entry never exceeds the no-secret arm CI-clean, and sits **below** the licensed-word yardstick at every scale — at 3B by −0.455 with a Newcombe 95% interval [−0.654, −0.161] that excludes zero. Decision D26 rules the contrast direction correctly specified: the yardstick's edge is licensed speech being *spoken* — restrict to trials where the yardstick is also silent and its arm collapses from 0.52 / 0.52 / 0.68 to 3/24 / 4/25 / 2/13 (descriptive, per D26; the 3B cell is below the repo's n ≥ 20 house floor) |
| **G3** (M2) | Ablation reduces emission CI-clean *while* perplexity, benign QA, refusal-coherence, and a collapse guard all hold — and a norm-matched random direction does not | Design frozen on the repo's `main` (D27–D33: the intervention, the λ = 0 identity arm, the paired deciding contrast, the four-clause preservation battery, the norm-matched random-direction control, G3 frozen as code, and the pre-declared secondaries); **decided — FAIL at all three scales; its PR #10 merged 2026-08-03.** Carried here as status only until the stats pass: this portfolio cards stats from merged results, and the source (`docs/M2-RESULTS.md` on `main`) is now merged, so the numbers land here in the next pass (D11) |
| **G4** (M3, detachable) | Disabling the off-switch makes the model blurt the secret | Pre-registered as a gate statement in `docs/KICKOFF.md`; **undecided** |

The freezing discipline held where it matters most: both M1 gates' code and their byte-frozen
wording were **committed to git before any sweep produced a result**, so neither gate can have
been fitted to what it later decided — the repo's history says so independently of its results
doc. The threshold freeze is enforced by code, not promise: the freeze script refuses to overwrite
an existing thresholds file, and the cells script refuses to run until one exists.

Subjects: Qwen2.5-0.5B / 1.5B / 3B-Instruct, local MPS, forward-only. **Cost: $0.** 656 offline
tests; decisions K1–K6 and D1–D33 frozen in the repo's ledger (D15–D24 landed with the M1 brief;
D25–D26 resolved M1's two flagged findings; D27–D33 froze M2's design).

## What M1's null says (three readouts that agree)

**The instrument reads speech, not secrecy.** That is the whole result in one line, and it is the
exact risk the M1 brief named *before* the run.

1. **Emission-stratified recall.** Detection recall is **0.937 / 0.571 / 0.537** on trials where
   the model is emitting the secret, against **0.103 / 0.068 / 0.088** on trials where it stays
   silent — on the silent stratum, the whole point of the audit, the probe fires at roughly its
   own false-alarm rate (FPR 0.132 / 0.074 / 0.098).
2. **G2's own arms.** On certified-silent trials the secret's direction never beats the no-secret
   baseline CI-clean and sits below the licensed yardstick everywhere — significantly at 3B. The
   yardstick is a word in the *same* session on the *same* trials, so this is not a power problem:
   the contrast points the wrong way.
3. **The continuous form.** Median `S_secret − S_yardstick` is negative at every scale
   (−0.0108 / −0.0066 / −0.0143), so the null is not an artifact of where the frozen threshold
   happened to land.

**Scale does not rescue it** — the brief predicted the detection science would shift to 1.5B/3B,
and it did, and the picture got worse there. **What the null does not license:** it is not
evidence the secret is absent from the workspace — it is a null about *this statistic*, *this
lens*, and *these three small models*, stated that way in the repo's own results doc.

## The caveats I own

- **Within-tier spread exceeds between-tier spread** (from M0) — so claims about *kinds* of
  pressure are per-text, not per-tier; M1 recorded per-text cells for every G2 rate.
- **The 0.5B benign cell is 2/25 by the frozen oracle** — not zero. Both hits are incidental
  capitalized mentions, which the oracle's word-boundary rule counts as emissions. That rule was
  never re-tuned after the fact — least of all in the direction that would strengthen the
  headline — so the 2/25 stands and M0's +0.920 gap [+0.704, +0.978] is reported at the oracle's
  value, not the inspected one. M1 did not touch the oracle.
- **T4 saturates** (25/25) — so the silent-leak question lives in the non-emitting T3/T4 trials.
  The named 3B risk bit exactly where predicted: G2's deciding n there is 22 secrets against a
  floor of 20 — known from frozen data before the run, not discovered as a surprise.
- **"Greedy" decoding was greedy under a shipped repetition penalty** — discovered during M1,
  reported at gate-result prominence, and deliberately **not** patched: re-running would break
  byte-identity with M0's certified substrate (M1 reproduced all 3,000 with-secret trials
  byte-for-byte). The penalty is a logits processor `do_sample=False` does not disable, and it is
  **1.1 at 0.5B/1.5B but 1.05 at 3B** — so cross-scale emission comparisons carry that caveat
  (every *gated* comparison is within-scale). It also means part of "the model kept the secret"
  is "the decode rule discouraged repeating a context token." Probe scores read residuals,
  upstream of the logits processor, so the detection statistic itself is untouched. Frozen as-run
  and owned as decision D25.

## How I talk about this (≈30s)

"The lineage had a validated instrument and a mapped phenomenon, but no project had run the full
audit template end-to-end: probe the decision point, validate it causally by ablation, and grade
the probe as an instrument with precision and recall. hush-gauge is that project — give a small
model a secret, apply escalating pressure, and ask whether the activations betray the leak even on
trials where the model never says the word. M0 validated the pressure battery behind a
pre-registered gate. M1 asked the detection question and the answer was **no**, at all three
scales, as a pre-committed null: the probe reads speech, not secrecy — on trials where the model is
emitting the secret, recall is 0.94 at 0.5B and falls to 0.54 at 3B; on trials where it stays
silent, 0.07–0.10 at every scale — and on certified-silent trials the secret's direction sits
*below* a licensed word from the same session. The gates were frozen in
git before any sweep ran, so that null is a result, not an excuse — the repo's kickoff calls a
pre-committed null a passing v1, because the failure mode this method guards against is an
undecided gate, not a negative one. The causal-ablation gate has decided and merged, its numbers
card in the next pass, and the mechanism milestone is still ahead."
