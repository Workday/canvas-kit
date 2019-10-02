/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {beta_Button as Button} from '@workday/canvas-kit-react-button';
import Modal from '..';
import README from '../README.md';

interface ModalWrapperState {
  open: boolean;
}

class ModalWrapper extends React.Component<{}, ModalWrapperState> {
  state = {
    open: false,
  };
  public render() {
    const {open} = this.state;
    return (
      <>
        <Button variant={Button.Variant.Delete} onClick={this.handleClick}>
          Delete Item
        </Button>
        <Modal
          open={open}
          width={Modal.Width.s}
          heading={'Delete Item'}
          padding={Modal.Padding.s}
          handleClose={this.handleClose}
          transformOrigin={{horizontal: 'center', vertical: 'bottom'}}
        >
          <div style={{marginBottom: '24px'}}>
            Are you sure you'd like to delete the item titled 'My Item'?
          </div>
          <Button
            style={{marginRight: '16px'}}
            onClick={this.handleSubmit}
            variant={Button.Variant.Delete}
          >
            Delete
          </Button>
          <Button onClick={this.handleSubmit} variant={Button.Variant.Secondary}>
            Cancel
          </Button>
        </Modal>
      </>
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

  private handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };
}

storiesOf('Modal', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <ModalWrapper />
    </div>
  ));
