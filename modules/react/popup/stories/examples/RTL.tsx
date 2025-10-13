import React from 'react';

import {SecondaryButton, DeleteButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: 400,
});

const flexStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x2,
});

const boxStyles = createStyles({
  marginBlock: system.space.zero,
});

export const RTL = () => {
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Popup.Card cs={cardStyles}>
        <Popup.CloseIcon aria-label="סגור" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>
          <Box as="p" cs={boxStyles}>
            האם ברצונך למחוק פריט זה
          </Box>
        </Popup.Body>
        <Flex cs={flexStyles}>
          <DeleteButton>לִמְחוֹק</DeleteButton>
          <SecondaryButton>לְבַטֵל</SecondaryButton>
        </Flex>
      </Popup.Card>
    </CanvasProvider>
  );
};
