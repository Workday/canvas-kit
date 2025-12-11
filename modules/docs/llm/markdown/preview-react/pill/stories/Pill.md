---
source_file: preview-react/pill/stories/Pill.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/pill/stories/Pill
---

<Meta of={PillStories} />

# Canvas Kit Pill

`Pill`s are static or interactive indicators that allow users to input, filter, or label
information.

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

`Pill`s are used to visually label objects on a page for quick recognition. They’re offered as both
static (read-only) and interactive elements. They allow users to filter a list or table, or label
information to help with scanning and organization.

### Basic Pills

By default a Pill is considered interactive. All leading elements (icons or avatars) are intended to
be descriptive, helping support the label. Do not rely on the leading element to indicate the
interaction behavior.

#### Icon

You can render an icon inside the `Pill` with `Pill.Icon`. It will render a `plusIcon` by default,
but it can be customized by providing an icon to the `icon` prop. Because it uses `SystemIcon` under
the hood, you also have access to all `SystemIconProps`.

#### Accessibility

You must provide an `aria-label` to the `Pill.Icon` for proper accessibility.

```tsx
import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const Basic = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill disabled>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};

```

#### Avatar

You can render an avatar image inside the `Pill` with `Pill.Avatar`. It should appear before the
`Pill` text. Because it uses `Avatar` under the hood, you also have access to all `AvatarProps`.

```tsx
import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const WithAvatar = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Avatar name="Regina Skeltor" url={testAvatar} />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill disabled>
          <Pill.Avatar name="Regina Skeltor" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};

```

#### Count

The count appears after the label. It is usually associated with the label. If you have a category,
the count will directly correlate to that category.

```tsx
import React from 'react';
import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const WithCount = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          Shoes
          <Pill.Count>30</Pill.Count>
        </Pill>
        <Pill disabled>
          Shoes
          <Pill.Count>30</Pill.Count>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};

```

### Read Only

The `readOnly` variant is a non-interactive element that is used to display information.

You can define a read only `Pill` by providing a `variant='readOnly'` prop.

```tsx
import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const WithReadOnly = () => (
  <div className={flexStyles} id="read-only-list">
    <Pill variant="readOnly">Read-only</Pill>
    <Pill variant="readOnly" maxWidth={150}>
      Read-only but with super long text in case you want to read a paragraph in a Pill which we
      don't recommend
    </Pill>
  </div>
);

```

### Removable Pills

Removable `Pill`s display an `X` icon after the label. They have a smaller, more specific focus
state and click target to be more intentional about their actions and to avoid unintended removal.

You can define a removable `Pill` by providing a `variant='removable'` prop.

```tsx
<Pill variant="removable">
  Pink Shirts
  <Pill.IconButton onClick={() => console.warn('clicked')} />
</Pill>
```

In this case, we use a `Pill.IconButton` because the `X` becomes the focusable and clickable
element.

The default icon for `Pill.IconButton` is `xSmallIcon` but this can also be overwritten by passing
an `icon` prop to `Pill.IconButton`

```tsx
import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const WithRemovable = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill variant="removable">
          <Pill.Label>Pink Shirts</Pill.Label>
          <Pill.IconButton
            aria-label="Remove"
            onClick={() => setText('The first pill is clicked!')}
          />
        </Pill>
        <Pill variant="removable">
          <Pill.Avatar name="Avatar" url={testAvatar} />
          <Pill.Label>Carolyn Grimaldi</Pill.Label>
          <Pill.IconButton
            aria-label="Remove"
            onClick={() => setText('The second pill is clicked!')}
          />
        </Pill>
        <Pill variant="removable" disabled>
          <Pill.Label>This is a category that should not exist because it is too long</Pill.Label>
          <Pill.IconButton aria-label="Remove" />
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};

```

### List of Pills

`Pill`s can often represent multiple pieces of information such as a filtered list of categories or
skills.

In order to achieve this, use our `Flex` component to wrap each `Pill` and space them out
accordingly.

```tsx
import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const data = [
  'Shoes',
  'Pants',
  'Dress Shoes',
  'Color',
  'Accessories',
  'Luxury',
  'Casual',
  'Hats',
  'Beanies',
  'Glasses',
  'Jewelry',
];

const flexWrapStyles = createStyles({
  display: 'flex',
  flexWrap: 'wrap',
  gap: system.space.x2,
});

export const WithList = () => {
  const [items, setItems] = React.useState(data);

  return (
    <div className={flexWrapStyles}>
      {items.map((cat, index) => {
        return (
          <Pill key={index} variant="removable">
            <Pill.Label>{cat}</Pill.Label>
            <Pill.IconButton
              aria-label="Remove"
              onClick={() => setItems(items.filter(i => i !== cat))}
            />
          </Pill>
        );
      })}
    </div>
  );
};

```

### Custom Styles

`Pill` supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs)
or view the example below.

```tsx
import {Pill, pillCountStencil, pillStencil} from '@workday/canvas-kit-preview-react/pill';

import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const customPillStencil = createStencil({
  base: {
    [pillStencil.vars.background]: system.color.static.green.default,
    [pillStencil.vars.border]: system.color.static.green.stronger,
    [pillStencil.vars.label]: system.color.static.white,
    [systemIconStencil.vars.color]: system.color.static.white,
    [pillCountStencil.vars.backgroundColor]: system.color.static.green.default,
    [pillCountStencil.vars.borderColor]: system.color.static.green.default,

    '&:hover, &.hover': {
      [pillStencil.vars.background]: system.color.static.green.stronger,
      [pillStencil.vars.label]: system.color.static.white,
      [pillCountStencil.vars.backgroundColor]: system.color.static.green.stronger,
      [systemIconStencil.vars.color]: system.color.static.white,
      [pillCountStencil.vars.borderColor]: system.color.static.green.stronger,
    },
    '&:active, &.active': {
      [pillStencil.vars.background]: system.color.static.green.stronger,
      [pillStencil.vars.label]: system.color.static.white,
      [systemIconStencil.vars.color]: system.color.static.white,
      [pillCountStencil.vars.backgroundColor]: system.color.static.green.stronger,
    },
    '&:focus, &.focus, &:focus-visible': {
      [pillStencil.vars.background]: system.color.static.green.stronger,
      [pillStencil.vars.label]: system.color.static.white,
      [systemIconStencil.vars.color]: system.color.static.white,
      [pillCountStencil.vars.backgroundColor]: system.color.static.green.stronger,
    },
    '&:disabled, &.disabled': {
      [pillStencil.vars.background]: system.color.static.green.default,
      [pillStencil.vars.label]: system.color.static.white,
      [systemIconStencil.vars.color]: system.color.static.white,
    },
  },
});

export const CustomStyles = () => {
  return (
    <div>
      <Pill cs={customPillStencil()}>
        <Pill.Icon aria-label="Add user" />
        <Pill.Label>Custom Pill Color</Pill.Label>
        <Pill.Count>10</Pill.Count>
      </Pill>
    </div>
  );
};

```

## Component API

<!-- API Reference for Pill not found -->
