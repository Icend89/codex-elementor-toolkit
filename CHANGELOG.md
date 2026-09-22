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
  accessibility and compatibility with other environments remain unverified.
- Included both bundled fixtures in the strict example check.

## 0.1.0 — 2026-09-15

Initial foundation:

- Offline JSON inspection for template envelopes and raw element arrays.
- Structural errors, duplicate-ID detection, widget inventory, and review warnings.
- CLI exit codes, bounded input reading, and automated regression tests.
- Original native-element fixture with an editor construction recipe.
- Codex task prompts, staging workflow, contribution guidance, and CI configuration.

Limitations: no live WordPress/Elementor compatibility test recorded; no deployment,
HTML conversion engine, editor automation, or complete security validation.
