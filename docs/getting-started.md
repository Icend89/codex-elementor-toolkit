# Getting started

## Choose the environment

The offline inspector needs only Node.js 22+. Working on pages also needs a local or staging WordPress installation, an active Elementor installation, and an account permitted to edit the target page. Acquire software from its official distribution. Use a separately licensed Pro installation only when a task needs Pro features.

Do not point a first experiment at a production client site. Create an original fictional page on a disposable installation. Keep credentials outside the repository and outside prompt text.

For an experimental browser-only exercise, [launch WordPress Playground with PHP 8.3,
Elementor, and Hello](https://playground.wordpress.net/?php=8.3&wp=latest&plugin=elementor&theme=hello-elementor&networking=yes&url=%2Fwp-admin%2F).
It installs the available releases, so record the actual versions. Use Elementor's
**Import Templates** for the fixture JSON; Playground's own site-import control is for
whole-site archives. This SQLite/WebAssembly environment has a
[recorded limited test](validation.md#recorded-separate-playground-test-september-22)
and does not replace conventional hosting tests. See the official
[Playground saving guidance](https://developer.wordpress.org/playground/handbook/web-instance/)
before relying on browser storage to retain your exercise.

## Record a baseline

In WordPress, note the WordPress version, active theme and version, Elementor version, optional Pro version, PHP version, enabled editor features, and target viewport sizes. If WP-CLI is already available on that installation, these read-only commands help:

```sh
wp core version
wp plugin list --fields=name,status,version --format=table
wp theme list --fields=name,status,version --format=table
```

Keep full site inventories private when they disclose client details. Publish only the relevant versions in a compatibility report. Commands execute in your WordPress installation, not the toolkit directory.

## Use Codex with this toolkit

Open the repository as a Codex project. The root AGENTS.md describes contribution constraints. Pick a task from prompts/, supply the listed inputs, and define the allowed site/page or local files. An existing Codex account is separate from this toolkit; the inspector does not call an OpenAI API.

Codex's ability to operate an editor depends on the tools actually connected in that session. If it cannot reach your editor, ask it for a native-element construction recipe and carry out the steps yourself. Do not claim the page was built merely because a plan or JSON file was generated.

## First exercise

Start with [importing a fixture](../examples/native-landing/README.md#import-a-fixture).
This exercise creates a **Saved Template**, which you edit and reopen from
**Templates > Saved Templates**. Check that same template's frontend preview after saving;
you do not need to create a separate WordPress Page to perform this import test.

Then follow [export, inspection, and reimport](../examples/native-landing/README.md#export-inspect-and-reimport-the-edited-template):
export the edited Saved Template, run the inspector on the actual downloaded file, and
import that file as a separate Saved Template. Compare the text, colors, anchor, and
page layout. Complete [the manual workflow checks](elementor-workflow.md), and record
your fixture, versions, and observed results in [a validation report](validation.md).

For a separate manual exercise, follow [building a draft Page](../examples/native-landing/README.md#build-a-separate-draft-page-in-the-editor).
Keep that Page distinct from the imported Saved Template when recording results.
Put only a sanitized, original reproduction in a public issue.

Sources: [WordPress plugin inventory](https://developer.wordpress.org/cli/commands/plugin/list/), [Codex project instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md).
