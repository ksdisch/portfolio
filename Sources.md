# Sources

| Source | Location | Type | Authoritative for |
|--------|----------|------|-------------------|
| dim-stage repo | https://github.com/ksdisch/dim-stage | project repo | All dim-stage card stats (pre-registered null on Qwen2.5 0.5B–3B; bitwise lens validation; stretch stages) |
| forge-gap repo | https://github.com/ksdisch/forge-gap | project repo | All forge-gap card stats (67.5% → 100%, +32.5pp Newcombe [+17.3, +48.0], N=40; injected-gap disclosure; natural gaps) |
| decay-pin repo | https://github.com/ksdisch/decay-pin | project repo | All decay-pin card stats (0/20 → 20/20 → 0/40; Newcombe [+77.2, +100] on 3 models; v2 replication) |
| lossy-wall repo | https://github.com/ksdisch/lossy-wall | project repo | All lossy-wall card stats (≤1/290 vs 240/240; "worse than empty" +58% [+44.2, +67.5]; author-harness AGREE) |
| ghost-patch repo | https://github.com/ksdisch/ghost-patch | project repo | All ghost-patch card stats (two headline nulls; $1.42/$5 budget) |
| blind-cite repo | https://github.com/ksdisch/blind-cite (**private** — parked at M0) | project repo | All blind-cite card stats (M0: 0/36, detectors 16/16; M1 pending) |
| mute-map repo | https://github.com/ksdisch/mute-map | project repo | All mute-map card stats (M0–M4; the 12 × 12 matrix, localization, dose, vocabulary collateral) |
| hush-gauge repo | https://github.com/ksdisch/hush-gauge | project repo | All hush-gauge card stats (M0/G0: dynamic-range PASS on all three scales; M1/G1–G2: pre-committed FAIL nulls and every detection table, per `docs/M1-RESULTS.md` on `main`; the open M2 PR's G3 status; gate definitions G1–G4) |
| reclaim-eval clone | local clone (author: collapseindex) | reference oracle | Cross-check oracle for lossy-wall — the paper authors' package, **not Kyle's work**, excluded from cards |
| jacobian-lens clone | local clone; private study copy at https://github.com/ksdisch/jacobian-lens-study | reference oracle | Cross-check oracle for dim-stage — Anthropic's reference package, **not Kyle's work**, excluded from cards |
| METHODOLOGY.md | METHODOLOGY.md | charter | The shared five-point method (recent paper → cheap-model slice → pre-committed stats → judge-free oracles → honest delta) all cards link back to |

_Note: this folder is the compiled presentation layer. README.md and the `projects/` cards derive from the repos above; when a card and its repo disagree, the repo wins. The private [portfolio-prep](https://github.com/ksdisch/portfolio-prep) repo holds the study curriculum and derives from the same sources._
