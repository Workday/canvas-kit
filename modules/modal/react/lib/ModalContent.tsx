import * as React from 'react';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import tabTrappingKey from 'focus-trap-js';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';

import {ModalWidth} from './Modal';

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padding: PopupPadding;
  width: ModalWidth;
  /**
   * Optional callback for the Modal handling closing. If this callback is provided the Modal will have
   * an 'X' icon in the top-right corner. Without this callback, there is no 'X' icon and the Escape
   * key handling and clicking on the overlay will not do anything.
   */
  handleClose?: () => void;
  /**
   * Accessibility specifications state modals should be closed when the escape key is pressed.
   * However, we cannot guarantee that it is safe to simply bind an event listener and close in all
   * cases. Some applications may use a Popup manager to make sure the correct popup is receiving
   * the close command. If your application uses custom popup stacking, do not set this to true.
   * Set this to true for simple applications and the modal will close when the escape key is pressed.
   */
  closeOnEscape: boolean;
  heading: React.ReactNode;
  /**
   * Optional override of the auto-select functionality of the Modal. If this ref is defined, that element
   * will receive focus when the modal is opened. There are many suggestions to what that element should
   * be. Contact an accessibility specialist or go through the https://www.w3.org/TR/wai-aria-practices/
   * document for instances where this might be useful. Make sure this is a focusable ref, like a button.
   * If you're unsure, don't define this and leave it to the default behavior.
   * If this ref is not provided the modal will try to use the close icon. If that icon is not available,
   * it will make the modal heading focusable and focus on that instead.
   */
  firstFocusRef?: React.RefObject<HTMLElement>;
}

const fadeIn = keyframes`
  from {
    background: none;
  }
  to {
    background: rgba(0,0,0,0.65);
  }
`;

const Container = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.65)',
  animationName: `${fadeIn}`,
  animationDuration: '0.3s',
  zIndex: 1,
});

const transformOrigin = {
  horizontal: 'center',
  vertical: 'bottom',
} as const;

function getFirstElementToFocus(modalEl: HTMLElement): HTMLElement {
  const firstFocusable = modalEl.querySelector<HTMLElement>(
    `[data-close=close],[id="${modalEl.getAttribute('aria-labelledby')}"]`
  );
  if (firstFocusable) {
    if (firstFocusable.tagName === 'H3') {
      // If there is no close icon, we need to transfer focus to the header.
      // Setting tabIndex allows the header to be focusable.
      // We do the header instead of the next focusable element to prevent useful context from being skipped
      firstFocusable.tabIndex = 0;
      firstFocusable.style.outline = 'none';

      const changeTabIndex = () => {
        // We no longer need to focus on the header after it loses focus
        // We simply want to transfer focus inside
        firstFocusable.removeEventListener('blur', changeTabIndex);
        // We must wait one frame to ensure tabbable checks are satisfied
        // by all focus libraries...
        requestAnimationFrame(() => {
          firstFocusable.removeAttribute('tabIndex');
        });
      };
      firstFocusable.addEventListener('blur', changeTabIndex);
    }
    return firstFocusable;
  } else {
    throw new Error(
      'No focusable element was found. Please ensure modal has at least one focusable element'
    );
  }
}

const useKeyDownListener = (handleKeydown: EventListenerOrEventListenerObject) => {
  // `useLayoutEffect` for automation
  React.useLayoutEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);
};

const useInitialFocus = (
  modalRef: React.RefObject<HTMLElement>,
  firstFocusRef: React.RefObject<HTMLElement> | undefined
) => {
  const handlerRef = document.activeElement instanceof HTMLElement ? document.activeElement : null;

  React.useLayoutEffect(() => {
    if (modalRef.current) {
      const elem =
        (firstFocusRef && firstFocusRef.current) || getFirstElementToFocus(modalRef.current);
      elem.focus();
    }
    return () => {
      if (handlerRef) {
        handlerRef.focus();
      }
    };
  }, [modalRef, firstFocusRef]);
};

const ModalContent = ({
  handleClose,
  children,
  closeOnEscape,
  firstFocusRef,
  width,
  heading,
  padding,
  ...elemProps
}: ModalContentProps): JSX.Element => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleKeydown = (event: KeyboardEvent) => {
    if (modalRef.current) {
      tabTrappingKey(event, modalRef.current);
    }

    if (closeOnEscape && handleClose && (event.key === 'Esc' || event.key === 'Escape')) {
      handleClose();
    }
  };

  useKeyDownListener(handleKeydown);
  useInitialFocus(modalRef, firstFocusRef);

  const handleOutsideClick = ({target}: React.MouseEvent<HTMLDivElement>) => {
    const modalEl = modalRef.current;

    if (modalEl && !modalEl.contains(target as Node) && handleClose) {
      handleClose();
    }
  };

  return (
    <Container onClick={handleOutsideClick} {...elemProps}>
      <Popup
        popupRef={modalRef}
        width={width}
        heading={heading}
        handleClose={handleClose}
        padding={padding}
        transformOrigin={transformOrigin}
      >
        {children}
      </Popup>
    </Container>
  );
};

export default ModalContent;
