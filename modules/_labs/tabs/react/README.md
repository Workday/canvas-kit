# Canvas Kit React Tabs

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

Composable tab components

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-tabs
```

## Usage

```tsx
import * as React from 'react';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@workday/canvas-kit-labs-react-tabs';

<Tabs>
  <TabList>
    <Tab>Tab</Tab>
    <Tab>Tab Number Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Hi this is tab content</TabPanel>
    <TabPanel>Hi this is another tab's content</TabPanel>
  </TabPanels>
</Tabs>;
```

---

## Table of Contents

- [Tabs](#tabs)
- [TabList](#tablist)
- [TabPanels](#tabpanels)
- [Tab](#tab)
- [TabPanel](#tabpanel)

---

# Tabs

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabListProps> | React.ReactElement<TabPanelsProps>`

> Tabs cannot be empty

### Optional

> None

---

# TabList

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]`

> TabList cannot be empty

### Optional

> None

---

# TabPanels

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabPanelProps> | React.ReactElement<TabPanelProps>[]`

> TabPanels cannot be empty

### Optional

> None

---

# Tab

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactNode`

> The label text of the Tab

### Optional

> None

---

# TabPanel

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactNode`

> The contents of the TabPanel

### Optional

> None
