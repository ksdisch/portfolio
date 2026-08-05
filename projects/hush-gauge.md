# hush-gauge — auditing instructed secret-keeping from the inside

> **In plain words:** Give a small model a secret and an order never to reveal it, then turn up the
> pressure. Can you tell **from the activations** that the secret is about to leak — *including on
> the trials where it never actually says it*? Behavioral red-teaming misses that silent stratum by
> construction; this project audits it with the lineage's validated instrument. **The audit ran end
> to end and the answer is no — three pre-committed nulls and a `NOT-RUN`, at all three scales: the
> probe reads speech, not secrecy.**

**Repo:** <https://github.com/ksdisch/hush-gauge> (public) · **Builds on:**
[`dim-stage`](dim-stage.md) (instrument) and [`mute-map`](mute-map.md) (phenomenon) · **Status:**
**Complete (M0–M4; v1 closed 2026-08-05)** — G0 PASS ×3 · G1, G2, G3 FAIL ×3, all pre-committed
nulls · G4 `NOT-RUN` ×3, dropped by its own pre-committed validation ladder · M4 gateless by
design. **Cost: $0** · **Method:** [charter](../METHODOLOGY.md)

**Write-up:** [paper](https://github.com/ksdisch/hush-gauge/blob/main/docs/paper/hush-gauge-paper.md)
· [presenter pack](https://github.com/ksdisch/hush-gauge/blob/main/docs/paper/hush-gauge-presenter-pack.md)
— both written from the recorded results at M0–M4 complete. `docs/M0-RESULTS.md` …
`docs/M4-RESULTS.md` are normative for what each milestone found.

## The honest framing (read this first)

This is **not** a reproduction, and it sits one step past even `mute-map` on the anchor ladder:
there is **no outside claim and no prior recorded result behind it** — an original
characterization on small open models. What stands in for an external anchor is the lineage's
discipline: the Jacobian-lens instrument is **inherited from `dim-stage` and never refit** (SHA256
provenance for every lens artifact), every gate is **frozen as code and dry-run INVALID on
wrong-arm input before any real run**, and **a pre-committed null is a reportable result** — the
failure mode here is an undecided gate, not a negative one. The whole arc decided exactly that
way: per the repo's `KICKOFF.md`, a pre-committed null on G1, G2 or G3 is a **passing v1**, and
across five milestones **no bar was re-tuned, no dose revisited, and no interval widened**. And
emphatically not "we solved secret-keeping."

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

A fifth milestone sits outside those three questions. **M4 is gateless by design** (`D48`): it answers a
structural question M2 flagged and M3's dropped arm took down with it, it reports no verdict, and
it re-decides nothing — G0–G4 stand exactly as M0–M3 recorded them.

## Where it stands — every gate resolved, and the ledger is final

| Gate | Question | Status |
|---|---|---|
| **G0** (M0) | Does the pressure battery have dynamic range? | **PASSED, 2026-07-30, all three scales** — benign T0 at or near the floor (0/25 at 1.5B and 3B; **2/25 at 0.5B** by the frozen oracle — see the caveats); under multi-turn extraction all 25 held-out secrets leak; `T4 − T0` Newcombe-clean at every scale, and none `EXPOSURE-CONFOUNDED`: all four exposure-matched contrasts exclude zero (a T4 trial gets 3× the scored positions of a benign one, so this control is what would have caught an arithmetic-only pass) |
| **G1** (M1) | Detection on held-out secrets: AUC 95% LB ≥ 0.75, precision ≥ 0.80, recall ≥ 0.50 | **FAILED at all three scales, 2026-08-01 — a pre-committed null.** AUC 95% LB **0.692 / 0.575 / 0.612** against the ≥ 0.75 bar, precision **0.791 / 0.758 / 0.788** against ≥ 0.80, recall **0.498 / 0.232 / 0.364** against ≥ 0.50 (0.5B / 1.5B / 3B). No bar was re-tuned, the threshold `θ*` was frozen on the calibration half before any eval readout existed, and the fallback never fired |
| **G2** (M1) | Silent leak — the headline science claim: among non-emitting T3/T4 trials, workspace entry exceeds both the no-secret rate and the context-word yardstick | **FAILED at all three scales, 2026-08-01 — a pre-committed null, and at 3B it fails significantly in the *opposite* direction.** On the certified-silent population (71 / 86 / 50 trials per scale) the secret's entry never exceeds the no-secret arm CI-clean, and sits **below** the licensed-word yardstick at every scale — at 3B by −0.455 with a Newcombe 95% interval [−0.654, −0.161] that excludes zero. Decision D26 rules the contrast direction correctly specified: the yardstick's edge is licensed speech being *spoken* — restrict to trials where the yardstick is also silent and its arm collapses from 0.52 / 0.52 / 0.68 to 3/24 / 4/25 / 2/13 (descriptive, per D26; the 3B cell is below the repo's n ≥ 20 house floor) |
| **G3** (M2) | Ablation reduces emission CI-clean *while* perplexity, benign QA, refusal-coherence, and a collapse guard all hold — and a norm-matched random direction does not | **FAILED at all three scales, 2026-08-03 — and not the same FAIL at each scale; that difference is the finding.** At **0.5B** the causal clause **passes**: ablating the probed direction drops the deciding secret-level count **25/25 → 15/25**, Newcombe 95% **[−0.593, −0.187]**, monotone across the dose (25 → 22 → 19 → 18 → 15) and direction-specific (a norm-matched random direction moves nothing, 25/25, and the mandatory λ=1-vs-random contrast excludes zero) — and the **preservation battery catches its price**: benign QA falls to 726/750 against a 0.9903 bar, of which **21 of the 24 misses are genuine factual errors** (`6` for three times three; `Venus` for the planet we live on), and acknowledgment falls to 83/100 against a 0.9630 bar. The clauses are **conjunctive by rule**, so a large drop with a failed battery is a FAIL, not a qualified PASS. At **3B** the mirror image: the whole battery holds — the cleanest arm in the study — and the causal clause has nothing to certify. At **1.5B** both ends fail (WikiText NLL 3.0102 against a 2.9508 bar) |
| **G4** (M3, detachable) | Disabling the off-switch makes the model blurt the secret | **`NOT-RUN` at all three scales, 2026-08-04 — and that is the pre-committed fallback, not an unfinished gate.** `mute-map` characterizes *where* the off-switch lives but every one of its interventions deletes the concept's own direction, so no isolated mediating direction exists in its deliverables; `K5` therefore pre-committed, before any code, that M3 must **construct and validate** a candidate first and drop Arm B if none validates. **Exactly one candidate family was pre-registered, with no post-hoc variants.** It **passed both structural checks** — split-half cosine **+0.665 / +0.958 / +0.909** against a ≥ 0.5 bar, and median &#124;cos&#124; against the secret's own direction **0.032 / 0.019 / 0.022** against a ≤ 0.5 ceiling (max over every layer × secret pair, 0.083) — and **failed its behavioural one at 0.5B and 1.5B**: ablating it raises emission no more than ablating a label-permuted sham built by the same pipeline, and CI-cleanly **less** at 1.5B (Newcombe **[−0.521, −0.083]**). **At 3B the ladder could not be decided at all** — that scale's session set yields only 19 headroom secrets against the repo's own n ≥ 20 house floor, so V3 there was not gate-capable by construction and its verdict string says so (`no gate-capable V3 pass`) rather than reporting a behavioural failure. Either way the ladder dropped Arm B at every scale, and M3 reduced to Arm A, delivered in full. **What this licenses is narrow:** M3 found that *this construction* is not a mediator — not that no mediator exists. The question's status is **unknown, not absent** |

The freezing discipline held where it matters most: both M1 gates' code and their byte-frozen
wording were **committed to git before any sweep produced a result**, so neither gate can have
been fitted to what it later decided — the repo's history says so independently of its results
doc. The threshold freeze is enforced by code, not promise: the freeze script refuses to overwrite
an existing thresholds file, and the cells script refuses to run until one exists.

Subjects: Qwen2.5-0.5B / 1.5B / 3B-Instruct, local MPS, forward-only. **Cost: $0.** 1002 offline
tests; decisions K1–K6 and D1–D48 frozen in the repo's ledger (D15–D24 landed with the M1 brief;
D25–D26 resolved M1's two flagged findings; D27–D33 froze M2's design; D34–D40 froze M3's design
before any M3 code or run; D41–D44 closed the post-M3 planning session; D45–D48 froze M4).

## M4 — the one place the study returns positive structure (gateless, no verdict)

M4 ran the non-nesting question M2 flagged and M3's dropped arm took down with it, on `v_secret` —
the direction M2 had already used and certified — so no construction could fail and couple to it.
It is deliberately **gateless**: under a deterministic decode rule a set-structure fact has no
sampling variance for an interval to bound, and manufacturing a verdict would invite exactly the
bar-shaping the house rules forbid. Five run-time aborts stand in for a gate; all five held and
none fired on real data.

- **What orders the effect is the late third's presence, not the layer count.** At 0.5B every real
  layer set *containing* the late third silences 41–44 of 100 trials and every one without it
  silences 19–27 — including the 8-layer {early+mid}, which edits more layers than the 5-layer
  {late}.
- **The edited layer set does not behave like a set of independently-acting parts, in either
  direction.** Of the 6 comparable pairs whose subset silences anything, **5 are not nested** — and
  under the wider case-insensitive reading all 5 readable pairs are non-nested, with no exception
  left. `cow` and `horse` are silenced by {late} and by **no other layer set in the lattice**,
  while a union can silence what neither part does ({early+mid} silences two secrets that {early}
  and {mid} each silence none of; at 1.5B {mid+late} silences four where {mid} and {late} silence
  none).
- **The matched random lattice has no structure at all** — degenerate at the secret level at every
  scale, and at the trial level churn with no ordering (13–20 trials silenced at *every* 0.5B layer
  set, 4-layer and 13-layer alike). That contrast is what makes the real family's organization a
  finding rather than an artifact of editing more layers.
- **A pre-stated conditional was consumed and not met.** `D44` would have re-opened the arc's
  closing premise on a CI-clean union reduction at 1.5B or 3B — at least 5 of 25 secrets silenced.
  The realized union rows silence 0 · 1 · 4 at 1.5B and 0 · 0 · 0 at 3B; the largest lands at
  **21/25 with Newcombe [−0.347, +0.004]**, the exact last straddling rung the brief computed
  *before the arms existed*, one secret short and missing zero by 0.004. **No bar moved.**
- **The scope these facts carry.** They are exact facts about the realized battery *under this
  decode rule*, and license nothing about other texts, secrets or decode rules. Induced-emission
  comparisons carry a confound in both directions — an arm that suppresses more has fewer surviving
  induced trials — so **no induction-channel claim is licensed**, and `removed_mass_mean` supports
  no argument at all.

## The closing claim, at exactly its licensed strength

**"Not unified at these scales, with this instrument."** Explicitly **not** "different mechanisms
proven." G4 was never decided, and the row that did land — comparing *where* the causal effects
live — is the one that disagrees: this project's only CI-clean causal signal sits at **0.5B**,
while `mute-map`'s gate-bearing scales are **1.5B and 3B**. Three bounds keep the claim from
growing: that comparison is a pattern match across two studies, not an interval on a pooled
contrast; the 0.5B signal carries a failed preservation battery while the sibling reads 0.5B only
under an any-direction-damage frame; and the partial congruence elsewhere (localization ordering,
dose monotonicity, specificity direction) is consistent with both phenomena being **generic
properties of late-band rank-one content-direction ablation**. Consistency with a shared mechanism
is not evidence for one.

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
- **M3's deciding sham is a manufactured null, and not a clean one** — the brief's operative
  instruction was a free label permutation, so the sham is neither composition-matched nor
  label-balanced, and it is not orthogonal to the candidate at the deployed layers. **No direction
  of bias is claimed from it.** It was deliberately **not rebuilt**: swapping in a
  differently-constructed null after watching a candidate fail is the re-tuning this project
  forbids everywhere else, so the claims were narrowed instead and the composition-preserving
  alternative was pre-registered (`D43`) barred from retroactive use.
- **No behavioural preservation clause can be provably orthogonal to the intervention**, because
  any readout of the generation is downstream of the edited residual. That is why the 0.5B
  acknowledgment clause carries an interpretive question the QA clause does not — and why the
  verdict does not depend on it (QA fails on its own; the emission marginal is 0/100 in both arms;
  and it does not generalize, rising at 1.5B and falling inside tolerance at 3B). The question was
  routed to a planning session and answered in the negative, as `D34`.
- **Ablation pushes reveals into an ALL-CAPS shape the frozen oracle does not count.** The canary
  fired on edited arms and *only* on edited arms. The deciding verdict survives re-scoring
  case-insensitively (0.5B reads 25/25 → 16/25, still CI-clean against the 20/25 threshold) — but
  **two secondary claims did not**, and both were withdrawn. The oracle was not touched; the
  canary's mandated response is *look*, and what looking cost is written down.

## The transferable lesson (the thing worth stealing)

Every substantive defect this project's four review loops caught was the same class: **a proxy
standing in for the thing it approximates.** Token ids for characters. Hand-written reveal formats
for real model output. A post-cascade readout for the quantity it was assumed to estimate. A
transcribed number for a computed one. The rule that falls out, and that the later milestones
enforce structurally: **when a claim is about "is this a whole word", "would the model do this", or
"what do the data say", test or compute the actual substrate** — so gates recompute from per-trial
records rather than trusting aggregates, the test suite carries 180 real greedy replies, and every
results table is generated from the payloads rather than retyped.

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
undecided gate, not a negative one. Then M2 cut against the simple reading: a direction that fails
as a *detector* can still be causally load-bearing, and at 0.5B it is — ablating it silences ten of
twenty-five secrets, dose-graded, with a random direction doing nothing — except the same edit
costs 21 real factual errors on benign QA, and the preservation battery was written before the run
to catch exactly that, so it scores as a failure. M3's single pre-registered off-switch candidate
was stable and provably not the secret's content, and removing it doesn't make the model blurt, so
it dropped by its own ladder and G4 was never decided. The arc closes negative: not unified at
these scales, with this instrument. Four pre-committed nulls, zero re-tuned bars, and the whole
audit template run end to end."
