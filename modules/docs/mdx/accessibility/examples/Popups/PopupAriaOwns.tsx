import * as React from 'react';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useReturnFocus,
  useFocusRedirect,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {useUniqueId} from '@workday/canvas-kit-react/common';

const cardStyles = createStyles({
  width: px2rem(400),
});

const bodyStyles = createStyles({
  marginY: system.space.zero,
});

const flexStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x2,
});

const layoutStyles = createStyles({
  gap: system.space.x4,
  alignItems: 'flex-start',
  flexDirection: 'column',
});

/**
 * Default portal to body; sibling div with aria-owns references the portaled stack container
 * so screen readers that support aria-owns can present content in logical order.
 * useFocusRedirect manages keyboard focus in/out (content is not in DOM order for Tab).
 */
export const PopupAriaOwns = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  const popupId = useUniqueId();
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible && model.state.stackRef.current) {
      model.state.stackRef.current.setAttribute('id', popupId);
    }
  }, [model.state.stackRef, visible, popupId]);

  return (
    <Flex cs={layoutStyles}>
      <Flex>
        <Popup model={model}>
          <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
          <div aria-owns={popupId} style={{position: 'absolute'}} />
          <Popup.Popper>
            <Popup.Card cs={cardStyles}>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading>Delete Item</Popup.Heading>
              <Popup.Body>
                <Box as="p" cs={bodyStyles}>
                  Are you sure you'd like to delete the item titled &apos;My Item&apos;?
                </Box>
              </Popup.Body>
              <Flex cs={flexStyles}>
                <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
              </Flex>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </Flex>
      <p>
        This content should come after the popup in the reading order. When someone uses a screen
        reader or moves through the page with tabbing, they will read or reach this content only
        after the popup content is shown. This helps keep the page easy to follow and makes sure
        that the popup is announced before any information that comes next.
      </p>
    </Flex>
  );
};
