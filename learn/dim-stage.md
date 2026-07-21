# Learn: dim-stage — study guide

**Goal:** be able to explain what a Jacobian lens *is*, why a bitwise match against Anthropic's
reference proves your instrument, and why a 0/6 result is a *measured null* rather than "it didn't
work." This is the surface you'll be probed hardest on — go deepest here.
Card → [../projects/dim-stage.md](../projects/dim-stage.md) · Repo → <https://github.com/ksdisch/dim-stage> · ~90 min

## 1. The 60-second version
The paper found large models have a *global workspace* — a readable, steerable mid-layer scratchpad —
using a **Jacobian lens**. You rebuilt that lens from the spec, proved it matches Anthropic's
reference **bit-for-bit**, then asked their open question: does the workspace exist in *tiny* models
(Qwen2.5 0.5B–3B)? Pre-committed the bar; answer was a clean **null** — not readable — with the
downstream properties measured descriptively.

## 2. Concepts to master
- **Residual stream & unembedding** — plain: the running "notepad" of vectors a transformer carries
  layer to layer; the unembedding turns a final vector into token probabilities. Precise: you need to
  say why reading a *mid*-layer vector normally gives garbage (it's not yet in output coordinates).
- **Jacobian lens** — plain: a per-layer linear "translator" that maps a mid-layer vector into the
  *final* layer's coordinates so you can read what the model is "currently thinking" in words.
  Precise: a per-layer linear transport matrix; applying it then the unembedding gives a readout.
- **The three workspace properties** — *verbal report* (read the thought out), *swap* (intervene and
  the report follows), *directed modulation* (instruction steers it). Know which reproduced (none at
  the bar) and which showed structure (introspection steer, selectivity).
- **pass@10 / Wilson lower bound** — the readability metric and the frozen bar (LB ≥ 0.5 on ≥ 3/6
  distributions). Know why a *lower bound* is the honest thing to gate on.
- **AGREE gate** — bitwise-identical Jacobians vs the reference; 3220/3220 top-1 readout agreement.

## 3. Guided reading path (reverse-learn it)
1. **`README.md`** — the honesty contract; the null headline and the re-scope.
2. **`docs/DECISIONS.md`** — the *why* log. Find **D2** (the workspace-band transplant — the top
   skeptic line) and the MPS-memory-cliff / rented-4090 story.
3. **`docs/M0-BRIEF.md`** — how the readability gate is defined and frozen *before* results.
4. **`m0_agree_gate.py`** — how the lens is validated against `refs/jacobian-lens/` (oracle only;
   confirm the measurement code never imports it).
5. **`fitter.py`** — how a lens is fit from a model + corpus (WikiText-103, N=100).
6. **`m0_readability_gate.py`** then **`m1_verbal_report.py`** — trace one measurement: dry-run gate →
   real run → recorded JSON.
7. **`results/*.json`** — the 28 recorded outputs; find the 0/6 M0 cells and the 1.5B introspection
   dose–response.

## 4. Re-derive it yourself (15 min)
The introspection signal: α=8 gives **30/101** reportable, α=0 control **0/101**. Compute the Wilson
95% interval for 30/101 and confirm it's ≈ **[.217, .392]** and clears zero. Then articulate why the
α=0 control being exactly 0/101 is what makes this causal, not correlational.

## 5. Decisions & tradeoffs to defend
- **Band transplanted by percentile (38–92% depth), not re-derived at small scale** → cheap and
  matches the paper, *but* a misplaced band could fake a null. Defense: hybrid design (D2) — primary
  transplant + secondary cheap diagnostics reported alongside, flagged where they align only loosely.
- **Reference used as an oracle, not scaffold** → you get a bitwise correctness check without your
  measurements depending on Anthropic's code. This is the `lossy-wall` pattern; it's a strength.
- **Escalating to a rented GPU for 3B** → honest hardware deviation; cross-device fp32 noise is orders
  below any gate's sensitivity.

## 6. Likely probes + strong answers
- **Q: Isn't a null just "your lens is broken"?** A: No — the AGREE gate proves the lens is
  bitwise-correct against Anthropic's own reference *before* any measurement. So the null is about the
  models, not the instrument.
- **Q: 0.5–3B is tiny; so what?** A: Exactly the point — the paper proved the workspace at ≥27B and
  left small scale open. I answered that open question at the bar: not readable. The method
  generalizes past agent harnesses to interp.
- **Q: Your strongest positive?** A: 1.5B introspection — steering a thought *in* makes it reportable
  in a clean dose–response, α=0 control at exactly zero.
- **Q: Could the band be wrong?** A: Yes, that's the honest risk (D2); I report the cheap diagnostics
  next to the transplant and flag where they diverge.

## 7. Self-check (answer cold)
- [ ] Why does reading a mid-layer vector need a lens at all?
- [ ] State the M0 bar and why 0/6 = null (not "inconclusive").
- [ ] What does the AGREE gate prove, and what does it *not*?
- [ ] Which downstream property gave the cleanest positive, and how do you know it's causal?
- [ ] What's the single biggest threat to the null, and how is it mitigated?

## 8. Honesty-caveat drill
Say this without flinching: *"The headline is a pre-registered null — the workspace isn't readable at
0.5–3B. That's a real, reportable result, not a failed reproduction. The one thing that could
undermine it is the band placement, which I transplanted by percentile rather than re-deriving at
small scale — so I report the cheap per-layer diagnostics alongside and flag where they only loosely
agree."*
