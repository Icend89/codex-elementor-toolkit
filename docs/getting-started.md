# Getting started

## Choose the environment

The offline inspector needs only Node.js 22+. Working on pages also needs a local or staging WordPress installation, an active Elementor installation, and an account permitted to edit the target page. Acquire software from its official distribution. Use a separately licensed Pro installation only when a task needs Pro features.

Do not point a first experiment at a production client site. Create an original fictional page on a disposable installation. Keep credentials outside the repository and outside prompt text.

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

Follow [the sample recipe](../examples/native-landing/README.md), save the page as a draft, and verify it reopens. Run the inspector on a local export. Compare the result with the sample, then complete the manual workflow checks. Put only a sanitized, original reproduction in a public issue.

Sources: [WordPress plugin inventory](https://developer.wordpress.org/cli/commands/plugin/list/), [Codex project instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md).
