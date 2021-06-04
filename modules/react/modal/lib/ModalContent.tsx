import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import {
  Popup,
  usePopupStack,
  useCloseOnEscape,
  useAssistiveHideSiblings,
  useFocusTrap,
  useInitialFocus,
  PopupModel,
  useDisableBodyScroll,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {PopupStack} from '@workday/canvas-kit-popup-stack';
import {changeFocus, ExtractProps, useMount} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';

import {ModalWidth} from './Modal';

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Aria label will override aria-labelledby, it is used if there is no heading or we need custom label for popup
   */
  ariaLabel?: string;
  /**
   * The padding of the Modal. Accepts `zero`, `s`, or `l`.
   * @default 'l'
   */
  padding?: ExtractProps<typeof Card>['padding'];
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
  container?: HTMLElement;
  /**
   * The `aria-label` for the Popup close button.
   */
  closeButtonAriaLabel?: string;
  // temp
  targetRef?: React.RefObject<HTMLButtonElement>;
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
  background: 'rgba(0,0,0,0.65)',
  animationName: `${fadeIn}`,
  animationDuration: '0.3s',
  // Allow overriding of animation in special cases
  '.wd-no-animation &': {
    animation: 'none',
  },
});

// This centering container helps fix an issue with Chrome. Chrome doesn't normally do subpixel
// positioning, but seems to when using flexbox centering. This messes up Popper calculations inside
// the Modal. The centering container forces a "center" pixel calculation by making sure the width
// is always an even number
const CenteringContainer = styled('div')({
  height: '100vh',
  display: 'flex',
  position: 'absolute',
  left: 0,
  top: 0,
  alignItems: 'center',
  justifyContent: 'center',
});

const getFromWindow = <T extends any>(property: string, defaultValue: T): T => {
  if (typeof window !== undefined) {
    return (window as any)[property] ?? defaultValue;
  }
  return defaultValue;
};

const useWindowSize = (): {width: number; height: number} => {
  const [width, setWidth] = React.useState(getFromWindow('innerWidth', 0));
  const [height, setHeight] = React.useState(getFromWindow('innerHeight', 0));

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  React.useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {width, height};
};

const useReturnFocus = (model: PopupModel) => {
  React.useEffect(() => {
    const element = (model.state.returnFocusRef || model.state.targetRef).current;
    return () => {
      // if the overlay was clicked, focus will be returning to body. Wait until after that happens,
      // then redirect it
      requestAnimationFrame(() => {
        changeFocus(element);
      });
    };
  }, [model.state.returnFocusRef, model.state.targetRef]);
};

const ModalContent = ({
  ariaLabel,
  width = ModalWidth.s,
  padding = 'l',
  container,
  handleClose,
  children,
  firstFocusRef,
  heading,
  closeButtonAriaLabel,
  targetRef,
  ...elemProps
}: ModalContentProps) => {
  const model = usePopupModel({
    initialVisibility: 'visible',
    onHide: handleClose,
    shouldHide({data}) {
      function isKeyboardEvent(event: object): event is KeyboardEvent {
        return 'key' in event;
      }
      // Don't hide if event.key was escape and `handleClose` is not defined
      if (
        data?.event &&
        isKeyboardEvent(data.event) &&
        !handleClose &&
        (data.event.key === 'Escape' || data.event.key === 'Esc')
      ) {
        return false;
      }
      return true;
    },
    initialFocusRef: firstFocusRef,
    returnFocusRef: targetRef,
  });

  const centeringRef = React.useRef<HTMLDivElement>(null);
  const [tabIndex, setTabIndex] = React.useState(handleClose || firstFocusRef ? undefined : 0);
  const onBlur = () => setTabIndex(undefined);

  const stackRef = usePopupStack(model.state.stackRef);
  useCloseOnEscape(model);
  useFocusTrap(model);
  useAssistiveHideSiblings(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useDisableBodyScroll(model);

  useMount(() => {
    // We don't use `useCloseOnOutsideClick` directly, so we add this data attribute manually
    stackRef.current?.setAttribute('data-behavior-click-outside-close', 'topmost');
  });

  // special handling for clicking on the overlay
  const onOverlayClick = (event: React.MouseEvent<HTMLElement>) => {
    // Detect clicks only on the centering wrapper element
    if (!model.state.stackRef.current) {
      return;
    }
    const elements = PopupStack.getElements()
      .sort((a, b) => Number(a.style.zIndex) - Number(b.style.zIndex))
      .filter(e => e.getAttribute('data-behavior-click-outside-close') === 'topmost');
    if (
      elements.length &&
      elements[elements.length - 1] === stackRef.current &&
      event.target === centeringRef.current
    ) {
      handleClose?.();
      changeFocus((model.state.returnFocusRef || model.state.targetRef).current);
    }
  };
  const windowSize = useWindowSize();

  const content = (
    <Container {...elemProps}>
      <CenteringContainer
        ref={centeringRef}
        style={{width: windowSize.width % 2 === 1 ? 'calc(100vw - 1px)' : '100vw'}}
        onMouseDown={onOverlayClick}
      >
        <Popup.Card
          model={model}
          width={width}
          padding={padding}
          aria-modal={true}
          aria-label={ariaLabel}
        >
          <Popup.Heading model={model} tabIndex={tabIndex} onBlur={onBlur}>
            {heading}
          </Popup.Heading>
          {handleClose ? (
            <Popup.CloseIcon model={model} aria-label={closeButtonAriaLabel || 'Close'} />
          ) : null}
          <Popup.Body>{children}</Popup.Body>
        </Popup.Card>
      </CenteringContainer>
    </Container>
  );

  // only render something on the client
  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(content, container || stackRef.current!);
  } else {
    return null;
  }
};

export default ModalContent;
