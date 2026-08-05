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

That is the reproduction lane. A second, **model-internals lane** runs the same discipline
pointed inward — rebuild a published instrument, validate it bit-for-bit against the authors'
reference, then use it to map and audit what small models do from the inside. Where a project in
that lane has no external claim to reproduce, the charter says so below rather than letting the
framing round up.

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

**Three projects don't start from a paper — each one step further from an external anchor.**
`forge-gap` reproduces a *technique* with no arXiv paper behind it — still an external target,
just not a published one. `mute-map` anchors on my own prior recorded result (`dim-stage`'s S4b
stage) — no external anchor of any kind, nobody else's number to check mine against. `hush-gauge`
goes furthest: an *original question* with no prior recorded result at all, asked with an
instrument inherited (never refit) from `dim-stage` and a phenomenon mapped by `mute-map`. Down
that ladder the external checks fall away one by one, and what replaces them is always the same
pair: pre-registration (gates frozen as code before any run) and bit-for-bit re-certification of
the instrument. Everything else in this charter applies to all three unchanged.

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
*"reproduced and measured, here's my honest delta."* **A null is a reportable headline** — nulls
headline several of these projects on purpose, and that is a feature, not a failure.

---

## What a skeptic will poke — and why the honesty makes each a strength

| The poke | The honest answer |
|----------|-------------------|
| *"Hobby scale / cheap models."* | That's the **stated scope** — mechanical reliability of small models under a < $5 guard, disclosed on every card. Owning it reads as maturity, not weakness. |
| *"One project's gap is injected."* (forge-gap) | Correct, and the chart caption says so. It's a **controlled fault-recovery testbed** by design — the fault rate is disclosed, no thumb on the scale. And since forge-gap's target is a technique with no paper behind it, there is no "paper's gap" to claim — it never rounds up to a natural reproduction of anything. |
| *"Some headlines are nulls."* (ghost-patch, dim-stage, hush-gauge) | Intentional and **pre-registered**. A null reported honestly is the credibility flex — provided it's *presented* as a null, not buried. All three are. And a null is not immune to the same discipline: `blind-cite` reported one, audited its own power, and overturned its own inference — see the row below. |
| *"mute-map has no outside claim behind it — you're grading your own homework."* | The sharpest poke here, and the card says it before you do: the anchor is `dim-stage`'s own recorded result, so there is **no external oracle**. What replaces it is pre-registration (gates frozen as code before any run) and bit-for-bit re-certification at two levels — the **parent** anchor reproduced exactly (`840/840` cells on all three subjects at M0, including every `concept_mass` float, re-anchored on later runs), plus an internal `108/108` re-check of the project's own earlier cells before any new cell is read. Both are weaker than an independent number, and they're labelled as what they are. |
| *"One project ends on a gate you never ran."* (hush-gauge's G4) | Correct, and it is a **passing** outcome rather than an unfinished one. Exactly one off-switch candidate family was pre-registered, with no post-hoc variants; it passed both structural checks and failed its behavioural one where that check could gate (0.5B and 1.5B; 3B's calibration cell sat under the n ≥ 20 house floor, so V3 never gated there), so it was dropped by the validation ladder `K5` pre-committed *before any code existed*. What that licenses is narrow and the card says so: this construction is not a mediator — not that no mediator exists. The status of the underlying question is **unknown, not absent**. hush-gauge was also carded mid-flight, when only G0 had decided, and every later gate landed the same way: reported as whatever it said, with no bar re-tuned across five milestones. |
| *"Your null flipped."* (blind-cite) | It did, and I found it before anyone asked. I reported 0/20, then audited where that N came from and found it had been sized for clean-trial *yield*, never for power — at N=20 even a perfect zero could not have resolved the reference magnitude from zero. A pre-registered one-look extension to N=80 found the failure at both surfaces. **The measurement stands; the inference does not**, and the original row is reported alongside the new one forever rather than replaced. Three guards were fixed in advance so the after-the-fact extension isn't taken on faith, and the trigger was the audit rather than the observed rate. The generalizable lesson is the uncomfortable one: **a null needs its own power argument.** |

---

## The through-line

This is the same shape as a rigorous "autoresearch" reproduction loop: **published paper → reuse or
rebuild the harness → iterate a metric under verification → publish openly** — run with unusual
statistical honesty, at a scale small enough that one person can own every number. The repeatability
*is* the point: not one project, but a **repeatable reproduce-and-measure engine** run across a
growing set of papers.

*Read the [portfolio index](README.md).*
