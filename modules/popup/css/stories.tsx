import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {Button} from '@workday/canvas-kit-react-button';
import {xIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react';
import './index.scss';

interface PopupWrapperState {
  open: boolean;
}

class PopupWrapper extends React.Component<{}, PopupWrapperState> {
  state = {
    open: false,
  };
  public render() {
    const {open} = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className="wdc-popup-container">
          <Button buttonType={Button.Types.Delete} onClick={this.handleClick}>
            Delete Item
          </Button>
          {open ? (
            <div className="wdc-popup wdc-popup-animation-origin-top-center wdc-depth-2">
              <div className="wdc-popup-close">
                <button className="wdc-btn-icon-circle">
                  <SystemIcon icon={xIcon} />
                </button>
              </div>
              <h3 className="wdc-popup-title">Delete Item</h3>
              <div style={{marginBottom: '24px'}} className="wdc-popup-body">
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
            </div>
          ) : null}
        </div>
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
    this.setState({
      open: !this.state.open,
    });
  };
}

storiesOf('CSS/Popup', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <PopupWrapper />
    </div>
  ));
