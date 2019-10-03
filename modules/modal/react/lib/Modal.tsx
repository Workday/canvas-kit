import * as React from 'react';
import styled from 'react-emotion';
import {keyframes} from 'emotion';
import FocusTrap from 'focus-trap-react';

import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';

export enum ModalWidth {
  s = '440px',
  m = '800px',
}

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
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
});

const transformOrigin = {
  horizontal: 'center',
  vertical: 'bottom',
} as const;

function onInitialFocus(
  modalEl: HTMLElement | null,
  firstFocusEl: HTMLElement | null = null
): HTMLElement {
  if (firstFocusEl) {
    return firstFocusEl;
  } else {
    const firstFocusable = modalEl && modalEl.querySelector<HTMLElement>('[aria-label=Close],h3');
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
}

export default class Modal extends React.Component<ModalProps> {
  private modalRef = React.createRef<HTMLDivElement>();

  static Padding = PopupPadding;
  static Width = ModalWidth;
  static defaultProps = {
    open: false,
    padding: Modal.Padding.l,
    width: Modal.Width.s,
    closeOnEscape: true,
  };

  private handleKeydown = (event: KeyboardEvent) => {
    if (
      this.props.closeOnEscape &&
      this.props.handleClose &&
      (event.key === 'Esc' || event.key === 'Escape')
    ) {
      this.props.handleClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  private handleOutsideClick = (
    handleClose: (() => void) | undefined,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const {target} = event;
    const modalNode = this.modalRef.current;
    if (modalNode && handleClose) {
      if (!modalNode.contains(target as Node)) {
        handleClose();
      }
    }
  };

  public render() {
    const {
      open,
      handleClose,
      padding,
      width,
      heading,
      children,
      closeOnEscape,
      firstFocusRef: firstFocusableRef,
      ...elemProps
    } = this.props;
    
    return (
      open && (
        <FocusTrap
          focusTrapOptions={{
            initialFocus: () =>
              onInitialFocus(this.modalRef.current, firstFocusableRef && firstFocusableRef.current),
          }}
        >
          <Container onClick={e => this.handleOutsideClick(handleClose, e)} {...elemProps}>
            <Popup
              popupRef={this.modalRef}
              width={width}
              heading={heading}
              handleClose={handleClose}
              padding={padding}
              transformOrigin={transformOrigin}
            >
              {children}
            </Popup>
          </Container>
        </FocusTrap>
      )
    );
  }
}

/**
 * Convenience hook to set up props for both a target and the modal component.
 * @returns An object containing convenience variables to mix into component parts of a Modal
 * @example
 * const myComponent = () => {
 *   const {targetProps, modalProps, closeModal} = useModal();
 *
 *   return (
 *     <>
 *       <Button {...targetProps}>Delete Item</Button>
 *       <Modal heading='Delete Item' {...modalProps}>
 *         Are you sure?
 *         <Button onClick={closeModal}>Cancel</Button>
 *       </Modal>
 *     </>
 *   )
 * }
 */
export function useModal() {
  const [open, setOpen] = React.useState(false);

  return {
    targetProps: {
      onClick() {
        setOpen(true);
      },
    },
    closeModal() {
      setOpen(false);
    },
    modalProps: {
      open,
      handleClose() {
        setOpen(false);
      },
    },
  };
}
