# Learn: ghost-patch — study guide

**Goal:** be able to present *two nulls as the headline* with total confidence — explaining why a
pre-registered null is a real result, and why these particular nulls reframe (not refute) the paper.
Card → [../projects/ghost-patch.md](../projects/ghost-patch.md) · Repo → <https://github.com/ksdisch/ghost-patch> · ~70 min

## 1. The 60-second version
The paper's chain: a code model *knows* a repair instruction points at the wrong place, obeys anyway,
compounds "ghost" errors across passes, and lands unrecoverable. You tried it on cheap models and two
load-bearing steps didn't hold — the models don't even register the instruction as wrong (0/6), and a
single bad pass doesn't measurably drop the pass rate (CIs cross zero). You report those as the
headline nulls. Whole thing ran for $1.42.

## 2. Concepts to master
- **The chain:** awareness → obedience → damage → recovery → irrecoverability. Know which links held
  and which didn't.
- **NULL ① awareness (0/6):** the models don't flag the bad instruction. Kimi K2.5 (the paper's own
  subject) reads ~25% here vs the paper's 63%. Diagnosis: *"blindness, not blind obedience."*
- **NULL ② single-pass obedience drop:** deepseek d=+0.04 [−0.022, +0.103], qwen d=+0.036
  [−0.034, +0.106] — both cross zero, neither near the pre-committed 10-pt bar.
- **Paired/Newcombe difference** — the drop is measured on *matched* problem pairs (before/after the
  bad instruction).
- **Funnel / underpowered** — each milestone filters the problem set; by M4 there were ≤16 clean pairs
  per model, so the final gate was *pre-declared* underpowered and run descriptively.

## 3. Guided reading path
1. **`README.md`** — the chain-verdict table; note "v1 COMPLETE, chain closed end-to-end."
2. **`M0-BRIEF.md`** — how the awareness probe is defined; the 186-problem RunBugRun bank freeze.
3. **`M1-BRIEF.md`** — the paired obedience-drop design and the 10-pt bar (set *before* data).
4. **`m1.py`** (`run` / `verdict`) — trace: matched pairs → region-compliance → Newcombe verdict.
5. **`M3/M4-BRIEF.md`** — the verifier's-dilemma limitation and the funnel attrition that starved M4.
6. **`results` / `data/m*`** — the recorded per-trial outcomes and the $1.4244 spend ledger.

## 4. Re-derive it yourself (15 min)
Take M1 deepseek: d = +0.0400 on 150 clean pairs. Confirm the 95% CI ≈ [−0.0218, +0.1029] and
articulate *why* an interval straddling zero means "indistinguishable from no effect" — then contrast
with the *paper's* claimed drop, which this fails to reproduce at the cheap tier.

## 5. Decisions & tradeoffs to defend
- **Reporting nulls as headlines** → the whole point of pre-registration: you committed the bar before
  data, so a null is a finding, not a failure. Two of them here.
- **Re-scoping after M0's null** → awareness didn't exist, so you re-scoped to
  obedience→damage→recovery→irrecoverability on the two surviving models and ran the back half
  descriptively.
- **The verifier can't prove disjointness from mid-loop ghost errors** → no oracle knows where those
  live; the paper's own generator has the same exposure (you disclose it).

## 6. Likely probes + strong answers
- **Q: So the paper is wrong?** A: Not necessarily — my read is this failure needs a stronger model
  (awareness doesn't exist at the cheap tier) or the iterative-plus-sabotage regime, not a single
  pass. I reproduce the *structure* where it's powered and report the nulls honestly where it isn't.
- **Q: Isn't a null just a failed project?** A: No — it's pre-registered and judge-free, so it's a
  measured result. "Blindness, not blind obedience" is itself an informative reframing.
- **Q: Your final gate is underpowered — why report it?** A: I pre-declared it underpowered when the
  funnel dropped it below 20 clean pairs, and reported it descriptively with the label attached — I
  don't claim it resolves the irrecoverability question.

## 7. Self-check (answer cold)
- [ ] Name the five links of the chain and which reproduced.
- [ ] Explain "blindness, not blind obedience."
- [ ] Read the obedience-drop CI and say why crossing zero = null.
- [ ] Why was M4 underpowered, and how did you handle it honestly?

## 8. Honesty-caveat drill
*"Two of my headlines are nulls, and that's a feature — they're pre-registered and judge-free. The
models don't even register the bad instruction as wrong, and a single bad pass doesn't measurably
drop the pass rate; both intervals cross zero. My read is the failure needs a stronger model or the
iterative regime, not a single cheap-tier pass. I closed the chain descriptively and kept every
underpowered label on it."*
