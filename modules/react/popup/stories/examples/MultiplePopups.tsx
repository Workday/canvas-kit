import * as React from 'react';

import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {HStack} from '@workday/canvas-kit-labs-react/layout';

export const MultiplePopups = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);

  useCloseOnOutsideClick(popup2);
  useCloseOnEscape(popup2);

  return (
    <HStack spacing="s">
      <Popup model={popup1}>
        <Popup.Target>Open Popup 1</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 1">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>
              <p>Contents of Popup 1</p>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={popup2}>
        <Popup.Target>Open Popup 2</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 2">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>
              <p>Contents of Popup 2</p>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </HStack>
  );
};
