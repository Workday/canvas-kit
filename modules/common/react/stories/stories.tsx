/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {beta_Button as Button} from '../../../button/react/index';
import {Popup} from '../../../popup/react/index';
import {OutsideEventListener, Popper} from '../index';
import README from '../README.md';

interface PopperPopupState {
  open: boolean;
}

class PopperPopup extends React.Component<{}, PopperPopupState> {
  private buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

  public state: PopperPopupState = {
    open: false,
  };

  public render() {
    const {open} = this.state;

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button
          buttonRef={this.buttonRef}
          buttonType={Button.Types.Primary}
          onClick={this.handleClick}
        >
          Toggle Popup
        </Button>
        <Popper placement={'bottom'} open={open} anchorElement={this.buttonRef.current!}>
          <Popup width={400} heading={'Popper Example'} handleClose={this.handleClose}>
            <h3>Welcome to your popup positioned by Popper!</h3>
          </Popup>
        </Popper>
      </div>
    );
  }

  private handleClose = () => {
    this.setState({open: false});
  };

  private handleClick = () => {
    this.setState({open: !this.state.open});
  };
}

class OutsideEventHandlerPopup extends React.Component {
  private buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

  public state: PopperPopupState = {
    open: false,
  };

  public render() {
    const {open} = this.state;

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <OutsideEventListener onOutsideClick={this.closePopup} onEscape={this.closePopup}>
          <div onClick={() => console.log('I still work!')}>
            <Button
              buttonRef={this.buttonRef}
              buttonType={Button.Types.Primary}
              onClick={this.handleClick}
            >
              Open Popup
            </Button>
            <Popper placement={'bottom'} open={open} anchorElement={this.buttonRef.current!}>
              <Popup width={400} heading={'Example'}>
                <div>Press Escape or click outside to close.</div>
              </Popup>
            </Popper>
          </div>
        </OutsideEventListener>
      </div>
    );
  }

  private closePopup = () => {
    this.setState({open: false});
  };

  private handleClick = () => {
    this.setState({open: true});
  };
}

storiesOf('Common', module)
  .addDecorator(withReadme(README))
  .add('Popper', () => (
    <div className="story">
      <PopperPopup />
    </div>
  ))
  .add('OutsideEventHandler', () => (
    <div className="story">
      <h1 className="section-label">OutsideEventHandler</h1>
      <OutsideEventHandlerPopup />
    </div>
  ));
