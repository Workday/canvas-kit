/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import {Button} from '@workday/canvas-kit-react-button';
import {Popper, Popup, usePopup, useCloseOnOutsideClick} from '@workday/canvas-kit-react-popup';

export default {
  title: 'Testing|React/Popups/Popup',
  component: Popup,
};

export const MultiplePopups = () => {
  const popup1 = usePopup();
  const popup2 = usePopup();

  useCloseOnOutsideClick(popup1.popperProps.ref, popup1.closePopup);
  useCloseOnOutsideClick(popup2.popperProps.ref, popup2.closePopup);

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
          Contents of Popup 2
        </Popup>
      </Popper>
    </>
  );
};
