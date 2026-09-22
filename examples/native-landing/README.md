# Native landing-page exercise

This fictional example is original and contains no customer content, media, external URLs, or premium widgets. The JSON is an authored structural fixture with one isolated live import and native-editing check recorded in [validation status](../../docs/validation.md).

## Import the original fixture

On a disposable site, open **Templates > Saved Templates > Import Templates** and select
`template.json`. Review any trust notice for the file you selected. In the recorded test,
**Import Without Enabling** completed the import without enabling unfiltered uploads.

Open the imported template in Elementor and edit the heading, Text Editor content, and
button label using their native controls. Save and check the frontend. If the theme adds
its own page-title H1 above the fixture's H1, choose **Elementor Canvas** in Page Settings
for this standalone exercise, then save and check again. Record your actual results;
one successful test does not guarantee the same behavior in every installation.

## Build it in the editor

1. On a disposable WordPress/Elementor site, create a draft page.
2. Add one Container.
3. Add a Heading inside it: "Build pages your team can edit", using H1.
4. Add a Text Editor: "A small workshop for learning native Elementor editing."
5. Add a Button: "Read the workshop details". Link it to #workshop-details.
6. Set the Text Editor's Advanced CSS ID to workshop-details.
7. Adjust spacing and typography in the editor, save, and reopen.
8. Test the button and keyboard behavior in the frontend; complete the workflow checklist.

## Inspect the bundled fixture

```sh
node tools/inspect-template.mjs examples/native-landing/template.json --strict
```

Expected: 4 elements, no errors or warnings. This is a structure check, not a screenshot or import test. Use your installation's template import UI only on a disposable site; record any incompatibility instead of changing its database directly. The sample contains no visual style promise and inherits installation defaults.
