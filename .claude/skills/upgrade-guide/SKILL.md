---
name: upgrade-guide
description: Maintains consistent formatting, language, and structure across Canvas Kit upgrade guides. Ensures clear writing, proper MDX format, accurate code examples, and consistent patterns.
disable-model-invocation: false
user-invocable: true
paths:
  - "**/modules/docs/mdx/*UPGRADE-GUIDE.mdx"
  - "**/modules/docs/mdx/*VISUAL-CHANGES.mdx"
---

# Canvas Kit Upgrade Guide Standards

You are an expert at maintaining consistency, clarity, and professionalism in Canvas Kit upgrade guide documentation.

## Core Responsibilities

When working on upgrade guides, ensure:

1. **Consistent Structure** - All guides follow the established organizational pattern
2. **Clear Language** - Use active voice and accessible technical writing
3. **Complete Information** - Provide all necessary context for users
4. **Accurate Examples** - Code examples are tested and properly formatted
5. **Easy Navigation** - Include proper table of contents, links, and sections

## Required MDX Structure

Every upgrade guide must follow this structure:

```mdx
import {Meta} from '@storybook/blocks';

<Meta title="Guides/Upgrade Guides/v[VERSION]/Overview" />

# Canvas Kit [VERSION] Upgrade Guide

This guide contains an overview of the changes in Canvas Kit v[VERSION]. Please
[reach out](https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md) if you have
any questions.

## Why You Should Upgrade

[Brief explanation of major features/changes]

## Table of Contents

- [Codemod](#codemod)
  - [Instructions](#instructions)
- [Component Promotions](#component-promotions)
- [Component Updates](#component-updates)
- [New Components](#new-components)
- [Deprecations](#deprecations)
- [Removals](#removals)
- [Glossary](#glossary)

## Codemod

[Codemod explanation and instructions]

## [Content Sections...]

## Glossary

### Main
### Preview
### Labs
```

## Language and Style Guidelines

### Active Voice and Direct Address
- ✅ "We've provided a codemod..."
- ✅ "You'll need to run..."
- ❌ "A codemod has been provided..."
- ❌ "The codemod must be run..."

### Present Tense for Current State
- ✅ "The codemod will update your code..."
- ✅ "This replaces the deprecated Avatar..."
- ❌ "The codemod would update your code..."

### Helpful and Encouraging Tone
- ✅ "We're here to help! Automatic changes to your codebase can feel scary."
- ✅ "We highly recommend you use the codemod for these reasons."
- ✅ "Please [reach out] if you have any questions."

### Consistent Terminology
- Use "deprecated" not "old" or "removed"
- Use "promoted" for component promotions (Preview → Main, Labs → Main, Labs → Preview)
- Use "Main", "Preview", "Labs" consistently (capitalized)
- Use exact package names: `@workday/canvas-kit-react`, `@workday/canvas-kit-preview-react`, `@workday/canvas-kit-labs-react`

## Standard Sections

### Why You Should Upgrade
- 1-2 paragraphs explaining major features/changes
- Mention version numbers clearly
- Include any important compatibility notes using blockquotes

Example:
```mdx
## Why You Should Upgrade

v15.0 and v4.0 Canvas Tokens Web introduces new shape, size, gap, and padding tokens to our
components. While we still support our old shape and space tokens, the new tokens aim to add more
semantic meaning to allow for better use and theming.

> **Note:** While v15 and v4 tokens should be backwards compatible with previous versions that use
> CSS tokens, we strongly advise to migrate both Canvas Kit and Canvas Tokens Web together.
```

### Codemod Section

ALWAYS include this standard codemod explanation:

```mdx
## Codemod

We've provided a [codemod](https://github.com/Workday/canvas-kit/tree/master/modules/codemod) to
automatically update your code to work with most of the breaking changes in v[X]. **Breaking changes
handled by the codemod are marked with 🤖 in the Upgrade Guide.**

A codemod is a script that makes programmatic transformations on your codebase by traversing the
AST, identifying patterns, and making prescribed changes. This greatly decreases opportunities for
error and reduces the number of manual updates, which allows you to focus on changes that need your
attention. **We highly recommend you use the codemod for these reasons.**

If you're new to running codemods or if it's been a minute since you've used one, there are a few
things you'll want to keep in mind.

- Our codemods are meant to be run sequentially. For example, if you're using v[X-1] of Canvas Kit,
  you'll need to run the v[X] codemod before you run v[X+1].
- The codemod will update your code to be compatible with the specified version, but it will **not**
  remove outdated dependencies or upgrade dependencies to the latest version. You'll need to upgrade
  dependencies on your own.
  - We recommend upgrading dependencies before running the codemod.
  - Always review your `package.json` files to make sure your dependency versions look correct.
- The codemod will not handle every breaking change in v[X]. You will likely need to make some manual
  changes to be compatible. Use our Upgrade Guide as a checklist.
- Codemods are not bulletproof.
  - Conduct a thorough PR and QA review of all changes to ensure no regressions were introduced.
  - As a safety precaution, we recommend committing the changes from the codemod as a single
    isolated commit (separate from other changes) so you can roll back more easily if necessary.

We're here to help! Automatic changes to your codebase can feel scary. You can always reach out to
our team. We'd be very happy to walk you through the process to set you up for success.

### Instructions

The easiest way to run our codemod is to use `npx` in your terminal.

\`\`\`sh
npx @workday/canvas-kit-codemod v[X] [path]
\`\`\`

Be sure to provide specific directories that need to be updated via the `[path]` argument. This
decreases the amount of AST the codemod needs to traverse and reduces the chances of the script
having an error. For example, if your source code lives in `src/`, use `src/` as your `[path]`. Or,
if you have a monorepo with three packages using Canvas Kit, provide those specific packages as your
`[path]`.

Alternatively, if you're unable to run the codemod successfully using `npx`, you can install the
codemod package as a dev dependency, run it with `yarn`, and then remove the package after you're
finished.

\`\`\`sh
yarn add @workday/canvas-kit-codemod --dev
yarn canvas-kit-codemod v[X] [path]
yarn remove @workday/canvas-kit-codemod
\`\`\`

> **Note:** The codemod only works on `.js`, `.jsx`, `.ts`, and `.tsx` files. You'll need to
> manually edit other file types (`.json`, `.mdx`, `.md`, etc.). You may need to run your linter
> after executing the codemod, as its resulting formatting (spacing, quotes, etc.) may not match
> your project conventions.
```

## Code Examples Format

### Import Changes

Use this exact format for showing import migrations:

```mdx
**Before in v[X-1]**

\`\`\`tsx
import {Component} from '@workday/canvas-kit-preview-react/component';
\`\`\`

**After in v[X]**

\`\`\`tsx
import {Component} from '@workday/canvas-kit-react/component';
\`\`\`

> 🤖 The codemod will handle the change of imports as shown above.
```

### API Migrations

Use this format for component API changes:

```mdx
#### Code Migration

**Deprecated API (Old Main)**

\`\`\`tsx
import {OldComponent} from '@workday/canvas-kit-react/component';

<OldComponent prop="value" />
\`\`\`

**New API (Promoted from Preview)**

\`\`\`tsx
import {NewComponent} from '@workday/canvas-kit-react/component';

<NewComponent newProp="value" />
\`\`\`
```

## Table Formatting

### Comparison Tables

Use this format for API comparisons:

```mdx
| Feature         | Deprecated (Old Main) | New (Promoted from Preview) |
| --------------- | --------------------- | --------------------------- |
| Prop name       | `oldProp`             | `newProp`                   |
| Default value   | `'default'`           | `'newDefault'`              |
```

### Structure Tables

Use this format for component structure changes:

```mdx
| Deprecated (Old Main) | New (Promoted from Preview)    |
| --------------------- | ------------------------------ |
| `Component`           | `Component`                    |
| -                     | `Component.SubComponent`       |
```

## Section Organization

### Component Promotions
List components promoted to Main (from Preview or Labs)
- Include PR links
- Show before/after imports with correct package names
- Document API differences
- Provide code migration examples
- If promoting from Labs, may include a subsection for migrating from Preview if both exist

### Component Updates
Group by category:
- Buttons
- Inputs
- Containers
- Indicators
- Navigation
- Popups

### Deprecations
- Clearly mark what's deprecated
- Provide replacement guidance
- Include timeline if applicable

### Removals
- List removed components
- Explain why they were removed
- Provide migration path if available

### Glossary
ALWAYS include at the end:

```mdx
## Glossary

### Main

Components in Main are...

### Preview

Components in Preview are...

### Labs (if applicable)

Components in Labs are...
```

## Codemod Indicators

Use 🤖 emoji to indicate codemod-handled changes:

```mdx
> 🤖 The codemod will handle the change of imports as shown above.
```

## MDX-Specific Rules

1. **Imports**: Always import from `@storybook/blocks` or `@workday/canvas-kit-docs`
2. **Meta tag**: Must match pattern `Guides/Upgrade Guides/v[VERSION]/Overview`
3. **Code blocks**: Use `tsx`, `sh`, `jsx`, or `ts` language identifiers
4. **Links**: Use markdown links, not HTML
5. **Emphasis**: Use **bold** for emphasis, not italic
6. **Blockquotes**: Use `>` for notes and important callouts

## Quality Checklist

Before finalizing any upgrade guide, verify:

- [ ] Title follows "Canvas Kit [VERSION] Upgrade Guide" format
- [ ] Meta tag path is correct
- [ ] "Why You Should Upgrade" section explains major changes
- [ ] Table of Contents is complete and accurate
- [ ] Codemod section uses standard text
- [ ] Code examples use proper language identifiers (`tsx`, `sh`)
- [ ] Import paths are exact and correct
- [ ] 🤖 emoji marks codemod-handled changes
- [ ] Tables are properly formatted with alignment
- [ ] Glossary section is included at the end
- [ ] Helpful, encouraging tone throughout
- [ ] No broken links
- [ ] Consistent terminology (Main, Preview, Labs)

## Common Patterns

### Promoting Components
When documenting a component promotion (Preview → Main or Labs → Main):
1. Show import change with correct source package (labs-react or preview-react)
2. Note codemod handling
3. Document structure changes
4. List prop changes
5. Show code migration examples
6. Explain new features if any
7. If promoting from Labs but Preview version also exists, include a "Migrating from Preview" subsection

### Breaking Changes
- Lead with impact
- Show before/after clearly
- Note if codemod handles it
- Provide manual migration steps if needed

### Version References
- Current version: "v[X]"
- Previous version: "v[X-1]"
- Format: "Before in v14", "After in v15"

## When This Skill Activates

This skill automatically activates when working on files matching:
- `**/modules/docs/mdx/*UPGRADE-GUIDE.mdx`
- `**/modules/docs/mdx/*VISUAL-CHANGES.mdx`

You can also invoke it manually with `/upgrade-guide`.
