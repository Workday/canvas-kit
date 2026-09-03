---
name: sana-canvas-builder
description: >-
  Build custom React components with Canvas Kit factories from @workday/canvas-kit-react/common.
  Use when creating createComponent, createContainer, createSubcomponent, createModelHook, or
  createElemPropsHook; designing compound component APIs; or adding shared state/behavior. For styling
  see /sana-canvas-styling; for tokens see /sana-canvas-tokens; for accessibility see
  /sana-canvas-a11y; for avoiding deprecated exports see /sana-canvas-component-selection.
---

# Canvas Kit Component Builder

Build **custom components in consumer apps** using Canvas Kit's exported factories. This skill covers
the factory pattern — not contributing a component into the canvas-kit repo itself (that workflow uses
`yarn create-component`, Storybook, Cypress, and stricter repo requirements).

Styling → `/sana-canvas-styling`. Tokens → `/sana-canvas-tokens`. Accessibility →
`/sana-canvas-a11y`. Deprecated exports when composing existing components →
`/sana-canvas-component-selection`. Version detection (which factory APIs are available) →
`/sana-canvas-version`. Deciding whether a Canvas component already covers the use case before
building your own → `/sana-canvas-design-principles`.

## When to apply

- Building a new reusable component with or without shared state
- Designing a compound component API (`<MyThing.Target>`, `<MyThing.Content>`)
- Extracting behavior into reusable elemProps hooks
- Wrapping Canvas Kit primitives into a tighter app-specific API

## Factory selection

| Situation                                         | Use                                              |
| ------------------------------------------------- | ------------------------------------------------ |
| Styled element, no behavior, no shared state      | `createComponent`                                |
| Root that owns/provides a model                   | `createContainer` + `createModelHook`            |
| Child that consumes the model                     | `createSubcomponent`                             |
| Reusable prop/behavior logic on an element        | `createElemPropsHook` (+ `composeHooks`)         |
| State + events (config, guards, callbacks)        | `createModelHook`                                |

**No shared state?** Use `createComponent` — don't add a model.

**Shared state across subcomponents?** `createModelHook` → `createContainer` (root) →
`createSubcomponent` (children).

## Minimal compound component

### Model

`createModelHook` gives you `should<Event>` guards and `on<Event>` callbacks for free.

```tsx
// useDisclosureModel.ts
import * as React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';

export const useDisclosureModel = createModelHook({
  defaultConfig: {
    initialVisible: false,
  },
})(config => {
  const [visible, setVisible] = React.useState(config.initialVisible);

  return {
    state: {visible},
    events: {
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      },
    },
  };
});
```

### Container

```tsx
// Disclosure.tsx
import {createContainer} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from './useDisclosureModel';
import {DisclosureTarget} from './DisclosureTarget';
import {DisclosureContent} from './DisclosureContent';

export interface DisclosureProps {}

export const Disclosure = createContainer()({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
  subComponents: {
    Target: DisclosureTarget,
    Content: DisclosureContent,
  },
})<DisclosureProps>(({children}) => <>{children}</>);
```

`createContainer` adds `children`, `model`, `ref`, and `as` to the prop types automatically. Do not
declare them on your Props interface. Subcomponent JSDoc belongs **inside the `subComponents` object**
on the container.

### Subcomponent with elemProps hook

```tsx
// useDisclosureTarget.ts
import {composeHooks, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from './useDisclosureModel';

export const useDisclosureTarget = composeHooks(
  createElemPropsHook(useDisclosureModel)(model => ({
    onClick() {
      if (model.state.visible) {
        model.events.hide();
      } else {
        model.events.show();
      }
    },
  }))
);

// DisclosureTarget.tsx
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {useDisclosureModel} from './useDisclosureModel';
import {useDisclosureTarget} from './useDisclosureTarget';

export interface DisclosureTargetProps {}

export const DisclosureTarget = createSubcomponent('button')({
  modelHook: useDisclosureModel,
  elemPropsHook: useDisclosureTarget,
})<DisclosureTargetProps>((elemProps, Element) => <Element {...elemProps} />);
```

### Static subcomponent (no behavior)

```tsx
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const headingStyles = createStyles({
  ...system.type.heading.sm,
  color: system.color.fg.strong,
});

export const CardHeading = createComponent('h3')({
  displayName: 'Card.Heading',
  Component: ({children, ...elemProps}, ref, Element) => (
    <Element {...elemProps} ref={ref} cs={headingStyles}>
      {children}
    </Element>
  ),
});
```

## Core rules

1. **Never call `createElemPropsHook` / `composeHooks` inside a render function** — hoist to module
   scope.
2. **Merge props correctly** — primitives override; callbacks/`style`/`className`/`cs` merge. Use
   `mergeProps` for hand-rolled props; `handleCsProp` for `cs` in reusable styled components
   (`/sana-canvas-styling`).
3. **Don't declare `children`, `model`, `ref`, or `as` on Props** — factories add them.
4. **No default exports** in library modules.
5. **No TS `enum`** — use disjoint string unions (`size: 'small' | 'medium' | 'large'`).
6. **Prop names never repeat the component name** (`type`, not `buttonType`).
7. **Avoid direction/color-coupled names** (`startIcon`, not `leftIcon` — breaks under RTL).
8. **JSDoc every prop** — include `@default` on booleans and enum props.
9. **Import from public subpaths** — `@workday/canvas-kit-react/<component>`, never the package barrel
   or `/lib/`.
10. **Define styles at module level** — `createStyles`/`createStencil` + `cs`, not style props
    (`/sana-canvas-styling`).

## Model composition

Compose smaller models when behavior is reusable (e.g. `useIDModel` for `id` + `aria-controls`):

```tsx
export const useDisclosureModel = createModelHook({
  defaultConfig: {
    ...useIDModel.defaultConfig,
    initialVisible: false,
  },
})(config => {
  const idModel = useIDModel(config);
  const [visible, setVisible] = React.useState(config.initialVisible);
  return {
    state: {...idModel.state, visible},
    events: {
      ...idModel.events,
      show() { setVisible(true); },
      hide() { setVisible(false); },
    },
  };
});
```

## Accessibility

Wire a11y in `createElemPropsHook` (e.g. `aria-expanded`, `aria-controls`, `id` from
`useIDModel`). Full patterns — naming, keyboard, popups, forms, live regions, MCP lookup →
`/sana-canvas-a11y`.

## Workflow

```
- [ ] Pick factory (createComponent vs createContainer + model)
- [ ] Define model with createModelHook if behavior is shared
- [ ] Extract elemProps into createElemPropsHook (module scope)
- [ ] Style with createStyles/createStencil + cs (/sana-canvas-styling)
- [ ] Use system tokens (/sana-canvas-tokens)
- [ ] Verify composed Canvas Kit imports are not @deprecated (/sana-canvas-component-selection)
- [ ] JSDoc every prop; run a11y checklist (/sana-canvas-a11y)
```

## App-level wrappers

Compound APIs are verbose by design. Apps often wrap them into tighter interfaces:

```tsx
export const Expandable = ({targetText, children}: ExpandableProps) => (
  <Disclosure>
    <Disclosure.Target>{targetText}</Disclosure.Target>
    <Disclosure.Content>{children}</Disclosure.Content>
  </Disclosure>
);
```

This is encouraged when the app knows its context (translations, test ids, analytics).

## Anti-patterns

- ❌ `createModelHook` for a static styled div
- ❌ `createElemPropsHook` inside render
- ❌ Manual `React.Context` when `createContainer`/`createSubcomponent` handle it
- ❌ `forwardRef` + Context by hand — use the factories
- ❌ Style props on `Flex`/`Box` (`padding="s"`)
- ❌ `enum` for prop types
- ❌ `leftIcon` / `blueVariant` prop names
- ❌ Default exports
- ❌ Importing from `@workday/canvas-kit-react` barrel or `/lib/`

## Decision guide

```
No shared state, just markup/styles?     → createComponent
Root provides state to children?         → createContainer + createModelHook
Child reads model from context?          → createSubcomponent
Reusable ARIA/event props for an element?→ createElemPropsHook
Combining multiple elemProps hooks?      → composeHooks (module scope)
Need id refs for a11y?                   → compose useIDModel into your model
How to style?                            → /sana-canvas-styling
Which token?                             → /sana-canvas-tokens
Composing existing Canvas components?    → /sana-canvas-component-selection
Accessibility (labels, keyboard, ARIA)? → /sana-canvas-a11y
Does a Canvas component already do this?→ /sana-canvas-design-principles (check before building)
```

## Additional resources

- Full walkthrough: `modules/docs/mdx/CREATING_COMPOUND_COMPONENTS.mdx`
- API patterns: `modules/docs/mdx/API_PATTERN_GUIDELINES.mdx`
- Accessibility: `modules/docs/mdx/accessibility/AccessibilityOverview.mdx`
