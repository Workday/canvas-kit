/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Popper from '@material-ui/core/Popper';
import {xIcon} from '@workday/canvas-system-icons-web';

import {IconButton} from '../../../button/react/index';
import Tooltip from '../index';
import README from '../README.md';

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
        <h3>Hover over the icon.</h3>
        <div
          style={{display: 'inline-flex'}}
          ref={this.tooltipRef}
          onMouseEnter={this.open}
          onMouseLeave={this.close}
          onFocus={this.open}
          onBlur={this.close}
        >
          <IconButton buttonType={IconButton.Types.Circle} icon={xIcon} aria-labelledBy={'123'} />
        </div>
        <Popper open={open} anchorEl={this.state.anchorEl} placement={'top'}>
          <Tooltip id={'123'}>Close</Tooltip>
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

storiesOf('Tooltip', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <TooltipWrapper />
    </div>
  ));
