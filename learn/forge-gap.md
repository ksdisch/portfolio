# Learn: forge-gap — study guide

**Goal:** be able to present the 67.5% → 100% chart in five seconds *and* immediately, unprompted, say
"the gap is injected" and explain why that's still useful — then pivot to the natural gaps on weaker
models. The whole credibility of this project is in owning the injection.
Card → [../projects/forge-gap.md](../projects/forge-gap.md) · Repo → <https://github.com/ksdisch/forge-gap> · ~75 min

## 1. The 60-second version
Cheap models fail multi-step tool tasks in mechanical ways. You built an ablation rig that adds
guardrails one at a time and measures each one's contribution with Newcombe intervals. Flagship: on an
*injected* transient fault, error-recovery takes GLM-4.6 from 67.5% → 100%. Because the strong model
had no natural gap, you switched to weaker models and found *natural* gaps (no-submit, hallucination),
each closed by a different guardrail.

## 2. Concepts to master
- **The four guardrails and their failure classes:** error-recovery (transient tool fault),
  retry-nudge (malformed call), submit-nudge (never submits a final answer), validation (answers
  without checking the evidence). Know which failure each targets.
- **Injected vs. natural gap** — the single most important distinction in this repo. Injected = you
  seed a deterministic 503 fault to *create* a recovery scenario. Natural = a weaker model genuinely
  fails unaided.
- **Ablation rig** — measure each guardrail *in isolation* (and stacked), so a gap is attributable to
  one mechanism.
- **Validation = self-consistency, not an answer key** — it reads only the run's own tool results, so
  it can be fooled by a self-consistent-but-wrong retrieval.

## 3. Guided reading path
1. **`README.md`** — read the numbered sections; §6 (injection disclosure) and §10 (validation's
   blind spot) are the honesty core.
2. **`DECISIONS.md`** — find **D12**: GLM-4.6 passed the clean task 20/20, so there was *no natural
   gap* → the kill-trigger fired → the pivot to injection + weak models. This is the story spine.
3. **`ablation.py`** — trace one arm: baseline run → +guardrail run → Wilson/Newcombe verdict.
4. The stats/verdict code — where Wilson (per arm) and Newcombe (per gap) are computed.
5. **`chart.py`** + **`docs/figures/`** — how the capstone ladder is drawn from *already-measured*
   numbers (no new calls).

## 4. Re-derive it yourself (15 min)
Take S4: baseline **27/40**, treatment **40/40**. Compute both Wilson 95% intervals (confirm
[52.0, 79.9] and [91.2, 100]) and the Newcombe interval on the +32.5 pp gap (confirm [+17.3, +48.0]).
Then do a natural gap: llama-8b **0/40 → 18/40** and confirm +45.0 pp, [+28.2, +60.2].

## 5. Decisions & tradeoffs to defend
- **Injecting a fault** → the only way to measure recovery on a model with no natural gap; you
  disclose the fault rate and label every figure injected/natural. Tradeoff: it's a *controlled
  testbed*, not a claim about GLM-4.6's real-world failure rate.
- **Pivoting to weak models** → finds *natural* gaps so the guardrail story isn't only about injected
  faults. Tradeoff: different models fail differently, so the natural gaps need different guardrails.
- **Validation reads only run-local evidence** → keeps it judge-free and deployable, but it can accept
  a self-consistent wrong answer (quantified: ~10% of llama-8b misses).

## 6. Likely probes + strong answers
- **Q: You manufactured the gap — isn't that cheating?** A: It's disclosed on every figure; it's a
  controlled fault-recovery testbed. The strong model has no natural gap, so to measure *recovery* I
  inject a seeded fault at a stated rate. And I show natural gaps on weaker models separately.
- **Q: Does the paper's gap reproduce naturally?** A: Not on this model/task — I never claim it does.
  That's why the caveat is load-bearing.
- **Q: How do you know validation actually helps?** A: I measured it un-stacked (llama-8b 0→45%) and
  stacked (mistral 75→100%), with intervals — and I disclose the 10% it wrongly accepts.

## 7. Self-check (answer cold)
- [ ] Name the four guardrails and the failure class each fixes.
- [ ] Explain "injected gap" to a skeptic in two sentences, unprompted.
- [ ] Why did the project pivot from GLM-4.6 to mistral/llama? (D12)
- [ ] What can fool the validation guardrail, and how big is that hole?
- [ ] Read a Newcombe interval aloud; what would crossing zero mean?

## 8. Honesty-caveat drill
Lead with it: *"The flagship gap is injected — GLM-4.6 passes the clean task 100% unaided, so I seed a
deterministic transient fault at a disclosed rate to create a recovery scenario. It's a controlled
testbed, not a natural reproduction, and every figure says so. To show the guardrails matter on real
failures, I found natural gaps on weaker models."*
