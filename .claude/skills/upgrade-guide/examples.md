# Upgrade Guide Examples and Templates

## Complete Section Examples

### Example: Component Promotion Section

```mdx
### Avatar

**PR:** [#3659](https://github.com/Workday/canvas-kit/issues/3659)

We've promoted `Avatar` from [Preview](#preview) to [Main](#main). This replaces the deprecated
`Avatar` that was previously in Main.

**Before in v14**

\`\`\`tsx
import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
\`\`\`

**After in v15**

\`\`\`tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
\`\`\`

> 🤖 The codemod will handle the change of imports as shown above.

#### API Differences

The new `Avatar` is a
[compound component](/getting-started/for-developers/resources/compound-components/) with a
different API than the deprecated version.

##### Structure Changes

| Deprecated (Old Main) | New (Promoted from Preview)        |
| --------------------- | ---------------------------------- |
| `Avatar`              | `Avatar`                           |
| -                     | `BaseAvatar`                       |
| -                     | `BaseAvatar.Image` / `AvatarImage` |
| -                     | `BaseAvatar.Name` / `AvatarName`   |

##### Prop Changes

| Feature          | Deprecated (Old Main)                             | New (Promoted from Preview)              |
| ---------------- | ------------------------------------------------- | ---------------------------------------- |
| Variant          | `variant` (`light`, `dark`)                       | `variant` (`blue`, `amber`, `teal`)      |
| Size             | `size` (extraSmall=16px to extraExtraLarge=120px) | `size` (xxs=24px to xxl=120px)           |
| User identifier  | `altText` prop                                    | `name` prop                              |
| Custom initials  | Not supported                                     | `preferredInitials` prop                 |

##### Code Migration

**Deprecated API (Old Main)**

\`\`\`tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';

<Avatar
  size={Avatar.Size.Medium}
  variant={Avatar.Variant.Light}
  altText="John Doe"
  url="/path/to/image.jpg"
/>
\`\`\`

**New API (Promoted from Preview)**

\`\`\`tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';

<Avatar
  size="medium"
  variant="blue"
  name="John Doe"
  url="/path/to/image.jpg"
/>
\`\`\`
```

### Example: Deprecation Section

```mdx
## Deprecations

### Avatar (Main)

**PR:** [#3659](https://github.com/Workday/canvas-kit/issues/3659)

We've deprecated `Avatar` in [Main](#main) in favor of the newly promoted `Avatar` from
[Preview](#preview). The deprecated `Avatar` will be removed in the next major version.

To migrate, replace imports from `@workday/canvas-kit-react/avatar` with the Preview version, then
follow the [Avatar migration guide](#avatar) above.

> 🤖 The codemod will automatically update your imports and basic prop usage.
```

### Example: Component Update Section

```mdx
## Component Updates

### Buttons

**PR:** [#3500](https://github.com/Workday/canvas-kit/pull/3500)

All button components now use the new token system for consistent spacing and sizing.

#### Changes

- Updated padding to use `system.padding.md` instead of `system.space.x4`
- Button heights now use `system.size.lg` for medium buttons
- Icon spacing uses `system.gap.xs`

#### Migration

No code changes required. Visual updates are handled automatically when you upgrade.

> **Note:** If you've applied custom styles that override default button padding, you may need to
> adjust your overrides to work with the new token system.
```

### Example: Removal Section

```mdx
## Removals

### Select (Deprecated)

**PR:** [#3700](https://github.com/Workday/canvas-kit/pull/3700)

The deprecated `Select` component has been removed. Use the newer `Select` component from Main
instead.

**Before (Deprecated Select)**

\`\`\`tsx
import {Select} from '@workday/canvas-kit-react/select';

<Select>
  <Select.Option value="1">Option 1</Select.Option>
  <Select.Option value="2">Option 2</Select.Option>
</Select>
\`\`\`

**After (Current Select)**

\`\`\`tsx
import {Select} from '@workday/canvas-kit-react/select';

<Select items={items}>
  <Select.Card>
    <Select.Input />
    <Select.Popper>
      <Select.List>
        {item => <Select.Item>{item.text}</Select.Item>}
      </Select.List>
    </Select.Popper>
  </Select.Card>
</Select>
\`\`\`

See the [Select documentation](/components/select) for complete usage examples.
```

## Template Structures

### New Major Version Template

```mdx
import {Meta} from '@storybook/blocks';

<Meta title="Guides/Upgrade Guides/v[X].0/Overview" />

# Canvas Kit [X].0 Upgrade Guide

This guide contains an overview of the changes in Canvas Kit v[X]. Please
[reach out](https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md) if you have
any questions.

## Why You Should Upgrade

[Brief explanation of major features/changes. 1-2 paragraphs.]

> **Note:** [Any important compatibility notes]

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

[Use standard codemod section text]

## Component Promotions

[List promoted components with full migration details]

## Component Updates

[Group by category: Buttons, Inputs, Containers, etc.]

## New Components

[List new components with links to documentation]

## Deprecations

[List deprecated items with migration paths]

## Removals

[List removed items with alternatives]

## Glossary

### Main

Components in Main are...

### Preview

Components in Preview are...
```

## Common Phrases and Patterns

### Helpful Phrases
- "We've provided a codemod..."
- "We highly recommend..."
- "Please reach out if you have any questions"
- "We're here to help!"
- "This replaces the deprecated..."
- "For more information, see..."

### Transition Phrases
- "To migrate..."
- "Moving forward..."
- "In this version..."
- "Starting in v[X]..."

### Warning Phrases
- "⚠️ Breaking Change:"
- "> **Note:**"
- "> **Important:**"
- "Please be aware that..."

## Formatting Patterns

### PR Links
```mdx
**PR:** [#3659](https://github.com/Workday/canvas-kit/issues/3659)
```

### Version References
```mdx
**Before in v14**
**After in v15**
```

### Codemod Indicators
```mdx
> 🤖 The codemod will handle this change automatically.
```

### Internal Links
```mdx
See [Component Name](#component-name) for more details.
[Preview](#preview)
[Main](#main)
```

### External Links
```mdx
See the [Component documentation](/components/component-name) for complete usage.
```

### Section Headers with PRs
```mdx
### Component Name

**PR:** [#3659](https://github.com/Workday/canvas-kit/pull/3659)

[Description]
```

## Table Templates

### Prop Comparison Table
```mdx
| Feature    | Old API         | New API         | Notes           |
| ---------- | --------------- | --------------- | --------------- |
| Size       | `size="large"`  | `size="lg"`     | Shortened names |
| Variant    | `variant=""`    | `appearance=""` | Renamed prop    |
```

### Size Mapping Table
```mdx
| Size Name | Old Size | New Size |
| --------- | -------- | -------- |
| small     | 24px     | 32px     |
| medium    | 32px     | 40px     |
| large     | 40px     | 48px     |
```

### Token Mapping Table
```mdx
| Old Token           | New Token            | Notes                |
| ------------------- | -------------------- | -------------------- |
| `system.space.x4`   | `system.padding.md`  | Use padding for CSS  |
| `system.space.x2`   | `system.gap.sm`      | Use gap for spacing  |
```
