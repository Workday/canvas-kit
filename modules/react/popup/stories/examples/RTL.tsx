import React from 'react';

import {SecondaryButton, DeleteButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

export const RTL = () => {
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Popup.Card width={400} padding="s">
        <Popup.CloseIcon aria-label="סגור" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>
          <p style={{marginBottom: '24px'}}>האם ברצונך למחוק פריט זה</p>
          <DeleteButton style={{marginLeft: '16px'}}>לִמְחוֹק</DeleteButton>
          <SecondaryButton>לְבַטֵל</SecondaryButton>
        </Popup.Body>
      </Popup.Card>
    </CanvasProvider>
  );
};
