# blind-cite — a citation check that's blind to who the evidence belongs to

> **In plain words:** A retrieval-augmented answer about entity **X** can pass every standard
> faithfulness and citation check and *still* be quietly wrong — because it attributed entity **Y's**
> evidence to X. The usual checks don't look at *whose* evidence it is, so they're blind to it. I built
> a fully-fabricated test corpus so "who owns this fact" is exact, mechanical ground truth — no AI
> judge. **Status: v1 measured.** Cheap models almost never do this (a well-powered null) — but on the
> two occasions one did, every standard check passed it and only ownership caught it. That contrast is
> the thing the project was built to show, and it rendered.

**Repo:** [ksdisch/blind-cite](https://github.com/ksdisch/blind-cite) · **Reproduces:** *Deceptive
grounding* (arXiv **2607.09349**) · **Status:** **M0 + M1 complete** — well-powered null at both
surfaces; flagship contrast rendered · **Method:** [charter](../METHODOLOGY.md)

## The claim (the paper's primitive)
A RAG answer about queried entity **X** can pass every faithfulness / hallucination / citation check
yet **attribute entity Y's evidence to X** — standard checks are *blind* to the attribution error.

## My narrow, honest delta
The paper detects this with a Kimi-K2.5 **LLM judge**. My version replaces the judge with **exact
token-ownership string-matching** over a **fully-fabricated corpus** (sibling libraries `Quill` /
`Quipp` — invented, so no training-prior contamination and "who owns this token" is deterministic
ground truth). Hobby budget, judge-free.

## Headline result — **well-powered null, and the contrast rendered anyway**
M1 ran as **Option C: both surfaces, sequenced** — M1a exactly as pre-committed (the stark surface),
then M1b as a labeled camouflage arm (JSON tool-result rendering, constant titles, k=4 off-theme
filler docs), 20 pairs each. The decision to run both rather than swap one for the other is logged as
the repo's D6, not slipped in.

**The null:** every model held **20/20 clean trials in both gated cells on both arms** — 240/240
trials ok, zero vague, zero confabulation, detector fidelity 288/288. Deceptive grounding was **0/20
everywhere** except `qwen-2.5-7b` at the camouflaged adversarial cell (**2/20**). That cell is what
the pre-committed gate tests: 2/20 against 0/20 at its own control, Newcombe **+0.100 [−0.077,
+0.301]** — the interval straddles 0, so the gate renders **NULL**. Per-model Wilson 95% upper bound
on DG is **16.1%** on every 0/20 cell; that one exception is **[2.8%, 30.1%]**.

Comparing the two *surfaces* to each other is deliberately **not** a gated claim — the arms ran
sequentially on the same pairs, not randomized between — so the repo publishes that contrast as
per-surface bounds with no delta, and I report it the same way: texture, not a finding.

**The flagship contrast:** on those two answers, mechanical **faithfulness PASS 2/2 and citation
PASS 2/2** — while token ownership flags both. Y's evidence is attributed to X *by name*, Y is never
mentioned, and the cited doc really was retrieved. Every standard check is blind; only ownership sees
it. **n = 2 is an existence proof of the mechanism, not a rate**, and it is reported as exactly that.

Earlier, **M0 fit-pilot — verdict FIT**: DG 0/36 at the adversarial cell (models refuse or explicitly
name the true owner), detector fidelity 16/16, grounding at ceiling 12/12 per model, ~$0.009.

M1 spend **$0.0177** against a $0.45 cap; **project total ≈$0.027**.

## The honesty caveat (read this carefully)
- **The headline is a null, and I'm not dressing it up.** On cheap models, at both surfaces, deceptive
  grounding essentially does not occur. The pre-committed design (M1a) rendered that verdict
  untouched; the camouflage arm was tested *beside* it, never *instead of* it.
- **The contrast is an existence proof at n = 2.** It demonstrates the mechanism is real and that the
  standard checks are blind to it. It does **not** establish a rate: the gate interval on that cell
  straddles zero, which is exactly why the verdict is a null.
- **Every DG in the project (n = 2) appeared only at the camouflage surface and only on the paper's own
  kin model.** That is texture worth stating, not a claim I can defend as a finding.
- Fully-fabricated corpus, judge-free token ownership, hobby scale (≈$0.027), three cheap models,
  pre-committed gates rendered by script.

## How it runs
```bash
uv run python m0.py verdict            # M0 fit-pilot verdict
uv run python m1.py verdict --arm a    # M1a — stark surface (the pre-committed design)
uv run python m1.py verdict --arm b    # M1b — camouflaged surface (labeled extension)
```
Each `verdict` re-renders its committed JSON in place — read-only against the API, but it will
touch your clone's `data/`.
Results of record: `docs/M0-BRIEF.md`, `docs/M1-BRIEF.md` ("M1 outcome" addendum), `Wiki/Results.md`,
and the machine-rendered `data/m0_verdict.json` / `data/m1a_verdict.json` / `data/m1b_verdict.json`.

## What's open
**Whether v1 closes here.** The repo proposes closing at M1 — M2 would suppress a rate that is already
~0 and M3 would ablate a phenomenon that occurred twice, both degenerate on the measured data. That
call is logged as *Proposed*, not decided. If the null is pushed on instead, two escalations are
pre-named and each needs its own argued addendum before any spend: a frozen title pool assigned by
post-shuffle document *position*, and same-theme filler generation under a new verifier contract.

## How I talk about this (≈35s)
"The vulnerability is that a RAG answer can pass every citation and faithfulness check and still
attribute the wrong entity's evidence — the checks never ask *whose* evidence it is. Instead of the
paper's LLM judge, I fabricated the whole corpus so token ownership is exact, mechanical ground truth.
The honest headline is a null: on cheap models this basically doesn't happen — 20 out of 20 clean in
every gated cell, at the plain surface and at a camouflaged one I added as a labeled extension. But it
did happen twice, and those two answers are the whole point: faithfulness passed, citation passed, and
only ownership caught that another library's function had been attributed to the one I asked about.
That's an existence proof of the blind spot, not a rate, and I report it as two."

## Talk-practice checklist
- [ ] Lead with the null — don't let the n=2 contrast inflate into "I found the vulnerability."
- [ ] Explain why a fabricated corpus makes attribution *exact* ground truth (vs an LLM judge).
- [ ] Say why a well-powered null is a real result here, and what it would take to overturn it.
- [ ] Explain Option C: why both surfaces ran, and why that isn't moving the goalposts.
- [ ] State that the cross-surface CI straddles zero — camouflage is untested, not proven.
