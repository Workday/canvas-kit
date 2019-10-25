# Canvas Kit React Panel

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-panel
```

## Usage

```tsx
import * as React from 'react';
import {Panel, PanelDirection, PanelHeader} from '@workday/canvas-kit-labs-react-panel';

<div style={{height: '100vh', position: 'relative'}}>
  <Panel
    header={<PanelHeader headerTitle={'Panel Header'} />}
    openDirection={PanelDirection.Left}
    padding={spacing.l}
    showDropShadow={true}
  ></Panel>
</div>;
```
