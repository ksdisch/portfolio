# Reproduce-and-Measure: a portfolio of honest AI-failure research

**What this is:** a growing set of small, rigorous projects run with one method — pre-committed
statistics, no AI judges, real confidence intervals, and nulls reported as headlines — in **two
lanes**. The **agent-reliability lane** takes a *recent research paper* that claims an AI system
fails in some specific way and **reproduces that failure on cheap models**. The **model-internals
lane** rebuilt a mechanistic instrument from a paper, validated it bit-for-bit against the
authors' reference, and now uses it to map and audit small models from the inside. Each project
links out to its own repo — all eight are public, and a hiring manager can open, run, and poke
any of them.

> **The one-sentence version:** *I built a repeatable reproduce-and-measure engine and ran it in
> two lanes — honest, judge-free reproductions of recent agent-reliability papers, and a
> model-internals lineage that rebuilt Anthropic's Jacobian lens, mapped an output "off-switch"
> with it, and is now using it to audit secret-keeping — every project pre-registered, with nulls
> reported as headlines.*

New here? Read the **[Methodology & Honesty Charter](METHODOLOGY.md)** first — it's the spine that
makes these one body of work. Then read the two projects below — one from each lane.

---

## Read these two first

**① [`dim-stage`](projects/dim-stage.md) — the model-internals lead.**
I independently rebuilt Anthropic's "Jacobian lens" from their *global-workspace* paper, validated
it **bit-for-bit against their reference code**, and asked whether the "global workspace" they
found in large models exists in *tiny* ones (Qwen2.5 0.5B–3B). Headline: a **pre-registered
null** — it isn't readable at that scale — with the downstream properties measured descriptively.
This is the highest-status surface here and the one I can defend most deeply.

**② [`forge-gap`](projects/forge-gap.md) — the agent-reliability lead, and the most legible
single artifact.** A gap-closure chart a non-expert grasps in five seconds: a few reliability
guardrails take a cheap model from **67.5% → 100%** on a multi-step tool task. The headline gap is
**injected** (a controlled fault-recovery testbed — stated plainly on the chart), and the project
*also* finds **natural** gaps on weaker models. Agent reliability + ablation + verification, end
to end.

Together they show the range: **one lead from each lane — model internals and agent reliability,
one method.**

---

## Lane 1 — Model internals: the J-lens lineage

One instrument, three projects, one arc: **build the instrument → map a phenomenon with it → run
an audit with it.** `dim-stage` rebuilt Anthropic's Jacobian lens and validated it bitwise;
`mute-map` used it to characterize an output "off-switch" discovered during that replication;
`hush-gauge` is now using the validated instrument and the mapped switch to audit instructed
secret-keeping. Only `dim-stage` reproduces a paper — the other two characterize phenomena nobody
has published, and their cards say exactly what stands in for an external anchor.

Every stat below is traced to its project's repo (verified, not taken from notes). ★ = read first.

| Project | Anchor | Claim in one line | Headline result | Status |
|---------|--------|-------------------|-----------------|--------|
| ★ **[dim-stage](projects/dim-stage.md)** | Anthropic *Global Workspace* (transformer-circuits, 2026-07-06) | A "Jacobian lens" reads a sparse mid-layer *workspace* where computation is verbally reported & steerable | **Pre-registered NULL** — not readable in Qwen2.5 0.5B/1.5B/3B (0/6 distributions each); 3 downstream properties measured descriptively; lens validated bitwise vs Anthropic's reference | **Complete** (M0–M3 + 4 stretch stages) |
| **[mute-map](projects/mute-map.md)** | *`dim-stage`'s own recorded result (S4b) — no external oracle* | Deleting one concept's lens direction in the late third of the workspace band makes the model unable to say that word | On the full 12 × 12 prime × probe matrix at 1.5B the diagonal names **0/34** vs pooled off-diagonal **363/374** (+0.971 [+0.867, +0.983]); close-out **M4**: the switch is **VOCAB-SPARING** at 1.5B/3B (0.718 / 0.750 of gated wider-vocabulary items survive all 12 deletions), **AS-SCORED ONLY** | **Complete** (M0–M4) |
| **[hush-gauge](projects/hush-gauge.md)** | *Original audit — no outside claim; instrument inherited from `dim-stage`, phenomenon from `mute-map`* | Activations reveal a model is about to leak an in-context secret it was ordered to keep — even on trials where it never says it | **M1 decided — G1 FAILS and G2 FAILS at all 3 scales, both pre-committed nulls** (a passing v1 per the repo's kickoff): the probe reads speech, not secrecy — recall 0.937 / 0.571 / 0.537 on emitting trials vs 0.103 / 0.068 / 0.088 on non-emitting, and on certified-silent trials the secret sits *below* the licensed-word yardstick, significantly at 3B (−0.455 [−0.654, −0.161]). M0's G0 passed on all 3 scales (battery has dynamic range) | **In progress** (M0–M1 decided; M2/G3 decided FAIL — its PR #10 merged 2026-08-03, stats card in the next pass; G4 detachable, undecided) |

---

## Lane 2 — Agent reliability: behavioral reproductions

Recent failure-mode papers — a rule decays, a memory welds in an error, a repair instruction
compounds corruption, a citation check goes blind — reproduced on cheap models and measured under
the charter. One target (`forge-gap`) is a technique with no paper behind it; its card and
[the charter](METHODOLOGY.md) both say so.

`blind-cite` is the newest row — M0 and M1 are both measured, and whether v1 closes there is the
one call still open. Its card says where it stands.

| Project | Reproduces | Claim in one line | Headline result | Status |
|---------|-----------|-------------------|-----------------|--------|
| ★ **[forge-gap](projects/forge-gap.md)** | "Forge"-style harness-reliability guardrails *(a technique, no arXiv)* | Generic guardrails make a cheap model reliable on multi-step tool tasks; an ablation rig measures each one's contribution | **67.5% → 100%**, gap **+32.5pp** (Newcombe 95% [+17.3, +48.0], N=40) — gap **INJECTED**; also **natural** gaps on weak models (+45pp, +75pp) | **Complete** (11 stages) |
| **[decay-pin](projects/decay-pin.md)** | Governance Decay / Constraint Pinning (arXiv 2606.22528) | An in-context safety rule silently decays when compaction evicts it; re-pinning restores compliance | Rule visible **0/20** → compaction **20/20** → re-pin **0/40**; gap Newcombe [+77.2, +100] on **all 3 models**; replicates on 2nd task family | **Complete** (v1 + v2) |
| **[lossy-wall](projects/lossy-wall.md)** | Reclaim / Brittle Memory (arXiv 2606.25449) | At matched budget, a note keeping a *wrong conclusion* but dropping its source makes the error uncorrectable — worse than empty memory | Lossy reclaim **≤ 1/290** (Wilson UB ≤ 0.10) vs source-first **240/240**; "worse than empty" **+58%** [+44.2, +67.5]; cross-check vs author's harness **AGREE** | **Complete** |
| **[ghost-patch](projects/ghost-patch.md)** | Obey, Diverge, Collapse (arXiv 2607.04537) | Code LLMs follow a wrong-location repair instruction, compound "ghost" errors, and land in an unrecoverable state | **Two NULLS reported as headlines**: awareness doesn't reproduce (0/6 models); single-pass obedience drop ≈ 0 (CIs cross zero). Back half measured where powered | **v1 Complete** ($1.42 / $5) |
| **[blind-cite](projects/blind-cite.md)** | Deceptive grounding (arXiv 2607.09349) | A RAG answer can pass every faithfulness/citation check yet attribute entity **Y's** evidence to **X** | **Well-powered null at both surfaces** — 20/20 clean in every gated cell, DG 0/20 except one cell at 2/20 (Newcombe +0.100 [−0.077, +0.301], straddles 0). On those 2 answers the **flagship contrast rendered**: faithfulness PASS 2/2 and citation PASS 2/2 while ownership flags both | **M0 + M1 complete** ($0.027 / $5) |

---

## What's honest about this (the part that's load-bearing)

The credibility of this portfolio is in what it *refuses* to overclaim:

- **`forge-gap`'s headline gap is injected** — a controlled fault-recovery testbed, disclosed on
  the chart, never sold as a natural reproduction.
- **`ghost-patch`, `dim-stage`, and `hush-gauge` headline nulls** — pre-registered, reported as
  headlines, not buried. (`blind-cite` adds a fourth: a well-powered null at both surfaces, with
  the blindness contrast rendered at n=2 and reported as an existence proof, not a rate.)
- **Everything is hobby-scale** — cheap/tiny models under a hard budget guard (often < $5,
  tracked to the cent). That's the stated scope: mechanical reliability of small models, not
  frontier capability.
- **Several papers ship no code** — these are independent rebuilds, cross-checked against
  reference implementations only where one exists (`lossy-wall`, `dim-stage`).
- **`mute-map` and `hush-gauge` have no outside claim behind them at all** — `forge-gap`
  reproduces a technique with no arXiv paper, but these two go further: `mute-map` anchors on an
  effect found during `dim-stage` (my own recorded result), and `hush-gauge` asks an original
  question with no prior result of any kind. Stated on both cards, not buried: pre-registration
  and bit-for-bit re-certification of the instrument are what stand in, and that's a weaker
  guarantee than someone else's number.
- **`hush-gauge` is carded mid-flight** — the first in-progress card here, and its first decided
  measurement gates came back as **pre-committed nulls reported as headlines**: G1 and G2 both
  FAIL at all three scales (the probe reads speech, not secrecy), which the repo's kickoff calls a
  passing v1. G3 has decided and its PR #10 merged 2026-08-03; it is carried as status only — stats
  enter these tables from merged results, never from an open review. G4 (detachable) is
  pre-registered and undecided. Each gate is frozen as code before its own stage runs, and the
  card claims nothing a decided gate hasn't earned.

Judge-free verification, pre-registration, Wilson/Newcombe intervals, tiny budgets with hard
guards — [the charter](METHODOLOGY.md) states all five once.

---

## Also in this folder

- **[METHODOLOGY.md](METHODOLOGY.md)** — the Methodology & Honesty Charter: judge-free
  verification, pre-registration, Wilson/Newcombe intervals, hard budget guards.
- **[GAPS-AND-NEXT.md](GAPS-AND-NEXT.md)** — what's unfinished and what's next (this portfolio is
  living).

---

*Repo visibility: **all eight repos are public** (as of 2026-08-03). Every card links out to the
real repo; no code is copied into this folder. (The paper authors' own reference packages are used as cross-check
oracles where one exists — not my work, so not carded.)*

---

📚 **Project wiki:** [PROJECT.md](PROJECT.md) — status, scope, and next actions · [Wiki/_index.md](Wiki/_index.md) — topic pages and history
