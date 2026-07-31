# Making sanaCanvasProviderTheme Optional - Design Spec

## Overview

Currently, teams using the Sana Canvas theme must pass `sanaCanvasProviderTheme` to their root `CanvasProvider` to ensure popups inherit the correct theme. Since CSS variables naturally cascade through the DOM when `data-theme="sana-canvas"` is set on `<html>`, this JavaScript forwarding is redundant for most use cases.

## Goals

- Simplify the default Sana Canvas theme setup
- Remove unnecessary configuration for teams
- Maintain backward compatibility
- Provide clear guidance on when the theme prop is still needed

## Design

### Simplified Default Setup

Teams using Sana Canvas globally will use a simpler setup:

```tsx
// New recommended setup - no theme prop needed
import {CanvasProvider} from '@workday/canvas-kit-react/common';

<CanvasProvider>
  <App />
</CanvasProvider>
```

The CSS setup remains unchanged:
```css
/* index.css */
@import '@workday/canvas-tokens-web/css/sana/_variables.css';
```

```html
<html lang="en" data-theme="sana-canvas"></html>
```

### When Theme Prop Is Still Needed

The `sanaCanvasProviderTheme` remains available — and is **required for popup parity** — in these scenarios:

1. **No access to `<html>`**: Embedded apps, microfrontends, and third-party shells that cannot set
   `data-theme="sana-canvas"` on `<html>`. Nested `data-theme` does not reach portaled popups.
   ```tsx
   <CanvasProvider theme={sanaCanvasProviderTheme}>
     <App />
   </CanvasProvider>
   ```

2. **Scoped Theming**: When a section needs different branding
   ```tsx
   <CanvasProvider theme={{brand: {primary: {'600': base.magenta600}}}}>
     <ScopedSection />
   </CanvasProvider>
   ```

3. **Testing**: When global CSS isn't loaded in test environments

4. **Edge Cases**: Custom popup containers rendered outside normal document flow

### Console Warning

Add a development-only warning when `sanaCanvasProviderTheme` is used unnecessarily:

```typescript
if (process.env.NODE_ENV !== 'production') {
  if (theme === sanaCanvasProviderTheme &&
      document.documentElement.getAttribute('data-theme') === 'sana-canvas') {
    console.warn(
      'Canvas Kit: You are passing sanaCanvasProviderTheme to CanvasProvider but ' +
      'data-theme="sana-canvas" is already set globally. The theme prop is not needed ' +
      'in this case and can be removed for simpler setup.'
    );
  }
}
```

## Implementation Plan

### 1. Documentation Updates

Update the following files:
- `/modules/docs/llm/theming.md` - Remove requirement for sanaCanvasProviderTheme in global setup
- `/modules/react/common/lib/theming/README.md` - Clarify optional nature
- `/modules/react/common/lib/theming/sanaTheme.ts` - Update JSDoc comments
- `/modules/react/common/stories/mdx/Theming.mdx` - Show simplified setup as default

### 2. Code Changes

- Add console warning in CanvasProvider when theme is unnecessary
- Update TypeScript types/comments to indicate optional nature
- Ensure popup components properly inherit CSS variables without theme prop

### 3. Migration Guide

Add to v16 upgrade guide:
```markdown
## Simplified Sana Canvas Setup

If you're using Sana Canvas globally with `data-theme="sana-canvas"`, you no longer need to pass
`sanaCanvasProviderTheme` to CanvasProvider:

**Before:**
```tsx
<CanvasProvider theme={sanaCanvasProviderTheme}>
  <App />
</CanvasProvider>
```

**After:**
```tsx
<CanvasProvider>
  <App />
</CanvasProvider>
```

The theme prop is now only needed for scoped theming scenarios.
```

### 4. Testing

- Verify popups inherit Sana theme without provider theme prop
- Test scoped theming still works with theme prop
- Ensure console warning appears only when appropriate
- Confirm backward compatibility with existing implementations

## Success Criteria

- Teams can use Sana Canvas theme without any theme prop on CanvasProvider
- Popups (menus, modals, selects) correctly inherit global theme
- Documentation clearly explains when theme prop is needed
- No breaking changes for existing implementations
- Console warning helps teams simplify their setup

## Timeline

This is a non-breaking enhancement that simplifies the API. Implementation involves primarily documentation updates and adding a helpful console warning.