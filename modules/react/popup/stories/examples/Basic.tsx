import React from 'react';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {HStack} from '@workday/canvas-kit-react/layout';
import {useFocusRedirect} from '../../lib/hooks';

export const Basic = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  return (
    <>
      <Popup model={model}>
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <Popup.Popper placement="bottom">
          <Popup.Card width={400} padding="s">
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
              <HStack spacing="s">
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
                <Popup.CloseButton disabled>Cancel</Popup.CloseButton>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete again
                </Popup.CloseButton>
              </HStack>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <div style={{marginTop: '300px'}}>
        <button>Test</button>
      </div>
    </>
  );
};
