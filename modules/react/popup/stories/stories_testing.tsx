/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';

export default {
  title: 'Testing/React/Popups/Popup',
  component: Popup,
};

export * from './stories_VisualTesting';

export const MultiplePopups = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);

  useCloseOnOutsideClick(popup2);
  useCloseOnEscape(popup2);

  return (
    <>
      <Popup model={popup1}>
        <Popup.Target>Open Popup 1</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 1">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>Contents of Popup 1</Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={popup2}>
        <Popup.Target>Open Popup 2</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 2">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>Contents of Popup 2</Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </>
  );
};
