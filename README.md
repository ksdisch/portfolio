# Reproduce-and-Measure: a portfolio of honest AI-failure reproductions

**What this is:** a growing set of small, rigorous projects where I take a *recent research paper*
that claims an AI system fails in some specific way, **reproduce that failure on cheap models**, and
**measure it honestly** — pre-committed statistics, no AI judges, real confidence intervals, and
nulls reported as headlines. Each project links out to its own repo — six of the seven are
public, and a hiring manager can open, run, and poke any of those.

> **The one-sentence version:** *I built a repeatable reproduce-and-measure engine and ran it on
> half a dozen recent agent-reliability and interpretability papers — each an honest, pre-registered,
> judge-free measurement, including nulls I report as headlines.*

New here? Read the **[Methodology & Honesty Charter](METHODOLOGY.md)** first — it's the spine that
makes these one body of work. Then read the two projects below.

---

## Read these two first

**① [`dim-stage`](projects/dim-stage.md) — a mechanistic-interpretability reproduction.**
I independently rebuilt Anthropic's "Jacobian lens" from their *global-workspace* paper, validated it
**bit-for-bit against their reference code**, and asked whether the "global workspace" they found in
large models exists in *tiny* ones (Qwen2.5 0.5B–3B). Headline: a **pre-registered null** — it isn't
readable at that scale — with the downstream properties measured descriptively. This is the
highest-status surface here and the one I can defend most deeply.

**② [`forge-gap`](projects/forge-gap.md) — the most legible single artifact.**
A gap-closure chart a non-expert grasps in five seconds: a few reliability guardrails take a cheap
model from **67.5% → 100%** on a multi-step tool task. The headline gap is **injected** (a controlled
fault-recovery testbed — stated plainly on the chart), and the project *also* finds **natural** gaps
on weaker models. Agent reliability + ablation + verification, end to end.

Together they show the range: **interpretability and agent reliability, one method.**

---

## The full set

Every stat below is traced to its project's repo (verified, not taken from notes). ★ = read first.
`blind-cite` is the one row whose repo is currently private — its card says why.

| Project | Reproduces | Claim in one line | Headline result | Status |
|---------|-----------|-------------------|-----------------|--------|
| ★ **[dim-stage](projects/dim-stage.md)** | Anthropic *Global Workspace* (transformer-circuits, 2026-07-06) | A "Jacobian lens" reads a sparse mid-layer *workspace* where computation is verbally reported & steerable | **Pre-registered NULL** — not readable in Qwen2.5 0.5B/1.5B/3B (0/6 distributions each); 3 downstream properties measured descriptively; lens validated bitwise vs Anthropic's reference | **Complete** (M0–M3 + 4 stretch stages) |
| ★ **[forge-gap](projects/forge-gap.md)** | "Forge"-style harness-reliability guardrails *(a technique, no arXiv)* | Generic guardrails make a cheap model reliable on multi-step tool tasks; an ablation rig measures each one's contribution | **67.5% → 100%**, gap **+32.5pp** (Newcombe 95% [+17.3, +48.0], N=40) — gap **INJECTED**; also **natural** gaps on weak models (+45pp, +75pp) | **Complete** (11 stages) |
| **[decay-pin](projects/decay-pin.md)** | Governance Decay / Constraint Pinning (arXiv 2606.22528) | An in-context safety rule silently decays when compaction evicts it; re-pinning restores compliance | Rule visible **0/20** → compaction **20/20** → re-pin **0/40**; gap Newcombe [+77.2, +100] on **all 3 models**; replicates on 2nd task family | **Complete** (v1 + v2) |
| **[lossy-wall](projects/lossy-wall.md)** | Reclaim / Brittle Memory (arXiv 2606.25449) | At matched budget, a note keeping a *wrong conclusion* but dropping its source makes the error uncorrectable — worse than empty memory | Lossy reclaim **≤ 1/290** (Wilson UB ≤ 0.10) vs source-first **240/240**; "worse than empty" **+58%** [+44.2, +67.5]; cross-check vs author's harness **AGREE** | **Complete** |
| **[ghost-patch](projects/ghost-patch.md)** | Obey, Diverge, Collapse (arXiv 2607.04537) | Code LLMs follow a wrong-location repair instruction, compound "ghost" errors, and land in an unrecoverable state | **Two NULLS reported as headlines**: awareness doesn't reproduce (0/6 models); single-pass obedience drop ≈ 0 (CIs cross zero). Back half measured where powered | **v1 Complete** ($1.42 / $5) |
| **[mute-map](projects/mute-map.md)** | *Follow-on to `dim-stage` — an effect found during a replication, characterized here* | Deleting one concept's lens direction in the late third of the workspace band makes the model unable to say that word | **v1 chain complete.** On the full 12 × 12 prime × probe matrix at 1.5B the diagonal names **0/34** vs pooled off-diagonal **363/374** (+0.971 [+0.867, +0.983]); 126 of 132 off-diagonal pairs never measured before | **Complete** (M0–M3) |
| **[blind-cite](projects/blind-cite.md)** | Deceptive grounding (arXiv 2607.09349) | A RAG answer can pass every faithfulness/citation check yet attribute entity **Y's** evidence to **X** | **M0 fit-pilot:** the deception **doesn't manifest** on cheap models (0/36 — they refuse or name the true entity); detectors sound (16/16). An honest early null | **Parked** at M0 — repo private pending the M1 decision |

---

## What's honest about this (the part that's load-bearing)

The credibility of this portfolio is in what it *refuses* to overclaim:

- **`forge-gap`'s headline gap is injected** — a controlled fault-recovery testbed, disclosed on the
  chart, never sold as a natural reproduction.
- **`ghost-patch` and `dim-stage` headline nulls** — pre-registered, reported as headlines, not
  buried.
- **Everything is hobby-scale** — cheap/tiny models under a hard budget guard (often < $5, tracked to
  the cent). That's the stated scope: mechanical reliability of small models, not frontier capability.
- **Several papers ship no code** — these are independent rebuilds, cross-checked against reference
  implementations only where one exists (`lossy-wall`, `dim-stage`).
- **`mute-map` has no paper at all** — it characterizes an effect found during `dim-stage`, so its
  anchor is my own recorded result and there is **no external oracle**. Stated on its card, not buried:
  pre-registration and bit-for-bit re-certification are what stand in, and that's a weaker guarantee
  than someone else's number.

Judge-free verification, pre-registration, Wilson/Newcombe intervals, tiny budgets with hard guards —
[the charter](METHODOLOGY.md) states all five once.

---

## Also in this folder

- **[METHODOLOGY.md](METHODOLOGY.md)** — the Methodology & Honesty Charter: judge-free verification,
  pre-registration, Wilson/Newcombe intervals, hard budget guards.
- **[GAPS-AND-NEXT.md](GAPS-AND-NEXT.md)** — what's unfinished and what's next (this portfolio is
  living).

---

*Repo visibility: **six of the seven repos are public** — `blind-cite` is parked at M0 and kept
private until the M1 decision lands. Every other card links out to the real repo; no code is copied
into this folder. (The paper authors' own reference packages are used as cross-check oracles where
one exists — not my work, so not carded.)*

---

📚 **Project wiki:** [PROJECT.md](PROJECT.md) — status, scope, and next actions · [Wiki/_index.md](Wiki/_index.md) — topic pages and history
