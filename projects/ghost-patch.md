# ghost-patch — when a wrong repair instruction compounds into collapse

> **In plain words:** The paper claims code-fixing AIs will *recognize* a repair instruction points at
> the wrong place, **follow it anyway**, and then compound "ghost" errors across repeated repair passes
> until the code is corrupted beyond recovery. I tried to reproduce that chain on cheap models — and
> **two of the paper's key steps didn't reproduce at this tier.** I report those as the headline
> nulls, honestly, rather than forcing a positive story.

**Repo:** <https://github.com/ksdisch/ghost-patch> (public) · **Reproduces:** *"Obey, Diverge,
Collapse"* (arXiv **[2607.04537](https://arxiv.org/abs/2607.04537)**) · **Status:** v1 Complete
(M4 closed) · **Spend:** **$1.4244 / $5 guard** · **Method:** [charter](../METHODOLOGY.md)

**Write-up:** [paper](https://github.com/ksdisch/ghost-patch/blob/main/docs/paper/ghost-patch-paper.md)
· [presenter pack](https://github.com/ksdisch/ghost-patch/blob/main/docs/paper/ghost-patch-presenter-pack.md)
· [plain-English rewrite](https://github.com/ksdisch/ghost-patch/blob/main/docs/papers/ghost-patch-eli5.md)
— every number lifted verbatim from the repo's committed records. `docs/M0-BRIEF.md` …
`docs/M4-BRIEF.md` are the source of truth for each link in the chain.

## The claim (the paper's primitive)
Code LLMs *recognize* a wrong-location repair instruction as wrong, **obey it anyway**, **compound**
ghost errors across iterative passes, and reach a corrupted state that self-guided repair can't
recover — even back to the original buggy baseline.

## My narrow, honest delta
On two cheap models (**deepseek-chat-v3.1**, **qwen3-coder-30b-a3b-instruct**) over a frozen
**186-problem RunBugRun** bank, I measured the chain step by step with pre-committed gates. Two
preconditions **failed to reproduce** at this tier, so I reported them as nulls and ran the back half
**descriptively** where the funnel left it underpowered — closing the chain end-to-end with every
label honored.

## Headline result — **two nulls, reported as headlines**

- **NULL ① — Awareness doesn't exist here.** 0/6 piloted models clear the "does the model flag the
  instruction as wrong?" probe. The paper's own subject (Kimi K2.5) reads ~25% here vs the paper's
  reported 63%. Diagnosis: *"blindness, not blind obedience"* — the awareness leg isn't present at the
  cheap tier.
- **NULL ② — No single-pass obedience drop.** The pass-rate drop from obeying the bad instruction is
  indistinguishable from zero: deepseek **d = +0.0400, 95% CI [−0.0218, +0.1029]** (150 clean pairs);
  qwen **d = +0.0362, 95% CI [−0.0343, +0.1062]** (138 pairs). Neither approaches the pre-committed
  10-point bar.

**Back half (measured where powered; pre-declared underpowered by the funnel):** recovery ceiling
deepseek 18/23 = 78.3% [58.1, 90.3], qwen 20/38 = 52.6% [37.3, 67.5]; irrecoverability qwen 6/12 =
50.0% [25.4, 74.6] never re-cross baseline in 5 passes (deepseek 0/1, an anecdote). Chain gates
straddle zero.

## The honesty caveat
- **The two nulls contradict the paper's central "aware-but-obedient" premise — at this tier** — and
  I say so plainly. That's the finding, not an embarrassment: the failure the paper describes may
  require a stronger model or the iterative-plus-sabotage regime, not a single pass.
- **The verifier can't prove disjointness from ghost errors introduced mid-loop** — no oracle knows
  where those live; the paper's own generator has the same exposure (disclosed).
- **Low N on the final gate** (≤16 clean per model, pre-declared UNDERPOWERED) means the
  irrecoverability claim can't be *resolved* at this tier — reported as such, not overstated.

## Run it
```bash
uv run pytest && uv run python m4.py verdict   # full chain: m0 → m1 → m2 → m3 → m4 (run + verdict)
```

## How I talk about this (≈40s)
"The paper's chain is: the model knows the repair instruction is wrong, obeys anyway, and compounds
errors into an unrecoverable state. I tried to reproduce it on cheap models and two of the load-
bearing steps didn't hold — the models don't even *register* the instruction as wrong (0 out of 6),
and a single bad pass doesn't measurably drop the pass rate; both confidence intervals cross zero. I
report those as the headline nulls. It's a pre-registered, judge-free measurement, so a null is a
real result — my read is that this failure mode needs a stronger model or the iterative-sabotage
regime, not a single pass at the cheap tier. I still closed the chain descriptively and kept every
underpowered label honest. Whole thing ran for $1.42."

## Talk-practice checklist
- [ ] Explain why a null here is *informative*, not a failed project.
- [ ] Distinguish "blindness" from "blind obedience" (why NULL ① reframes the paper's story).
- [ ] Read the obedience-drop CIs and explain why crossing zero = null.
- [ ] Explain "underpowered by the funnel" — why N shrank and why you still reported descriptively.
