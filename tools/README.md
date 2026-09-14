# Template inspector

Run from the repository root with Node.js 22+:

```sh
node tools/inspect-template.mjs examples/native-landing/template.json
node tools/inspect-template.mjs examples/native-landing/template.json --json --strict
```

There is no install step and no network request. The tool accepts a UTF-8 JSON template object or a raw element array (such as a locally exported _elementor_data value). It also accepts a UTF-8 BOM. A kit ZIP is not accepted. Files over 10 MiB and nesting beyond 100 element edges are rejected.

## Contract

- Exit 0: no structural errors (warnings allowed unless --strict).
- Exit 1: structural errors, or any warning with --strict.
- Exit 2: incorrect arguments, unreadable/oversized input, or invalid JSON.
- --json prints a summary object with format, elements, widgets, errors, and warnings.
- Findings contain codes and structural paths. Original setting values are not printed.
- Widget names from the input appear in the JSON inventory; review reports before sharing.
- The file is never modified. No output is automatically uploaded.

Checks cover nonempty template metadata, settings objects or empty arrays, element IDs, duplicate IDs across the tree, child arrays, optional boolean isInner, and widgetType on widgets. Unknown element types and schema versions generate warnings to avoid silently asserting compatibility. Legacy section/column layouts and HTML/shortcode widgets are flagged for review. Raw arrays lack document settings and therefore warn.

This is a deliberately limited structural preflight, not an official Elementor schema validator. It does not check widget availability, Pro licensing, Dynamic Tags, global references, asset IDs, HTML safety, URLs, responsive layout, or plugin behavior. It does not detect all secrets and cannot make an export safe to publish.
