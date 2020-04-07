import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import '@workday/canvas-kit-css-button/index.scss';
import './index.scss';
// @ts-ignore
import initializeIcons from '../../icon/css/lib/canvas-kit-css-icon';

interface ModalWrapperState {
  open: boolean;
}

class ModalWrapper extends React.Component<{}, ModalWrapperState> {
  state = {
    open: false,
  };

  public componentDidMount() {
    initializeIcons();
  }

  public componentDidUpdate() {
    initializeIcons();
  }

  public render() {
    const {open} = this.state;
    return (
      <div>
        <button className="wdc-btn wdc-btn-delete" onClick={this.onOpenPopupClick}>
          Delete Item
        </button>
        {open ? (
          <div className="wdc-modal-bg" onClick={this.onOverlayClick}>
            <div
              className="wdc-modal wdc-modal-padding-s"
              style={{width: '440px'}}
              role="dialog"
              aria-labelledby="modal-heading"
            >
              <div className="wdc-modal-close">
                <button
                  onClick={this.onCloseClick}
                  className="wdc-btn-icon-plain"
                  aria-label="Close"
                >
                  <i className="wdc-icon" data-icon="x" data-category="system" />
                </button>
              </div>
              <h3 className="wdc-modal-heading" id="modal-heading">
                Delete Item
              </h3>
              <div style={{marginBottom: '24px'}} className="wdc-modal-body">
                Are you sure you'd like to delete the item titled 'My Item'?
              </div>
              <button
                className="wdc-btn wdc-btn-delete"
                onClick={this.onDeleteClick}
                style={{marginRight: '16px'}}
              >
                Delete Item
              </button>
              <button className="wdc-btn" onClick={this.onCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  private onOverlayClick = () => {
    this.setState({
      open: false,
    });
  };

  private onCloseClick = () => {
    this.setState({
      open: false,
    });
  };

  private onDeleteClick = () => {
    this.setState({
      open: false,
    });
  };

  private onCancelClick = () => {
    this.setState({
      open: false,
    });
  };

  private onOpenPopupClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };
}

storiesOf('Components|Popups/Modal/CSS', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <ModalWrapper />
    </div>
  ));
