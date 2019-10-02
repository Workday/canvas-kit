# Canvas Kit Tooltip

A Tooltip component that renders information/text when the user hovers over an element.

Note: This Tooltip does not include a positioning engine. In our example we use Material UIs popper
component to wrap our Tooltip component and position it, which is a wrapper to Popper.js. For
reference: https://material-ui.com/api/popper/

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-tooltip
```

## Usage

```tsx
import * as React from 'react';
import Popper from '@material-ui/core/Popper';
import Tooltip from '@workday/canvas-kit-react-tooltip';

class TooltipExample extends React.Component<{}, TooltipExampleState> {
  private tooltipRef: React.RefObject<HTMLDivElement>;
  public constructor(props: {}) {
    super(props);
    this.tooltipRef = React.createRef();
    this.state = {
      open: false,
      anchorEl: null,
    };
  }

  public render() {
    const {open} = this.state;
    return (
      <div>
        <div
          style={{display: 'inline-flex'}}
          ref={this.tooltipRef}
          onMouseEnter={this.open}
          onMouseLeave={this.close}
          onFocus={this.open}
          onBlur={this.close}
          aria-labelledby={'tooltip-id'}
          tabIndex={0}
        >
          Hover Over Me
        </div>
        <Popper open={open} anchorEl={this.state.anchorEl} placement={'bottom'}>
          <Tooltip id={'tooltip-id'}>Close</Tooltip>
        </Popper>
      </div>
    );
  }

  private close = () => {
    this.setState({
      open: false,
    });
  };

  private open = () => {
    this.setState({
      open: true,
      anchorEl: this.tooltipRef.current,
    });
  };
}
```

## Static Properties

> None

## Component Props

### Required

> None

---

### Optional

#### `transformOrigin: TransformOrigin`

> Origin from which the popup will animate from

Default:

```js
{
  horizontal: 'center',
  vertical: 'top',
}
```

#### `id: string`

> Unique id of the tooltip
