import React from 'react';

import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  Popup,
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

export const InitialFocus = () => {
  const initialFocusRef = React.useRef(null);
  const model = usePopupModel({
    initialFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Popup.Target>Send Message</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card width={400}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Confirmation</Popup.Heading>
          <Popup.Body>
            <Box as="p" marginY="zero" id="popup-message">
              Your message has been sent!
            </Box>
          </Popup.Body>
          <Flex gap="s" padding="xxs">
            <Popup.CloseButton ref={initialFocusRef} aria-describedby="popup-message">
              OK
            </Popup.CloseButton>
          </Flex>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
