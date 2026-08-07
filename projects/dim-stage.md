# dim-stage — does a "global workspace" exist in tiny models?

> **In plain words:** Large language models appear to have a *global workspace* — a small, shared
> mental scratchpad where the model's current computation is written in a form you can read out, swap,
> and steer. Anthropic showed this in big models using a tool called a **Jacobian lens**. I rebuilt
> that tool from scratch, checked it matches theirs *bit-for-bit*, and asked a question they left
> open: does the workspace exist in **tiny** models (Qwen2.5 0.5B–3B)? I committed to how I'd judge
> the answer before I looked. The answer: **no — it isn't readable at that scale.** But several
> downstream behaviors still showed real structure.

**Repo:** <https://github.com/ksdisch/dim-stage> (public) · **Reproduces:** Anthropic, *"Verbalizable
Representations Form a Global Workspace in Language Models,"* [transformer-circuits.pub/2026/workspace](https://transformer-circuits.pub/2026/workspace/index.html)
(2026-07-06 — **no arXiv id**) · **Status:** Complete (M0–M3 + 4 stretch stages) · **Method:**
[charter](../METHODOLOGY.md)

**Write-up:** [paper](https://github.com/ksdisch/dim-stage/blob/main/docs/paper/dim-stage-paper.md)
· [presenter pack](https://github.com/ksdisch/dim-stage/blob/main/docs/paper/dim-stage-presenter-pack.md)
· [plain-English rewrite](https://github.com/ksdisch/dim-stage/blob/main/docs/paper/global-workspace-readable-small-language-models-eli5.md)
— written from the recorded results at M0–M3 plus the four stretch stages.
`docs/M0-BRIEF.md` … `docs/M3-BRIEF.md` are normative for what each milestone found.

## The claim (the paper's primitive)
A per-layer linear **Jacobian lens** maps a model's hidden activations into the final layer's
vocabulary coordinates, revealing a **sparse mid-layer "workspace"** where computations are *verbally
reported*, *swappable by intervention*, and *steerable by instruction* — demonstrated by the paper at
≥27B parameters.

## My narrow, honest delta
I **independently rebuilt the Jacobian lens** from the paper's specification and validated it against
Anthropic's released reference implementation via an **AGREE gate — bitwise-identical Jacobians,
3220/3220 top-1 readout agreement**. (The reference is a dev-dependency used *only* as a cross-check
oracle; my measurement code never imports it.) I then measured the paper's core three workspace
properties at **Qwen2.5-0.5B / 1.5B / 3B** — scales the paper never tested. Run locally on Apple MPS,
escalating to a rented RTX 4090 for the 3B lens; **~$0.83 total GPU spend.**

## Headline result

**M0 readability gate — a pre-registered NULL, measured on all three scales:**

| | 0.5B | 1.5B | 3B |
|---|---|---|---|
| Distributions passing (of 6) at pass@10 Wilson LB ≥ 0.5 | **0/6** | **0/6** | **0/6** |
| Freeze bar (LB ≥ 0.5 on ≥ 3/6) → verdict | **NULL** | **NULL** | **NULL** |

> *"Measured answer, at the pre-registered bar: no. Three model scales, six evaluation distributions,
> zero passes — the paper's own open question, answered for Qwen2.5 0.5B–3B with a pre-registered
> null."*

**Downstream properties (descriptive** — the M0 null re-scoped M1–M3 from *reproduction* claims to
*characterization*):
- **Verbal report (swap):** report follows the swap only 0.175 / 0.124 / 0.105 of the time (vs the
  paper's 0.88 anchor) — it mostly **doesn't** follow.
- **Verbal introspection (steer, 1.5B) — the standout positive:** a steered-in thought becomes
  reportable in a clean dose–response, **0 → 30/101 [.217, .392]** at α=8, with the α=0 control
  exactly **0/101**. CI-clean.
- **Two-hop swap:** flips the answer 0.286 / 0.073 / 0.116 (vs 0.60). At 3B it works **only through
  the Jacobian transport** (raw unembedding rows flip 0/43; J−I **+.116 [+.011, +.245]**, CI-clean).
- **Selectivity (stretch S3):** the **only** would-be gate to hold on all three subjects — J-space
  ablation kills two-hop chains CI-cleanly while equivalent random damage survives.

## The honesty caveat (preserve this)
- **The headline is a pre-registered null.** The workspace is *not readable* at 0.5B–3B — reported as
  the headline, per the honesty contract. It's the paper's own open question answered downward at
  small scale, not a failure of the method.
- **Tiny models, hobby scale.** 0.5–3B is orders of magnitude below the paper's ≥27B minimum.
- **Anthropic's code is an oracle, not scaffold.** The `jacobian-lens` reference is used *only* for
  the AGREE gate; measurement code never imports it. It is Anthropic's work, never presented as mine.
- **Skeptic's best line:** the workspace band was transplanted by percentile (38–92% depth) rather
  than re-derived on small-scale data — a *misplaced* band could manufacture a false null. Owned in
  `M0-BRIEF` D2 via a hybrid design (primary = transplant; secondary = cheap per-layer diagnostics,
  reported alongside and flagged where they align only loosely).

## Run it
```bash
uv run pytest        # 88 analytic tests, no model fits required
                     # (2 of them skip without the refs/ reference clone)
# then fit a lens and measure (each runner dry-runs its gate before spending):
uv run fitter.py --model-id Qwen/Qwen2.5-0.5B-Instruct --out lenses/qwen2.5-0.5b-instruct-n100.pt
```

## How I talk about this (≈40s)
"The paper found that big models have a *global workspace* — a readable, steerable scratchpad — using
a Jacobian lens. I rebuilt that lens from their spec and checked it matches their reference
bit-for-bit, so I know my instrument is right. Then I asked their open question: does the workspace
exist in *tiny* models? I pre-committed the pass bar, and the answer was a clean null — it isn't
readable at 0.5 to 3 billion parameters. I still measured the three downstream properties; the one
that clearly survived was steering a thought *in* and having the model report it, on the 1.5B, with a
clean dose–response. So: the method generalizes past agent harnesses to mechanistic interp, and the
honest result is a measured null with one real positive signal."

## Talk-practice checklist
- [ ] Explain what a Jacobian lens *does* to a non-expert in two sentences.
- [ ] State the M0 pass bar from memory and why 0/6 is a null (not "inconclusive").
- [ ] Defend "pre-registered null is a real result," not a failed reproduction.
- [ ] Explain the AGREE gate and why using Anthropic's code as an *oracle* is a strength, not borrowing.
- [ ] Answer the band-transplant skeptic without notes.
- [ ] Describe the 1.5B introspection dose–response and why it's the strongest signal.
