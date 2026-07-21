# Learn: blind-cite — study guide

**Goal:** be able to present an *in-progress* project with total honesty — never letting an M0
fit-pilot inflate into "done" — while still making the idea (fabricated-corpus, judge-free attribution
ground truth) land as clever and real.
Card → [../projects/blind-cite.md](../projects/blind-cite.md) · Repo → <https://github.com/ksdisch/blind-cite> (public) · ~50 min

## 1. The 60-second version
A RAG answer about entity X can pass every faithfulness and citation check and still attribute entity
Y's evidence to X — the checks never ask *whose* evidence it is. Instead of the paper's LLM judge, you
fabricated the whole corpus (sibling libraries Quill/Quipp) so token ownership is exact, mechanical
ground truth. It's your newest project: the fit-pilot proved the detectors and corpus are sound, but
on cheap models the deception didn't appear — they refuse or name the true owner. Honest early null,
with an open design decision.

## 2. Concepts to master
- **Deceptive grounding** — the failure: right-looking citations, wrong entity ownership.
- **Fabricated corpus → exact ground truth** — plain: because you invented `Quill`/`Quipp`, no model
  has a prior about them, and "which library owns this token" is deterministic. That's what replaces
  the LLM judge.
- **The cells:** complete×null_control (grounding precondition) and absent×completing (the adversarial
  cell where deception could appear). DG = 0/36 there.
- **"Right-reason refusal" (K4)** — the models don't deceptively ground; they refuse or explicitly
  discriminate (name both X and Y). That's why it's a null, not a positive.
- **Milestone reality** — M0 = fit-pilot (N=12 pairs/cell), M1 = the powered run (not yet run). The
  README is *stale*; truth is in `docs/M0-BRIEF.md` + `data/m0_verdict.json`.

## 3. Guided reading path
1. **`docs/M0-BRIEF.md`** — the real source of truth (the README lags). The verdict, the pilot
   outcome, and the M1 decision point.
2. **`data/m0_verdict.json`** — the committed pilot result (DG 0/36; detectors 16/16).
3. **`m0.py`** — trace the pipeline: `ping → fidelity → gen-docs → smoke → pilot → verdict`.
4. The generator + detector code — how a fabricated Quill/Quipp doc is built and how token-ownership
   is scored mechanically.

## 4. Re-derive it yourself (10 min)
Per model the adversarial cell is 0/12 (qwen 7 refuse + 5 discriminate; llama 6 + 6; gemma 5 + 7).
Add them: 0/36 deceptive-ground, all 36 accounted for as refuse-or-discriminate. Then articulate why
that's a *right-reason* null (the harness works; the phenomenon just isn't there on this surface).

## 5. Decisions & tradeoffs to defend
- **Fabricated corpus over an LLM judge** → exact, contamination-free ground truth; the tradeoff is a
  synthetic, name-forward surface that may be *easier* than the paper's production setup.
- **Single-doc, name-forward framing** → simple and controllable, but Y's identity is obvious, so
  models discriminate instead of deceiving — which is likely why the null is surface-specific.
- **M1 is an open decision** → run the pre-committed design for a well-powered null, or adopt the
  documented multi-doc + filler variant where the paper says the deception hides.

## 6. Likely probes + strong answers
- **Q: So it doesn't reproduce?** A: At M0, on a single-doc name-forward surface, no — the cheap
  models refuse or name the true owner. That's an honest early null. The paper's deception hides in
  multi-doc/tool-calling setups with filler, which is the M1 variant I'm weighing.
- **Q: Is this finished?** A: No — it's my newest project. M0 validated the detectors and corpus; M1
  is the powered run and I haven't chosen the surface yet. I won't present a pilot as a result.
- **Q: Why fabricate the corpus?** A: So "who owns this fact" is exact, mechanical truth with no
  training-prior contamination — no LLM judge needed.

## 7. Self-check (answer cold)
- [ ] State plainly that this is M0/in-progress — resist inflating it.
- [ ] Explain why a fabricated corpus gives exact attribution ground truth.
- [ ] Explain why the null may be surface-specific (name-forward, single-doc).
- [ ] Describe the M1 decision and its tradeoff.

## 8. Honesty-caveat drill
*"This is my newest project and I'll tell you exactly where it stands: the fit-pilot proved the
detectors and fabricated corpus are sound, but on cheap models the deception didn't appear — they
refuse or name the true owner, so I have an honest early null. It may be surface-specific: my
single-doc, name-forward setup is easier than the paper's multi-doc one. The open decision is whether
to run the powered null or move to the multi-doc surface. I won't present a pilot as finished."*
