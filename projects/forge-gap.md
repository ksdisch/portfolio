# forge-gap — how much do reliability guardrails actually recover?

> **In plain words:** Give a cheap AI model a multi-step task that uses tools and it fails in
> mechanical ways — it gives up on a transient error, malforms a call, forgets to submit an answer, or
> answers without checking. I built a test rig that bolts on simple **guardrails** one at a time and
> measures *exactly* how much each one recovers, with real error bars. The flagship chart: on an
> injected fault, one guardrail takes a model from **67.5% → 100%**. The word **injected** is load-
> bearing — see the caveat.

**Repo:** <https://github.com/ksdisch/forge-gap> (public) · **Reproduces:** "Forge"-style
harness-reliability guardrail primitives *(a technique, **no arXiv paper**)* · **Status:** Complete
(11 stages, S0–S11) · **Method:** [charter](../METHODOLOGY.md)

## The claim (the primitive)
Specific, generic guardrails — **error-recovery** (retry a transient tool fault), **retry-nudge**
(re-prompt a malformed call), **submit-nudge** (force a final answer), and **validation** (check the
answer against the evidence gathered) — each close a *distinct* failure class in multi-step tool use.
An **ablation rig** measures each guardrail's contribution in isolation, with confidence intervals.

## My narrow, honest delta
A harness that (a) **injects mechanical faults deterministically** (seeded transient 503s, malformed
calls) so a recovery scenario exists to measure, (b) measures each guardrail with **Wilson/Newcombe
CIs**, (c) finds the **boundary** where guardrails help vs. where a strong model just self-corrects,
and (d) — when the strong model showed *no natural gap* — **pivoted to weaker models to find natural
gaps too**, so the story is bracketed at both ends.

## Headline result

**Flagship (S4) — GLM-4.6, on an INJECTED transient-fault task:**
- Baseline **27/40 = 67.5%** (Wilson 95% [52.0, 79.9]) → **+error-recovery 40/40 = 100%** (Wilson 95%
  [91.2, 100]).
- Gap **+32.5 pp**, **Newcombe 95% [+17.3, +48.0]**, N=40 (fault_rate 0.6; the harness absorbed 104
  transient 503s).

**Natural gaps on weaker models (no injection):**
- **mistral-nemo**, submit-nudge: **0/20 → 15/20 = 75%**, gap +75.0 pp, Newcombe [+47.8, +88.8], N=20.
- **llama-3.1-8b**, validation: **0/40 → 18/40 = 45%**, gap +45.0 pp, Newcombe [+28.2, +60.2], N=40.

## The honesty caveat (preserve this — it's the credibility)
- **The S4 headline gap is INJECTED.** GLM-4.6 passes the clean task **100% unaided**, so there is no
  natural gap for a guardrail to recover; a *deterministic, seeded* transient 503 is injected at a
  disclosed rate to create the recovery scenario. Repo's own words: *"a controlled fault-recovery
  testbed, gap and rate disclosed, no hidden thumb on the scale."* Every figure states whether its gap
  is **injected** or **natural**. This never rounds up to "reproduced the paper's natural gap."
- **Validation is a self-consistency check, not an answer key** — it reads only the run's own tool
  results, so it can be *fooled* by a self-consistent-but-wrong retrieval (quantified: ~10% of
  llama-8b's misses were exactly this).

## Run it
```bash
uv run ablation.py z-ai/glm-4.6 40 0.6   # S4: baseline + error-recovery, N=40, fault_rate=0.6
uv run chart.py                          # regenerate the charts from saved numbers (no API calls)
```

## How I talk about this (≈40s)
"It's a gap-closure chart: guardrails take a cheap model from 67.5% to 100% on a multi-step tool
task, and the ablation rig shows *which* guardrail does it, with Newcombe intervals. The honest catch
— and I lead with it — is that the flagship gap is *injected*: the strong model passes 100% unaided,
so I inject a seeded transient fault at a disclosed rate to create a recovery scenario. It's a
controlled testbed, not a natural gap. To show the guardrails matter on *real* failures too, I
switched to weaker models and found *natural* gaps — a model that never submits, a model that
hallucinates — each closed by a different guardrail. So the artifact is legible in five seconds and
still statistically honest under the hood."

## Talk-practice checklist
- [ ] Say "the gap is injected" *before* a skeptic asks — and explain why that's still useful.
- [ ] Name the four guardrails and the failure class each one targets.
- [ ] Explain the difference between the injected S4 gap and the natural mistral/llama gaps.
- [ ] Explain why validation is a *self-consistency* check and how it can be fooled.
- [ ] Read a Newcombe interval aloud and say what it would mean if it crossed zero.
