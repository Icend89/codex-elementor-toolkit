# Convert an HTML design into editable Elementor content

Treat conversion as rebuilding a design with editor components, not pasting an entire HTML document.

1. List visible regions and content fields in the source.
2. Map each region to a Container, Heading, Text Editor, Button, or Image.
3. Map repeated content to repeated native elements initially. Consider a dynamic content model only when actual authoring requirements justify it.
4. Recreate spacing and responsive behavior with native controls. Avoid selectors tied to unstable generated element IDs.
5. Identify unsupported interactions separately, with a scoped implementation and a test plan.
6. Compare the rebuilt page against the source at the same viewport widths.
7. Ask a second person to edit the copy and save it without touching code.

Example mapping for the fictional demo:

| Source intent | Native element | Editable field |
| --- | --- | --- |
| Introductory region | Container | Layout and spacing |
| Page title | Heading | Title and HTML tag |
| Short description | Text Editor | Copy |
| Next action | Button | Label and destination |

Do not copy source code or assets unless you have redistribution rights. A client design can inform a private implementation without belonging in this repository. Build public examples from original content.
