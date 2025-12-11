---
source_file: preview-react/divider/stories/Divider.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/divider/stories/Divider
---

<Meta title="Preview/Divider" component={Divider} />

# Divider

A `Divider` segments and visually organizes content.

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

Use a `Divider` to separate content and create visual hierarchy. Typically they are used between
paragraph sections to indicate a break or shift in content. However, they can also be used as
decorative elements to provide greater emphasis and visual hierarchy.

### Basic Example

By default, `Divider` renders a `<hr>` (horizontal rule) element with `0.5rem` of margin on top and
bottom. The `space` prop allows you to adjust the vertical margin evenly. In the example below, the
`Divider`s provide a subtle deliniation between each profile card without being as visually
prominent as a `Card`. The `space` is adjusted to `0.25rem` which applied `0.125rem` to the top and
bottom margin.

```tsx
import React from 'react';
import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Avatar} from '@workday/canvas-kit-react/avatar';

const sectionStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x4,
  maxWidth: '40rem',
});

export const Basic = () => {
  const lastIndex = maintainerList.length - 1;
  return (
    <section className={sectionStyles}>
      {maintainerList.map((maintainerData, index) => (
        <>
          <ProfileCard {...maintainerData} />
          {index !== lastIndex && <Divider space={system.space.x1} />}
        </>
      ))}
    </section>
  );
};

const maintainerList = [
  {
    id: '44883293',
    name: 'Josh Bagwell',
    bio: 'Software Development Engineer',
  },
  {
    id: '338257',
    name: 'Nicholas Boll',
    bio: 'Principal Software Development Engineer',
  },
  {
    id: '7966550',
    name: 'Manuel Carrera',
    bio: 'Sr. Software Development Engineer',
  },
  {
    id: '146020',
    name: 'James Fan',
    bio: 'Sr. Software Development Engineer',
  },
  {
    id: '48605821',
    name: 'Raisa Primerova',
    bio: 'Software Development Engineer',
  },
  {
    id: '4818182',
    name: 'Alan Smith',
    bio: 'Principal Software Development Engineer',
  },
];

const profileCardStyles = createStyles({
  display: 'grid',
  gridGap: '0.5rem',
  gridTemplateColumns: '5rem 1fr',
  gridTemplateRows: '1fr 1fr',
});

const profileCardAvatarStyles = createStyles({
  gridColumn: '1',
  gridRow: '1 / 3',
});

const profileCardHeadingStyles = createStyles({
  ...system.type.body.large,
  fontWeight: system.fontWeight.bold,
  gridColumn: '2/3',
  gridRow: '1',
  margin: 0,
});

const profileCardBodyStyles = createStyles({
  ...system.type.body.small,
  gridColumn: '2',
  gridRow: '2',
  margin: 0,
});

interface ProfileCardProps {
  id: string;
  name: string;
  bio: string;
}

const ProfileCard = ({id, name, bio}: ProfileCardProps) => (
  <div className={profileCardStyles}>
    <Avatar
      size="extraLarge"
      url={`https://avatars.githubusercontent.com/u/${id}?v=4`}
      altText={`${name}'s avatar`}
      className={profileCardAvatarStyles}
    />
    <h3 className={profileCardHeadingStyles}>{name}</h3>
    <p className={profileCardBodyStyles}>{bio}</p>
  </div>
);

```

### Custom Space

You might also want to apply custom space to `Divider` where the top and bottom margin are not
equal. The best way to achieve this is with `createStyles` and the `cs` property. In the example
below, the `Divider` is applied as a decorative element to add emphasis to the section heading.
Custom styles are defined in the `createStyles` function outside the component and are passed to
`Divider`'s `cs` prop. These styles remove the top margin and set the bottom margin to `1rem`.

```tsx
import React from 'react';
import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const headingStyles = createStyles({
  ...system.type.body.large,
  fontWeight: system.fontWeight.bold,
  margin: 0,
});

const bodyStyles = createStyles({
  ...system.type.body.small,
  margin: 0,
});

const customDividerSpace = createStyles({
  margin: `0 0 ${system.space.x4}`,
});

export const CustomSpace = () => {
  return (
    <section>
      <h3 className={headingStyles}>Quote of the Day</h3>
      <Divider cs={customDividerSpace} />
      <p className={bodyStyles}>
        "It is not our differences that divide us. It is our inability to recognize, accept, and
        celebrate those differences." – Audre Lorde
      </p>
    </section>
  );
};

```

## Component API

<!-- API Reference for Divider not found -->
