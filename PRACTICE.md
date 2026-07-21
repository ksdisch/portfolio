# Talk-Practice Checklist

*The **drill**. This is where you rehearse — not learn (that's the
[LEARNING-ROADMAP](LEARNING-ROADMAP.md)). Work top-to-bottom; `dim-stage` and the global-workspace
paper come first because that's the surface you'll be probed hardest on.*

---

## The four fluency gates (apply to every project)

A project is "interview-ready" only when you can, **without notes**:

1. **The 60-second pitch.** Explain what it is and why it matters to a *non-expert* in under a minute
   — no jargon un-translated.
2. **Defend the caveat.** State the project's honesty caveat *before* a skeptic raises it, and explain
   why it's a design choice, not a weakness.
3. **Re-derive the headline number.** Reproduce the key statistic from memory — what was measured, the
   N, and what the confidence interval means (including what a null would look like).
4. **Answer the top skeptic probe.** Give the strongest objection and your honest answer to it.

If you can't clear all four, the per-project study guide in [`learn/`](learn/) is where you fix it.

---

## Order of attack

### 1. `dim-stage` — global workspace *(lead here; study [learn/dim-stage.md](learn/dim-stage.md))*
- [ ] 60s pitch: what a Jacobian lens does, and the pre-registered null.
- [ ] Caveat: "pre-registered null is a real result," and the band-transplant limitation.
- [ ] Re-derive: the M0 bar (pass@10 Wilson LB ≥ 0.5 on ≥ 3/6) and why 0/6 = null.
- [ ] Skeptic: "your band could be in the wrong place" → the hybrid design answer.
- [ ] Bonus: explain the AGREE gate and the 1.5B introspection dose–response.

### 2. `forge-gap` — reliability guardrails *(study [learn/forge-gap.md](learn/forge-gap.md))*
- [ ] 60s pitch: the 67.5% → 100% gap-closure chart.
- [ ] Caveat: say "the gap is injected" first; explain the controlled testbed.
- [ ] Re-derive: +32.5 pp, Newcombe [+17.3, +48.0], N=40; and the natural-gap experiments.
- [ ] Skeptic: "you manufactured the gap" → why it's still useful + the natural gaps on weak models.

### 3. `decay-pin` — governance decay *(study [learn/decay-pin.md](learn/decay-pin.md))*
- [ ] 60s pitch: rule silently evicted by compaction; re-pin restores it.
- [ ] Re-derive: 0/20 → 20/20 → 0/40, and the "equivalent to floor within +10%" test.
- [ ] Skeptic: strategy variants on one config → the 5% summarize leak as a tail risk.

### 4. `lossy-wall` — brittle memory *(study [learn/lossy-wall.md](learn/lossy-wall.md))*
- [ ] 60s pitch: keep the wrong conclusion, drop the source → error welds in.
- [ ] Re-derive: lossy ≤ 1/290 vs source-first 240/240; "worse than empty" +58%.
- [ ] Skeptic: qwen-7b→72b substitution → why it's disclosed and honest.

### 5. `ghost-patch` — obey, diverge, collapse *(study [learn/ghost-patch.md](learn/ghost-patch.md))*
- [ ] 60s pitch: the failure chain, and that two steps **didn't** reproduce at the cheap tier.
- [ ] Caveat: two nulls-as-headlines; "blindness, not blind obedience."
- [ ] Re-derive: obedience-drop CIs crossing zero; awareness 0/6.
- [ ] Skeptic: "so the paper's wrong?" → no — needs a stronger model / the iterative regime.

### 6. `blind-cite` — deceptive grounding *(study [learn/blind-cite.md](learn/blind-cite.md))*
- [ ] 60s pitch: a citation check blind to *whose* evidence it is; fabricated-corpus ground truth.
- [ ] Caveat: **it's M0 / in-progress** — don't inflate; the deception didn't manifest yet.
- [ ] Skeptic: "so it doesn't reproduce?" → the surface-specificity answer + the M1 plan.

---

## Cross-cutting (you *will* be asked these)

- [ ] **"Why Wilson and Newcombe?"** — explain both in one sentence each, and why CI-overlap → null.
- [ ] **"Why no LLM judge?"** — the self-graded-homework trap; what judge-free buys you.
- [ ] **"Why cheap models / hobby scale?"** — it's the stated scope (mechanical reliability of small
      models under a hard budget); own it as a deliberate choice, not a limitation.
- [ ] **"What's the through-line?"** — one repeatable reproduce-and-measure engine, not six one-offs.
- [ ] **"Which is your best work and why?"** — have a confident, honest answer (lead with `dim-stage`).
