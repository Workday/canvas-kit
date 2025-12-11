---
source_file: react/button/stories/button/Button.mdx
live_url: https://workday.github.io/canvas-kit/react/button/stories/button/Button
---

<Meta of={ButtonStories} />

# Canvas Kit Button

Clickable button elements that extend the native `<button>` element with Canvas styling.

[> Workday Design Reference](https://design.workday.com/components/buttons/buttons)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### PrimaryButton

<!-- No description available for PrimaryButton -->

The example below shows multiple instances of a `PrimaryButton` with various icon configurations.

```tsx
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

export const Primary = () => (
  <Flex cs={parentContainerStyles}>
    <PrimaryButton>Primary</PrimaryButton>
    <PrimaryButton icon={plusIcon} iconPosition="start">
      Primary
    </PrimaryButton>
    <PrimaryButton icon={caretDownIcon} iconPosition="end">
      Primary
    </PrimaryButton>
    <Tooltip title="Related Actions">
      <PrimaryButton icon={relatedActionsVerticalIcon} />
    </Tooltip>
  </Flex>
);

```

Primary Buttons also have an `inverse` variant. While it looks similar to the default Secondary
Button, the default outline as well as the hover and focus states are different. Use this variant
when you need to place a Primary Button on a dark or colorful background such as `blueberry400`.

```tsx
import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
});

export const PrimaryInverse = () => (
  <Flex cs={parentContainerStyles}>
    <PrimaryButton variant="inverse">Primary</PrimaryButton>
    <PrimaryButton icon={plusIcon} iconPosition="start" variant="inverse">
      Primary
    </PrimaryButton>
    <PrimaryButton icon={caretDownIcon} iconPosition="end" variant="inverse">
      Primary
    </PrimaryButton>
    <Tooltip title="Related Actions">
      <PrimaryButton icon={relatedActionsVerticalIcon} variant="inverse" />
    </Tooltip>
  </Flex>
);

```

### SecondaryButton

<!-- No description available for SecondaryButton -->

The example below shows multiple instances of a `SecondaryButton` with various icon configurations.

```tsx
import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

export const Secondary = () => (
  <Flex cs={parentContainerStyles}>
    <SecondaryButton>Secondary</SecondaryButton>
    <SecondaryButton icon={plusIcon} iconPosition="start">
      Secondary
    </SecondaryButton>
    <SecondaryButton icon={caretDownIcon} iconPosition="end">
      Secondary
    </SecondaryButton>
    <Tooltip title="Related Actions">
      <SecondaryButton icon={relatedActionsVerticalIcon} />
    </Tooltip>
  </Flex>
);

```

Secondary Buttons also have an `inverse` variant. Use this when you need to place a Secondary Button
on a dark or colorful background such as `blueberry400`.

```tsx
import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
  backgroundColor: system.color.bg.primary.default,
});

export const SecondaryInverse = () => (
  <Flex cs={parentContainerStyles}>
    <SecondaryButton variant="inverse">Secondary</SecondaryButton>
    <SecondaryButton icon={plusIcon} variant="inverse">
      Secondary
    </SecondaryButton>
    <SecondaryButton icon={caretDownIcon} variant="inverse" iconPosition="end">
      Secondary
    </SecondaryButton>
    <Tooltip title="Related Actions">
      <SecondaryButton icon={relatedActionsVerticalIcon} variant="inverse" />
    </Tooltip>
  </Flex>
);

```

### TertiaryButton

<!-- No description available for TertiaryButton -->

The example below shows multiple instances of a `TertiaryButton` with various icon configurations.

```tsx
import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

export const Tertiary = () => (
  <Flex cs={parentContainerStyles}>
    <TertiaryButton>Tertiary</TertiaryButton>
    <TertiaryButton icon={plusIcon} iconPosition="start">
      Tertiary
    </TertiaryButton>
    <TertiaryButton icon={caretDownIcon} iconPosition="end">
      Tertiary
    </TertiaryButton>
    <Tooltip title="Related Actions">
      <TertiaryButton icon={relatedActionsVerticalIcon} />
    </Tooltip>
  </Flex>
);

```

Tertiary Buttons also have an `inverse` variant. Use this when you need to place a Tertiary Button
on a dark or colorful background such as `blueberry400`.

```tsx
import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
  backgroundColor: system.color.bg.primary.default,
});

export const TertiaryInverse = () => (
  <Flex cs={parentContainerStyles}>
    <TertiaryButton variant="inverse">Tertiary</TertiaryButton>
    <TertiaryButton icon={plusIcon} iconPosition="start" variant="inverse">
      Tertiary
    </TertiaryButton>
    <TertiaryButton icon={caretDownIcon} iconPosition="end" variant="inverse">
      Tertiary
    </TertiaryButton>
    <Tooltip title="Related Actions">
      <TertiaryButton icon={relatedActionsVerticalIcon} variant="inverse" />
    </Tooltip>
  </Flex>
);

```

### DeleteButton

<!-- No description available for DeleteButton -->

```tsx
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

export const Delete = () => (
  <Flex cs={parentContainerStyles}>
    <DeleteButton>Delete</DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="start">
      Delete
    </DeleteButton>
    <DeleteButton icon={trashIcon} iconPosition="end">
      Delete
    </DeleteButton>
    <Tooltip title="Delete">
      <DeleteButton icon={trashIcon} />
    </Tooltip>
  </Flex>
);

```

### Grow Prop

The example below shows the use of the `grow` prop on different variants of buttons. This will set
the width of the button to the width of its container.

```tsx
import React from 'react';

import {
  DeleteButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Grow = () => (
  <Flex gap="s" padding="s" flexDirection="column" maxWidth={300}>
    <PrimaryButton size="small" grow={true}>
      Primary
    </PrimaryButton>
    <SecondaryButton size="small" grow={true}>
      Secondary
    </SecondaryButton>
    <TertiaryButton size="small" grow={true}>
      Tertiary
    </TertiaryButton>
    <DeleteButton size="small" grow={true}>
      Delete
    </DeleteButton>
  </Flex>
);

```

### Custom Styles

All of our buttons support custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs)
or view the example below.

```tsx
import {buttonStencil, PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {Grid} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const customContainer = createStyles({
  gap: system.space.x4,
  maxWidth: 'max-content',
});

const myButtonStencil = createStencil({
  base: {
    [buttonStencil.vars.background]: system.color.static.green.soft,
    [buttonStencil.vars.label]: system.color.static.green.strong,
    [systemIconStencil.vars.color]: system.color.static.green.strong,
    [buttonStencil.vars.borderRadius]: system.shape.half,
    border: `${px2rem(3)} solid transparent`,
    '&:focus-visible': {
      [buttonStencil.vars.background]: system.color.static.green.strong,
      [buttonStencil.vars.boxShadowInner]: system.color.static.green.soft,
      [buttonStencil.vars.boxShadowOuter]: system.color.static.green.strong,
      [systemIconStencil.vars.color]: system.color.icon.inverse,
    },
    '&:hover': {
      [buttonStencil.vars.background]: system.color.static.green.default,
      border: `${px2rem(3)} dotted ${system.color.static.green.strong}`,
      [systemIconStencil.vars.color]: system.color.static.green.strong,
      [systemIconStencil.vars.color]: system.color.icon.inverse,
    },
    '&:active': {
      [buttonStencil.vars.background]: system.color.static.green.strong,
      [buttonStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
    },
  },
});

const MyCustomButton = createComponent('button')({
  Component: ({children, cs, ...elemProps}: PrimaryButtonProps, ref, Element) => (
    <PrimaryButton as={Element} ref={ref} cs={[myButtonStencil(), cs]} {...elemProps}>
      {children}
    </PrimaryButton>
  ),
});

const myCustomStyles = createStyles({
  padding: system.space.x4,
  textTransform: 'uppercase',
  [buttonStencil.vars.background]: system.color.static.gray.soft,
  [buttonStencil.vars.label]: system.color.static.gray.strong,
  [systemIconStencil.vars.color]: system.color.static.gray.strong,
  [buttonStencil.vars.borderRadius]: system.shape.x2,
  [buttonStencil.vars.border]: system.color.static.gray.stronger,
  '&:focus-visible': {
    [buttonStencil.vars.background]: system.color.static.gray.strong,
    [buttonStencil.vars.boxShadowInner]: system.color.static.gray.soft,
    [buttonStencil.vars.boxShadowOuter]: system.color.static.gray.strong,
    [systemIconStencil.vars.color]: system.color.icon.inverse,
  },
  '&:hover': {
    [buttonStencil.vars.background]: system.color.static.gray.default,
    [buttonStencil.vars.border]: `${px2rem(3)} dotted ${system.color.static.gray.strong}`,
    [systemIconStencil.vars.color]: system.color.static.gray.strong,
    [systemIconStencil.vars.color]: system.color.icon.inverse,
    border: `${px2rem(3)} dotted ${system.color.static.gray.strong}`,
  },
  '&:active': {
    [buttonStencil.vars.background]: system.color.static.gray.strong,
    [buttonStencil.vars.label]: system.color.fg.inverse,
    [systemIconStencil.vars.color]: system.color.fg.inverse,
  },
});

const customColors = {
  default: {
    background: system.color.static.amber.soft,
    icon: system.color.static.amber.strong,
    label: system.color.static.amber.strong,
  },
  focus: {
    background: system.color.static.amber.strong,
    boxShadowInner: system.color.static.amber.soft,
    boxShadowOuter: system.color.static.amber.strong,
  },
  hover: {
    background: system.color.static.amber.default,
    icon: system.color.icon.inverse,
  },
  active: {
    background: system.color.static.amber.strong,
  },
  disabled: {},
};

export const CustomStyles = () => (
  <Grid cs={customContainer}>
    <MyCustomButton icon={plusIcon}>Styling Override Via Stencil Variables</MyCustomButton>
    <MyCustomButton icon={plusIcon} cs={myCustomStyles}>
      Style Override Via Create Styles
    </MyCustomButton>
    <PrimaryButton icon={plusIcon} colors={customColors}>
      Styling Override Via Colors Prop
    </PrimaryButton>
  </Grid>
);

```

### Theme Overrides

The most common way to theme our buttons is to pass a `theme` object at the root level of the
application via the `CanvasProvider`. In the example below, our buttons use our `brand.action.**`
tokens with the fallback being `brand.primary.**`.

> **Caution:** Setting `--cnvs-brand-action**` tokens at the `:root` CSS will override all
> `PrimaryButton` theme colors set at the `CanvasProvider` level.

> **Note:** You should **not** individually theme components wrapping them with the
> `CanvasProvider`, but rather theme at the root level of the application.

```tsx
import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

const customActionTheme = createStyles({
  [brand.action.base]: 'teal',
  [brand.action.accent]: 'white',
  [brand.action.dark]: 'hsla(180, 100%, 20%)',
  [brand.action.darkest]: 'hsla(180, 100%, 16%)',
});

export const ThemeOverrides = () => (
  <div>
    <Heading size="medium" as="h3">
      Override Primary Color Via Canvas Provider
    </Heading>
    <CanvasProvider
      theme={{
        canvas: {
          palette: {
            primary: {
              main: 'navy',
            },
          },
        },
      }}
    >
      <Flex cs={parentContainerStyles}>
        <PrimaryButton>Primary</PrimaryButton>
        <PrimaryButton icon={plusIcon} iconPosition="start">
          Primary
        </PrimaryButton>
        <PrimaryButton icon={caretDownIcon} iconPosition="end">
          Primary
        </PrimaryButton>
        <PrimaryButton aria-label="Related Actions" icon={relatedActionsVerticalIcon} />
      </Flex>
    </CanvasProvider>
    <Heading size="medium" as="h3">
      Override Action Color Via CSS Action Token
    </Heading>
    <div className={customActionTheme}>
      <Flex cs={parentContainerStyles}>
        <PrimaryButton>Primary</PrimaryButton>
        <PrimaryButton icon={plusIcon} iconPosition="start">
          Primary
        </PrimaryButton>
        <PrimaryButton icon={caretDownIcon} iconPosition="end">
          Primary
        </PrimaryButton>
        <PrimaryButton aria-label="Related Actions" icon={relatedActionsVerticalIcon} />
      </Flex>
    </div>
  </div>
);

```

## Accessibility

Our button components render semantic HTML `<button>` elements to the browser DOM. This means that
ARIA roles won't be necessary in most cases, and `onClick` listeners will automatically support the
Enter and Space keys for keyboard interactions.

[Button Pattern | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

- An `aria-label` is only necessary for icon-only buttons in most cases. Using
  [Canvas Kit's tooltip component](?path=/docs/components-popups-tooltip--docs) will handle this for
  you, and all users will be able to see the label for the button.
- When button designs have 2 toggle states, an `aria-pressed={true | false}` property is required
  for screen reader support. For example, see Canvas Kit's
  [Segmented Control component](?path=/docs/preview-segmented-control--docs).
- When buttons have an attached menu, an `aria-haspopup=”true”` property is required. Using
  [Canvas Kit's Menu component](?path=/docs/components-menus-menu--docs) will handle this for you.
- The icons used in text buttons are decorative in most cases and include ARIA `role="presentation"`
  and `focusable="false"`. In some special cases where an icon does add meaning, you may be required
  to change the `role` and add an `aria-label` to the icon for equivalent screen reader support.

### Disabled Buttons

- Disabled buttons use the `disabled` attribute, removing them from the tab order.
- Disabled styling is exempt from WCAG contrast requirements.

### Screen Reader Experience

- Button text content is announced along with the button role (e.g., "Primary, button").
- Icon-only buttons announce the `aria-label` value along with the button role.
- Toggle buttons announce their pressed/unpressed state (e.g., "Activity Stream, toggle button,
  pressed" and check out the
  [Segmented Control component](?path=/docs/preview-segmented-control--docs)).

### Touch Target Size

- All buttons meet the minimum 24px by 24px touch target size requirement for mobile accessibility.
- Button padding ensures adequate spacing between interactive elements to prevent accidental
  activation.

### Button Groups

- Related buttons can be grouped together with HTML unordered list elements or with `<fieldset>` and
  `<legend>` elements. This can help give additional context to screen readers about the purpose of
  the group.

## Component API

<!-- API Reference for PrimaryButton not found -->
<!-- API Reference for SecondaryButton not found -->
<!-- API Reference for TertiaryButton not found -->
<!-- API Reference for DeleteButton not found -->

## Specifications

### Specifications for Button

<!-- Component specifications from Button.spec.tsx -->
