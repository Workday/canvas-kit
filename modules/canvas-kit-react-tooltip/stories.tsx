/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Popper from '@material-ui/core/Popper';
import {IconButton} from '@workday/canvas-kit-react-button';
import {xIcon} from '@workday/canvas-system-icons-web';

import Tooltip from './index'; // tslint:disable-line:import-name
import README from './README.md';

interface TooltipWrapperState {
  open: boolean;
  anchorEl: HTMLElement | null;
}

class TooltipWrapper extends React.Component<{}, TooltipWrapperState> {
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
        <h3>Hover on the icon</h3>
        <div
          style={{display: 'inline-flex'}}
          ref={this.tooltipRef}
          onMouseEnter={this.open}
          onMouseLeave={this.close}
          onFocus={this.open}
          onBlur={this.close}
        >
          <IconButton buttonType={IconButton.Types.Default} icon={xIcon} />
        </div>
        <Popper open={open} anchorEl={this.state.anchorEl} placement={'top'}>
          <Tooltip>Close</Tooltip>
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

storiesOf('Canvas Kit/Tooltip', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Tooltip</h1>
      <TooltipWrapper />
    </div>
  ));
