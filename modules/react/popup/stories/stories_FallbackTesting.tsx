import React from 'react';
import {withSnapshotsEnabled, PopperController} from '../../../../utils/storybook';
import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
  Placement,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

const customViewports = {
  noAvailable: {
    name: 'No Available space',
    styles: {
      width: '300px',
      height: '300px',
    },
  },
  default: {
    name: 'Initial viewport',
    styles: {
      width: '500px',
      height: '700px',
    },
  },
};

export default {
  title: 'Testing/Popups/Popup',
  component: Popup,
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: 'default',
    },
  },
};

export const FallbackPlacements = withSnapshotsEnabled(() => {
  const [placement, setPlacement] = React.useState<Placement>('top');
  const [marginLeftBtn, setMarginLeftBtn] = React.useState(0);
  const [marginRightBtn, setMarginRightBtn] = React.useState(0);
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

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
        <div
          style={{
            width: '100%',
            marginTop: 280,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          <Popup model={model}>
            <Popup.Target
              as={DeleteButton}
              style={{marginLeft: marginLeftBtn, marginRight: marginRightBtn}}
            >
              Delete Item
            </Popup.Target>
            <Popup.Popper placement={placement}>
              <Popup.Card width={400}>
                <Popup.CloseIcon aria-label="Close" />
                <Popup.Heading>Delete Item</Popup.Heading>
                <Popup.Body>
                  <Box as="p" marginY="zero">
                    Are you sure you'd like to delete the item titled 'My Item'?
                  </Box>
                </Popup.Body>
                <Flex gap="s" padding="xxs" marginTop="xxs">
                  <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                    Delete
                  </Popup.CloseButton>
                  <Popup.CloseButton>Cancel</Popup.CloseButton>
                </Flex>
              </Popup.Card>
            </Popup.Popper>
          </Popup>
        </div>
      </PopperController>
    </div>
  );
});
