# blind-cite — a citation check that's blind to who the evidence belongs to

> **In plain words:** A retrieval-augmented answer about entity **X** can pass every standard
> faithfulness and citation check and *still* be quietly wrong — because it attributed entity **Y's**
> evidence to X. The usual checks don't look at *whose* evidence it is, so they're blind to it. I built
> a fully-fabricated test corpus so "who owns this fact" is exact, mechanical ground truth — no AI
> judge. **Status: early.** The fit-pilot is done; on cheap models the deception didn't show up yet
> (they refuse or name the true owner), which is an honest early null with a design decision pending.

**Repo:** <https://github.com/ksdisch/blind-cite> (public) · **Reproduces:** *Deceptive grounding* (arXiv
**2607.09349**) · **Status:** **In progress — M0 fit-pilot complete, M1 pending** · **Method:**
[charter](../METHODOLOGY.md)

## The claim (the paper's primitive)
A RAG answer about queried entity **X** can pass every faithfulness / hallucination / citation check
yet **attribute entity Y's evidence to X** — standard checks are *blind* to the attribution error.

## My narrow, honest delta
The paper detects this with a Kimi-K2.5 **LLM judge**. My version replaces the judge with **exact
token-ownership string-matching** over a **fully-fabricated corpus** (sibling libraries `Quill` /
`Quipp` — invented, so no training-prior contamination and "who owns this token" is deterministic
ground truth). Hobby budget, judge-free.

## Headline result — **honest early null (M0 fit-pilot)**
On the single-doc adversarial cell, **deceptive grounding = 0/36**: cheap models don't deceptively
ground — they **refuse or explicitly discriminate** (naming both X and Y and surfacing the true
owner). Per model: qwen-2.5-7b 7/12 refuse + 5/12 discriminate; llama-3.1-8b 6/12 + 6/12; gemma-3-12b
5/12 + 7/12. **The detectors themselves are sound** (fidelity 16/16; grounding precondition 12/12 per
model). Cost **~$0.009**.

Because there are no false-positives, the "proxies pass while attribution flags" *contrast* **isn't
demonstrated yet** — the harness is validated, but the phenomenon didn't manifest on cheap models at
this surface.

## The honesty caveat (read this carefully — it's the least-finished project here)
- **This is M0, not a finished reproduction.** The repo's `README` is stale ("M0 not started"); the
  source of truth is `docs/M0-BRIEF.md` + `data/m0_verdict.json`.
- **The M0 result is a *reportable null* at pilot scale**, N = 12 pairs/cell. It says the *design
  works* (detectors correct, corpus sound, grounding at ceiling) and the deception simply doesn't
  appear on cheap models on a single-doc, name-forward surface.
- **M1 is a pending decision:** run the pre-committed design for a well-powered null, or adopt a
  documented variant (multi-doc with filler, where the paper says the deception hides) — logged, not
  silently chosen.
- Fully-fabricated corpus, judge-free token-ownership, hobby scale (~$0.009), three cheap models.

## Run it
```bash
python m0.py verdict   # render the committed M0 results (ping → fidelity → gen-docs → smoke → pilot → verdict)
```

## How I talk about this (≈35s)
"The vulnerability is that a RAG answer can pass every citation and faithfulness check and still
attribute the wrong entity's evidence — the checks never ask *whose* evidence it is. Instead of the
paper's LLM judge, I fabricated the whole corpus so token ownership is exact, mechanical ground truth.
It's my newest project and I'll tell you exactly where it stands: the fit-pilot proved the detectors
and corpus are sound, but on cheap models the deception didn't appear — they refuse or name the true
owner, so I have an honest early null. The open decision is whether to run the well-powered null or
move to the multi-doc surface where the paper says it hides. I'm not going to present a pilot as a
finished result."

## Talk-practice checklist
- [ ] State plainly that this is M0 / in-progress — don't let it inflate to "done."
- [ ] Explain why a fabricated corpus makes attribution *exact* ground truth (vs an LLM judge).
- [ ] Explain why the M0 null is informative *and* why it might be surface-specific.
- [ ] Describe the M1 decision (powered null vs. multi-doc variant) and the tradeoff.

*Study this project inside-and-out → [learn/blind-cite.md](../learn/blind-cite.md)*
