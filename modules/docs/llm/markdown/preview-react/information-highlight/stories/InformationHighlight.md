---
source_file: preview-react/information-highlight/stories/InformationHighlight.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/information-highlight/stories/InformationHighlight
---

<Meta of={InformationHighlight} />

# Canvas Kit Information Highlight

A container to call out important information on a page or a section of a page that the user should
be aware of.

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

`InformationHighlight` should be used to call out important information to the user and are paired
with a meaningful icon and color to differentiate information type. It should not be removed from
the interface until some system or admin level action has been taken to do so.

You can use an `InformationHighlight` to:

- Prevent unwanted consequences from destructive actions
- Reassure users in their next steps
- Provide detail into information on the page
- Show changes in page content

### When to Consider Something Else

- Consider a
  [Banner](https://workday.github.io/canvas-kit/?path=/docs/components-indicators-banner--docs) if
  the message is about system-wide errors or alerts, or if the message appears in response to user
  action.
- Consider a
  [Dialog](https://workday.github.io/canvas-kit/?path=/docs/components-popups-dialog--docs) if the
  message is critical and requires user action or decision before proceeding
- Consider a [Toast](https://workday.github.io/canvas-kit/?path=/docs/components-popups-toast--docs)
  if the message is timely, such as communicating updates on the process of an application.

### Basic Example

```tsx
import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';

export const Basic = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Icon />
      <InformationHighlight.Heading>Information Highlight</InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        This is what an information highlight would look like with with the default settings and
        every field filled in{' '}
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};

```

## Variants

`InformationHighlight` has three variants and each `variant` has two types of `emphasis`.

Variants: `informational`, `caution`, `critical`

Emphasis: `low`, `high`

The variants have different icons and colors to convey severity and the emphasis changes the
background color to have a lower or higher contrast. If no `variant` or `emphasis` is selected the
layout will default to `Variant: informational, Emphasis: low`.

The following examples will show the `low` and `high` emphasis of the three variants. `low` Emphasis
will be shown first and should be used when there is other more important information on the page.
`high` Emphasis will be shown second, and should be used when the highlight is not competing with
other, more important information.

### Informational

The informational variant is for _nice to have_ information, such as related features or
opportunities.

```tsx
import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const contentTextStyles = createStyles({
  margin: 0,
});

const contentListStyles = createStyles({
  listStyle: 'inside',
  marginInlineStart: 0,
  marginBlockStart: system.space.x2,
  marginBlockEnd: 0,
  padding: 0,
});

export const Informational = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      <InformationHighlight variant={'informational'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Informational Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          <p className={contentTextStyles}>
            This is a low-emphasis, informational callout. You should use this for nice-to-have
            information, such as:
          </p>
          <ul className={contentListStyles}>
            <li>tangential information or context</li>
            <li>related features</li>
            <li>additional opportunities</li>
          </ul>
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">Learn More</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'informational'} emphasis={'high'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Informational Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          <p className={contentTextStyles}>
            This is a high-emphasis, informational callout. You should use this for nice-to-have
            information, such as:
          </p>
          <ul className={contentListStyles}>
            <li>tangential information or context</li>
            <li>related features</li>
            <li>additional opportunities</li>
          </ul>
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">Learn More</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};

```

### Caution

The caution variant is for _important to know_ information, such as the potential consequences of
specific actions.

```tsx
import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {system} from '@workday/canvas-tokens-web';

export const Caution = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      <InformationHighlight variant={'caution'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below, nothing will happen
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'caution'} emphasis={'high'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below, nothing will happen
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};

```

### Critical

The critical variant is for _must know_ information that could otherwise cause failure if the user
is unaware

```tsx
import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {system} from '@workday/canvas-tokens-web';

export const Critical = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      <InformationHighlight variant={'critical'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading>Attention! Highlight Something</InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will reroute you back to this page.
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'critical'} emphasis={'high'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading>Attention! Highlight Something</InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will reroute you back to this page.
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};

```

### RTL Example

Information Highlight also supports RTL Languages. To enable RTL, set the `dir` attribute on the
parent dom element that renders your application.

```tsx
import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {system} from '@workday/canvas-tokens-web';
export const RTL = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      <CanvasProvider dir="rtl">
        <InformationHighlight variant={'caution'} emphasis={'low'}>
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>
            {' '}
            انتباه! من اليمين إلى اليسار{' '}
          </InformationHighlight.Heading>
          <InformationHighlight.Body>
            نحن ندعم اللغات من اليمين إلى اليسار
          </InformationHighlight.Body>
          <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
        </InformationHighlight>
      </CanvasProvider>
      <CanvasProvider dir="rtl">
        <InformationHighlight variant={'caution'} emphasis={'high'}>
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>
            {' '}
            انتباه! من اليمين إلى اليسار{' '}
          </InformationHighlight.Heading>
          <InformationHighlight.Body>
            نحن ندعم اللغات من اليمين إلى اليسار
          </InformationHighlight.Body>
          <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
        </InformationHighlight>
      </CanvasProvider>
    </Flex>
  );
};

```

## Partial and Custom Information Highlights

`InformationHighlight` can use custom icons or be designed to only use some of its components.

### Custom Icon: Critical

```tsx
import React from 'react';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {chartIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export const IconCritical = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      <InformationHighlight variant={'critical'} emphasis={'low'}>
        <InformationHighlight.Icon icon={chartIcon} />
        <InformationHighlight.Heading> Attention! Custom Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          A custom Icon can be added to the Information Highlight component
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'critical'} emphasis={'high'}>
        <InformationHighlight.Icon icon={chartIcon} />
        <InformationHighlight.Heading> Attention! Custom Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          A custom Icon can be added to the Information Highlight component
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};

```

### Body Only Example

```tsx
import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';

export const Body = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Body>
        Only the body of an information highlight
      </InformationHighlight.Body>
    </InformationHighlight>
  );
};

```

### Heading Only Example

```tsx
import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';

export const Heading = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Heading> Only Heading </InformationHighlight.Heading>
    </InformationHighlight>
  );
};

```

### Accessible Use of the `as` Prop

Like many of our components, `InformationHighlight` and it's subcomponents accept an `as` prop,
which lets you change the underlying semantic element. For `InformationHighlight.Heading`, you can
change the heading level if you were needing to define a different level of importance. This should
be done with caution to ensure the best accessibility.

## Component API

<!-- API Reference for InformationHighlight not found -->

## Specifications

### Specifications for InformationHighlight

<!-- Component specifications from InformationHighlight.spec.tsx -->
