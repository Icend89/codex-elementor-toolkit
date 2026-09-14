# Contributing

Start with a reproducible issue or a small documentation correction. Maintainer: [Icend89](https://github.com/Icend89). No response-time SLA is promised.

## Local checks

Use Node.js 22+; no dependency installation is required.

```sh
node --test
npm run check:example
```

For tool changes, add a regression test showing user-visible behavior: malformed exports, a CLI exit code, or a previously unsupported shape. For documentation, verify commands, local links, and the claimed workflow. A test that mirrors internal code is not enough.

## Submit a change

Fork, create a focused branch, make the change, run relevant checks, and open a PR explaining the problem, result, and limitations. Include exact versions for WordPress/Elementor claims. Distinguish a structure-only check from an actual browser test.

AI assistance is welcome. Review every contributed line and state what was and was not executed. Contributors retain copyright and submit original contributions under the repository's MIT license. Do not submit client files, credential material, paid extension source, copied commercial templates, fabricated reports, or fake adoption evidence.

Respectful, factual discussion is expected. Describe behavior and reproductions, not personal judgments. Maintainers may close unrelated requests or remove sensitive material.

## Review checklist

Check correctness, input handling, offline behavior, privacy of outputs, documentation accuracy, tests, and license provenance. Prefer a small working feature over a new abstraction or dependency. See ROADMAP.md for work that is actually useful.
