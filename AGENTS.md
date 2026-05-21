<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:git-commit-rules -->

# Git Commit Messages

Always use semantic commit messages in the format `type: description`.

Allowed types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`, `ci`.

<!-- END:git-commit-rules -->

<!-- BEGIN:git-branching-rules -->

# Git Branching Strategy

- `main` is a protected branch — direct commits and pushes are strictly forbidden
- All work happens on `feature/*` branches, based on `main`
- Every change to `main` requires a pull request

## Workflow

1. Create a feature branch from `main`: `git checkout -b feature/name`
2. Develop and commit on the feature branch
3. Open a PR: `feature/*` → `main`
4. After merge, Netlify deploys automatically

Never commit directly to `main`.

<!-- END:git-branching-rules -->
