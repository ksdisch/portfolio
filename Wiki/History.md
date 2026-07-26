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
