# Canvas Kit React Drawer

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

## Usage

```tsx
import * as React from 'react';
import {Drawer, DrawerDirection, DrawerHeader} from '@workday/canvas-kit-labs-react/drawer';
import {space} from '@workday/canvas-kit-react/tokens';

<div style={{height: '100vh', position: 'relative'}}>
  <Drawer
    header={
      <DrawerHeader
        onClose={() => {
          window.alert('onClose Clicked');
        }}
        headerTitle={'Drawer Header'}
      />
    }
    openDirection={DrawerDirection.Left}
    padding={space.l}
    showDropShadow={true}
  ></Drawer>
</div>;
```
