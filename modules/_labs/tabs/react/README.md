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
import Tabs, {TabList, Tab, TabPanels, TabPanel} from '@workday/canvas-kit-labs-react-tabs';

  <Tabs>
    <TabList>
      <Tab>Tab</Tab>
      <Tab>Tab Number Two</Tab>
    </TabList>
    <TabPanels>
      <TabPanel key="1" index={0}>
        Hi this is tab content
      </TabPanel>
      <TabPanel key="2" index={1}>
        Hi this is another tab's content
      </TabPanel>
    </TabPanels>
  </Tabs>
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

> None
