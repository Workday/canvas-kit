# Canvas Kit React Tabs

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
</a>  This component is work in progress and currently in pre-release.

`Tabs` is a [Compound Component](../../../../modules/docs/mdx/COMPOUND_COMPONENTS.md).

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

## Usage

```tsx
import * as React from 'react';
import {Tabs} from '@workday/canvas-kit-labs-react/tabs';

export default () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Item>First Tab</Tabs.Item>
      <Tabs.Item>Second Tab</Tabs.Item>
    </Tabs.List>
    <div css={{marginTop: spacing.m}}>
      <Tabs.Panel>Contents of First Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
    </div>
  </Tabs>
);
```

---

## Table of Contents

- [Tabs](#tabs)
- [Tabs.List](#tabslist)
- [Tabs.Item](#tabsitem)
- [Tabs.Panel](#tabspanel)

---

## Tabs

### Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabListProps> | React.ReactElement<TabPanelsProps>`

> Tabs cannot be empty

### Optional

#### `initialTab: string`

> The `name` of the tab that should be active first. If not provided, the first tab will be active.

#### `onTabChange: (name: string) => void`

> Callback when a tab changes. The `name` will be the `name` prop passed into the `Tabs.Item` and
> `Tabs.Panel` component. If a `name` isn't provided, the value will be a string of the index of the
> tab.

---

## Tabs.List

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]`

> TabList cannot be empty

### Optional

> None

---

# Tabs.Item

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactNode`

> The label text of the Tab

### Optional

#### `name: string`

> The name of the tab. This name will be used in change events and for `initialTab`. Must match the
> `name` of the associated tab panel. If this property is not provided, it will default to a string
> representation of the the zero-based index of the Tab when it was initialized.

---

# Tabs.Panel

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactNode`

> The contents of the TabPanel

### Optional

#### `name: string`

> The name of the tab. This name will be used in change events and for `initialTab`. Must match the
> `name` of the associated tab panel. If this property is not provided, it will default to a string
> representation of the the zero-based index of the Tab when it was initialized.
