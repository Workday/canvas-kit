import * as React from 'react';

import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
  usePopupCloseButton,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Button} from '@workday/canvas-kit-react/button';

export const NestedPopups = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);
  useInitialFocus(popup1);
  useReturnFocus(popup1);

  useCloseOnOutsideClick(popup2);
  useCloseOnEscape(popup2);
  useInitialFocus(popup2);
  useReturnFocus(popup2);

  const closeBothProps = usePopupCloseButton(popup1, usePopupCloseButton(popup2));

  return (
    <>
      <Popup model={popup1}>
        <Popup.Target>Open Popup 1</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 1">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>
              <p>Contents of Popup 1</p>
              <Popup model={popup2}>
                <Popup.Target>Open Popup 2</Popup.Target>
                <Popup.Popper>
                  <Popup.Card aria-label="Popup 2">
                    <Popup.CloseIcon aria-label="Close" size="small" />
                    <Popup.Body>
                      <p>Contents of Popup 2</p>
                      <Popup.CloseButton as={Popup.CloseButton} model={popup1}>
                        Close Both (as)
                      </Popup.CloseButton>
                      <Button {...closeBothProps}>Close Both (props)</Button>
                    </Popup.Body>
                  </Popup.Card>
                </Popup.Popper>
              </Popup>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </>
  );
};
