# Native landing-page exercise

These fictional examples are original and contain no customer content, media, external URLs, or premium widgets. Both contain one Container with native Heading, Text Editor, and Button widgets. Exact live-test results and limitations are recorded in [validation status](../../docs/validation.md).

| Fixture | Purpose |
| --- | --- |
| [template.json](template.json) | Original authored structural fixture. It inherits installation colors and typography, so its appearance and contrast depend on the site. |
| [template-high-contrast.json](template-high-contrast.json) | Pretty-printed copy of the fictional test template exported after native text edits and color changes. It specifies a white page background and the color pairs below. Typography and other unspecified styling still depend on the installation. |

## Import a fixture

On a disposable site, open **Templates > Saved Templates > Import Templates** and select
one of the JSON files above. Review any trust notice for the file you selected. In the original-fixture test,
**Import Without Enabling** completed the import without enabling unfiltered uploads.

The import creates a **Saved Template**. Open that entry in Elementor and edit the
heading, Text Editor content, and button label using their native controls. Save and open
its frontend preview. Return to **Templates > Saved Templates** and reopen the same entry
to check that your edits persisted. This exercise does not require a separate WordPress Page.
If the theme adds
its own page-title H1 above the fixture's H1, choose **Elementor Canvas** in Page Settings
for this standalone exercise, then save and check again. Record your actual results;
one successful test does not guarantee the same behavior in every installation.

**Canvas layout is not included in either fixture's page settings.** Set it
manually when needed for this standalone exercise. The white background in the second
fixture is a page color setting, not a page-layout setting.

## Export, inspect, and reimport the edited template

1. Save the edited Saved Template. Note its heading, body copy, button label, and any
   [native color settings](#set-deliberate-colors-with-native-controls) you changed.
2. Return to **Templates > Saved Templates**, locate that template, and use its native
   **Export Page** action. Keep the downloaded JSON locally.
3. From the toolkit repository directory, inspect the actual downloaded file. Replace
   the example path below with its local path; retain quotes if the path contains spaces:

   ```sh
   node tools/inspect-template.mjs "/path/to/downloaded-template.json" --json --strict
   ```

4. Use **Import Templates** to import that downloaded file as a separate Saved Template.
   Keep the first template for comparison and identify the new entry before editing it.
   Review any trust notice for your original fictional export; use **Import Without
   Enabling** when that option is offered.
5. Open the new template and compare all three text values, the rendered text/background
   colors, the button's `#workshop-details` link, and its matching target. Check the layout
   before changing it. If the theme adds an extra H1, manually select **Elementor Canvas**
   in Page Settings and record that additional step; neither bundled fixture includes it.
6. Save and reopen the new template, then check its frontend preview again. Record the
   inspector output, what persisted, any differences, and unperformed checks in
   [your validation report](../../docs/validation.md). Passing inspection alone does not
   prove that rendering, layout, or accessibility was preserved.

## Build a separate draft Page in the editor

This is an alternative manual construction exercise. Its WordPress Page is separate
from the Saved Templates used in the import/export exercise above.

1. On a disposable WordPress/Elementor site, create a draft page.
2. Add one Container.
3. Add a Heading inside it: "Build pages your team can edit", using H1.
4. Add a Text Editor: "A small workshop for learning native Elementor editing."
5. Add a Button: "Read the workshop details". Link it to #workshop-details.
6. Set the Text Editor's Advanced CSS ID to workshop-details.
7. Adjust spacing and typography in the editor, save, and reopen.
8. Test the button and keyboard behavior in the frontend; complete the workflow checklist.

## Set deliberate colors with native controls

To reproduce the color treatment, use the existing Elementor controls:

1. In Page Settings, set the page background to Classic and white (`#FFFFFF`).
2. Select the Heading and set its Style text color to `#172B4D`.
3. Select the Text Editor and set its Style text color to `#334155`.
4. Select the Button. For the Normal state, set text to white and background to `#1D4ED8`.
5. For the Button's Hover state, set text to white and background to `#1E40AF`.
6. Save, reopen, and inspect the frontend's actual computed colors, including hover and
   keyboard focus. Confirm the backgrounds behind text are opaque and match the intended colors.

The ratios below are calculated from these opaque sRGB color pairs, rounded for display:

| Content or state | Text | Background | Contrast ratio |
| --- | --- | --- | --- |
| Heading | `#172B4D` | `#FFFFFF` | 14.10:1 |
| Body | `#334155` | `#FFFFFF` | 10.35:1 |
| Button normal | `#FFFFFF` | `#1D4ED8` | 6.70:1 |
| Button hover | `#FFFFFF` | `#1E40AF` | 8.72:1 |

All four pairs exceed the 4.5:1 minimum for normal text in
[WCAG 2.2 SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
This is a color-pair check, not a complete accessibility result. Recheck the rendered
styles after every import: theme rules, site settings, surrounding backgrounds, and
interaction states can change the effective colors. Also check focus visibility,
keyboard navigation, headings, and responsive layout.

## Inspect the bundled fixtures

```sh
node tools/inspect-template.mjs examples/native-landing/template.json --strict
node tools/inspect-template.mjs examples/native-landing/template-high-contrast.json --strict
```

Expected for each file: 4 elements, no errors or warnings. This is a structure check,
not a screenshot, import, contrast, or privacy test. Use your installation's template
import UI only on a disposable site; record any incompatibility instead of changing its
database directly. Keep unrelated site exports private.
