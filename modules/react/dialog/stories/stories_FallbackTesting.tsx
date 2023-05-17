import React from 'react';
import {withSnapshotsEnabled, PopperController, customViewport} from '../../../../utils/storybook';
import {Placement} from '@workday/canvas-kit-react/popup';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export default {
  title: 'Testing/Popups/Dialog',
  component: Dialog,
  parameters: {
    viewport: {
      viewports: customViewport,
      defaultViewport: 'landscape',
    },
  },
};

export const DialogWithFallbackPlacements = withSnapshotsEnabled(() => {
  const [placement, setPlacement] = React.useState<Placement>('top');
  const [marginLeftBtn, setMarginLeftBtn] = React.useState(0);
  const [marginRightBtn, setMarginRightBtn] = React.useState(0);

  const handlePlacement = (placement: Placement) => {
    setPlacement(placement);
  };

  const handleMarginLeftBtn = (marginLeftBtn: number) => {
    setMarginLeftBtn(marginLeftBtn);
  };

  const handleMarginRightBtn = (marginLeftBtn: number) => {
    setMarginRightBtn(marginLeftBtn);
  };

  return (
    <div style={{height: 1200}} data-testid="scroll-area-fallback-placement">
      <PopperController
        marginLeftBtn={marginLeftBtn}
        marginRightBtn={marginRightBtn}
        placement={placement}
        onSetPlacement={handlePlacement}
        onSetMarginLeftBtn={handleMarginLeftBtn}
        onSetMarginRightBtn={handleMarginRightBtn}
      >
        <Flex width="100%" marginTop={240} justifyContent="center" alignItems="start">
          <Dialog>
            <Dialog.Target
              as={PrimaryButton}
              style={{marginLeft: marginLeftBtn, marginRight: marginRightBtn}}
            >
              Open for Offer
            </Dialog.Target>
            <Dialog.Popper placement={placement}>
              <Dialog.Card>
                <Dialog.CloseIcon aria-label="Close" />
                <Dialog.Heading paddingTop="m">This is dialog heading</Dialog.Heading>
                <Dialog.Body>This is dialog body.</Dialog.Body>
                <Flex gap="s" padding="xxs" marginTop="xxs">
                  <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                  <Dialog.CloseButton>Cancel</Dialog.CloseButton>
                </Flex>
              </Dialog.Card>
            </Dialog.Popper>
          </Dialog>
        </Flex>
      </PopperController>
    </div>
  );
});
