import * as React from 'react';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
  useFocusRedirect,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {useUniqueId} from '@workday/canvas-kit-react/common';

const cardStyles = createStyles({
  width: px2rem(400),
});

const bodyStyles = createStyles({
  marginY: system.space.zero,
});

const flexStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x2,
});

export const FocusRedirect = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  const popupId = useUniqueId();
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible && model.state.stackRef.current) {
      model.state.stackRef.current.setAttribute('id', popupId);
    }
  }, [model.state.stackRef, visible, popupId]);

  return (
    <Popup model={model}>
      <Flex cs={flexStyles}>
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <div aria-owns={popupId} style={{position: 'absolute'}}></div>
        <Popup.Popper>
          <Popup.Card cs={cardStyles}>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <Box as="p" cs={bodyStyles}>
                Are you sure you'd like to delete the item titled 'My Item'?
              </Box>
            </Popup.Body>
            <Flex cs={flexStyles}>
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
              <Popup.CloseButton>Cancel</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};
