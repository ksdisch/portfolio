# Learn: decay-pin — study guide

**Goal:** be able to explain *why* the safety rule disappears (compaction eviction, not model drift),
and defend the "equivalent-to-floor within a +10% margin" test as the right way to show the fix works.
Card → [../projects/decay-pin.md](../projects/decay-pin.md) · Repo → <https://github.com/ksdisch/decay-pin> · ~60 min

## 1. The 60-second version
An in-context safety rule silently decays when context compaction evicts it — after that the model
violates it 100% of the time, purely because the rule is gone. Re-pinning the rule on every compaction
pulls violations back to a clean zero, *statistically equivalent* to never losing it. Shown on three
models and two task families; v2 compares compaction strategies.

## 2. Concepts to master
- **Context compaction & eviction** — plain: when the conversation gets long, the system summarizes/
  truncates old turns to save space, which can delete a standing instruction. This is the mechanism —
  the model didn't "forget," the text was removed.
- **The three arms:** floor (rule visible), truncate (compaction evicts it), pinned (re-inject after
  each compaction). Know the numbers: 0/20 → 20/20 → 0/40.
- **Equivalence testing** — the *fix* isn't "gap > 0"; it's "pinned is *indistinguishable from* the
  clean floor." You test that the (pin − floor) upper bound sits under a pre-set +10% margin.
- **Compaction strategies (v2):** recency-truncate (evicts), head-tail (protective by construction),
  LLM-summarize (leaks ~5%).

## 3. Guided reading path
1. **`README.md`** — the capstone arc and the three-arm tables.
2. **`DECISIONS.md`** — find **D19** (head-tail's protective floor is specific to the frozen head) and
   **D28** (a design realignment); note where reasoning is disabled per model.
3. **`test_stats.py`** — run it first (it's free); it gates everything offline. Read how Wilson +
   equivalence verdicts are computed.
4. **`runner.py`** — trace one arm (`label model N compaction`): build context → compact → check
   violation.
5. **`results/`** + the v2.0 Release raw data (459 trajectory files) — the auditable evidence.

## 4. Re-derive it yourself (15 min)
Pinned arm is **0/40**. Compute the Wilson 95% interval and confirm the upper bound ≈ **8.8%**, i.e.
below the +10% equivalence margin → "RESTORED." Then take truncate **20/20** vs floor **0/20** and
sanity-check the +100% gap has a Newcombe lower bound well above zero ([+77.2, +100]).

## 5. Decisions & tradeoffs to defend
- **Claiming the gap *direction/interval*, not the paper's point estimate** → your temptation is a
  *direct* user request, which inflates the truncate rate above the paper's pooled 38%. Honest move:
  claim the structure, not the 100%.
- **Strategy variants on one model × one scenario** → cheaper, but the 5% summarize leak is specific
  to that frozen summarizer prompt; you present it as a tail risk, not a universal law.
- **Paraphrase survival counted by hand-triage** (38/40) vs verbatim (0/40) → disclosed as a judgment
  call, not a mechanical gate.

## 6. Likely probes + strong answers
- **Q: Maybe the model just got worse over a long context?** A: No — a no-error/visible control holds
  at 0/20, and re-pinning restores it. The only thing that changed is whether the rule text is
  present. It's eviction, not degradation.
- **Q: Why is "0/40 pinned" a *fix* and not just "low"?** A: Because I test *equivalence* to the clean
  floor within a pre-set +10% margin — the pinned arm is statistically indistinguishable from never
  losing the rule.
- **Q: Does the summarize leak matter?** A: 5% per compaction is a real tail risk over many
  compactions — I report it as strategy-null (CI straddles zero), not a safe guarantee.

## 7. Self-check (answer cold)
- [ ] Explain compaction eviction and why it's the cause (not forgetting).
- [ ] State the three arms and their numbers from memory.
- [ ] Why is equivalence-to-floor the right test for the fix?
- [ ] What does head-tail buy you "for free," and why is the summarize result a null?

## 8. Honesty-caveat drill
*"'0/20' means consistent with ~0%, not proven zero — I claim the Wilson upper bound. My violation
rate runs higher than the paper's because my temptation is a direct request, so I claim the gap's
direction and interval, not the point estimate. And the strategy comparison ran on one config, so the
5% summarize leak is a tail risk I report, not a universal claim."*
