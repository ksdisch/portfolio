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
- **Why held back:** M2/G3 also decided — FAIL at all three scales — but in hush-gauge's still-open
  PR #10, so it is carried as status only until that PR merges — see D11 in `../Decisions.md`
- **Tradeoff:** the portfolio briefly shows a decided-but-uncarded M2, traded for keeping D4's
  verified-against-merged-results bar intact [Fact — D11 rationale]

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
