import React from 'react';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Popup.Card width={400}>
        <Popup.CloseIcon aria-label="סגור" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>
          <Box as="p" marginY="zero">
            האם ברצונך למחוק פריט זה
          </Box>
        </Popup.Body>
        <Flex gap="s" padding="xxs">
          <DeleteButton>לִמְחוֹק</DeleteButton>
          <SecondaryButton>לְבַטֵל</SecondaryButton>
        </Flex>
      </Popup.Card>
    </CanvasProvider>
  );
};
