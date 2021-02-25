/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Button} from '@workday/canvas-kit-react-button';
import {
  Popup,
  Popper,
  useCloseOnEscape,
  useCloseOnOutsideClick,
} from '@workday/canvas-kit-react-popup';

import README from '../README.md';

export default {
  title: 'Components/Popups/Popper/React',
  component: Popper,
  decorators: [withReadme(README)],
};

export * from './stories_Popper_VisualTesting';

export const PopperStory = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const onClickButton = () => setOpen(!open);
  const onClose = () => setOpen(false);

  useCloseOnOutsideClick(popupRef, onClose);
  useCloseOnEscape(popupRef, onClose);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button buttonRef={buttonRef} variant={Button.Variant.Primary} onClick={onClickButton}>
        Toggle Popup
      </Button>
      <Popper placement={'bottom'} open={open} anchorElement={buttonRef.current!} ref={popupRef}>
        <Popup width={400} heading={'Popper Example'} handleClose={onClose}>
          <h3>Welcome to your popup positioned by Popper!</h3>
        </Popup>
      </Popper>
    </div>
  );
};

PopperStory.storyName = 'Popper';
