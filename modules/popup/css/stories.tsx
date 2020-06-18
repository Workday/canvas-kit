import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import '@workday/canvas-kit-css-button/index.scss';
import './index.scss';
// @ts-ignore
import initializeIcons from '../../icon/css/lib/canvas-kit-css-icon';

interface PopupWrapperState {
  open: boolean;
}

class PopupWrapper extends React.Component<{}, PopupWrapperState> {
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <button className="wdc-btn wdc-btn-delete" onClick={this.onOpenPopupClick}>
          Delete Item
        </button>
        {open ? (
          <div
            className="wdc-popup wdc-popup-padding-s wdc-popup-animation-origin-top-center"
            style={{
              position: 'absolute',
              width: '400px',
              top: '40px',
            }}
            role="dialog"
            aria-labelledby="popup-heading"
          >
            <div className="wdc-popup-close">
              <button onClick={this.onCloseClick} className="wdc-btn-icon-plain" aria-label="Close">
                <i className="wdc-icon" data-icon="x" data-category="system" />
              </button>
            </div>
            <h3 className="wdc-popup-heading" id="popup-heading">
              Delete Item
            </h3>
            <div style={{marginBottom: '24px'}} className="wdc-popup-body">
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
        ) : null}
      </div>
    );
  }

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

storiesOf('Components|Popups/Popup/CSS', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <PopupWrapper />
    </div>
  ));
