# blind-cite — a citation check that's blind to who the evidence belongs to

> **In plain words:** A retrieval-augmented answer about entity **X** can pass every standard
> faithfulness and citation check and *still* be quietly wrong — because it attributed entity **Y's**
> evidence to X. The usual checks don't look at *whose* evidence it is, so they're blind to it. I built
> a fully-fabricated test corpus so "who owns this fact" is exact, mechanical ground truth — no AI
> judge. **Status: measurement phase closed.** The headline is a reversal I caught against myself: I
> reported a null at N=20, audited my own sample size, ran a pre-registered extension to N=80 — and
> the failure occurs at **both** surfaces. Ten answers now carry the contrast, and every standard
> check passed all ten.

**Repo:** [ksdisch/blind-cite](https://github.com/ksdisch/blind-cite) · **Reproduces:** *Deceptive
grounding* (arXiv **[2607.09349](https://arxiv.org/abs/2607.09349)**) · **Status:** **M0 + M1 + M1C
complete; measurement phase closed 2026-08-04** — DG occurs at both surfaces (stark **3/80**, camouflaged **7/80**); the N=20 null did
not survive its own pre-registered extension · **Method:** [charter](../METHODOLOGY.md)

**Write-up:** [paper](https://github.com/ksdisch/blind-cite/blob/main/docs/paper/blind-cite-paper.md)
· [presenter pack](https://github.com/ksdisch/blind-cite/blob/main/docs/paper/blind-cite-presenter-pack.md)
· [plain-English rewrite](https://github.com/ksdisch/blind-cite/blob/main/docs/papers/deceptive-grounding-measurable-without-judge-eli5.md)
— the paper reports the reversal against itself in the same detail as the positive result.

## The claim (the paper's primitive)
A RAG answer about queried entity **X** can pass every faithfulness / hallucination / citation check
yet **attribute entity Y's evidence to X** — standard checks are *blind* to the attribution error.

## My narrow, honest delta
The paper detects this with a Kimi-K2.5 **LLM judge**. My version replaces the judge with **exact
token-ownership set membership** over a **fully-fabricated corpus** — sibling libraries that do not
exist, each owning four globally-unique token-shaped strings that appear nowhere else. Because names
and evidence are invented, **no token can enter an answer except by being copied from a retrieved
document**, so "whose evidence is this?" reduces to a lookup rather than a judgment call. Hobby
budget, judge-free.

The label rule is deliberately conservative and makes every reported rate a **floor**: an answer
that fills all four evidence slots with Y's tokens but mentions Y's name *anywhere*, even
incidentally, scores `discriminated` rather than DG.

**Which surface was pre-committed, and which was added.** The **stark** surface is the design
pre-committed at M0 and run untouched. The **camouflaged** surface (JSON tool-result rendering,
constant titles, k=4 off-theme filler docs) entered at M1 as a *labeled* arm tested **beside** it,
never instead of it — logged as the repo's D6, not slipped in. M1C then pre-registered **both**
surfaces at N=80 before any of its data existed, so the per-surface rows below are pre-committed
rather than chosen after the fact.

## Headline result — **DG occurs at both surfaces, and my own null did not survive**

The primary estimand is the DG rate at the adversarial cell (`absent × completing`), per surface,
on `qwen-2.5-7b-instruct` — the only roster model with any published anchor. All three
pre-committed scopes are reported; the original N=20 is never replaced and the extension-only N=60
is never hidden.

| surface | original (N=20) | extension-only (N=60) | **combined (N=80)** |
|---|---|---|---|
| **stark** | 0/20, Wilson [0.0%, 16.1%] | 3/60, [1.7%, 13.7%] | **3/80, [1.3%, 10.5%]** |
| **camouflaged** | 2/20, [2.8%, 30.1%] | 5/60, [3.6%, 18.1%] | **7/80, [4.3%, 17.0%]** |

**The stark surface is where this bites.** M1 measured 0/20 there and reported a null. At the
pre-registered N the same surface, the same corpus construction and the same detectors read 3/80 —
a Wilson lower bound **above zero**. **The measurement stands; the inference does not.** M1's 0/20
was correctly measured and correctly reported and its row is unchanged above. What does not survive
is the conclusion drawn from it. In the paper's own words: *"'DG ≈ 0 on this surface' turned out to
be a statement about N, not about the surface."*

**The flagship contrast — the artifact the project exists to produce.** Across both surfaces at
combined N there are **ten** DG answers (3 stark, 7 camouflaged), and on **every single one** the
mechanical faithfulness proxy PASSES (**10/10**) and the citation proxy PASSES (**10/10**). Y's
evidence attributed to X by name, Y never mentioned, a genuinely retrieved document cited. Every
standard check is blind; only ownership sees it. At M1 this rested on 2 answers and was reported as
an existence proof; at M1C it rests on ten, at both surfaces, with an interval attached — and the
mechanism claim and the rate claim stay separate.

**The secondary paired gate is reported separately and not conflated.** At combined N: stark
+0.037 [−0.015, +0.105] → **NULL**; camouflaged +0.087 [+0.024, +0.170] → **DG-EFFECT**. On the
stark arm the primary interval excludes zero while the secondary does not, **and that is not a
defect** — they answer different questions, and the dry-run carried a scenario for exactly this
case before any money was spent. DG is impossible by construction at the control cell (its document
contains zero token-shaped strings), so the paired test is effectively one-sample and is strictly
the more conservative of the two. Its stark NULL is not evidence against occurrence.

**The contamination guard reads clean: `DG-any = 0/160`** — across all 160 camouflaged trials, not
one third-party filler token entered an answer.

Earlier milestones, unchanged: **M0 fit-pilot — verdict FIT** (DG 0/36 at the adversarial cell,
detector fidelity 16/16, grounding at ceiling 12/12 per model, ≈$0.009). **M1** — 240/240 calls ok,
zero vague, zero confabulation, fidelity 288/288, $0.017735. **M1C** — 240 new trials, 240/240 ok on
the first pass, fidelity 1068/1068 over the 80-pair corpus, 0 document rejections, $0.044642.
**Project total ≈$0.072.**

## The sizing audit — the project's finding about itself

M1's pre-committed N≥20 was derived from M0's clean-**trial-yield** funnel — a function that asked
"how many pairs are needed for 20 usable trials per cell?" — and **never from a power calculation
against a target effect size.** It sized the wave for usable trials, not for detectable difference.

The consequence is mechanical. At N=20 an observed 0/N has a Wilson 95% upper bound of **16.1%**,
and **24** is the smallest N whose 0/N upper bound (13.8%) falls below the 14% reference magnitude.
**At the N this study pre-committed, a perfect zero could not have resolved even the reference
magnitude from zero.** That is why the extension was designed rather than the null written up as it
stood.

The extension is an N-extension decided **after** seeing the data, and three guards were fixed in
advance so it doesn't rest on good faith: it was argued in a brief approved before any build or
spend; N, cells, analysis and reporting language were frozen with a **single look** at the end, and
the brief pre-committed that there would be **no further extension regardless of the outcome**; and
the original N=20 result is reported alongside forever rather than replaced. What makes it
defensible is that its trigger was the sizing audit, **not the observed rate**.

## The honesty caveat (read this carefully)

- **The reversal is not attributable to N alone, and I don't claim it is.** Engagement — the share
  of clean trials at the adversarial cell that were not a refusal — differs materially between the
  two stages: **stark 35% on the original pairs against 65% on the extension's; camouflaged 35%
  against 55%.** The stages are not behaviourally exchangeable and the combined row pools them.
  Reported, not adjusted for.
- **A rate conditioned on engagement would sharpen this, and it is deliberately not stated** —
  because it is not recorded in any committed file in the repository, and neither is any test
  between the two stages. Manufacturing either for the write-up is exactly what the pre-registration
  exists to prevent.
- **Repeat draws are not stable at `temperature = 0.0`** and provider routing is unpinned: of 10
  duplicate trials of byte-identical prompts, 3 differ in answer text, 2 change label, and 2 report
  different prompt-token counts for the same prompt. **No committed rate in the repository is
  exactly reproducible by re-running its wave.**
- **Only one model was extended.** `llama-3.1-8b` and `gemma-3-12b` stay at 0/20 with a 16.1%
  Wilson upper bound — which, after the sizing audit, must be read as **untested at N=80, not shown
  clean.** They are exactly the kind of null this project just finished dismantling.
- **No point comparison with the paper is made and no p-value is attached to one.** The nearest
  published cell (14%) is illegitimate as a comparison for three structural reasons, none of them
  statistical: the condition is off the paper's grid by definition (their completing evidence
  matches the model's parametric prior; mine is fabricated and matches no prior), the number is a
  **stated lower bound**, and the schema differs. 14% is a **reference magnitude for sizing and
  wording only.**
- **The camouflage levers were bundled** (JSON rendering, constant titles, k=4 fillers moved
  together), the surfaces' intervals overlap, and **no cross-surface test was pre-registered or
  run.** What the extension does establish about the surface question is negative and useful:
  **camouflage is not required** — the plain surface produces DG too.
- **The queried entity is fabricated**, which the target paper never varies. Whether this is *the
  same phenomenon* it measures cannot be settled from inside this design: judge-free detection
  requires fabricated evidence, the paper's completing axis requires evidence the model already
  believes, and those are mutually exclusive. That residual is structural, not a budget problem.

## How it runs
```bash
uv run python m0.py verdict             # M0 fit-pilot verdict
uv run python m1.py verdict --arm a     # M1a — stark surface (the pre-committed design)
uv run python m1.py verdict --arm b     # M1b — camouflaged surface (labeled extension)
uv run python m1c.py fidelity           # M1C's detector fidelity gate (offline, free)
```
Each `verdict` re-renders its committed JSON in place — read-only against the API, but it will
touch your clone's `data/`. The verdict scripts **refuse to run** once the shared corpus pool has
moved, so a published record cannot be silently rewritten.
Results of record: `docs/M0-BRIEF.md`, `docs/M1-BRIEF.md`, `docs/M1C-BRIEF.md` (the
pre-registration), `Wiki/Results.md`, and the machine-rendered `data/m0_verdict.json` /
`data/m1a_verdict.json` / `data/m1b_verdict.json` / `data/m1c_verdict.json`.

## What's open

**Nothing in the measurement phase.** The v1-close question this card used to carry — whether v1
closed at M1's null — was overtaken by the sizing audit and answered by running M1C instead, which
pre-committed to no further extension regardless of outcome. What remains is scoped and named
rather than open-ended: the other two models are untested at power, pinning provider routing is a
design change that belongs to a future pre-registration rather than a retrofit into a frozen one,
and an engagement-conditioned rate would need to be pre-registered before it could be reported.

## How I talk about this (≈40s)
"The vulnerability is that a RAG answer can pass every citation and faithfulness check and still
attribute the wrong entity's evidence — the checks never ask *whose* evidence it is. Instead of the
paper's LLM judge, I fabricated the whole corpus so token ownership is exact, mechanical ground
truth. Here's the part I lead with: I first measured a null at twenty per cell and reported it. Then
I audited where that twenty came from and found it was sized for clean-trial *yield*, never for
power — at N=20 even a perfect zero couldn't have resolved the reference magnitude from zero. So I
pre-registered an extension to eighty, one look, no further extension permitted, and the failure
shows up at **both** surfaces: three in eighty on the plain one, seven in eighty on the camouflaged
one, both lower bounds above zero. The measurement I published stands; the inference I drew from it
doesn't, and the paper says so about itself. And the artifact landed: ten answers where faithfulness
passed, citation passed, and only ownership caught it. The lesson I actually take from it is that a
null needs its own power argument — 'we hit our pre-committed N' isn't one if the N was sized for a
different quantity."

## Talk-practice checklist
- [ ] Tell the reversal *first*, and say precisely what was withdrawn: the inference, not the
      measurement.
- [ ] Explain why a fabricated corpus makes attribution *exact* ground truth (vs an LLM judge).
- [ ] State the sizing finding from memory: 0/20 → Wilson upper 16.1%, against a 14% reference.
- [ ] Name the three guards that make an after-the-fact extension defensible, and say what the
      trigger was (the audit, not the rate).
- [ ] Own the stage-heterogeneity limitation unprompted — engagement 35% vs 55–65% — and explain
      why you will *not* quote an engagement-conditioned rate.
- [ ] Explain why the primary interval excluding zero while the paired one does not is two
      questions, not a contradiction.
- [ ] Say which surface was pre-committed and which was a labeled addition (repo D6) — and why
      running both is not moving the goalposts.
- [ ] Answer "your null flipped — why should I trust the new number?" without getting defensive.
