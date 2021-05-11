import React from 'react';
import {
  Button,
  DeleteButton,
  Popper,
  Popup,
  usePopup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react';

export const UsePopup = () => {
  const {targetProps, closePopup, popperProps, model} = usePopup();

  // popup traits
  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Popper placement={'bottom'} {...popperProps}>
        <Popup.Card width={400} padding={Popup.Padding.s}>
          <Popup.CloseIcon onClick={closePopup} aria-label="Close" />
          <Popup.Heading>{'Delete Item'}</Popup.Heading>
          <Popup.Body>
            <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
            <DeleteButton style={{marginRight: '16px'}} onClick={closePopup}>
              Delete
            </DeleteButton>
            <Button onClick={closePopup}>Cancel</Button>
          </Popup.Body>
        </Popup.Card>
      </Popper>
    </>
  );
};
