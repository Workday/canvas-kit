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
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  container: createStyles({
    gap: system.space.x4,
  }),
  card: createStyles({
    width: 400,
  }),
  flex: createStyles({
    gap: system.space.x4,
    padding: system.space.x2,
  }),
  box: createStyles({
    marginBlock: system.space.zero,
  }),
};

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

  const popupId = 'popup-test-id';
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible && model.state.stackRef.current) {
      model.state.stackRef.current.setAttribute('id', popupId);
    }
  }, [model.state.stackRef, visible]);

  return (
    <Popup model={model}>
      <Flex cs={styles.container}>
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <div aria-owns={popupId} style={{position: 'absolute'}} />
        <Popup.Popper>
          <Popup.Card cs={styles.card}>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <Box as="p" cs={styles.box}>
                Are you sure you'd like to delete the item titled 'My Item'?
              </Box>
            </Popup.Body>
            <Flex cs={styles.flex}>
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
              {/* Disabled elements should not be focusable and focus should move to the next focusable element */}
              <Popup.CloseButton disabled>Cancel</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};
