/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {
  Popper,
  Popup,
  usePopup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
} from '@workday/canvas-kit-react/popup';

import README from '../README.md';

export default {
  title: 'Components/Popups/Popup/React/Old',
  component: Popup,
  decorators: [withReadme(README)],
};

export const Default = () => {
  const {targetProps, closePopup, popperProps, stackRef, model} = usePopup();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Popper placement={'bottom'} {...popperProps}>
        <Popup.Card width={400} padding={Popup.Padding.s}>
          <Popup.CloseIcon onClick={closePopup} aria-label="Close" />
          <Popup.Heading>{'Delete Item'}</Popup.Heading>
          <Popup.Body>
            <div style={{marginBottom: '24px'}}>
              Are you sure you'd like to delete the item titled 'My Item'?
            </div>
            <DeleteButton style={{marginRight: '16px'}} onClick={closePopup}>
              Delete
            </DeleteButton>
            <SecondaryButton onClick={closePopup}>Cancel</SecondaryButton>
          </Popup.Body>
        </Popup.Card>
      </Popper>
    </div>
  );
};

export const RTL = () => {
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Popup.Card width={400} padding={Popup.Padding.s}>
        <Popup.CloseIcon onClick={() => null} aria-label="Close" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>
          <div style={{marginBottom: '24px'}}>האם ברצונך למחוק פריט זה</div>
          <DeleteButton style={{marginLeft: '16px'}} onClick={() => null}>
            לִמְחוֹק
          </DeleteButton>
          <SecondaryButton onClick={() => null}>לְבַטֵל</SecondaryButton>
        </Popup.Body>
      </Popup.Card>
    </CanvasProvider>
  );
};
