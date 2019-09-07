import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {Button} from '@workday/canvas-kit-react-button';
import {xIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react';
import {css} from 'emotion';
import {CSSObject} from 'create-emotion';
import './index.scss';

interface PopupWrapperState {
  open: boolean;
}

const popupStoryContainer: CSSObject = {
  position: 'absolute',
  width: '50%',
};

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
        <div className={css(popupStoryContainer)}>
          <Button buttonType={Button.Types.Delete} onClick={this.onOpenPopupClick}>
            Delete Item
          </Button>
          {open ? (
            <div className="wdc-popup wdc-popup-animation-origin-top-left wdc-depth-2">
              <div className="wdc-popup-close">
                <button onClick={this.onCloseClick} className="wdc-btn-icon-plain">
                  <SystemIcon icon={xIcon} />
                </button>
              </div>
              <h3 className="wdc-popup-title">Delete Item</h3>
              <div style={{marginBottom: '24px'}} className="wdc-popup-body">
                Are you sure you'd like to delete the item titled 'My Item'?
              </div>
              <Button
                style={{marginRight: '16px'}}
                onClick={this.onDeleteClick}
                buttonType={Button.Types.Delete}
              >
                Delete
              </Button>
              <Button onClick={this.onCancelClick} buttonType={Button.Types.Secondary}>
                Cancel
              </Button>
            </div>
          ) : null}
        </div>
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

  private onOpenPopupClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
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
