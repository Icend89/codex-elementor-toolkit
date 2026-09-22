# Changelog

## Unreleased

- Recorded isolated WordPress/Elementor validation runs with exact versions and measured
  client widths in `docs/validation.md`.
- Imported the original bundled fixture, edited its native text controls, saved it, and
  verified that edits persisted when reopening the editor on one installation.
- Recorded the earlier editor reload failure and a later successful retest without
  attributing an unverified cause or fix.
- Documented the import route and Canvas layout choice when a theme adds a duplicate H1.
- Preserved the original fixture and added a fictional high-contrast variant using
  native color controls, with reproducible color pairs and import instructions.
- Exported, inspected, and reimported the edited fixture on the same installation;
  documented that Canvas layout required manual reselection after import.
- Recorded limited CTA keyboard checks and rendered contrast results; full
  accessibility and a cross-version compatibility matrix remain unverified.
- Included both bundled fixtures in the strict example check.
- Clarified the Saved Template import exercise versus the separate draft Page exercise,
  and added explicit export, downloaded-file inspection, and fresh-reimport steps.
- Expanded compatibility reports to identify the fixture, database type, measured
  viewport widths, and each import/edit/export outcome.
- Added a separate WordPress Playground record with actual PHP.wasm/SQLite versions,
  native editing evidence, and explicit limits on hosting and accessibility claims.

## 0.1.0 — 2026-09-15

Initial foundation:

- Offline JSON inspection for template envelopes and raw element arrays.
- Structural errors, duplicate-ID detection, widget inventory, and review warnings.
- CLI exit codes, bounded input reading, and automated regression tests.
- Original native-element fixture with an editor construction recipe.
- Codex task prompts, staging workflow, contribution guidance, and CI configuration.

Limitations: no live WordPress/Elementor compatibility test recorded; no deployment,
HTML conversion engine, editor automation, or complete security validation.
