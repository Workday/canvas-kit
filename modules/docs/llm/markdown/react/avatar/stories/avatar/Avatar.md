---
source_file: react/avatar/stories/avatar/Avatar.mdx
live_url: https://workday.github.io/canvas-kit/react/avatar/stories/avatar/Avatar
---

<Meta of={AvatarStories} />

# Canvas Kit Avatar <StorybookStatusIndicator type="deprecated" />

<InformationHighlight className="sb-unstyled" variant="caution" cs={{p: {marginBlock: 0}}}>
  <InformationHighlight.Icon />
  <InformationHighlight.Body>
    `Avatar` in Main has been deprecated and will be removed in a future major version. Please use
    [Avatar](https://workday.github.io/canvas-kit/?path=/docs/preview-avatar--docs) in Preview
    instead.
  </InformationHighlight.Body>
</InformationHighlight>

Represents a person's profile.

[> Workday Design Reference](https://canvas.workdaydesign.com/components/indicators/avatar)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

<!-- No description available for Avatar -->

The example below shows multiple instances of a `Avatar` with various configurations.

### Basic

By default, the Avatar renders a `button` element. If yo'd like to change the default element, use
the `as` prop.

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const Basic = () => (
  <div className={containerStyles}>
    <Avatar altText="Avatar" onClick={handleAvatarButtonClick} />
    <Avatar altText="Avatar" as="div" />
  </div>
);

```

### Button

Like many of our components, Avatar accepts an `as` prop, which lets you change the underlying
semantic element to a `div`. This should be done with caution to ensure the best accessibility.
Generally, `<button>` elements should be used for actions.

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const Button = () => (
  <div className={containerStyles}>
    <Avatar altText="Avatar" variant="dark" onClick={handleAvatarButtonClick} />
    <Avatar altText="Avatar" onClick={handleAvatarButtonClick} />
    <Avatar altText="Avatar" url={testAvatar} onClick={handleAvatarButtonClick} />
  </div>
);

```

### Variant

Avatar defaults to using a `"light"` `variant` property. You can change the `variant` prop to "dark"
by including `variant="dark"`.

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';

export const Variant = () => (
  <div className="story">
    <h3>Light</h3>
    <Avatar altText="Avatar" as="div" size="medium" />
    <h3>Dark</h3>
    <Avatar altText="Avatar" as="div" size="medium" variant="dark" />
  </div>
);

```

### Size

Avatar defaults to using a `"medium"` `size` property. You can change the `size` prop to various
sizing options. See Component API for more details.

Additionally, you can explicitly specify the size you want for the Avatar in pixels or rems.

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {px2rem} from '@workday/canvas-kit-styling';

export const Size = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar altText="Avatar" as="div" size="extraExtraLarge" />
    <h3>Extra Large</h3>
    <Avatar altText="Avatar" as="div" size="extraLarge" />
    <h3>Large</h3>
    <Avatar altText="Avatar" as="div" size="large" />
    <h3>Medium</h3>
    <Avatar altText="Avatar" as="div" size="medium" />
    <h3>Small</h3>
    <Avatar altText="Avatar" as="div" size="small" />
    <h3>Extra Small</h3>
    <Avatar altText="Avatar" as="div" size="extraSmall" />
    <h3>30px</h3>
    <Avatar altText="Avatar" as="div" size={px2rem(30)} />
    <h3>40px</h3>
    <Avatar altText="Avatar" as="div" size={px2rem(40)} />
    <h3>3rem</h3>
    <Avatar altText="Avatar" as="div" size="3rem" />
    <h3>4rem</h3>
    <Avatar altText="Avatar" as="div" size="4rem" />
  </div>
);

```

### Image

Avatar renders an image when the `url` prop is defined.

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x2,
});

export const Image = () => (
  <div className={containerStyles}>
    <h3>Working Images</h3>
    <Avatar altText="Avatar" size="extraExtraLarge" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="extraLarge" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="large" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="medium" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="small" as="div" url={testAvatar} />
    <Avatar altText="Avatar" size="extraSmall" as="div" url={testAvatar} />
    <h3>Broken Image</h3>
    <Avatar altText="Avatar" url="/fake/path/to/image.png" as="div" />
  </div>
);

```

### Object Fit

Avatar defaults to using `contain` for object-fit. You can change this property to any other
acceptable `object-fit` properties. For best fit, try to use square images.

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {px2rem} from '@workday/canvas-kit-styling';

export const ObjectFit = () => (
  <div className="story">
    <h3>Original Rectangle Image</h3>
    <img alt="" src="https://picsum.photos/id/237/300/200" />
    <h3>Object fit on a Rectangle Image</h3>
    <Avatar altText="Avatar" as="div" url="https://picsum.photos/id/237/300/200" />
    <h3>Object fit on a Rectangle Image using Dynamic Size</h3>
    <Avatar
      altText="Avatar"
      as="div"
      size={px2rem(200)}
      url="https://picsum.photos/id/237/300/200"
      objectFit="contain"
    />
    <h3>Original Square Image</h3>
    <img alt="" src="https://picsum.photos/id/237/300/300" />
    <h3>Object fit on a Square Image</h3>
    <Avatar altText="Avatar" as="div" url="https://picsum.photos/id/237/300/300" />
    <h3>Object fit on a Square Image using Dynamic Size</h3>
    <Avatar
      altText="Avatar"
      as="div"
      size={px2rem(200)}
      url="https://picsum.photos/id/237/300/300"
    />
  </div>
);

```

### Lazy Load

Example of implementing lazy load behavior with Avatar.

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export const LazyLoad = () => (
  <div className="story">
    {Array.from({length: 5}, (v, index) => (
      <div>
        <Avatar
          altText="Avatar"
          key={index}
          as="div"
          size="medium"
          url={testAvatar + '?v=' + index}
        />
        <br />
      </div>
    ))}
  </div>
);

```

### Custom Styling

To change the background color of the Avatar, you can use our `createStencil` functionality.

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const customOrangeAvatar = createStencil({
  base: {
    backgroundColor: system.color.static.amber.default,
    ['[data-part="avatar-icon"]']: {
      [systemIconStencil.vars.color]: system.color.static.white,
    },
  },
});

const customGreenAvatarStencil = createStencil({
  base: {
    backgroundColor: system.color.static.green.default,
    ['[data-part="avatar-icon"]']: {
      [systemIconStencil.vars.color]: system.color.static.white,
    },
  },
});

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const CustomStyles = () => (
  <div className={containerStyles}>
    <Avatar altText="Avatar" as="div" {...customOrangeAvatar()} />
    <Avatar altText="Avatar" as="div" {...customGreenAvatarStencil()} />
  </div>
);

```

## Component API

<!-- API Reference for Avatar not found -->

## Specifications

### Specifications for Avatar

<!-- Component specifications from Avatar.spec.ts -->
