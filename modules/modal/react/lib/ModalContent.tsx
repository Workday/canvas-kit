import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import tabTrappingKey from 'focus-trap-js';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';

import {ModalWidth} from './Modal';

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Aria label will override aria-labelledby, it is used if there is no heading or we need custom label for popup
   */
  ariaLabel?: string;
  /**
   * The padding of the Modal. Accepts `zero`, `s`, or `l`.
   * @default PopupPadding.l
   */
  padding: PopupPadding;
  /**
   * The width of the Modal. Accepts `s` or `l`.
   * @default ModalWidth.s
   */
  width: ModalWidth;
  /**
   * The function called when the Modal is closed.
   * If this callback is provided, the Modal will have
   * an 'X' icon in the top-right corner. Without this callback, there is no 'X' icon and the Escape
   * key handling and clicking on the overlay will not do anything.
   */
  handleClose?: () => void;
  /**
   * If true, set the Modal to close when the escape key is pressed (only recommended for simple applications).
   * Accessibility specifications state modals should be closed when the escape key is pressed.
   * However, we cannot guarantee that it is safe to simply bind an event listener and close in all
   * cases. Some applications may use a Popup manager to make sure the correct popup is receiving
   * the close command. If your application uses custom popup stacking, do not set this to true.
   */
  closeOnEscape: boolean;
  /**
   * The heading of the Modal.
   */
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
  /**
   * The containing element for the Modal elements. The Modal uses
   * {@link https://reactjs.org/docs/portals.html Portals} to place the DOM elements
   * of the Modal in a different place in the DOM to prevent issues with overflowed containers.
   * When the modal is opened, `aria-hidden` will be added to siblings to hide background
   * content from assistive technology like it is visibly hidden from sighted users. This property
   * should be set to the element that the application root goes - not containing element of content.
   * This should be a sibling or higher than the header and navigation elements of the application.
   * @default document.body
   */
  container: HTMLElement;
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
  ariaLabel,
  closeOnEscape = true,
  width = ModalWidth.s,
  padding = PopupPadding.l,
  container = document.body,
  handleClose,
  children,
  firstFocusRef,
  heading,
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

  React.useEffect(() => {
    const siblings = [...((container.children as any) as HTMLElement[])].filter(
      el => el !== modalRef.current!.parentElement
    );
    const prevAriaHidden = siblings.map(el => el.getAttribute('aria-hidden'));
    siblings.forEach(el => {
      el.setAttribute('aria-hidden', 'true');
    });

    return () => {
      siblings.forEach((el, index) => {
        const prev = prevAriaHidden[index];
        if (prev) {
          el.setAttribute('aria-hidden', prev);
        } else {
          el.removeAttribute('aria-hidden');
        }
      });
    };
  }, []);

  const content = (
    <Container onClick={handleOutsideClick} {...elemProps}>
      <Popup
        popupRef={modalRef}
        width={width}
        heading={heading}
        handleClose={handleClose}
        padding={padding}
        transformOrigin={transformOrigin}
        aria-modal={true}
        ariaLabel={ariaLabel}
      >
        {children}
      </Popup>
    </Container>
  );

  return ReactDOM.createPortal(content, container);
};

export default ModalContent;
