/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import {Button} from '@workday/canvas-kit-react-button';
import {Popper, Popup, usePopup, useCloseOnOutsideClick} from '@workday/canvas-kit-react-popup';

export default {
  title: 'Testing/React/Popups/Popup',
  component: Popup,
};

export * from './stories_VisualTesting';

export const MultiplePopups = () => {
  const popup1 = usePopup();
  const popup2 = usePopup();
  const popup3 = usePopup();

  useCloseOnOutsideClick(popup1.stackRef, popup1.closePopup);
  useCloseOnOutsideClick(popup2.stackRef, popup2.closePopup);

  return (
    <>
      <Button {...popup1.targetProps}>Open Popup 1</Button>
      <Popper {...popup1.popperProps}>
        <Popup heading="Popup 1" handleClose={popup1.closePopup}>
          Contents of Popup 1
        </Popup>
      </Popper>
      <Button {...popup2.targetProps}>Open Popup 2</Button>
      <Popper {...popup2.popperProps}>
        <Popup heading="Popup 2" handleClose={popup2.closePopup}>
          Contents of Popup 2<Button {...popup3.targetProps}>Open Popup 3</Button>
        </Popup>
      </Popper>
      <Popper {...popup3.popperProps}>
        <Popup heading="Popup 3 (Not hidable on outside click)" handleClose={popup3.closePopup}>
          Contents of Popup 3
        </Popup>
      </Popper>
    </>
  );
};
