# codex-elementor-toolkit

Open-source tools and workflows for building and maintaining native WordPress Elementor websites with Codex.

**v0.1.0 foundation:** an offline template inspector, an original native-element fixture, task prompts, and a staging-to-review workflow. Maintained by [Icend89](https://github.com/Icend89). Independent community project; not affiliated with OpenAI, WordPress, or Elementor.

## Why this exists

A page can look finished while its content is buried in one HTML widget. This project helps developers keep headings, copy, buttons, and layout editable in Elementor, then review the exported structure before handoff.

The first tool catches malformed element trees, duplicate IDs, missing widget types, and places needing manual review. It works locally without WordPress credentials, an API key, or package dependencies.

## Try it

Install Node.js 22 or newer, download this repository, and open a terminal in its folder:

```sh
node tools/inspect-template.mjs examples/native-landing/template.json
node --test
```

The sample should report **4 elements, 0 errors, 0 warnings**. To inspect your own local export:

```sh
node tools/inspect-template.mjs /path/to/template.json --json --strict
```

On Windows, quote paths containing spaces. Input files stay local. The command only reads the specified file. See [tool behavior and exit codes](tools/README.md).

## Start a real page

1. Create a disposable WordPress installation with Elementor.
2. Record your exact versions using [getting started](docs/getting-started.md).
3. Use [the native-page prompt](prompts/build-elementor-page.md) with a brief containing only material you may share.
4. Build with native editor elements; save and reopen the draft.
5. Export, inspect, and complete [the manual checks](docs/elementor-workflow.md).

## What is included

| Folder | Contents |
| --- | --- |
| [docs](docs/getting-started.md) | Setup, native editing, conversion, validation, and maintenance |
| [prompts](prompts/README.md) | Concrete tasks with inputs, deliverables, and acceptance checks |
| [examples](examples/native-landing/README.md) | Original three-widget landing-page fixture and build recipe |
| [tools](tools/README.md) | Read-only JSON structure inspector |
| [tests](tests/inspect-template.test.mjs) | Structural and CLI regression tests |

## Scope and honest limitations

This is a developer toolkit, not an installable WordPress plugin. It does not automatically convert HTML, operate the Elementor editor, deploy pages, validate every widget control, or sanitize exports. Warnings are review cues, not vulnerability findings.

The JSON fixture follows the documented Elementor structure but **has not yet been imported and visually tested in a live WordPress/Elementor installation**. Passing checks does not prove render compatibility, accessibility, security, or editability. See [validation status](docs/validation.md). Elementor Pro is optional for the workflow and is not bundled.

## Contribute and maintain

Reproduce a problem with a small, original fixture; include exact versions and expected behavior. Read [CONTRIBUTING](CONTRIBUTING.md), [security guidance](SECURITY.md), and [the roadmap](ROADMAP.md). AI-assisted contributions are welcome when their author reviews the result and states what was tested.

No adoption numbers or production success claims are asserted. Real compatibility reports and reproducible fixes are more useful than decorative badges.

## License

[MIT](LICENSE) covers this repository's original code, documentation, prompts, and fixtures. WordPress, Elementor, and separately acquired extensions retain their own licenses. No client code, assets, exports, or paid extension source are included.
