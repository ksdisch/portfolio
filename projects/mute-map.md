# mute-map — mapping an output "off-switch" inside a language model

> **In plain words:** While replicating Anthropic's interpretability work I hit an effect that
> survived every control I threw at it: **delete one concept's direction from a specific slice of the
> model, and the model becomes unable to say that word** — while the other eleven concepts in the grid
> keep working (363/374). This project maps that switch properly: how much of the vocabulary has one,
> where it lives, how much deletion it takes, and whether it damages anything else. **The v1 chain is
> complete, and a close-out stage (M4) measured the wider-vocabulary collateral.**

**Repo:** <https://github.com/ksdisch/mute-map> (public) · **Follow-on to:**
[`dim-stage`](dim-stage.md) · **Status:** **Complete (M0–M4; close-out landed 2026-07-29)** ·
**Method:** [charter](../METHODOLOGY.md)

## The honest framing (read this first)

This is **not** a paper reproduction. `forge-gap` also reproduces a technique with no arXiv paper, but
this one goes further: there is **no outside claim behind it at all**. The
anchor is `dim-stage`'s *own recorded result* (stage S4b). (Only [`hush-gauge`](hush-gauge.md) sits
further out on that ladder — it has no prior recorded result either.) That cuts both ways and I state it plainly:
there is no external oracle to check me against, so the entire burden falls on pre-registration and on
re-certifying the instrument bit-for-bit — the parent's cells reproduced exactly (**840/840** on all
three subjects at M0), plus a **108/108** re-check of this project's own earlier cells before any new
cell is read.

## The claim being characterized

Removing a single concept's Jacobian-lens direction at the **late third** of the workspace band makes
the model unable to produce that word (naming 0/n, concept probability mass ≈ .000) — concept-
specifically, with specificity emerging across 0.5B → 3B.

## Headline result — **the switch is real, localized, graded, and specific**

| Milestone | Question | Result |
|---|---|---|
| **M0** | Does the ported instrument reproduce `dim-stage`'s S4b cells exactly? | **PASSED** — **840/840** cells exact on all three subjects (60 items × 2 instructions × 7 conditions), `concept_mass` floats included; re-anchored on every later run |
| **M1** | How much of the vocabulary has an off-switch? | **PASSED** — concept-specific at 1.5B (+0.656 [+0.517, +0.763]) and 3B (+0.636 [+0.443, +0.759]) over a frozen 60-concept battery |
| **M2** | Where does it live, and how much removal does it take? | **PASSED** — localized to the late third (early − late naming +0.853 [+0.668, +0.936] at 1.5B); removal is a **dimmer, not a step function** (half-mute λ ≈ 0.23 / 0.29 / 0.36) |
| **M3** | Does muting one concept damage the others? | **PASSED** — at 1.5B the diagonal names **0/34** while the pooled off-diagonal names **363/374** (+0.971 [+0.867, +0.983]); at 3B 3/32 vs 343/352 (+0.881 [+0.731, +0.943]) |
| **M4** (close-out) | Does deleting one concept's direction damage the *other 48* vocabulary concepts? | **PASSED — VOCAB-SPARING at 1.5B and 3B, AS-SCORED ONLY** — over a 12-prime × 180-item strip, 51/71 = 0.718 [0.605, 0.810] of gated non-subset items survive all 12 deletions at 1.5B and 63/84 = 0.750 [0.648, 0.830] at 3B; the concept-level collapse sits below the bar (lower bounds 0.434 / 0.456), hence the pre-declared qualifier. M4 re-certifies two artifact sets at once (M1 255/255 and M3 468/468 cells, × 3 subjects) |

**126 of the matrix's 132 ordered off-diagonal pairs had never been measured before** — the other 6
are M1's country control cells, re-certified bit-for-bit before anything new is read.

Models: Qwen2.5-0.5B/1.5B/3B-Instruct, local MPS, forward-only. **Core chain cost: $0.**

## What the gate never asked (reported anyway)

- Collateral concentrates on a few fragile **probes**, not on damaging **primes** — `silver`'s
  direction damages nothing, yet `silver` is the most fragile probe in the grid. That **inverts** what
  the lineage's single control cell had suggested.
- Category-block collateral is **real in the wider vocabulary and does not dissolve with scale**
  (within 22/29 vs cross 769/823 at 1.5B; 35/53 vs 913/955 at 3B) — M4 **reversed** M3's "dissolves
  by 1.5B" reading, which turned out to be an artifact of arm composition (M3's within-category arm
  was 30 of 34 pairs countries; the M4 strip samples ten categories), not of scale.
- The only imperfect mutes anywhere are `Egypt` and `October` at 3B — the two concepts pre-registered
  in advance as the leaky-switch stratum.
- Ablating the direction *outside* the band is nearly free at 3B (~0–6% of naming) but costs ≈48% at
  0.5B.

## The caveat I own

M1's greedy-first-token oracle scored a concept reliably only when its bare spelling is one token —
34 of 60 words — which left planets and musical instruments at zero gated items. **M2 opened by
fixing the instrument rather than the numbers:** the oracle was widened to a deterministic prefix rule
on the recorded 3-token span (decision D9b, frozen before any run), M1's published numbers stand
untouched, and the re-score is published *beside* them as a labelled reanalysis (D10a) in which the
contrast survives on every subject and the dark categories light up.

## How I talk about this (≈35s)

"During the `dim-stage` replication one effect survived every control: delete a single concept's lens
direction from the late third of the workspace band, and the model can't say that word — while the
other eleven concepts in the grid keep working. That's not in any paper; it's my own recorded result,
so I characterized it the same way I'd characterize someone else's claim — pre-registered gates frozen
as code, deterministic logit grading, no AI judge. Four milestones: the switch exists, it's specific
to the concept, it lives in the late third and behaves like a dimmer rather than a step function, and
on the full 12×12 matrix it silences the target while leaving the rest nearly untouched. The number I
like most isn't the headline — it's that the collateral turned out to come from fragile *probes*, not
damaging *primes*, which inverts what my own earlier control cell implied."
