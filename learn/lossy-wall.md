# Learn: lossy-wall — study guide

**Goal:** be able to explain "matched budget" (the crux that rules out "just kept more"), and defend
the qwen-7b→72b substitution and the parser-fix as *honest disclosures*, not fudges.
Card → [../projects/lossy-wall.md](../projects/lossy-wall.md) · Repo → <https://github.com/ksdisch/lossy-wall> · ~60 min

## 1. The 60-second version
For agent memory, a *lossy* compression can be worse than keeping nothing. If a note keeps the wrong
conclusion but drops the source you'd recompute from, the error welds in — a correction can't reach
it. Keep the source and the same model stays fixable at the *same budget*. You rebuilt the harness
independently, scored it judge-free, hit the pre-registered gates, and cross-checked one cell against
the author's own code — agreement to within one trial across hundreds.

## 2. Concepts to master
- **Matched memory budget** — plain: both notes are the *same length*; the only difference is *what*
  they keep. This is the whole point — it rules out "source-first just kept more text."
- **The policies:** lossy (keep conclusion, drop source), source-first (keep source, drop conclusion),
  padded (lossy padded to source-first's length — the content-vs-length control), blank (empty).
- **Reclaim Rate (RR)** — fraction of drifted problems a correction recovers, exact-match scored.
- **"Worse than empty"** — the behavioral core: blank → model abstains; lossy → model emits a
  confident wrong value. That's the +58% on deepseek.
- **Cross-check / AGREE** — six overlap cells vs the author's harness; every difference interval
  contains zero.

## 3. Guided reading path
1. **`README.md`** — the three claims and the cross-check.
2. **`DECISIONS.md`** — **D1** (independent build; author code is oracle-only), **D5** (matched
   budget), **D8/D13** (qwen-7b trigger → 72b substitution, labeled), **D28** (M5 boundary realign).
3. **`m1.py`** (the wall) — trace one trial: drift → compress under a policy → correct → exact-match
   score. Then skim `m2.py` (content-vs-length), `m3.py` (worse-than-empty).
4. **`pytest`** — the validator suite; note the per-trial token-search gate that proves the source is
   really absent.
5. The `m0…m5` result directories — the committed evidence (4.7 MB).

## 4. Re-derive it yourself (15 min)
"Worse than empty" on deepseek: lossy wrong-emission **52/90**, blank **0/40**. Compute the two Wilson
intervals and the Newcombe interval on the +58% gap; confirm ≈ [+44.2, +67.5] and that it clears zero.
Then confirm the wall: lossy **1/90** has a Wilson *upper* bound ≤ 0.10.

## 5. Decisions & tradeoffs to defend
- **Independent build, author code as oracle only (D1)** → you didn't just re-run their repo; you
  rebuilt it and used theirs only to cross-check. More credible.
- **qwen-7b → 72b substitution (D8/D13)** → the 7b tripped a pre-registered trigger; you swapped to a
  same-family 10× model and labeled it on every table. "3 models" = 3 that ran to completion.
- **Parser blind-spot re-score** → found escaped-dollar answers mid-project, re-scored
  *conservatively* (no gate flipped), disclosed as a post-hoc correction with byte-verbatim evidence.

## 6. Likely probes + strong answers
- **Q: Isn't source-first just "keep more"?** A: No — the padded control is *longer* than source-first
  and still walls. It's what you keep, not how much.
- **Q: You swapped a model — did you cherry-pick?** A: The 7b tripped a pre-set trigger; I swapped to
  the same-family 72b and labeled it everywhere. The larger model's abstainer behavior matched the
  prediction, so it didn't rescue the effect artificially.
- **Q: How do you know your numbers are right?** A: I cross-checked six overlap cells against the
  author's released harness — we agreed to within one trial across 576 gated trials.

## 7. Self-check (answer cold)
- [ ] Explain "matched budget" and the padded control in one breath.
- [ ] State the wall numbers and the "worse than empty" gap from memory.
- [ ] Defend the qwen substitution without sounding defensive.
- [ ] What does the cross-check prove — and what does it *not*?

## 8. Honesty-caveat drill
*"Judge-free exact-match, with a per-trial gate proving the source is really gone. My third model is a
same-family substitute after the 7b tripped a trigger — labeled on every table. I found a parser
blind-spot mid-project and re-scored conservatively so no gate flipped. And the paper's own reproduce
script fails on its public artifact, which I document — so the ground truth I check against is itself
slightly ambiguous."*
