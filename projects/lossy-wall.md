# lossy-wall — a lossy memory is worse than an empty one

> **In plain words:** When an AI agent compresses its memory of a session, *what it keeps* matters
> more than *how much*. If it keeps a **wrong conclusion** but throws away the **source** it could have
> recomputed from, the error **welds in** — a later correction can't dislodge it. Keep the source
> instead, and the same model stays fixable at the *same* memory budget. So a lossy memory is
> genuinely worse than no memory at all. I reproduced this from scratch and cross-checked my numbers
> against the author's own harness.

**Repo:** <https://github.com/ksdisch/lossy-wall> (public) · **Reproduces:** *"Reclaim Evaluation: A
Lossy Memory Is Worse Than an Empty One"* / Brittle Memory
(arXiv **[2606.25449](https://arxiv.org/abs/2606.25449)**) · **Status:** Complete · **Method:** [charter](../METHODOLOGY.md)  ·  cross-checked against the author's released
harness (`collapseindex/reclaim-eval`, the paper author's package — not my code).

**Write-up:** [paper](https://github.com/ksdisch/lossy-wall/blob/main/docs/paper/lossy-wall-paper.md)
· [presenter brief](https://github.com/ksdisch/lossy-wall/blob/main/docs/paper/lossy-wall-presenter-brief.md)
· [plain-English rewrite](https://github.com/ksdisch/lossy-wall/blob/main/docs/papers/lossy-wall-eli5.md)
— every statistic traced to the committed record. `ROADMAP.md` M3 carries the full labelled
comparison against the paper's own numbers.

## The claim (the paper's primitive)
At a **matched memory budget**, a note that keeps a *wrong conclusion* but drops its *recomputable
source* makes the error **uncorrectable**; a **source-first** note (keep the source, derive the
conclusion) stays fully correctable — so lossy memory is worse than empty memory.

## My narrow, honest delta
An **independent harness** (not the author's code) that replicated the paper's three pre-registered
claims **at their pre-registered gates on ≥2 of 3 models**, then **cross-checked one overlap cell
against the author's released harness** and found agreement. Arithmetic ledgers, directed corrections,
three models (llama-3.1-8b, deepseek-chat, and qwen-2.5-**72b** as a same-family substitute for the
7b after it tripped a pre-set trigger). **Total spend ≈ $2.13.**

## Headline result
- **The wall (at compression g ≤ 0.3):** lossy reclaim **≤ 1/290** (Wilson upper bound ≤ 0.10 in every
  cell: llama 0/40, deepseek 1/90, qwen-72b 0/40) vs **source-first 240/240** [91, 100]. Newcombe gap
  **≥ +87.6%** everywhere.
- **Content, not length:** a content-free *padded* note behaves like the lossy note (within ±10%), so
  it's *what* is dropped, not *how long* the note is.
- **Worse than empty (deepseek):** lossy wrong-emission **52/90 = 58%** vs a blank note **0/40**; gap
  **+58%**, Newcombe [+44.2, +67.5].
- **Cross-check:** six overlap cells vs the author's harness → **AGREE** (every difference interval
  contains zero) — *"two independent builds, one number apart across 576 gated trials."*

## The honesty caveat
- **Judge-free**: exact-match on the parsed answer plus a mechanical abstain-vs-emit classifier; a
  per-trial token-search gate confirms the source really is absent. No LLM judge, ever.
- **Third-model substitution disclosed**: qwen-2.5-7b tripped a pre-registered trigger and was
  swapped to the same-family 72b — labeled as such on every table, never presented as the paper's
  model; so "3 models" means 3 that *ran to completion*, not the originally-signed roster.
- **A parser blind spot** (escaped-dollar answers) was found mid-project and re-scored
  *conservatively* — no gate flipped — but it's a disclosed post-hoc correction.
- Hobby budget, cheap models; the paper's own reproduce script fails on its public artifact (documented).

## Run it
```bash
uv run pytest     # validator suite
uv run m1.py      # (m1–m5.py: wall, content-vs-length, worse-than-empty, logic family, boundary)
```

## How I talk about this (≈35s)
"The finding is counterintuitive and important: for agent memory, a *lossy* compression can be worse
than keeping nothing. If the note keeps the wrong answer but drops the source you'd recompute from,
the mistake becomes permanent — a later correction can't reach it. Keep the source and the same model
stays fixable at the same budget. I rebuilt the harness independently, scored it judge-free, hit the
pre-registered gates on the wall, on 'content not length,' and on 'worse than empty,' and then
cross-checked one cell against the author's own code — we agreed to within one trial across hundreds.
Where my third model tripped a trigger I swapped to a same-family larger one and labeled it plainly."

## Talk-practice checklist
- [ ] Explain "matched budget" and why it's the whole point (rules out "just kept more").
- [ ] Explain the padded-note control (content vs. length) in one sentence.
- [ ] Defend the qwen-7b→72b substitution as honest, not a fudge.
- [ ] Say what the cross-check with the author's harness proves — and what it doesn't.
