import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {beta_Button as Button} from '@workday/canvas-kit-react-button';
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
        <Button variant={Button.Variant.Delete} onClick={this.onOpenPopupClick}>
          Delete Item
        </Button>
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
              <Button
                style={{marginRight: '16px'}}
                onClick={this.onDeleteClick}
                variant={Button.Variant.Delete}
              >
                Delete
              </Button>
              <Button onClick={this.onCancelClick} variant={Button.Variant.Secondary}>
                Cancel
              </Button>
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

  private onOpenPopupClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
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
