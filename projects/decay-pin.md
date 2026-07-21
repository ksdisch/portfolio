# decay-pin — a safety rule that silently decays, and the fix

> **In plain words:** You give an AI agent a standing rule ("never do X"). It obeys — until the
> conversation gets long and the system *compacts* the history to save space, quietly deleting the
> rule. After that the agent breaks it every time, with no warning. The paper calls this **governance
> decay**. The fix — **constraint pinning** — is to re-inject the rule every time you compact. I
> reproduced both the decay and the fix on cheap models, and put error bars on it.

**Repo:** <https://github.com/ksdisch/decay-pin> (public) · **Reproduces:** *Governance Decay* +
*Constraint Pinning* (arXiv **2606.22528**) · **Status:** Complete (v1 + v2) · **Method:**
[charter](../METHODOLOGY.md)

## The claim (the paper's primitive)
An in-context safety rule **silently decays** when ordinary context compaction evicts it from the
window; **re-pinning** the rule after every compaction restores compliance.

## My narrow, honest delta
Hobby-scale reproduction: **N = 20–40 per arm**, **three models** (GLM-5.1, Qwen3.6-27B,
Gemini-3.5-flash), **two task families**, one compaction budget (2200 tokens). Direction and structure
match the paper; I claim the **gap direction and interval**, not the paper's exact point estimates
(my temptation is a *direct* user request, which inflates the violation rate above the paper's pooled
average — disclosed). v2 adds a **compaction-strategy axis**.

## Headline result

**Scenario 1 (all three models):**
- Rule visible (floor): **0/20** (Wilson [0, 16.1]) → recency-truncate compaction: **20/20** (Wilson
  [83.9, 100]) → re-pin after every compaction: **0/40** (Wilson [0, 8.8]).
- Decay gap **+100.0%**, Newcombe [+77.2, +100] **on all three models**; the pinned arm is
  statistically **equivalent to the clean floor** (pin − floor upper bound +8.8% ≤ the +10% margin) →
  **RESTORED**.

**Scenario 2 (2nd task family, GLM-5.1):** 0/20 → 20/20 → 0/40 → **REPLICATED**.

**v2 compaction-strategy axis (GLM-5.1):** head-tail compaction **0/40** (protective) · LLM-summarize
**2/40 = 5%** [1.4, 16.5], gap straddles zero → **strategy-null** · recency-truncate **20/20**.

## The honesty caveat
- **Hobby N**: "0/20" means *consistent with ~0%*, never "proved 0%" — the Wilson upper bound is what
  I claim.
- **Point estimates differ from the paper on purpose**: a direct-request temptation inflates the
  truncate rate above the paper's pooled 38%; the claim is the *gap*, not the 100%.
- **Strategy variants** (summarize, head-tail) ran on one model × one scenario × one frozen
  summarizer prompt — a genuine tail risk (the 5% summarize leak) rather than a universal guarantee.
- Cheap models only; temperature 0.7 throughout (signal comes from N, not faked determinism).

## Run it
```bash
uv run test_stats.py                 # offline verdict gates first — free, gates everything
uv run runner.py floor-glm glm 20 0  # one example arm (label · model · N · compaction)
```

## How I talk about this (≈35s)
"A standing safety rule gets silently deleted when the agent compacts its context, and after that the
model violates it 100% of the time — but *only* because the rule is gone, not because the model got
worse. Re-pinning the rule on every compaction pulls it back to a clean zero, statistically
equivalent to never having lost it. I showed that on three models and two task families with Newcombe
intervals, and in v2 I compared compaction strategies — head-tail preserves the rule for free, while
LLM-summarize leaks it about 5% of the time. Cheap models, pre-registered gates, judge-free scoring."

## Talk-practice checklist
- [ ] Explain *why* the rule disappears (compaction eviction), not just that it does.
- [ ] Say what "equivalent to the floor within a +10% margin" means and why it's the right test for the fix.
- [ ] Defend claiming the *gap*, not the paper's point estimate.
- [ ] Explain the v2 strategy finding (head-tail free; summarize's 5% leak as a tail risk).

*Study this project inside-and-out → [learn/decay-pin.md](../learn/decay-pin.md)*
