# HANDOFF.md

_Last updated: 2026-08-07 (write-up links D15; front-page polish D16)_

## What was just done (2026-08-07, second pass — D16)

- **The six talk-practice checklists are off the public cards**, preserved verbatim in the private
  `portfolio-prep/PRACTICE.md`. They were D5's own category still sitting in public — a list of
  which objections I have rehearsed — and inconsistent besides (`mute-map` and `hush-gauge` never
  had one). The cards keep "How I talk about this", which is an answer, not a to-do list.
- **The index shows the chart it was promising.** `forge-gap`'s gap-closure figure is embedded
  under its lead paragraph; the INJECTED disclosure is printed on the figure itself.
- **The two oversized lane cells are compressed** (`hush-gauge` 1,494 → ~1,015 chars,
  `blind-cite` 860 → ~859 with the detail moved to the card it links).
- **An author/contact line** closes the index — a reader landing here directly had no route to a
  human.
- **`hush-gauge`'s carded "1002 offline tests" is corrected**: 1002 collected, **835 run in a
  fresh clone**; 167 are gated on lens artifacts `.gitignore` never tracks. Found by that repo's
  own PR review, fixed on both sides. Second carded count in one day that described my working
  copy rather than the published repo — see `DS-2`.

## What was just done (2026-08-07, first pass — D15)

- **All eight cards now link their repo's write-up (D15).** The six that didn't — `dim-stage`,
  `forge-gap`, `decay-pin`, `lossy-wall`, `ghost-patch`, `mute-map` — got a `**Write-up:**` line
  matching the shape `hush-gauge` and `blind-cite` already used: paper · presenter pack (·
  presenter *brief* for lossy-wall, which names it that) · plain-English rewrite. `blind-cite`'s
  card gained the rewrite link it was missing. **`hush-gauge` is the only repo with no
  plain-English rewrite** — its line stays at paper + presenter pack.
- **Every added URL was checked live**, not pattern-constructed: 20 GitHub blob URLs and all four
  cited arXiv IDs returned HTTP 200. The arXiv IDs are now hyperlinked on both the four cards and
  the README's Lane-2 table rows (they were bare text before, so a skeptic had to copy-paste).
- **Re-verification pass: nothing went stale under our feet, but one number was wrong all along.**
  No project repo has moved on `main` since 2026-08-05. **`dim-stage`'s card advertised "118
  analytic tests" where a clean clone collects 86** — the 2026-08-03 audit's `DS-2` said so and was
  right. Card corrected to 86; see "Open questions" for the upstream half. The most recent upstream
  work (paper-eli5 rewrites, glossed HTML, MIT licenses, CI workflows) is additive documentation,
  not new results.
- **Three upstream defects found and disclosed, not fixed here.** `dim-stage`, `lossy-wall` and
  `ghost-patch` ship green CI badges over workflows that run **zero tests**; `hush-gauge` has no CI;
  `blind-cite` has no LICENSE. See "Open questions" below.

## What was done before that (2026-08-05)
- **`forge-gap.md:47-48` denominator fix (PR #13, merged).** The card misattributed the 10%
  wrong-record-retrieval figure to "llama-8b's misses" — corrected to the recorded 4/40 = 10% of
  the validation arm's 40 trials (verified against `forge-gap`'s `origin/main`, D4). This card is
  a tracked NotebookLM source (manifest row `915e89a9-2af8-4341-a68f-65c7d465a224`); the merge
  makes that row `changed` in `~/Projects/NotebookLMs/research-portfolio-prep/MANIFEST.md`. Repair
  is **pending Kyle's confirm** on the computed drift table — not yet done.
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
All eight repos are public and **every card links its write-up** — the mechanical backlog D14 left
behind is empty. One card is **not** in sync with its repo: `dim-stage`'s now says 86 analytic
tests — the count `dim-stage` PR #46 lands — while the repo's own published `README.md` still says
118. Until #46 merges, that one row is knowingly ahead of its source.

The audit report (`docs/audit-2026-08-03.md`) remains the authoritative findings surface for items
not yet triaged into GAPS-AND-NEXT (D12) — but it **predates both flips** (blind-cite 2026-08-04,
hush-gauge 2026-08-05) **and its per-item statuses are not maintained** — read it as a dated
snapshot, not a live checklist, and re-verify any finding against a **clean checkout** before
acting on it. Its top-10 #3 (`DS-2`) is live and was fixed here on 2026-08-07.

## Immediate next move
Nothing is mechanically outstanding in this repo. The two live threads are (a) the
`research-portfolio-prep` notebook needs a re-snapshot — **D15 moved ten tracked source rows**:
`README.md`, `GAPS-AND-NEXT.md`, `Decisions.md`, and **all seven** project cards it touched
(`dim-stage`, `forge-gap`, `decay-pin`, `lossy-wall`, `ghost-patch`, `mute-map`, `blind-cite`).
`METHODOLOGY.md`, `projects/hush-gauge.md` and `blind-cite/README.md` are unchanged by D15, and
**`PROJECT.md` is not a tracked row at all** — it is on the manifest's explicit *"do not re-add"*
exclusion list (`MANIFEST.md`), along with `HANDOFF.md`, `Sources.md` and `Wiki/`. And (b) the
upstream CI/license defects below, which belong to the project repos.

## Open questions / blockers
- **Upstream CI theater — fixes open, not yet merged.** `dim-stage`, `lossy-wall` and
  `ghost-patch` ran `uv run "$f"` over their `test_*.py` files in CI. None of those files has a
  `__main__` runner (0 of 11, 0 of 15, 0 of 12), so each file imported, exited 0, and **no test
  executed** — under a green badge the README points at. Verified by running it: `uv run
  test_stats.py` → exit 0, no output; `uv run pytest -q test_stats.py` → 6 passed. Fixed in
  `dim-stage` PR #46, `lossy-wall` PR #44, `ghost-patch` PR #26 — pytest is the thing invoked (the
  shape `mute-map` already uses) plus a collected-count floor so the vacuous mode is unreachable
  rather than merely repaired. `ghost-patch` is the one exception to "per file": its workflow
  `continue`s past `test_sandbox.py` by name, because that suite runs real Docker containers and
  GitHub's runner bind-mounts `/work` unreadable to the container user — the floor still counts its
  6 tests, since collection doesn't need Docker. `decay-pin` uses the same loop but all 13 of its
  test files *do* have runners, so its CI was always real.
- **`DS-2`'s upstream half (Unresolved until `dim-stage` PR #46 merges).** That repo's `README.md`
  still advertises 118 analytic tests. #46 adds `norecursedirs = ["refs"]` so the count means *this
  project's* tests whether or not the reference clone is present — the root cause, not just the
  symptom — and lands on **88**, not 86: the same PR splits two reference-clone assertions into
  their own `skipif`-gated tests, which collection still counts. 88 pass with the clone; 86 pass
  and 2 skip without it. **The card says 88 to match what #46 merges**, so it is ahead of the
  repo's published README only until that PR lands.
- **`hush-gauge` has no CI workflow** and **`blind-cite` ships no LICENSE** (Unresolved — the other
  seven repos have both).
- ⚠️ **Notebook drift, re-opened by D15 (Unresolved).** The 2026-08-05 repair (seven sources: both
  cards, four front-matter docs, and blind-cite's README) held until 2026-08-07, when D15 moved
  **ten** tracked rows — see "Immediate next move" for the exact list. Four of the seven repaired
  on 2026-08-05 are among them (README, GAPS-AND-NEXT, Decisions, the blind-cite card).
- `blind-cite` extended only `qwen-2.5-7b` to power; the other two models sit at 0/20 with a 16.1%
  Wilson upper and must be read as *untested at N=80, not shown clean* (Unresolved — belongs to
  that repo)
- No sharing caveat outstanding — the front page and the repos agree

## Files touched recently (2026-08-07)

**Write-up-link + re-verification pass (D15):**
- projects/dim-stage.md, forge-gap.md, decay-pin.md, lossy-wall.md, ghost-patch.md, mute-map.md —
  `**Write-up:**` line added; the arXiv IDs hyperlinked where the project has one. `dim-stage.md`
  also had its advertised test count corrected (118 → 88) — the 2026-08-03 audit's `DS-2`
- projects/blind-cite.md — plain-English rewrite link added beside the existing paper/pack links
- README.md — a "every card links its write-up" paragraph under the charter pointer; four arXiv IDs
  hyperlinked in the Lane-2 table; visibility footer re-dated to the 2026-08-07 verification
- GAPS-AND-NEXT.md — "Do before sharing" updated; the CI-theater finding and the audit report's
  unmaintained-status caveat added
- PROJECT.md — status and next actions · Decisions.md — D15 appended
- Wiki/History.md — milestone appended · HANDOFF.md — this refresh

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
