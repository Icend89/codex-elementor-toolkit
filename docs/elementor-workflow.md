# A native Elementor workflow

## 1. Define what must remain editable

Write a short content inventory: headings, paragraphs, links, images, repeated cards, and layout regions. Mark which fields editors must change in Elementor. Prefer a native Container and native Heading, Text Editor, Button, and Image widgets for ordinary page content.

Use an HTML widget only for a bounded feature whose requirements cannot be met with native elements. Explain the editability tradeoff. Keep important content out of a single opaque HTML block.

## 2. Build and save a draft

Record the starting versions. Create a page on the test site. Set site typography/colors intentionally; keep element styling in editor controls where possible. Give the page one clear H1 and meaningful heading order. Use original copy and approved assets.

If browser automation is available, inspect the current editor state before each change and verify that it persisted. Never rely on undocumented editor internals or write _elementor_data directly into a production database.

For dynamic collections, first confirm the content model, available fields, installed plugins, and Pro features. CPT registration belongs in project code with its own tests; this release does not supply CPT automation. Theme Builder conditions and Loop Grid behavior need their own page-specific checks.

## 3. Export and inspect locally

Save/reopen the draft and export its template through the installation's supported editor/library UI. Menu labels differ across versions. Keep exports private by default. Inspect the local JSON with tools/inspect-template.mjs. Fix structural errors; review warnings in context.

An error-free tree does not prove that IDs refer to available media, that third-party widgets are installed, or that settings will render identically on another site.

## 4. Manual acceptance

Record actual pass/fail results with the date and exact versions:

- Edit heading, paragraph, and button label separately in Elementor.
- Save, reload the editor, and confirm changes remain.
- Check the frontend at 360, 768, and 1440 CSS pixels; inspect overflow and wrapping.
- Tab through every interactive item; confirm focus visibility and useful link names.
- Check heading order, image alternatives where relevant, and contrast.
- Confirm link destinations and any forms using test data.
- Review browser console errors and verify with the active theme.
- For a reusable template, import into a second disposable page and repeat save/reopen checks.

Use [the validation record](validation.md). Do not publish screenshots containing private site navigation or account details.

## 5. Review and handoff

Summarize changed regions, editable controls, requirements, checks performed, remaining limitations, and rollback. Keep a private backup before changing an existing page. Deployment is a separate action with a reviewed target. Link a public, sanitized reproduction to an issue only when it describes a real defect.

Structural reference: [Elementor element data](https://developers.elementor.com/docs/data-structure/general-elements/).
