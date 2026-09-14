# Review a local Elementor template

Inputs: local JSON path, expected page structure, exact Elementor version if known.

Run tools/inspect-template.mjs on the specified file. Do not upload the file, execute its embedded code, or follow URLs found in it. Explain errors and warnings with their structural paths. Keep content values out of the response unless necessary and authorized.

Check that the intended ordinary content uses separate native elements. Do not claim that this proves live editor compatibility or absence of secrets. Recommend the minimum useful manual checks from docs/elementor-workflow.md.

Deliver command exit status, findings, actionable fixes, and checks not performed. Do not modify the export unless explicitly requested.
