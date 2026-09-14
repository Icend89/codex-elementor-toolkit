# Maintenance and an eventual Codex for OSS application

## Sustainable routine

Review incoming issues when time permits. Reproduce problems before labeling them confirmed. Keep accepted work small, link fixes to the real issue, and update the changelog when behavior changes. Release when a coherent change has passed its checks, not to inflate activity.

For each release: run tests and the sample check, review the diff for private material, update limitations and version, inspect CI on the intended commit, and publish a tag/release pointing to that exact commit. Do not present planned manual tests as completed.

## Evidence ledger

Collect links only when the underlying event happens:

| Signal | Useful evidence | Initial status |
| --- | --- | --- |
| Maintainer responsibility | Reviews, issue triage, documented release decisions | New project; history to accumulate |
| Utility | Independent reproduction or a developer's concrete use report | Not yet collected |
| Compatibility | Versioned installation test with observable results | Pending |
| Adoption | Real stars, download analytics with period/source, opted-in usage reports | No verified claims |
| Ecosystem value | A demonstrated problem the toolkit solves and comparison to alternatives | Initial hypothesis to validate |
| Codex use | Reviewed PRs or documented fixes assisted by Codex | Record actual work without invented productivity figures |

Do not equate GitHub visitors, clones, stars, and active users. If citing counts later, record source and date; never manufacture them.

## Application readiness

OpenAI's program page describes support for maintainers of active projects and considers real usage, ecosystem importance, and maintenance work. Creating this repository alone does not establish those signals.

Before applying, ensure the profile and repository are public; establish your actual maintenance role; select evidence links; describe how Codex helps concrete maintenance tasks. Explain any API-credit request only if there is a real API-backed project plan.

The official page currently describes six months of ChatGPT Pro for selected maintainers. It does not establish a guaranteed Pro 20x entitlement for this project. Selection is not guaranteed.

Program details checked 2026-09-15: [official overview](https://developers.openai.com/community/codex-for-oss), [application form](https://openai.com/form/codex-for-oss/). Recheck before submitting.
