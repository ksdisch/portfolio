# HANDOFF.md

_Last updated: 2026-08-05 (re-carding pass, D14)_

## What was just done
- **Both flagship cards re-carded from their repos' `main` (D14)** — they had fallen behind the
  work they describe, in opposite directions:
  - **`blind-cite`: the headline reversed.** D13's "well-powered null at both surfaces" is
    **withdrawn**. Its M1C extension (repo PR #12) ran a pre-registered, power-sized, one-look
    extension to **N=80** per gated cell per surface and found DG at **both**: stark **3/80,
    Wilson [1.3%, 10.5%]**; camouflaged **7/80, [4.3%, 17.0%]**. The flagship blindness contrast
    now rests on **ten** answers, all with faithfulness PASS 10/10 and citation PASS 10/10. The
    *measurement* stands and its N=20 row is kept alongside forever; the *inference* does not.
  - **`hush-gauge`: complete, not in flight.** Carded as **complete (M0–M4)** with the full
    ledger — G0 **PASS** ×3, G1/G2/G3 **FAIL** ×3 (all pre-committed nulls), G4 **`NOT-RUN`** ×3
    (dropped by K5's pre-committed validation ladder — a passing outcome, not a gap), M4 gateless.
    D11's carry-M2-as-status-only is discharged.
- **Front matter repaired** where it inherited either stale story: README's two lane-table rows,
  intro and honesty bullets; METHODOLOGY's skeptic table (the "work in progress" row replaced by
  a G4 row and a "your null flipped" row); GAPS-AND-NEXT's per-project rows and "Do before
  sharing"; PROJECT.md status and next actions.
- **Upstream fix, separate repo:** `ksdisch/hush-gauge`'s own README was one milestone behind
  (M0–M3, no M4) and now closes on v1 — the gate ledger, an M4 block, the paper as the current
  record, and a corrected test count (656 → 1002, verified by running the suite).

## Where things stand
The public portfolio is the two-lane index, the charter, GAPS-AND-NEXT, and eight project cards.
All eight repos are public, and **as of 2026-08-05 every card is in sync with its repo** — the
first time that has been true since `hush-gauge` was carded mid-flight on 2026-08-01.

A new fact worth carrying forward: **all eight repos now ship a research paper and a presenter
pack** on their default branch. The `hush-gauge` and `blind-cite` cards link theirs; the other six
do not yet, which is the top next action.

The audit report (`docs/audit-2026-08-03.md`) remains the authoritative findings surface for items
not yet triaged into GAPS-AND-NEXT (D12) — but note it **predates both flips** above (blind-cite 2026-08-04, hush-gauge 2026-08-05).

## Immediate next move
Link the remaining six cards to their repos' paper + presenter pack — that is the one mechanical
item left. The notebook re-snapshot that D14 made necessary is **already done** (2026-08-05, seven
sources repaired, post-repair drift check clean).

## Open questions / blockers
- Six cards do not yet link their repo's merged write-up (Unresolved — mechanical, not a judgment
  call)
- ✅ Resolved 2026-08-05 — the notebook's stale copies were repaired on Kyle's confirm (seven
  sources: both cards, four front-matter docs, and blind-cite's README)
- `blind-cite` extended only `qwen-2.5-7b` to power; the other two models sit at 0/20 with a 16.1%
  Wilson upper and must be read as *untested at N=80, not shown clean* (Unresolved — belongs to
  that repo)
- No sharing caveat outstanding — the front page and the repos agree

## Files touched recently (2026-08-05)

**Re-carding pass (D14):**
- projects/blind-cite.md — rewritten for M0+M1+M1C; the reversal leads, the sizing audit gets its
  own section, the talk-practice checklist rebuilt around defending it
- projects/hush-gauge.md — rewritten for M0–M4 complete; G3 and G4 rows carry full stats, new M4
  and closing-claim sections, new caveats (the sham's limits, the orthogonality bound, the
  ALL-CAPS canary), new transferable-lesson section
- README.md — intro, lane note, both table rows, honesty bullets
- METHODOLOGY.md — skeptic table: nulls row narrowed, "work in progress" row replaced with a G4
  row, "your null flipped" row added
- GAPS-AND-NEXT.md — "Do before sharing" and both per-project rows
- PROJECT.md — status and next actions
- Decisions.md — D14 appended; D13 marked Superseded (by D14)
- Wiki/History.md — milestone appended · HANDOFF.md — this refresh

**In `ksdisch/hush-gauge` (separate repo, separate PR):**
- README.md — v1 gate ledger, M4 status block, paper pointers, D1–D48, test count, M2/M3/M4
  runners

## Files touched recently (2026-08-03)

**Front-matter refresh pass (PR #10, D13 — now superseded by D14):**
- projects/blind-cite.md, README.md, PROJECT.md, Sources.md, GAPS-AND-NEXT.md, METHODOLOGY.md,
  projects/hush-gauge.md, docs/audit-2026-08-03.md, Decisions.md, Wiki/History.md, HANDOFF.md

**Audit pass (PR #9, D12):**
- docs/audit-2026-08-03.md — the audit report (new)
- Decisions.md — D12 appended; D6 marked Superseded (by D12)
- Sources.md — audit-report row added
- GAPS-AND-NEXT.md — dated state-change flag under "Do before sharing"
- Wiki/History.md — milestone appended
