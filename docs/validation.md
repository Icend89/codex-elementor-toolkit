# Validation status and reproducible records

## v0.1.0 scope

Automated checks exercise the standalone inspector against original fixtures. They do not launch WordPress, Elementor, PHP, a browser, or an OpenAI model.

The bundled template is authored from scratch using the documented format. No live Elementor import, save/reopen, frontend, or responsive test has been recorded yet. There is no verified WordPress/Elementor compatibility matrix in this release.

| Area | Evidence |
| --- | --- |
| Inspector correctness | Run node --test; GitHub Actions repeats tests on Node 22 and 24 on Linux and Windows |
| Original sample structure | Run npm run check:example |
| Native Elementor import/edit/render | Pending real installation test |
| Pro, Theme Builder, Loop Grid | Not implemented or tested in the sample |
| External user adoption | No verified records collected |

A workflow file being present is not evidence that CI has passed. Check the actual Actions run on the published commit.

## Record a real installation test

Copy this section into a report after running it. Replace every pending value; do not pre-check outcomes.

- Date / tester / repository commit: pending
- WordPress / PHP / theme + version: pending
- Elementor / Pro if applicable / editor feature settings: pending
- Installation type (disposable local or staging): pending
- Import result and exact steps: pending
- Edit each widget, save, reopen: pending
- Frontend at 360 / 768 / 1440 CSS pixels: pending
- Keyboard and heading review: pending
- Export + inspector output: pending
- Redacted screenshots or reproducible defect: pending
- Limitations / retest required: pending

## Recorded local run

2026-09-15: Windows, Node.js v24.19.0. All 15 automated tests passed (0 failures).
The original sample passed strict inspection: 4 elements, 0 errors, 0 warnings.
All repository-relative Markdown links resolved. This is offline evidence only.
