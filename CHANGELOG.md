# Changelog

## Unreleased

- Recorded isolated WordPress/Elementor validation runs with exact versions and measured
  client widths in `docs/validation.md`.
- Imported the original bundled fixture, edited its native text controls, saved it, and
  verified that edits persisted when reopening the editor on one installation.
- Recorded the earlier editor reload failure and a later successful retest without
  attributing an unverified cause or fix.
- Documented the import route and Canvas layout choice when a theme adds a duplicate H1.
- Recorded a limited CTA keyboard check and inherited-style contrast issues; full
  accessibility and export/reimport compatibility remain unverified.

## 0.1.0 — 2026-09-15

Initial foundation:

- Offline JSON inspection for template envelopes and raw element arrays.
- Structural errors, duplicate-ID detection, widget inventory, and review warnings.
- CLI exit codes, bounded input reading, and automated regression tests.
- Original native-element fixture with an editor construction recipe.
- Codex task prompts, staging workflow, contribution guidance, and CI configuration.

Limitations: no live WordPress/Elementor compatibility test recorded; no deployment,
HTML conversion engine, editor automation, or complete security validation.
