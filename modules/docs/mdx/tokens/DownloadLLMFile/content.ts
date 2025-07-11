export const content = `
# Canvas Kit Token Migration Guide: Moving to @workday/canvas-tokens-web

## Overview

Canvas Kit v10+ introduces a new token system that replaces the old JavaScript-based tokens from \`@workday/canvas-kit-react/tokens\` with CSS variables from \`@workday/canvas-tokens-web\`. This migration enables better theming capabilities, improved performance, and a more standardized approach to styling across the Canvas design system.

## Why Migrate?

- **Better Performance**: CSS variables eliminate the runtime cost of Emotion's dynamic styling
- **Enhanced Theming**: System and brand tokens provide semantic, themeable values
- **Cross-Platform Consistency**: Single source of truth for design tokens across web, iOS, and Android
- **Future-Proofing**: Aligns with modern CSS capabilities and Canvas Kit's long-term direction

## Core Principles

### 1. Token Hierarchy
The new token system is organized into three categories:

- **Base Tokens**: Fundamental values (colors, measurements) - use sparingly
- **System Tokens**: Semantic, themeable values - **use these in most cases**
- **Brand Tokens**: Tenant/brand-specific customization values

### 2. CSS Variables Requirement
Unlike the old JavaScript tokens, the new tokens are CSS variables that must be wrapped in \`var()\` for the browser to understand them.

### 3. Styling Utilities
Use Canvas Kit's styling utilities (\`createStyles\`, \`cssVar\`) to ensure proper CSS variable handling.

## Installation & Setup

### 1. Install the New Package
\`\`\`bash
npm install @workday/canvas-tokens-web
# or
yarn add @workday/canvas-tokens-web
\`\`\`

### 2. Import CSS Variables
Import the variables at the top level of your application:

**In a CSS file:**
\`\`\`css
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';
\`\`\`

**In a JavaScript/TypeScript file:**
\`\`\`javascript
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
\`\`\`

### 3. Update Styling Approach
If you're not already using \`createStyles\`, migrate from style props to the styling utilities:

\`\`\`javascript
import { createStyles, cssVar } from '@workday/canvas-kit-styling';
import { system } from '@workday/canvas-tokens-web';
\`\`\`

## Migration Patterns

### Using CSS Variables
**The Fundamental Change**: JavaScript values → CSS variables wrapped in \`var()\`

\`\`\`javascript
// Old approach - JavaScript values
import { space } from '@workday/canvas-kit-react/tokens';
const styles = { padding: space.s };

// New approach - CSS variables with var()
import { system } from '@workday/canvas-tokens-web';
const styles = { padding: \`var(\${system.space.x4})\` };

// New approach - Using cssVar utility (recommended)
import { cssVar } from '@workday/canvas-kit-styling';
const styles = { padding: cssVar(system.space.x4) };
\`\`\`

### Color Token Migration

#### Base Color Mapping (1:1 Direct Replacement)
Base colors have a direct 1:1 mapping - simply replace \`colors\` with \`base\`:

| Old Token | New Token | CSS Variable |
|-----------|-----------|--------------|
| \`colors.cinnamon100\` | \`base.cinnamon100\` | \`--cnvs-base-palette-cinnamon-100\` |
| \`colors.cinnamon200\` | \`base.cinnamon200\` | \`--cnvs-base-palette-cinnamon-200\` |
| \`colors.cinnamon300\` | \`base.cinnamon300\` | \`--cnvs-base-palette-cinnamon-300\` |
| \`colors.cinnamon400\` | \`base.cinnamon400\` | \`--cnvs-base-palette-cinnamon-400\` |
| \`colors.cinnamon500\` | \`base.cinnamon500\` | \`--cnvs-base-palette-cinnamon-500\` |
| \`colors.cinnamon600\` | \`base.cinnamon600\` | \`--cnvs-base-palette-cinnamon-600\` |
| \`colors.peach100\` | \`base.peach100\` | \`--cnvs-base-palette-peach-100\` |
| \`colors.peach400\` | \`base.peach400\` | \`--cnvs-base-palette-peach-400\` |
| \`colors.chiliMango400\` | \`base.chiliMango400\` | \`--cnvs-base-palette-chili-mango-400\` |
| \`colors.cantaloupe400\` | \`base.cantaloupe400\` | \`--cnvs-base-palette-cantaloupe-400\` |
| \`colors.sourLemon400\` | \`base.sourLemon400\` | \`--cnvs-base-palette-sour-lemon-400\` |
| \`colors.juicyPear400\` | \`base.juicyPear400\` | \`--cnvs-base-palette-juicy-pear-400\` |
| \`colors.kiwi400\` | \`base.kiwi400\` | \`--cnvs-base-palette-kiwi-400\` |
| \`colors.greenApple400\` | \`base.greenApple400\` | \`--cnvs-base-palette-green-apple-400\` |
| \`colors.watermelon400\` | \`base.watermelon400\` | \`--cnvs-base-palette-watermelon-400\` |
| \`colors.jewel400\` | \`base.jewel400\` | \`--cnvs-base-palette-jewel-400\` |
| \`colors.toothpaste400\` | \`base.toothpaste400\` | \`--cnvs-base-palette-toothpaste-400\` |
| \`colors.blueberry400\` | \`base.blueberry400\` | \`--cnvs-base-palette-blueberry-400\` |
| \`colors.plum400\` | \`base.plum400\` | \`--cnvs-base-palette-plum-400\` |
| \`colors.berrySmoothie400\` | \`base.berrySmoothie400\` | \`--cnvs-base-palette-berry-smoothie-400\` |
| \`colors.blackberry400\` | \`base.blackberry400\` | \`--cnvs-base-palette-blackberry-400\` |
| \`colors.islandPunch400\` | \`base.islandPunch400\` | \`--cnvs-base-palette-island-punch-400\` |
| \`colors.grapeSoda400\` | \`base.grapeSoda400\` | \`--cnvs-base-palette-grape-soda-400\` |
| \`colors.pomegranate400\` | \`base.pomegranate400\` | \`--cnvs-base-palette-pomegranate-400\` |
| \`colors.fruitPunch400\` | \`base.fruitPunch400\` | \`--cnvs-base-palette-fruit-punch-400\` |
| \`colors.rootBeer400\` | \`base.rootBeer400\` | \`--cnvs-base-palette-root-beer-400\` |
| \`colors.toastedMarshmallow400\` | \`base.toastedMarshmallow400\` | \`--cnvs-base-palette-toasted-marshmallow-400\` |
| \`colors.cappuccino400\` | \`base.cappuccino400\` | \`--cnvs-base-palette-cappuccino-400\` |
| \`colors.licorice400\` | \`base.licorice400\` | \`--cnvs-base-palette-licorice-400\` |
| \`colors.blackPepper100\` | \`base.blackPepper100\` | \`--cnvs-base-palette-black-pepper-100\` |
| \`colors.blackPepper200\` | \`base.blackPepper200\` | \`--cnvs-base-palette-black-pepper-200\` |
| \`colors.blackPepper300\` | \`base.blackPepper300\` | \`--cnvs-base-palette-black-pepper-300\` |
| \`colors.blackPepper400\` | \`base.blackPepper400\` | \`--cnvs-base-palette-black-pepper-400\` |
| \`colors.blackPepper500\` | \`base.blackPepper500\` | \`--cnvs-base-palette-black-pepper-500\` |
| \`colors.blackPepper600\` | \`base.blackPepper600\` | \`--cnvs-base-palette-black-pepper-600\` |
| \`colors.frenchVanilla100\` | \`base.frenchVanilla100\` | \`--cnvs-base-palette-french-vanilla-100\` |
| \`colors.licorice200\` | \`base.licorice200\` | \`--cnvs-base-palette-licorice-200\` |
| \`colors.soap200\` | \`base.soap200\` | \`--cnvs-base-palette-soap-200\` |
| \`colors.soap300\` | \`base.soap300\` | \`--cnvs-base-palette-soap-300\` |
| \`colors.soap400\` | \`base.soap400\` | \`--cnvs-base-palette-soap-400\` |
| \`colors.soap500\` | \`base.soap500\` | \`--cnvs-base-palette-soap-500\` |
| \`colors.soap600\` | \`base.soap600\` | \`--cnvs-base-palette-soap-600\` |

#### System Color Usage Guide (Recommended)
**Use these semantic system tokens instead of base colors for better theming support:**

| Use Case | System Token | Description | Example Usage |
|----------|--------------|-------------|---------------|
| **Background Colors** | | | |
| Default page/container background | \`system.color.bg.default\` | Primary background color | Page backgrounds, card backgrounds |
| Alternative background | \`system.color.bg.alt\` | Secondary background color | Alternate sections, sidebars |
| Muted background | \`system.color.bg.muted\` | Subtle background for less emphasis | Disabled states, quiet sections |
| **Text Colors** | | | |
| Primary text | \`system.color.text.default\` | Main text color | Body text, headings |
| Secondary text | \`system.color.text.subdued\` | Less prominent text | Captions, metadata |
| Hint text | \`system.color.text.hint\` | Subtle helper text | Placeholders, help text |
| Disabled text | \`system.color.text.disabled\` | Text in disabled state | Disabled form fields |
| Inverse text | \`system.color.text.inverse\` | Text on dark backgrounds | Text over dark images/backgrounds |
| Critical text | \`system.color.text.critical.default\` | Error/danger text | Error messages, warnings |
| Success text | \`system.color.text.success.default\` | Success/positive text | Success messages, confirmations |
| **Border Colors** | | | |
| Default borders | \`system.color.border.default\` | Standard border color | Input borders, dividers |
| Container borders | \`system.color.border.container\` | Container outline borders | Card borders, modal borders |
| Contrast borders | \`system.color.border.contrast\` | High contrast borders | Focus states, active elements |
| Critical borders | \`system.color.border.critical.default\` | Error state borders | Invalid form fields |
| Success borders | \`system.color.border.success.default\` | Success state borders | Valid form fields |
| **Icon Colors** | | | |
| Default icons | \`system.color.icon.default\` | Standard icon color | General UI icons |
| Subdued icons | \`system.color.icon.subdued\` | Less prominent icons | Supporting icons |
| Critical icons | \`system.color.icon.critical.default\` | Error/warning icons | Alert icons, error indicators |
| Success icons | \`system.color.icon.success.default\` | Success icons | Checkmarks, success indicators |
| Inverse icons | \`system.color.icon.inverse\` | Icons on dark backgrounds | Icons over dark surfaces |
| **Static Colors** | | | |
| White | \`system.color.static.white\` | Pure white | Always white regardless of theme |
| Black | \`system.color.static.black\` | Pure black | Always black regardless of theme |
| Transparent | \`system.color.static.transparent\` | Fully transparent | Invisible backgrounds |

#### Brand Color Migration
Brand colors move from the Emotion theme object to direct CSS variables:

| Old Token | New Token | CSS Variable |
|-----------|-----------|--------------|
| \`theme.canvas.palette.primary.lightest\` | \`brand.primary.lightest\` | \`--cnvs-brand-primary-lightest\` |
| \`theme.canvas.palette.primary.light\` | \`brand.primary.light\` | \`--cnvs-brand-primary-light\` |
| \`theme.canvas.palette.primary.main\` | \`brand.primary.base\` | \`--cnvs-brand-primary-base\` |
| \`theme.canvas.palette.primary.dark\` | \`brand.primary.dark\` | \`--cnvs-brand-primary-dark\` |
| \`theme.canvas.palette.primary.darkest\` | \`brand.primary.darkest\` | \`--cnvs-brand-primary-darkest\` |
| \`theme.canvas.palette.primary.contrast\` | \`brand.primary.accent\` | \`--cnvs-brand-primary-accent\` |
| \`theme.canvas.palette.error.lightest\` | \`brand.error.lightest\` | \`--cnvs-brand-error-lightest\` |
| \`theme.canvas.palette.error.light\` | \`brand.error.light\` | \`--cnvs-brand-error-light\` |
| \`theme.canvas.palette.error.main\` | \`brand.error.base\` | \`--cnvs-brand-error-base\` |
| \`theme.canvas.palette.error.dark\` | \`brand.error.dark\` | \`--cnvs-brand-error-dark\` |
| \`theme.canvas.palette.error.darkest\` | \`brand.error.darkest\` | \`--cnvs-brand-error-darkest\` |
| \`theme.canvas.palette.error.contrast\` | \`brand.error.accent\` | \`--cnvs-brand-error-accent\` |
| \`theme.canvas.palette.alert.lightest\` | \`brand.alert.lightest\` | \`--cnvs-brand-alert-lightest\` |
| \`theme.canvas.palette.alert.light\` | \`brand.alert.light\` | \`--cnvs-brand-alert-light\` |
| \`theme.canvas.palette.alert.main\` | \`brand.alert.base\` | \`--cnvs-brand-alert-base\` |
| \`theme.canvas.palette.alert.dark\` | \`brand.alert.dark\` | \`--cnvs-brand-alert-dark\` |
| \`theme.canvas.palette.success.lightest\` | \`brand.success.lightest\` | \`--cnvs-brand-success-lightest\` |
| \`theme.canvas.palette.success.light\` | \`brand.success.light\` | \`--cnvs-brand-success-light\` |
| \`theme.canvas.palette.success.main\` | \`brand.success.base\` | \`--cnvs-brand-success-base\` |
| \`theme.canvas.palette.success.dark\` | \`brand.success.dark\` | \`--cnvs-brand-success-dark\` |
| \`theme.canvas.palette.success.darkest\` | \`brand.success.darkest\` | \`--cnvs-brand-success-darkest\` |
| \`theme.canvas.palette.success.contrast\` | \`brand.success.accent\` | \`--cnvs-brand-success-accent\` |
| \`theme.canvas.palette.neutral.lightest\` | \`brand.neutral.lightest\` | \`--cnvs-brand-neutral-lightest\` |
| \`theme.canvas.palette.neutral.light\` | \`brand.neutral.light\` | \`--cnvs-brand-neutral-light\` |
| \`theme.canvas.palette.neutral.main\` | \`brand.neutral.base\` | \`--cnvs-brand-neutral-base\` |
| \`theme.canvas.palette.neutral.contrast\` | \`brand.neutral.accent\` | \`--cnvs-brand-neutral-accent\` |
| \`theme.canvas.palette.common.focusOutline\` | \`brand.common.focusOutline\` | \`--cnvs-brand-common-focus-outline\` |

#### Migration Examples

**Example 1: Base Color Migration**
\`\`\`javascript
// Old
import { colors } from '@workday/canvas-kit-react/tokens';
backgroundColor: colors.frenchVanilla100

// New (Direct mapping)
import { base } from '@workday/canvas-tokens-web';
backgroundColor: cssVar(base.frenchVanilla100)
\`\`\`

**Example 2: System Color Migration (Recommended)**
\`\`\`javascript
// Old
import { colors } from '@workday/canvas-kit-react/tokens';
const styles = createStyles({
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.soap500,
  color: colors.blackPepper300,
});

// New - Using semantic system tokens
import { system } from '@workday/canvas-tokens-web';
const styles = createStyles({
  backgroundColor: system.color.bg.default,
  borderColor: system.color.border.container,
  color: system.color.text.default,
});
\`\`\`

**Example 3: Brand Color Migration**
\`\`\`javascript
// Old
import { theme } from '@emotion/react';
backgroundColor: theme.canvas.palette.primary.main

// New
import { brand } from '@workday/canvas-tokens-web';
backgroundColor: cssVar(brand.primary.base)
\`\`\`

### Spacing Token Migration
\`\`\`javascript
// Old spacing tokens → New system space tokens
space.zero     → system.space.zero
space.xxxs     → system.space.x1
space.xxs      → system.space.x2
space.xs       → system.space.x3
space.s        → system.space.x4
space.m        → system.space.x6
space.l        → system.space.x8
space.xl       → system.space.x10
space.xxl      → system.space.x16
space.xxxl     → system.space.x20

// Example migration
// Old
import { space } from '@workday/canvas-kit-react/tokens';
const styles = createStyles({
  padding: space.l,
  margin: space.m,
});

// New
import { system } from '@workday/canvas-tokens-web';
const styles = createStyles({
  padding: system.space.x8,
  margin: system.space.x6,
});
\`\`\`

### Shape (Border Radius) Token Migration
\`\`\`javascript
// Old border radius → New system shape tokens
borderRadius.zero    → system.shape.zero
borderRadius.s       → system.shape.half
borderRadius.m       → system.shape.x1
borderRadius.l       → system.shape.x2
borderRadius.circle  → system.shape.round

// Example
// Old
borderRadius: borderRadius.m

// New
borderRadius: system.shape.x1
\`\`\`

### Typography Token Migration

#### Font Family
\`\`\`javascript
// Old
type.properties.fontFamilies.default   → system.fontFamily.default
type.properties.fontFamilies.monospace → system.fontFamily.mono
\`\`\`

#### Font Size
\`\`\`javascript
// Old properties → New semantic system tokens
type.properties.fontSizes[14] → system.fontSize.subtext.large
type.properties.fontSizes[16] → system.fontSize.body.small
type.properties.fontSizes[18] → system.fontSize.body.medium
type.properties.fontSizes[24] → system.fontSize.heading.small
\`\`\`

#### Type Levels (Recommended)
Use complete type level tokens for consistency:

\`\`\`javascript
// Old
import { type } from '@workday/canvas-kit-react/tokens';
...type.levels.body.medium

// New
import { system } from '@workday/canvas-tokens-web';
...system.type.body.medium
\`\`\`

#### Type Variants → Text Colors
Type variants are replaced with semantic text color tokens:

\`\`\`javascript
// Old variant tokens → New system text colors
type.variant.error   → system.color.text.critical.default
type.variant.hint    → system.color.text.hint
type.variant.inverse → system.color.text.inverse
\`\`\`

### Depth (Shadow) Token Migration

\`\`\`javascript
// Old depth tokens → New system depth tokens
depth[1] → system.depth[1]
depth[2] → system.depth[2]
// ... etc

// Important: Use boxShadow property (not depth)
// Old
const styles = createStyles({
  depth: 1,
});

// New
const styles = createStyles({
  boxShadow: system.depth[1],
});
\`\`\`

## Complete Migration Examples

### Example 1: Card Component Migration

#### Before (Old Tokens)
\`\`\`javascript
import { 
  colors, 
  space, 
  borderRadius, 
  type,
  depth 
} from '@workday/canvas-kit-react/tokens';
import { createStyles } from '@workday/canvas-kit-styling';

const cardStyles = createStyles({
  padding: space.l,
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.soap500,
  borderRadius: borderRadius.m,
  color: colors.blackPepper300,
  depth: 1,
  ...type.levels.body.medium,
});

const headerStyles = createStyles({
  color: colors.blackPepper500,
  marginBottom: space.s,
  ...type.levels.heading.small,
});

const errorTextStyles = createStyles({
  color: colors.cinnamon500,
  ...type.levels.subtext.large,
});
\`\`\`

#### After (New Tokens - Semantic System Approach)
\`\`\`javascript
import { createStyles, px2rem } from '@workday/canvas-kit-styling';
import { system } from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  padding: system.space.x8,
  backgroundColor: system.color.bg.default,
  border: \`solid \${px2rem(1)}\`,
  borderColor: system.color.border.container,
  borderRadius: system.shape.x1,
  color: system.color.text.default,
  boxShadow: system.depth[1],
  ...system.type.body.medium,
});

const headerStyles = createStyles({
  color: system.color.text.default,
  marginBottom: system.space.x4,
  ...system.type.heading.small,
});

const errorTextStyles = createStyles({
  color: system.color.text.critical.default,
  ...system.type.subtext.large,
});
\`\`\`

### Example 2: Form Input Migration

#### Before (Old Tokens)
\`\`\`javascript
import { colors, space, borderRadius } from '@workday/canvas-kit-react/tokens';

const inputStyles = createStyles({
  padding: \`\${space.xs} \${space.s}\`,
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.soap400,
  borderRadius: borderRadius.s,
  color: colors.blackPepper400,
  '&:focus': {
    borderColor: colors.blueberry400,
    backgroundColor: colors.frenchVanilla100,
  },
  '&.error': {
    borderColor: colors.cinnamon500,
    backgroundColor: colors.cinnamon100,
  },
  '&:disabled': {
    backgroundColor: colors.soap200,
    color: colors.soap600,
  }
});
\`\`\`

#### After (New Tokens - System Approach)
\`\`\`javascript
import { system } from '@workday/canvas-tokens-web';

const inputStyles = createStyles({
  padding: \`\${system.space.x3} \${system.space.x4}\`,
  backgroundColor: system.color.bg.default,
  borderColor: system.color.border.default,
  borderRadius: system.shape.half,
  color: system.color.text.default,
  '&:focus': {
    borderColor: system.color.border.contrast,
    backgroundColor: system.color.bg.default,
  },
  '&.error': {
    borderColor: system.color.border.critical.default,
    backgroundColor: system.color.bg.critical.subtle,
  },
  '&:disabled': {
    backgroundColor: system.color.bg.disabled,
    color: system.color.text.disabled,
  }
});
\`\`\`

### Example 3: Button Migration with Brand Colors

#### Before (Old Tokens)
\`\`\`javascript
import { colors, space, borderRadius } from '@workday/canvas-kit-react/tokens';
import { theme } from '@emotion/react';

const primaryButtonStyles = createStyles({
  padding: \`\${space.xs} \${space.m}\`,
  backgroundColor: theme.canvas.palette.primary.main,
  borderColor: theme.canvas.palette.primary.main,
  borderRadius: borderRadius.m,
  color: theme.canvas.palette.primary.contrast,
  '&:hover': {
    backgroundColor: theme.canvas.palette.primary.dark,
  },
});
\`\`\`

#### After (New Tokens - Brand + System)
\`\`\`javascript
import { system, brand } from '@workday/canvas-tokens-web';

const primaryButtonStyles = createStyles({
  padding: \`\${system.space.x3} \${system.space.x6}\`,
  backgroundColor: brand.primary.base,
  borderColor: brand.primary.base,
  borderRadius: system.shape.x1,
  color: brand.primary.accent,
  '&:hover': {
    backgroundColor: brand.primary.dark,
  },
});
\`\`\`

## Best Practices

### 1. Prefer System Tokens
Use system tokens over base tokens whenever possible for better theming support:

\`\`\`javascript
// Good - Semantic and themeable
backgroundColor: system.color.bg.default

// Avoid - Hard-coded base value
backgroundColor: base.frenchVanilla100
\`\`\`

### 2. Use Complete Type Levels
Instead of mixing individual type properties, use complete type level tokens:

\`\`\`javascript
// Good - Consistent type styling
...system.type.body.medium

// Avoid - Mixing individual properties
fontSize: system.fontSize.body.medium,
fontWeight: system.fontWeight.regular,
lineHeight: '1.5'
\`\`\`

### 3. Leverage Styling Utilities
Always use \`createStyles\` and \`cssVar\` for proper CSS variable handling:

\`\`\`javascript
// Good - Proper CSS variable wrapping
const styles = createStyles({
  padding: system.space.x4,
});

// Avoid - Manual CSS variable handling
const styles = {
  padding: \`var(\${system.space.x4})\`,
};
\`\`\`

### 4. Convert Pixel Values
Use \`px2rem\` for pixel-based values to maintain consistency:

\`\`\`javascript
import { px2rem } from '@workday/canvas-kit-styling';

const styles = createStyles({
  border: \`solid \${px2rem(1)}\`,
  borderColor: system.color.border.container,
});
\`\`\`

## Common Pitfalls & Solutions

### 1. Forgetting CSS Variable Imports
**Problem**: Styles don't apply because CSS variables aren't defined.
**Solution**: Ensure you've imported the CSS variable files at your app's top level.

### 2. Not Using var() Wrapper
**Problem**: CSS properties don't work with raw token values.
**Solution**: Use \`createStyles\` or \`cssVar\` utility instead of direct token references.

### 3. Mixing Old and New Tokens
**Problem**: Inconsistent styling and potential conflicts.
**Solution**: Migrate completely to new tokens rather than mixing systems.

### 4. Using Base Tokens for Everything
**Problem**: Missing out on theming capabilities.
**Solution**: Prefer system tokens for their semantic meaning and theming support.

## Incremental Migration Strategy

1. **Start with New Projects**: Use new tokens for all new components and features
2. **Component-by-Component**: Migrate existing components one at a time
3. **Test Thoroughly**: Ensure visual consistency after each component migration
4. **Update Style Patterns**: Migrate from style props to \`createStyles\` where needed
5. **Consolidate Imports**: Remove old token imports once migration is complete

## Next Steps

After completing the token migration:
- Review your components for consistent use of system tokens
- Consider implementing theming if not already in place
- Update your team's coding standards to reflect new token usage
- Monitor for any visual regressions and address them promptly

## Resources

- [Canvas Tokens Documentation](https://canvas.workday.com/styles/tokens/)
- [Canvas Kit Styling Documentation](https://workday.github.io/canvas-kit/?path=/docs/features-styling-welcome--page)
- [Token Migration Discussion](https://github.com/Workday/canvas-tokens/discussions/77)
- [Canvas Kit GitHub Repository](https://github.com/Workday/canvas-kit)
`;
