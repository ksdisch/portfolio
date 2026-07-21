# Learning Roadmap — from "Claude Code built it" to "I can defend it"

*The honest starting point: I built these projects largely by driving Claude Code, so I understand
them at the level of someone who **directed** the work, not someone who could re-derive every line
cold. This roadmap closes that gap. It's the **curriculum**; [PRACTICE.md](PRACTICE.md) is the drill;
the [`learn/`](learn/) guides are the per-project deep dives. Goal: be able to sit across from an
engineer, open any repo, and defend every claim, number, and design choice claim-by-claim.*

---

## The one honest reframe

You don't need to have *typed* the code to own it — you need to be able to **reconstruct the reasoning**:
why this experiment, why this statistic, why this number came out this way, and where it breaks. A
skeptic can't tell (and doesn't care) whether you or an agent wrote a function; they can *instantly*
tell whether you understand what it does. **Optimize for reconstruction, not recall.**

---

## The six layers of knowing a project

For each project, you're fluent when you can move up all six:

| # | Layer | The question you can answer |
|---|-------|-----------------------------|
| 1 | **The paper / primitive** | What published failure mode does this reproduce, and why does it matter? |
| 2 | **The design** | What narrow slice did I test — the arms, the pre-registration — and *why that slice*? |
| 3 | **The statistics** | What was measured, at what N, with what interval — and what would a null look like? |
| 4 | **The code / harness** | How does a run actually execute: the oracle, the budget guard, the gates? |
| 5 | **The result** | The exact numbers, what they mean, and the honesty caveat that bounds them. |
| 6 | **The talk** | Narrate it in 60s; defend it against the sharpest skeptic. |

Most of the risk for you is in **layers 3 and 4** (the stats and the harness internals) — that's what
Claude Code did most invisibly. Spend your time there.

---

## Learn these ONCE — they unlock every card

All six projects share the same statistical and methodological spine. Learn it once and you've
learned 70% of every card. **Do this first, before any single project.**

### A. The statistics (highest leverage — ~2–3 hrs)
- **Wilson score interval** — the honest error bar on a *single* proportion (e.g. 18/40). Learn:
  *why* it beats the naive `p ± 1.96·√(p(1−p)/n)` at small N and at 0% / 100% (where naive gives
  zero-width or impossible bounds). **Do:** take one real cell from `forge-gap` (27/40) and compute
  its Wilson 95% interval by hand or in a 5-line script; confirm it matches the repo's [52.0, 79.9].
- **Newcombe interval** — the honest error bar on the *difference* between two proportions (the
  "gap"). Learn: why you can't just subtract two Wilson intervals, and why **a gap whose Newcombe
  interval includes 0 is reported as a null**. **Do:** re-derive `forge-gap`'s +32.5 pp gap interval
  [+17.3, +48.0] and `ghost-patch`'s obedience-drop CI that *crosses* zero — feel the difference
  between a real effect and a null.
- **Pre-registration** — why writing the verdict script and the pass bar *before* the paid data
  exists is what makes a null credible (no p-hacking, no moving goalposts). Learn the concept of a
  frozen gate that exits `INVALID` on wrong-arm input.
- **Judge-free oracles** — why exact-match / token-ownership grading beats an LLM judge (the
  self-graded-homework trap). Learn what you *give up* (subtlety) and what you *buy* (reproducibility).

> Read [METHODOLOGY.md](METHODOLOGY.md) alongside this — it states all of this in plain terms. When
> you can explain Wilson vs. Newcombe to a non-technical friend in two sentences each, layer 3 is
> yours for the whole portfolio.

### B. The method (~1 hr)
The five-point reproduce-and-measure loop (pick a recent no-code paper → cheap-model narrow slice →
pre-commit stats → judge-free oracle → honest delta, nulls as headlines). You should be able to
recite the loop and say *why each step exists* (each one closes a specific credibility hole).

### C. The plumbing (~1 hr)
- **OpenRouter + cheap models** — how a run calls a model, why these specific small models (GLM,
  DeepSeek, Qwen, Qwen2.5 0.5–3B), and the **budget guard** pattern (spend tracked to the cent, hard
  cap). Open one repo's `.env.example` and the model-call module and trace one call.
- **The repo skeleton** — every repo has the same shape: a `README`, a `DECISIONS.md` (the *why*
  log — your single most valuable file), milestone scripts (`m0…mN` or stage runners), a stats/verdict
  module, and committed `results/`. Learn the shape once; every repo navigates the same way.

---

## The reverse-learning protocol (run this on each repo)

You built these with Claude Code, so **learn them the way you'd reverse-engineer a stranger's repo you
respect**. ~60–90 min per project, in this order:

1. **Read the `README` top-to-bottom.** Get the claim, the headline, the caveat. (Layer 1, 5.)
2. **Read `DECISIONS.md` cover-to-cover.** This is the *why* — every choice, tradeoff, and trigger you
   made (or Claude Code made and you approved). If you read one file per repo, read this. (Layer 2.)
3. **Trace ONE run end-to-end.** Pick a single arm. Follow it: input → model call → oracle → recorded
   result. Say out loud what each step does. (Layer 4.)
4. **Re-derive ONE statistic by hand.** Take one cell's raw counts and reproduce its Wilson/Newcombe
   interval yourself. This is the single highest-value 15 minutes per project. (Layer 3.)
5. **Explain each core file in one sentence.** Open the file tree; for each script, say what it does
   and why it exists. Gaps = what to study next. (Layer 4.)
6. **Close the loop with Claude Code (see below).** Have it quiz you and check your explanations.
7. **Clear the four [fluency gates](PRACTICE.md)** for that project. If you can't, you're not done.

The per-project [`learn/`](learn/) guide walks you through steps 1–5 with the *specific* files,
numbers, and probes for that repo.

---

## Use Claude Code as your tutor (not your ghostwriter)

You have the best study tool already open. Flip its role from builder to examiner:

- **Explain-back:** "I'm going to explain how `m1.py` scores a trial; tell me what I got wrong."
- **Socratic quiz:** "Ask me five increasingly hard questions about `dim-stage`'s M0 gate; don't give
  answers until I try."
- **Steelman the skeptic:** "You're a staff engineer who thinks this project is weak. Interview me."
- **Trace-on-demand:** "Walk me through exactly what happens when I run `uv run ablation.py …`, file
  by file," then *check its answer against the code yourself*.
- **Re-derive with me:** "Here are the raw counts 18/40 — walk me through the Wilson interval, then
  let me do 27/40 myself."

> The [`focus-coach` / `/lockin`](../) accountability drill is built for exactly this — active recall
> against ground truth. Point it at one `learn/` guide per session.

---

## Suggested schedule (~2 weeks, ~1 hr/day)

| Days | Focus |
|------|-------|
| 1–2 | **Shared foundations A–C.** The stats especially. Don't skip; it pays off six times over. |
| 3–4 | **`dim-stage`** — the deepest and highest-status. Reverse-learn it, clear its gates. |
| 5 | **`forge-gap`** — the most legible; nail the injected-gap story. |
| 6 | **`decay-pin`** + **`lossy-wall`** — the same stats spine, quick once foundations are solid. |
| 7 | **`ghost-patch`** + **`blind-cite`** — the two null/in-progress stories; practice *honest* framing. |
| 8–9 | **Full mock loop.** Run the [PRACTICE](PRACTICE.md) gates end-to-end; have Claude Code interview you across all six. |

---

## You're ready when…
- You can give the [60-second portfolio pitch](README.md) and *any* project's pitch cold.
- You can re-derive any headline number and say what its interval means.
- You can state every honesty caveat *before* being asked.
- You can name, for each project, the single strongest objection and your answer.
- You never once say "Claude Code did that part" as a substitute for understanding it.

*Per-project deep dives → [`learn/`](learn/) · rehearsal → [PRACTICE.md](PRACTICE.md) · the method →
[METHODOLOGY.md](METHODOLOGY.md).*
