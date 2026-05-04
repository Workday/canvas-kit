import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Popup.Card cs={{width: px2rem(400)}}>
        <Popup.CloseIcon aria-label="סגור" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>
          <Box as="p" cs={{marginBlock: '0'}}>
            האם ברצונך למחוק פריט זה
          </Box>
        </Popup.Body>
        <Flex cs={{gap: system.gap.sm, paddingBlock: system.padding.xxs}}>
          <DeleteButton>לִמְחוֹק</DeleteButton>
          <SecondaryButton>לְבַטֵל</SecondaryButton>
        </Flex>
      </Popup.Card>
    </CanvasProvider>
  );
};
