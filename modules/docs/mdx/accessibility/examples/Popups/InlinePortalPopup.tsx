import * as React from 'react';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: px2rem(320),
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
 * Portals popup content into a sentinel div after the trigger (via PopupStack.pushStackContext)
 * so DOM reading order matches page context. Uses a two-phase open so pushStackContext runs
 * before Popper mounts and registers with the stack.
 */
export const InlinePortalPopup = () => {
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const model = usePopupModel();
  const visible = model.state.visibility !== 'hidden';
  const [portalReady, setPortalReady] = React.useState(false);

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useReturnFocus(model);

  React.useLayoutEffect(() => {
    if (visible && sentinelRef.current && !portalReady) {
      PopupStack.pushStackContext(sentinelRef.current);
      setPortalReady(true);
    }
    if (!visible && portalReady) {
      PopupStack.popStackContext(sentinelRef.current!);
      setPortalReady(false);
    }
  }, [visible, portalReady]);

  return (
    <Flex cs={layoutStyles}>
      <Flex>
        <Popup model={model}>
          <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
          <div ref={sentinelRef} />
          {visible && portalReady ? (
            <Popup.Popper placement="top">
              <Popup.Card cs={cardStyles}>
                <Popup.Heading>Delete Item</Popup.Heading>
                <Popup.Body>
                  <Box as="p">
                    Are you sure you'd like to delete the item titled &apos;My Item&apos;?
                  </Box>
                </Popup.Body>
                <Flex cs={flexStyles}>
                  <Popup.CloseButton>Cancel</Popup.CloseButton>
                  <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
                </Flex>
              </Popup.Card>
            </Popup.Popper>
          ) : null}
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
