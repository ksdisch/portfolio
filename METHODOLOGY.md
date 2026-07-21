# Methodology & Honesty Charter

*The shared method behind every project in this portfolio. Each project card links back here so the
repos read as one body of work, not a pile of unrelated experiments.*

---

## In plain words (30 seconds)

I take a **recent research paper that claims an AI system fails in some specific way**, and I try to
**reproduce that failure on cheap, small models** — then I **measure it honestly**: I decide how I'll
score the result *before* I spend a cent, I grade with a dumb deterministic checker (never an AI
judge), I put real confidence intervals on every number, and if the effect isn't there I **report the
null as the headline** instead of dressing it up. Everything — every prompt, filter, and gate — is
disclosed. The claim is always *"I reproduced and measured a published paper's primitive; here's my
narrow, honest delta,"* never *"I invented this."*

Why that's credible: it removes the three ways reproduction studies usually cheat — **self-graded
homework** (I use no LLM judge), **moving the goalposts** (I pre-register the statistics), and
**hiding the misses** (nulls are headlines). It's a small, disciplined loop run many times.

---

## The five points (the DNA)

Every project runs the same loop. This is the spine.

### 1. Pick a recent failure-mode paper
Usually days-to-weeks old, often **unreplicated and shipping no code**. Reproducing something with no
reference implementation is harder — and more credible — than re-running someone's released repo. The
papers describe a *primitive*: a specific, nameable way a model breaks (a rule decays, a memory welds
in an error, a repair instruction compounds corruption, a citation check goes blind).

### 2. Reproduce a narrow slice on cheap models, at hobby scale
Small open models (GLM, DeepSeek, Qwen, Qwen2.5 0.5–3B) via OpenRouter, or tiny local models on a
laptop GPU. **Hard budget guard, typically < $5 of API spend**, tracked to the cent. The point is the
*mechanical reliability of small models under a controlled test*, **not** frontier capability. Small
scale is the stated scope, disclosed everywhere — not a limitation to hide.

### 3. Pre-commit the statistics
The scoring script is **written and dry-run before the paid data exists**. Margins and expected nulls
are **pre-registered**. Every arm gets a **Wilson** confidence interval; every *difference between*
arms gets a **Newcombe** interval. **A result whose interval overlaps its neighbor is reported as a
null**, not spun. Wrong-arm inputs make the verdict script exit `INVALID` — the gate is code, not a
judgment call made after seeing the numbers.

> **Wilson** interval = the honest error bar on a single proportion (e.g. "18/40 passed"), reliable
> even at small N and at 0% or 100%. **Newcombe** interval = the honest error bar on the *gap between
> two proportions* (e.g. "+32.5 percentage points"). If a gap's Newcombe interval includes zero, I
> can't distinguish it from no effect — so I call it null.

### 4. Judge-free, deterministic oracles — never an LLM judge
Grading is **exact-match, ground-truth, or token-ownership string-matching**. A machine that can't be
sweet-talked decides pass/fail. This sidesteps the "an AI graded its own homework" credibility trap:
the verdict is reproducible by anyone who runs the checker.

### 5. State the narrow, honest delta and build in public
Every prompt, filter, model swap, and gate is disclosed in a `DECISIONS.md`. The framing is always
*"reproduced and measured, here's my honest delta."* **A null is a reportable headline** — two of the
projects here headline nulls on purpose, and that is a feature, not a failure.

---

## What a skeptic will poke — and why the honesty makes each a strength

| The poke | The honest answer |
|----------|-------------------|
| *"Hobby scale / cheap models."* | That's the **stated scope** — mechanical reliability of small models under a < $5 guard, disclosed on every card. Owning it reads as maturity, not weakness. |
| *"One project's gap is injected."* (forge-gap) | Correct, and the chart caption says so. It's a **controlled fault-recovery testbed** by design — the fault rate is disclosed, no thumb on the scale. It never rounds up to "reproduced the paper's natural gap." |
| *"Some headlines are nulls."* (ghost-patch, dim-stage) | Intentional and **pre-registered**. A null reported honestly is the credibility flex — provided it's *presented* as a null, not buried. Both are. |

---

## The through-line

This is the same shape as a rigorous "autoresearch" reproduction loop: **published paper → reuse or
rebuild the harness → iterate a metric under verification → publish openly** — run with unusual
statistical honesty, at a scale small enough that one person can own every number. The repeatability
*is* the point: not one project, but a **repeatable reproduce-and-measure engine** run across a
growing set of papers.

*Read the [portfolio index](README.md) · study path in [LEARNING-ROADMAP.md](LEARNING-ROADMAP.md).*
