# History — portfolio

> How this project got here: a chronological narrative of eras and milestones,
> reconstructed from merged PRs, git history, wrap logs, and ADRs.
> PR numbers, merge dates, tags, and SHAs are **Fact** by construction; rationale
> lines carry explicit labels (**Fact** when quoted from a PR body/ADR, **Inference**
> when reconstructed). Decisions are anchored by ID to the project's decision
> ledger — never restated here. **Append-only:** new milestones are added at the
> bottom (above the Mining coverage footer); existing entries are never rewritten.

## Origin — 2026-07

Built in a single day — 2026-07-21, first commit `3c842a1` — as an interview-prep
index of Kyle's six reproduce-and-measure research projects (dim-stage, forge-gap,
decay-pin, lossy-wall, ghost-patch, blind-cite). Assembled via a six-agent
reconnaissance sweep across the six project repos, with every stat on every card
verified against its source repo rather than taken from notes [Fact — backfill
briefing + README.md; the six-agent build process itself is not recorded in-repo].
This repo contains no code by design — it is a method-first presentation layer
that links out to the real repos — see D4 in `Decisions.md`.

## Era: Assembly and wiring (2026-07)

The entire portfolio landed in one pass, then got its knowledge layer five days
later. No content revisions in between.

### Full portfolio assembled — 2026-07-21
- **Landed:** 18 files, 1,288 lines in one commit (`3c842a1`): README index,
  Methodology & Honesty Charter (METHODOLOGY.md), LEARNING-ROADMAP.md,
  PRACTICE.md, GAPS-AND-NEXT.md, six project cards (`projects/`), six learn
  guides (`learn/`)
- **Why:** present six repro projects as one body of work — a repeatable
  reproduce-and-measure engine — rather than a pile of unrelated experiments
  [Fact — METHODOLOGY.md]; method-first framing with dim-stage as lead card —
  see D1 in `Decisions.md`
- **Also that day:** blind-cite flipped public, completing all-six-public — see
  D3 in `Decisions.md`; the paper authors' reference clones (reclaim-eval,
  jacobian-lens) deliberately excluded from cards — see D2 in `Decisions.md`
- **Tradeoff:** a link-out index stays honest and runnable but depends entirely
  on the six external repos remaining public and stable [Inference — rationale
  not recorded]

### Project wiki initialized — 2026-07-26
- **Landed:** PROJECT.md, HANDOFF.md, Sources.md, Decisions.md (PR #1, merge
  `4979300`)
- **Why:** "Initializes the project wiki via the project-wiki skill (INIT mode,
  additive only — no existing files touched)"; no portfolio content changed
  [Fact — PR #1 body]

## Era: Audience correction (2026-07)

The first real revision since assembly. The portfolio was authored as a personal
artifact that happened to be public; this era separated what belongs to a reader
from what belongs to me.

### Fluency curriculum un-published; index refreshed — 2026-07-28
- **Landed:** LEARNING-ROADMAP.md, PRACTICE.md, and the six `learn/` guides
  moved to the new private `ksdisch/portfolio-prep`; a `mute-map` card added;
  `blind-cite` re-framed as parked with its repo private; the "all six repos are
  public" claim corrected — see D5–D7 in `Decisions.md`
- **Why:** a GitHub-wide recruiter-facing audit found the curriculum opened by
  stating which parts of my own work I could not yet defend, in the root of the
  repo I steer readers toward — the opposite signal from the calibrated
  confidence the rest of the portfolio earns [Fact — audit findings]
- **Also found:** the index silently omitted `mute-map` (public and complete at
  M0–M3) and asserted a repo count that was wrong in two directions
  [Fact — README.md:81 vs `gh repo list`]
- **Tradeoff:** the study material is now a repo I have to keep in sync by hand
  rather than one directory away; cross-links from the moved files back to the
  public charter were rewritten to absolute URLs so they don't rot
  [Inference — the alternative, deleting it, was rejected outright]
- **Note:** the moved files remain in this repo's public git history. Removing
  them there needs a history rewrite, which was not run [Fact — declined]

---

## Era: Two lanes (2026-08)

### Index restructured into two lanes; hush-gauge carded in progress — 2026-08-01
- **What:** the flat seven-row index became two lane tables — model internals (the J-lens
  lineage: `dim-stage` → `mute-map` → `hush-gauge`) and agent reliability (the behavioral
  reproductions) — with `hush-gauge` as the portfolio's first in-progress card and `mute-map`
  refreshed for its M4 close-out [Fact — README.md, Decisions.md D9–D10]
- **Why:** the internals projects share one instrument, one arc (build it → map with it → audit
  with it), and an epistemic profile distinct from paper reproductions; one flat table hid the
  lane Kyle's research had actually grown [Fact — D9 rationale]
- **Also:** ledger and charter repairs from the 2026-07-29 audit's follow-up list — D3 marked
  superseded by D6 (F9), the `jacobian-lens` fork deletion recorded as D8 (F12), METHODOLOGY's
  forge-gap contradiction fixed (F13), HANDOFF refreshed (F7), the pull-quote recounted (F8)
  [Fact — Decisions.md, METHODOLOGY.md]
- **Tradeoff:** an in-progress card must be kept in sync as gates decide, and it hands a skeptic
  an "unfinished work" poke — owned with a dedicated skeptic-table row rather than hidden
  [Inference — METHODOLOGY.md skeptic table]

### hush-gauge M1 carded — the first decided nulls on the in-progress card — 2026-08-03
- **What:** the hush-gauge card, README lane row, METHODOLOGY skeptic row, and GAPS-AND-NEXT
  updated for M1's decision: G1 FAILS and G2 FAILS at all three scales, both pre-committed nulls
  ("the probe reads speech, not secrecy"), merged in hush-gauge PR #6 on 2026-08-02; every carded
  stat verified against `docs/M1-RESULTS.md` on that repo's `main` [Fact — projects/hush-gauge.md,
  README.md]
- **Why held back:** M2/G3 also decided — FAIL at all three scales — but in hush-gauge's PR #10,
  still open *at this milestone*, so it was carried as status only — see D11 in `../Decisions.md`
  [that PR merged later the same day, 2026-08-03; the stats carding is the next pass]
- **Tradeoff:** the portfolio briefly shows a decided-but-uncarded M2, traded for keeping D4's
  verified-against-merged-results bar intact [Fact — D11 rationale]

### Full-portfolio audit delivered — 78 graded findings, 48 banked ideas — 2026-08-03
- **What:** all eight carded repos plus the `trajectory-otel` scaffold audited at pinned
  `origin/main` snapshots (17-agent fan-out: per-repo auditor + adversarial verifier; 35
  CONFIRMED / 2 DOWNGRADED / 0 refuted on the 37 serious findings), delivered as the ranked
  decision brief `docs/audit-2026-08-03.md` (PR #9) [Fact — docs/audit-2026-08-03.md]
- **Also:** `blind-cite` re-published itself and resolved M1 as Option C via its own merged
  PR #8 while the audit ran — recorded as D12, which also marks D6's park ended — see D12 in
  `../Decisions.md` [Fact — GitHub API, blind-cite PR #8]
- **Tradeoff:** the report deliberately changes no project repo (decision brief only, per the
  commissioning handoff), so the portfolio's own front matter stays stale until the report's #1
  item is triaged — flagged in GAPS-AND-NEXT rather than silently fixed [Fact — D12 rationale]

### blind-cite's park ends; front matter refreshed for the public-and-M1-complete flip — 2026-08-03
- **What:** the audit's #1 ranked item landed — `README.md`, `projects/blind-cite.md`,
  `PROJECT.md`, `Sources.md` and `GAPS-AND-NEXT.md` refreshed across the **18 spots left for this
  pass** — the audit enumerated 22 across seven files, and `53f2732` had already synced HANDOFF's
  3 and Decisions' 1 — and GAPS' mid-audit state-change flag resolved [Fact — D13]
- **Why it outranked everything:** the front page asserted seven-of-eight-public and "M1 decision
  pending" while the repo itself was public with M1 measured — the exact defect class the charter
  calls out, on the most visible pages here [Fact — audit report BC-1, graded critical]
- **What changed since the audit:** blind-cite moved past the M1 *decision* the audit caught. At
  `e057c6d` (its PR #9, after the audit's `1beb5ac` pin) M1 is **complete** — well-powered NULL at
  both surfaces, blindness contrast rendered at n=2 [Fact — blind-cite `docs/M1-BRIEF.md`, D10]
- **Tradeoff:** the repo proposes closing v1 at M1 but logs it *Proposed*; the card states the
  close as the open call rather than pre-deciding Kyle's decision [Fact — blind-cite D11]

### Both flagship cards re-carded; blind-cite's headline reverses — 2026-08-05
- **What:** `projects/blind-cite.md` and `projects/hush-gauge.md` rewritten from their repos'
  `main`, with README, METHODOLOGY, GAPS-AND-NEXT and PROJECT.md repaired where they inherited
  either stale story [Fact — D14]
- **Why now:** both cards had fallen behind the work they describe, in opposite directions —
  blind-cite's overstated the certainty of a null, hush-gauge's understated a finished project by
  three milestones. Discovered while regenerating the `research-portfolio` hub course, which reads
  these cards as source material [Fact — D14]
- **blind-cite — the reversal:** the M1C extension (repo PR #12) ran a pre-registered,
  power-sized, one-look extension to **N=80** and found DG at **both** surfaces — stark 3/80
  [1.3%, 10.5%], camouflaged 7/80 [4.3%, 17.0%]. D13's "well-powered null" is **withdrawn**. The
  measurement stands and its N=20 row is kept alongside forever; the inference does not
  [Fact — blind-cite `docs/paper/blind-cite-paper.md` §5.3, `docs/M1C-BRIEF.md`]
- **Why that is the strongest thing on the card:** the trigger was the project's own sizing
  audit, not the observed rate — its pre-committed N had been derived from clean-trial *yield*,
  never from power, so at N=20 even a perfect zero could not have resolved the 14% reference
  magnitude from zero [Fact — blind-cite paper §5.6]
- **hush-gauge — complete, not in flight:** carded M0–M4 with the full ledger, G0 PASS ×3,
  G1/G2/G3 FAIL ×3, **G4 `NOT-RUN` ×3** — a passing outcome of K5's pre-committed validation
  ladder rather than a gap — and M4 gateless. D11's carry-M2-as-status-only is discharged
  [Fact — hush-gauge `docs/paper/hush-gauge-paper.md`, `docs/M4-RESULTS.md`]
- **Also:** `ksdisch/hush-gauge`'s own README was one milestone behind and was fixed in that repo
  under its own PR — the first time a carding pass has touched a project repo, and only because
  the defect was upstream of the card [Fact — hush-gauge README]
- **Tradeoff:** the reversal is reported *against the portfolio's own prior claim* rather than
  quietly replaced — D13 is marked Superseded and GAPS names the withdrawal explicitly, so a
  reader can see the correction happened rather than only its result [Fact — D14, GAPS-AND-NEXT]

### Every card linked to its write-up; the CI-theater finding — 2026-08-07
- **Landed:** a `**Write-up:**` line on the six cards that lacked one (`dim-stage`, `forge-gap`,
  `decay-pin`, `lossy-wall`, `ghost-patch`, `mute-map`), the missing plain-English-rewrite link on
  `blind-cite`, and hyperlinks on the four cited arXiv IDs — see D15 in `Decisions.md`
- **Why:** it was the single mechanical item D14 left open — eight repos shipping a paper and a
  presenter pack that seven-eighths of the index never pointed at [Fact — D14, GAPS-AND-NEXT]
- **The re-verification result was a non-event, which is the point:** no project repo had moved on
  `main` since 2026-08-05, so every carded number still held. The sync D14 established is the first
  one to survive a later check unbroken [Fact — `git log origin/main` across all eight repos]
- **What the pass did find is upstream:** `dim-stage`, `lossy-wall` and `ghost-patch` ship green CI
  badges over workflows that execute zero tests — `uv run "$f"` against test files with no
  `__main__` runner (0 of 11, 0 of 15, 0 of 12 files) — plus `hush-gauge` with no CI and
  `blind-cite` with no LICENSE. Verified by running the workflow's own command [Fact — D15]
- **Tradeoff:** the defect is disclosed in this repo's ledger rather than fixed in the three repos
  that own it, which keeps D4's no-code-here boundary intact but leaves the vacuous badges live
  until a session touches those repos [Inference — the boundary is D4; the deferral itself is not
  recorded as a decision]


---

## Mining coverage
_Backfilled 2026-07-26 by project-wiki BACKFILL. Entries after this date are
appended live by MAINTAIN._
- PR title sweep: all 1 merged PRs — no cap
- Deep reads: 1 of 1 PRs (the only merged PR; cap 20 not reached)
- Also swept: git log (2 non-merge commits, 1 merge), tags (none), wrap logs
  (none — no `docs/session-logs/` or `.claude/`), ADRs (none); docs of intent
  read: README.md, METHODOLOGY.md, GAPS-AND-NEXT.md, `Decisions.md` (D1–D4)
- Not mined: issues; closed-unmerged PRs (none exist)
