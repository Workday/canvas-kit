Provide a maintainer review for the pull request (or local branch) associated with the current workspace.

This command is for the **canvas-kit repo itself** (`modules/**`, docs, Cypress). Do **not** use the consumer skill `skills/sana-canvas-kit-review` for library source.

Follow these steps precisely. Do not commit, push, or resolve review threads unless the user explicitly asks.

## 1. Prerequisites and scope

1. Check that the `gh` CLI is available and authenticated for `github.com` (`gh auth status`). If it is not installed or not authenticated, stop and tell the user to install it and run `gh auth login` — do not attempt this review without `gh`.
2. Resolve the PR for the current branch:

```bash
gh pr view --json number,url,title,baseRefName,headRefOid,files,isDraft
```

- If that succeeds, use the PR’s file list and `headRefOid` as the review scope and permalink SHA.
- If it errors (no PR for the current branch), fall back to a branch review against the merge base (same approach as resolving `origin/HEAD` / `master` / `support`). Scope to changed `*.ts` / `*.tsx` / `*.js` / `*.jsx` / `*.mdx` / `*.md` / `*.yml` / `*.yaml`. **Skip the CodeRabbit section** — there is nothing to fetch or reply to. Tell the user they can push and open a PR (or `gh pr checkout <n>`) if they wanted CodeRabbit handling.

3. Focus **only** on files in that diff. Do not review the whole repo.

## 2. Code review (report only)

1. Read [AGENTS.md](AGENTS.md) and [STYLE.md](STYLE.md) (this repo has no `CLAUDE.md`). Also note any AGENTS/STYLE guidance that applies to directories the PR touched.
2. Review the changed files for bugs, behavioral regressions, security issues, missing tests, and AGENTS.md / STYLE.md adherence.
3. **Do not edit** for these findings — report only unless the user later asks to fix them.
4. Cite each issue with a permalink that uses the **full** head SHA (from `headRefOid`, or `git rev-parse HEAD` for a branch-only review). Do not embed shell substitution in the URL.

Permalink format (Markdown must render correctly):

`https://github.com/<owner>/<repo>/blob/<full-sha>/<path>#L<start>-L<end>`

- Full git SHA required
- Repo must match the PR’s repository (`gh repo view --json nameWithOwner -q .nameWithOwner`)
- At least one line of context before and after the line you are calling out

### Code review output format

If you found issues:

---

### Code review

Found N issues:

1. \<brief description\> (AGENTS.md / STYLE.md / bug / missing test — cite the rule)

\<permalink\>

2. …

---

If none:

---

### Code review

No issues found. Checked for bugs and AGENTS.md / STYLE.md compliance.

---

Prioritize findings by severity (blockers first). That ordering must lead the final combined response.

## 3. Accessibility review (report only)

1. Read and follow [`skills/sana-canvas-a11y-pr-review/SKILL.md`](skills/sana-canvas-a11y-pr-review/SKILL.md) end to end.
2. Also apply the Accessibility section of AGENTS.md (`:focus-visible` plus `&.focus` for Chromatic, semantic HTML before ARIA, accessible names, keyboard support, `cy.checkA11y()` on new Cypress examples).
3. Return the skill’s response template (WHCM, 320px reflow, docs/Storybook, keyboard/ARIA/compound mechanics, Vitest/Cypress).
4. **Do not edit** for these findings — report only unless the user later asks to fix them.

## 4. CodeRabbit (act when clear)

Only when a PR was resolved in step 1.

1. Load CodeRabbit feedback:
   - Inline: `gh api repos/{owner}/{repo}/pulls/{n}/comments` — keep rows where `user.login` is `coderabbitai[bot]` (or similar CodeRabbit bot login). Prefer top-level comments (`in_reply_to_id` null) that still need a human/agent response.
   - Summary review: `gh api repos/{owner}/{repo}/pulls/{n}/reviews` — keep CodeRabbit reviews for context.
2. If **no** CodeRabbit inline comments and **no** CodeRabbit review exist:
   - Read [`.coderabbit.yaml`](.coderabbit.yaml) `reviews.auto_review.base_branches` (currently `support`, `prerelease/minor`, `prerelease/major`; drafts are off).
   - If `baseRefName` is in that list and the PR is not a draft, post a PR comment requesting a review (`gh pr comment {n} --body "@coderabbitai review"`), then **stop** and tell the user to re-run `/pr-review` after the bot finishes.
   - If the base is not eligible (e.g. `master`), say so and do **not** request a review unless the user asks.
3. If CodeRabbit comments exist, triage each unresolved top-level inline comment:
   - **Clear bug, a11y defect, or AGENTS.md / STYLE.md miss** — apply a minimal code fix, then reply on that thread:

```bash
gh api -X POST repos/{owner}/{repo}/pulls/{n}/comments/{id}/replies -f body='…'
```

   Reply briefly: what you changed (or will change in the working tree) and why.
   - **Incorrect or out of scope** — do not change code; reply with a short reason.
   - **Ambiguous** — ask the user before editing or posting a dismissal.
4. Do **not** commit, push, or mark threads resolved unless the user asks.

## 5. Final response structure

Lead with severity-ordered findings, then the rest:

1. **Code review** (section 2)
2. **Accessibility PR Review Summary** (section 3 template)
3. **CodeRabbit** — for each thread: addressed (fix applied + reply posted), dismissed (reply posted), skipped/waiting (user decision or bot not ready), or “requested `@coderabbitai review` — re-run later”

Do not leave CodeRabbit findings as silent local edits without a thread reply when you chose to address them.
