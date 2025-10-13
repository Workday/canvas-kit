import * as React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  useReturnFocus,
  usePopupModel,
  useCloseOnFullscreenExit,
  useTransferOnFullscreenExit,
  useTransferOnFullscreenEnter,
} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useIsFullscreen} from '@workday/canvas-kit-react/common';
import screenfull from 'screenfull';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: 400,
  padding: system.space.x4,
});

const SelfClosePopup = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useCloseOnFullscreenExit(model);

  return (
    <Popup model={model}>
      <Popup.Target>Open Self-close Popup</Popup.Target>
      <Popup.Popper>
        <Popup.Card cs={cardStyles}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Self-close Popup</Popup.Heading>
          <Popup.Body>
            <p>
              When in fullscreen, the escape key will be highjacked by the browser to exit
              fullscreen and <code>useCloseOnEscape</code> hook will not receive the escape key. To
              close when fullscreen is exited, use the <code>useCloseOnFullscreenExit</code> hook.
            </p>
          </Popup.Body>
          <Popup.CloseButton>Close</Popup.CloseButton>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

const TransferClosePopup = () => {
  const model = usePopupModel();

  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useTransferOnFullscreenEnter(model);
  useTransferOnFullscreenExit(model);

  return (
    <Popup model={model}>
      <Popup.Target>Open Transfer Popup</Popup.Target>
      <Popup.Popper>
        <Popup.Card cs={cardStyles}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Transfer Popup</Popup.Heading>
          <Popup.Body>
            <p>
              When in fullscreen, the escape key will be highjacked by the browser to exit
              fullscreen and <code>useCloseOnEscape</code> hook will not receive the escape key. To
              close when fullscreen is exited, use the <code>useTransferOnFullscreenExit</code>{' '}
              hook.
            </p>
          </Popup.Body>
          <Popup.CloseButton>Close</Popup.CloseButton>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

const styles = {
  container: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
  }),
  flex: createStyles({
    gap: system.space.x4,
  }),
};

export const FullScreen = () => {
  // you could make this a hook depending on which fullscreen library your application uses
  const fullscreenElementRef = React.useRef<HTMLDivElement>();
  const isFullscreen = useIsFullscreen();

  const enterFullScreen = () => {
    screenfull.request(fullscreenElementRef.current);
  };

  const exitFullscreen = () => {
    screenfull.exit();
  };

  return (
    <>
      <SecondaryButton onClick={enterFullScreen}>Open Fullscreen</SecondaryButton>
      <Flex ref={fullscreenElementRef} cs={styles.container}>
        <Flex cs={styles.flex}>
          <SelfClosePopup />
          <TransferClosePopup />
          {isFullscreen ? (
            <SecondaryButton onClick={exitFullscreen}>Exit fullscreen</SecondaryButton>
          ) : null}
        </Flex>
      </Flex>
    </>
  );
};
