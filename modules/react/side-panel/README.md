# Canvas Kit Side Panel

A component that provides a container for navigation elements. It provides options to be opened from
either the left or right side of the screen.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

# Side Panel

## Usage

```tsx
import * as React from 'react';
import {Button, IconButton} from '@workday/canvas-kit-react/button';
import SidePanel from '@workday/canvas-kit-react/side-panel';

interface SidePanelState {
  open: boolean;
}

class SidePanelExample extends React.Component<{}, SidePanelState> {
  public state = {
    open: true,
  };
  public render() {
    const {open} = this.state;
    return (
      <SidePanel
        backgroundColor={SidePanel.BackgroundColor.Gray}
        openDirection={SidePanel.OpenDirection.Left}
        open={open}
        onToggleClick={this.onClick}
        breakpoint={800}
        onBreakpointChange={this.handleBreakpoint}
        header={'Side Panel Header'}
      >
        {open ? (
          <Button variant="primary">Add New</Button>
        ) : (
          <IconButton size="small" variant="filled">
            <SystemIcon icon={plusIcon} />
          </IconButton>
        )}
        <ul>
          <li css={listItemStyles}>{open && <span>Home</span>}</li>
          <li css={listItemStyles}>{open && <span>Favorites</span>}</li>
          <li css={listItemStyles}>{open && <span>Items</span>}</li>
        </ul>
      </SidePanel>
    );
  }

  private onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  private handleBreakpoint = (open: boolean) => {
    this.setState({
      open: open,
    });
  };
}
```

## Static Properties

#### `OpenDirection: SidePanelOpenDirection`

```tsx
<SidePanel open={true} openDirection={SidePanel.OpenDirection.Left} />
```

#### `BackgroundColor: SidePanelBackgroundColor`

```tsx
<SidePanel open={true} backgroundColor={SidePanel.BackgroundColor.Gray} />
```

---

## Component Props

### Required

#### `open: boolean`

> Determines if the side panel is open or closed.

---

### Optional

#### `onBreakpointChange: (aboveBreakpoint: boolean) => void;`

> A function that is called when the screen size changes and reaches `breakpoint`. For example, if
> the user has their window at 1000px of width, and then resizes, this will get called when the
> window size reaches the value of the `breakpoint` prop. A boolean for whether the current window
> size is above or below the breakpoint is provided so you can control `open` based on the change.

---

#### `onToggleClick: () => void`

> Callback that handles clicking toggle button to open or close the side panel. The toggle button
> will only show if this prop is defined.

---

#### `header: string | React.ReactNode`

> Custom title or element to display as a header to the side panel.

---

#### `closeNavigationLabel: string`

> Aria label for closing the navigation

---

#### `openNavigationLabel: string`

> Aria label for opening the navigation

---

#### `backgroundColor: SidePanelBackgroundColor`

> Determines the background color of the side panel when it's `open`

`SidePanelBackgroundColor.White` or `SidePanelBackgroundColor.Gray` or
`SidePanelBackgroundColor.Transparent`

Default: `SidePanelBackgroundColor.White`

---

#### `openDirection: SidePanelOpenDirection`

> Determines from what side the side panel opens

`SidePanelOpenDirection.Left` or `SidePanelOpenDirection.Right`

Default: `SidePanelOpenDirection.Left`

---

#### `padding: CanvasSpaceValues`

> Adjust padding of the side panel when it's open.

Default: `24px`

---

#### `breakpoint: number`

> The width at which the window size must be in order for `onBreakPointChange` to fire. Default
> value based on Ipad Landscape:
> https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/

Default: `768px`

#### `openWidth: number`

> Determines the width of the side panel when it's open.

Default: `300px`
