# Validation status and reproducible records

## v0.1.0 scope

Automated checks exercise the standalone inspector against original fixtures. They do not launch WordPress, Elementor, PHP, a browser, or an OpenAI model.

The bundled template is authored from scratch using the documented format. At v0.1.0 publication, no live Elementor import, save/reopen, frontend, or responsive test had been recorded. There is no verified WordPress/Elementor compatibility matrix in this release.

| Area | Evidence |
| --- | --- |
| Inspector correctness | Run node --test; GitHub Actions repeats tests on Node 22 and 24 on Linux and Windows |
| Bundled fixture structure | Run npm run check:example for both fixtures |
| Native Elementor V4 composition/render | September 15 frontend rendered; editor reopening remained incomplete during that run. Normal editor loading succeeded on September 22 without an identified fix |
| Bundled fixture import/edit/save/reopen | Completed on one isolated installation on September 22; exact environment and limitations below |
| Export/inspect/reimport | Completed for the fictional edited fixture on the same installation; Canvas layout required manual reselection |
| Separate Playground installation | A PHP 8.3 / SQLite browser test is recorded below; it is not conventional hosting or a second Elementor version |
| Responsive, contrast, and keyboard behavior | Recorded client-width overflow checks, four color pairs, and limited CTA focus/activation checks; no full accessibility pass |
| Pro, Theme Builder, Loop Grid | Not implemented or tested in the sample |
| External user adoption | No verified records collected |

A workflow file being present is not evidence that CI has passed. Check the actual Actions run on the published commit.

## Record a real installation test

Copy this section into a report after running it. Replace every pending value; do not pre-check outcomes.

- Date / tester / repository commit: pending
- Fixture path / imported Saved Template or manually built Page: pending
- WordPress / PHP / theme + version: pending
- Elementor / Pro if applicable / editor feature settings: pending
- Installation type (disposable local, staging, or Playground) / database type: pending
- Import result and exact steps: pending
- Edited heading / body / button values, then save/reopen result: pending
- Frontend requested widths / measured inner, client, and scroll widths: pending
- Keyboard and heading review: pending
- Exported filename (no private path) / inspector command, exit code, and findings: pending
- Fresh reimport result / text, colors, anchor, and page layout comparison: pending
- Redacted screenshots or reproducible defect: pending
- Limitations / retest required: pending

## Recorded local run

2026-09-15: Windows, Node.js v24.19.0. All 15 automated tests passed (0 failures).
The original sample passed strict inspection: 4 elements, 0 errors, 0 warnings.
All repository-relative Markdown links resolved. This is offline evidence only.

## Recorded isolated WordPress/Elementor run: September 15

2026-09-15: an isolated staging site was created specifically for this test. It contains
fictional copy only; no client code, assets, credentials, domains, or implementation details
are recorded here.

- Repository commit: `a4b5cec` (`v0.1.0`)
- WordPress: 7.1; PHP version: not recorded
- Elementor: 4.2.4 (free); Elementor Pro: not installed
- Active theme: Hello Elementor 3.5.1
- Editor feature path: Elementor V4 Atomic Elements / native editor composition
- Test content: one semantic section with a heading, paragraph, and button, all created in
  the native editor with fictional text
- Frontend result: published page rendered the heading, paragraph, and button successfully
- Responsive result: requested widths were 1440 / 768 / 360 CSS pixels; measured client
  widths were 1441 / 768 / 346 CSS pixels. No horizontal overflow was observed at those
  measured widths. Exact 1440px and 360px checks remain unverified.
- Save/reopen result: the published page remained available on the frontend. Reloading the
  Elementor editor showed the saved `demo-hero` structure, but the canvas remained on its
  loading screen. The editor offered Safe Mode, but successful activation was not
  confirmed. No Safe Mode troubleshooting result is established.
- Scope limitation: this is a V4 native-composition check. The repository's bundled JSON
  fixture was not imported through Elementor's template importer, so import/export
  compatibility remains unverified.

This record is evidence of one real staging run, not a general compatibility claim.
Save/reopen remained incomplete at the end of this run. The later successful retest below
does not establish the cause of the earlier loading failure.

## Recorded bundled-fixture test: September 22, first pass

2026-09-22: retested the same isolated staging installation using only the original
fictional fixture and fictional text edits. No client material was used or recorded.

- Repository fixture: `examples/native-landing/template.json` at `a4b5cec` (`v0.1.0`)
- WordPress: 7.1.1; PHP: 7.4.33
- Elementor: 4.2.4 (free); Elementor Pro: not installed
- Active theme: Hello Elementor 3.5.1
- Other observed active plugin: ImunifySecurity 4.1.0. Must-use plugins: Elementor Safe
  Mode 1.0.0 and Imunify Security Bot Protection 1.0.0. One drop-in was listed; its identity
  was not recorded.
- Earlier editor-loading issue: the original native-composition page loaded in both the
  safe-mode URL and the normal editor URL. No corrective change was applied, so the
  earlier failure's cause and the reason it stopped occurring remain unknown.
- Import: used **Templates > Saved Templates > Import Templates**, selected the original
  JSON fixture, continued past its trust notice, and chose **Import Without Enabling**.
  Import succeeded without enabling unfiltered uploads.
- Native editing: changed the heading, Text Editor content, and button label through
  their own editor controls. Saved changes were visible on the frontend.
- Page layout: the theme's default layout added a second H1 above the fixture's heading.
  Selected **Elementor Canvas** in native Page Settings and saved. The frontend then
  contained exactly one H1; the `workshop-details` target occurred once and the CTA's
  `#workshop-details` link was preserved.
- Save/reopen: reopened the imported template using the normal editor URL. All three
  text edits and the Canvas layout persisted, and the editor loaded successfully.
- Responsive check: requested widths were 1440 / 768 / 360 CSS pixels. Measured
  `innerWidth`, client width, and scroll width were equal at each check: 1441 / 768 / 361
  CSS pixels respectively. Content remained readable with no horizontal overflow at
  those measured widths. Exact 1440px and 360px checks remain unverified.
- Keyboard check: pressing Enter on the focused CTA changed the URL fragment to
  `#workshop-details`, and that target existed. This was a single activation check,
  not a complete keyboard-navigation or tab-order audit.
- Contrast observations: inherited default colors produced ratios of 2.02:1 for the
  heading (`rgb(110, 193, 228)` on white, 40px / weight 600), 4.29:1 for body copy
  (`rgb(122, 122, 122)` on white, 16px), and 1.99:1 for the button label (white on
  `rgb(97, 206, 112)`, 15px). These styles need contrast remediation and retesting;
  this run is not an accessibility pass. The fixture inherits installation styling.
- Export, exported-file inspection, and reimport: not verified in this run. An **Export
  Page** attempt did not yield a collected artifact because browser download collection
  reported a paused-response error and a navigation timeout. This does not establish an
  Elementor or server defect.

This is a recorded result for one installation and one small fixture. It does not establish
support for other versions, production use, Pro widgets, full accessibility, or an
export/reimport workflow at this stage. Recheck imported content against your own site settings.

## Recorded contrast and export/reimport test: September 22, follow-up

Continued on the same isolated installation and versions listed above. All content was
fictional. The original `template.json` remains unchanged so its structural baseline and
inherited-style limitations remain reproducible.

- Native color edits: set the Heading to `#172B4D`, Text Editor to `#334155`, and page
  background to `#FFFFFF`. Set the Button's normal state to white on `#1D4ED8` and hover
  state to white on `#1E40AF`. Used native Style and Page Settings controls, then saved.
- Rendered contrast: computed frontend colors matched those settings. The heading,
  body, normal button, and hovered button pairs measured 14.10:1, 10.35:1, 6.70:1, and
  8.72:1 respectively using the sRGB contrast formula. These are color-pair results,
  not a full accessibility assessment.
- Export: collected the edited template using **Export Page** in Saved Templates.
  The earlier browser download-collection failure was overcome in this follow-up;
  no Elementor or server fix was applied or established.
- Export inspection: the downloaded JSON passed the existing inspector with `--json
  --strict`: 4 elements, 0 errors, 0 warnings. Separately reviewed its full contents:
  only fictional text, native settings, generated element IDs, and the local
  `#workshop-details` link were present. No media, external URLs, or client material
  were included. The inspector itself does not establish privacy or security.
- Published fixture: `examples/native-landing/template-high-contrast.json` is a
  pretty-printed copy of that export. Its parsed JSON was checked for equality with
  the downloaded file.
- Reimport: imported that downloaded JSON as a separate Saved Template through the
  same import route, choosing **Import Without Enabling** again. The heading, copy,
  CTA label, colors, white background, and local anchor were preserved.
- Layout limitation: the export did not include Canvas layout in `page_settings`.
  The new import therefore used Default layout and displayed the theme's extra H1.
  Manually selected **Elementor Canvas**, saved, and reopened the editor. The frontend
  then had exactly one H1 and one `workshop-details` target. Canvas persisted after
  this manual save. Do not assume template export carries every page setting.
- Reimported frontend: normal editor loading and native widget structure were
  available after reopening. Requested viewport widths 1440 / 768 / 360 produced
  equal `innerWidth`, client width, and scroll width at 1441 / 768 / 361 CSS pixels.
  Content was readable with no horizontal overflow at those measured widths;
  exact 1440px and 360px checks remain unverified.
- Reimported CTA interactions: hovering used white on `#1E40AF`. Keyboard focus showed
  the same color pair and a visible black outline; `:focus-visible` matched. Pressing
  Enter changed the URL fragment to `#workshop-details`, whose target occurred once.
  This was a focused CTA check on the logged-in frontend, not a complete tab-order audit.
- Offline checks for this follow-up: Windows, Node.js 24.19.0; all 15 existing tests
  passed. Both fixtures passed strict inspection with 4 elements, 0 errors, and 0
  warnings each. npm was unavailable locally, so the exact `check:example` script was
  executed directly; GitHub Actions runs it through npm on its Node 22/24 matrix.

This follow-up establishes one small export/inspect/reimport cycle on one installation.
It does not establish a cross-version compatibility matrix, full keyboard navigation,
WCAG conformance, production use, or external adoption. Recheck page layout and actual
rendered styles after importing into another site.

## Recorded separate Playground test: September 22

Created a fresh installation through the official
[WordPress Playground Query API](https://developer.wordpress.org/playground/developers/apis/query-api/)
using `php=8.3`, `wp=latest`, `plugin=elementor`, `theme=hello-elementor`, and
`networking=yes`. These launch parameters select the available release; they do not pin
future launches to the versions observed below. The installation contains only the
WordPress starter content and this project's fictional exercise.

- Fixture: `examples/native-landing/template-high-contrast.json` at `6f440d2`.
- Observed versions: WordPress 7.1.1, Elementor 4.2.4 free, Hello Elementor 3.5.1;
  Elementor Pro was not installed.
- Runtime: PHP 8.3.33, PHP.wasm, Emscripten 4.0.19 wasm32; reported PHP memory limit 256M.
- Database: Site Health reported `WP_MySQL_On_SQLite` and
  `8.0.38-mysql-on-sqlite-3.0.2`. This is a SQLite-backed compatibility layer,
  not an independent MySQL server.
- Import: selected the public fixture through Elementor's **Import Templates**,
  continued past the trusted-file notice, and chose **Import Without Enabling**.
  A separate Saved Template was created successfully.
- Native editing: selected **Elementor Canvas** after observing the theme's extra H1.
  Changed the Heading to "Build native pages in a fresh test site", the Text Editor
  body to "A fictional workshop tested in a separate WordPress Playground installation.",
  and the Button label to "View this workshop" using native controls.
- Save/reopen: saved, navigated back to the same template's normal editor URL, and
  confirmed all three text changes persisted. Its frontend displayed one H1, the
  edited paragraph and CTA, and the intended dark text/blue button treatment.
- Visual responsive check: requested outer browser widths were 1440 / 768 / 360 CSS
  pixels; measured outer `innerWidth` values were 1441 / 768 / 361. Text remained
  readable and the CTA was visible in all three screenshots, with the heading and
  body wrapping at the narrow size. The nested WordPress frame's client/scroll widths
  were not measured, so this is not a quantified overflow check. Computed contrast,
  keyboard navigation, and focus-state measurements were not repeated in this run.
- Export inspection: collected `elementor-6-2026-09-22.json` using **Export Page**.
  `node tools/inspect-template.mjs "<downloaded file>" --json --strict` exited 0:
  4 elements, 0 errors, 0 warnings. Manual file review confirmed the three edited
  text values, all explicit color settings, the white background, and local anchor.
  As in the staging export, Canvas layout was absent from `page_settings`.
- Fresh reimport: imported that downloaded JSON as another Saved Template, again
  choosing **Import Without Enabling**. The edited heading, body, CTA label, and
  local link were present. Default layout again included the theme's extra H1.
  Manually selected **Elementor Canvas**, saved, and reopened the new template's
  normal editor. The changes persisted; its frontend displayed one H1 with the
  edited paragraph and CTA. Canvas still requires this explicit layout step.

This test uses the same WordPress, Elementor, and theme versions as the staging run;
the PHP runtime, database, and fresh installation differ. Playground's browser/SQLite
environment is not a substitute for testing conventional hosting with the database
listed in [Elementor's system requirements](https://elementor.com/help/requirements/).
This is maintainer testing, not an independent user's adoption or compatibility report.
