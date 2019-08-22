/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Popper from '@material-ui/core/Popper';

import {beta_Button as Button} from '@workday/canvas-kit-react-button';
import {Popup} from '../index';
import README from '../README.md';

interface PopupWrapperState {
  open: boolean;
  anchorEl: HTMLElement | null;
}

class PopupWrapper extends React.Component<{}, PopupWrapperState> {
  state = {
    open: false,
    anchorEl: null,
  };
  public render() {
    const {anchorEl, open} = this.state;
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button buttonType={Button.Types.Delete} onClick={this.handleClick}>
          Delete Item
        </Button>
        <Popper placement={'bottom'} open={open} anchorEl={anchorEl}>
          <Popup
            width={400}
            heading={'Delete Item'}
            padding={Popup.Padding.s}
            handleClose={this.handleClose}
          >
            <div style={{marginBottom: '24px'}}>
              Are you sure you'd like to delete the item titled 'My Item'?
            </div>

            <Button
              style={{marginRight: '16px'}}
              onClick={this.handleSubmit}
              buttonType={Button.Types.Delete}
            >
              Delete
            </Button>
            <Button onClick={this.handleSubmit} buttonType={Button.Types.Secondary}>
              Cancel
            </Button>
          </Popup>
        </Popper>
      </div>
    );
  }

  private handleClose = () => {
    this.setState({
      open: false,
    });
  };

  private handleSubmit = () => {
    this.setState({
      open: false,
    });
  };

  private handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const {currentTarget} = e;
    this.setState({
      anchorEl: currentTarget,
      open: !this.state.open,
    });
  };
}

storiesOf('Popup', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <PopupWrapper />
    </div>
  ));
