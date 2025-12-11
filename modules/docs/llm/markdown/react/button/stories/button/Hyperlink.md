---
source_file: react/button/stories/button/Hyperlink.mdx
live_url: https://workday.github.io/canvas-kit/react/button/stories/button/Hyperlink
---

<Meta of={HyperlinkStories} />

# Canvas Kit Hyperlinks

Clickable anchor elements that extend the native `<a>` element with Canvas styling.

[> Workday Design Reference](https://design.workday.com/components/buttons/buttons)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Hyperlink

`Hyperlink`s should be used when you want to navigate away from the current page or to an anchor on
the current page. By default, `Hyperlink`s have an underline for accessibility.

```tsx
import {Hyperlink} from '@workday/canvas-kit-react/button';

export const Link = () => <Hyperlink href="#hyperlink">Hyperlink</Hyperlink>;

```

#### Inverse

`Hyperlink`s also have an `inverse` variant. Use this variant when you need to place a `Hyperlink`
on a dark or colorful background.

```tsx
import React from 'react';

import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
  display: 'inline-flex',
  gap: system.space.x4,
});

export const LinkInverse = () => (
  <Box cs={parentContainerStyles}>
    <Hyperlink href="#hyperlink" variant="inverse">
      Hyperlink
    </Hyperlink>
    <Hyperlink href="#hyperlink" variant="standaloneInverse">
      Hyperlink
    </Hyperlink>
  </Box>
);

```

#### Standalone

`Hyperlink`s also have a `standalone` variant. Use this variant when you need to place a `Hyperlink`
outside of a paragraph or body text. This will remove the underline.

This variant can also be used with the `ExternalHyperlink` component.

```tsx
import {Hyperlink, ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x4,
});

export const StandaloneLink = () => (
  <div className={containerStyles}>
    <Hyperlink variant="standalone" href="#standalone-hyperlink">
      Standalone Hyperlink
    </Hyperlink>
    <ExternalHyperlink
      variant="standalone"
      href="#standalone-external-hyperlink"
      iconLabel="Opens new window"
    >
      Standalone External Hyperlink
    </ExternalHyperlink>
  </div>
);

```

#### In Body Text

In most cases use `HyperLink` and `ExternalHyperlink` in body text of a sentence where you need to
link to another page or part of the document. By default they will wrap to a new line.

```tsx
import {Hyperlink} from '@workday/canvas-kit-react/button';

export const InBodyText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    <Hyperlink href="#hyperlink">tempor incididunt</Hyperlink> ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in
    <Hyperlink href="#hyperlink">voluptate velit esse cillum dolore eu fugiat</Hyperlink>
    nulla pariatur.
  </p>
);

```

> **Accessibility Note:** Underlining links is not required in most cases. However, the example
> above is one such exception. When hyperlinked text appears inline with static text, a text
> decoration is required to avoid failing WCAG v2.2 success criterion 1.4.1 Use of Color.
>
> [Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](https://www.w3.org/WAI/WCAG22/Techniques/failures/F73)

### Accessibility

Our link components render semantic HTML `<a>` elements to the browser DOM. This means that ARIA
roles won't be necessary in most cases. The `href` prop is required for accessibility. Activation
links with the Enter key is standard expected behavior, while Space is only expected for buttons.

#### When to Use Links vs Buttons

- **Use Hyperlinks when:** Navigating to different pages or sections, or changing the browser's
  location
- **Use Buttons when:** Performing actions like submitting forms, opening modals, or triggering
  functions without navigation
- **Why This Matters:** Screen reader users expect different behaviors from links vs buttons. Users
  navigate between links using different keyboard shortcuts than buttons. Browser behaviors like
  "Open in new tab" only work with proper links.

#### Common Mistakes to Avoid

- Using buttons styled as links for navigation (breaks right-click context menus)
- Using links for actions like "Delete" or "Save" (confuses user expectations)
- Missing `href` attributes on navigation elements (breaks keyboard accessibility)
- Using `href="#"` with `onClick` handlers instead of proper buttons

### Component API

<!-- API Reference for Hyperlink not found -->

### ExternalHyperlink

If your link should open in a new tab or window use the `ExternalHyperlink` component. It will let
users know about the behavior by adding an icon, `extLinkIcon`.

> **Accessibility Note:** Providing a label to the icon via the `iconLabel` prop is required for
> accessibility because the icon adds meaning to the link text. We recommend keeping the alt text as
> concise as possible, such as "Opens new window". This override will be needed for translations.

```tsx
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';

export const ExternalLink = () => (
  <ExternalHyperlink href="https://workday.com" iconLabel="Opens new window">
    External Hyperlink
  </ExternalHyperlink>
);

```

`ExternalHyperlink`s also have an `inverse` variant. Use this variant when you need to place the
link on a dark or colorful background.

```tsx
import React from 'react';

import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
  display: 'inline-flex',
  gap: system.space.x4,
});

export const ExternalLinkInverse = () => (
  <Box cs={parentContainerStyles}>
    <ExternalHyperlink
      href="https://workday.com"
      variant="inverse"
      iconLabel="Opens link in new window"
    >
      Hyperlink
    </ExternalHyperlink>
    <ExternalHyperlink
      href="https://workday.com"
      variant="standaloneInverse"
      iconLabel="Opens new window"
    >
      Hyperlink
    </ExternalHyperlink>
  </Box>
);

```

### Component API

<!-- API Reference for ExternalHyperlink not found -->

## Specifications

### Specifications for Hyperlink

<!-- Component specifications from Hyperlink.spec.ts -->
