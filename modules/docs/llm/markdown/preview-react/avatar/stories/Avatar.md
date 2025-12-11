---
source_file: preview-react/avatar/stories/Avatar.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/avatar/stories/Avatar
---

<Meta title="Preview/Avatar" component={Avatar} />

# Avatar

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

### Basic Example

The most basic usage requires only a `name` prop. The component automatically extracts and displays
the initials. If you want to display a different set of initials, you can use the `preferredInitials` prop.

```tsx
import {Avatar} from '@workday/canvas-kit-preview-react/avatar';

export const Basic = () => {
  return <Avatar name="John Doe" />;
};

```

### Image Avatar

You can display a profile image by providing the `url` prop.

> Note: The `url` and the `name` prop is required for the image avatar. The `name` is used for the `alt` attribute on the image.

#### Image Fallback Behavior

The Avatar component includes intelligent fallback handling:

- While the image loads, the user's initials are displayed using the `name` prop
- If the image fails to load, initials remain visible
- The `name` prop serves as both the alt text and fallback content

```tsx
import {Avatar} from '@workday/canvas-kit-preview-react/avatar';

export const Image = () => {
  return (
    <Avatar
      name="Happy Doggo"
      url={'https://picsum.photos/id/237/300/200'}
      objectFit="cover"
      size="medium"
    />
  );
};

```

### Sizes

The Avatar component supports the following sizes:
- `extraExtraSmall` is 24px x 24px
- `extraSmall` is 32px x 32px
- `small` is 40px x 40px
- `medium` is 48px x 48px
- `large` is 72px x 72px
- `extraLarge` is 96px x 96px
- `extraExtraLarge` is 120px x 120px

```tsx
import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const Size = () => {
  return (
    <div className={containerStyles}>
      <Avatar name="John Doe" size="extraExtraSmall" />
      <Avatar name="Logan McNeil" size="extraSmall" />
      <Avatar name="Wonder Woman" size="small" />
      <Avatar name="Iron Man" size="medium" />
      <Avatar name="Peter Parker" size="large" />
      <Avatar name="Bruce Banner" size="extraLarge" />
      <Avatar name="Elektra" size="extraExtraLarge" />
    </div>
  );
};

```

### Variants

Choose from four predefined color schemes:

```tsx
import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const Variant = () => {
  return (
    <div className={containerStyles}>
      <Avatar name="John Doe" variant="blue" />
      <Avatar name="Logan McNeil" variant="amber" />
      <Avatar name="Wonder Woman" variant="teal" />
      <Avatar name="Elektra" variant="purple" />
    </div>
  );
};

```

### Advanced Custom Component

For complete control over styling and behavior, use the `BaseAvatar` component:

```tsx
import {BaseAvatar} from '@workday/canvas-kit-preview-react/avatar';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

const customStyles = createStyles({
  cursor: 'pointer',
  backgroundColor: base.magenta300,
  color: base.magenta700,
  borderRadius: '50%',
  border: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  span: {
    cursor: 'pointer',
  },
});

export const Custom = () => {
  return (
    <BaseAvatar
      size={px2rem(56)}
      cs={customStyles}
      as="button"
      onClick={() => console.log('clicked')}
    >
      <BaseAvatar.Name name="John Doe Jane" />
    </BaseAvatar>
  );
};

```

### Accessibility
If the Avatar is purely decorative, you can set the `isDecorative` prop to `true` to prevent the `name` prop from being forwarded to the `alt` attribute of the image.

```tsx
import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
// @ts-ignore
import nicholasAvatar from './nicholas-avatar.jpg';
import {createStyles} from '@workday/canvas-kit-styling';
import {Text} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
  alignItems: 'center',
});
export const Decorative = () => {
  return (
    <div className={containerStyles}>
      <Avatar
        name="Nicholas Smith"
        isDecorative
        url={nicholasAvatar}
        objectFit="cover"
        size="small"
      />
      <Text>Nicholas Smith</Text>
    </div>
  );
};

```

## Component API

<!-- API Reference for Avatar not found -->
