/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button, DeleteButton} from '@workday/canvas-kit-react-button';
import {Popper} from '@workday/canvas-kit-react-common';
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
        <DeleteButton onClick={this.handleClick}>Delete Item</DeleteButton>
        <Popper placement={'bottom'} open={open} anchorElement={anchorEl}>
          <Popup
            width={400}
            heading={'Delete Item'}
            padding={Popup.Padding.s}
            handleClose={this.handleClose}
          >
            <div style={{marginBottom: '24px'}}>
              Are you sure you'd like to delete the item titled 'My Item'?
            </div>

            <DeleteButton style={{marginRight: '16px'}} onClick={this.handleSubmit}>
              Delete
            </DeleteButton>
            <Button onClick={this.handleSubmit}>Cancel</Button>
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

storiesOf('Components|Popups/Popup/React', module)
  .addParameters({component: Popup})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <PopupWrapper />
    </div>
  ))
  .add(
    'Open',
    () => (
      <Popup width={400} heading={'Delete Item'} padding={Popup.Padding.s} handleClose={() => null}>
        <div style={{marginBottom: '24px'}}>
          Are you sure you'd like to delete the item titled 'My Item'?
        </div>

        <DeleteButton style={{marginRight: '16px'}} onClick={() => null}>
          Delete
        </DeleteButton>
        <Button onClick={() => null}>Cancel</Button>
      </Popup>
    ),
    {
      chromatic: {
        viewports: [320],
        pauseAnimationAtEnd: true,
      },
    }
  );
