# Security and private material

The inspector reads local JSON without evaluating template HTML or contacting a site. This does not make the inspected file safe to import or publish. The inspector is not a secret scanner.

Do not include tokens, passwords, wp-config.php, database dumps, uploads, customer exports, or account screenshots in issues and pull requests. Use original minimal fixtures. .gitignore reduces accidents but cannot guarantee privacy.

For a suspected vulnerability, use GitHub's private vulnerability reporting if the repository Security page offers it. If unavailable, open only a minimal issue asking the maintainer to arrange a private reporting channel; do not publish exploit details or sensitive data. No private reporting channel is assumed to be configured.

If you accidentally expose a credential, revoke or rotate it at its provider before cleaning up repository history. Contact the maintainer to coordinate removal; deleting a file from the current branch does not remove previous copies.

Only the latest released version is in the initial maintenance scope. There is no security response-time guarantee.
