import * as React from 'react';
import styled from 'react-emotion';
import {keyframes} from 'emotion';
import FocusTrap from 'focus-trap-react';

import {TransformOrigin, FocusFirstFocusable} from '@workday/canvas-kit-react-common';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';

export enum ModalWidth {
  s = '440px',
  m = '800px',
}

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * This will add a `data-testid` attribute to the Popup component, not the container
   */
  testId?: string;
  open: boolean;
  padding: PopupPadding;
  transformOrigin: TransformOrigin;
  width: ModalWidth;
  /**
   * Optional callback for the Modal handling closing. If this callback is provided
   */
  handleClose?: () => void;
  /**
   * Accessibility specifications state modals should be close when the escape key is pressed.
   * However, we cannot guarantee that it is safe to simply bind an event listener and close in all
   * cases. Some applications may use a Popup manager to make sure the correct popup is receiving
   * the close command. If your application uses custom popup stacking, do not set this to true.
   * Set this to true for simple applications and the modal will close when the escape key is pressed.
   */
  closeOnEscape: boolean;
  heading: React.ReactNode;
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

export default class Modal extends React.Component<ModalProps> {
  private modalRef = React.createRef<HTMLDivElement>();

  static Padding = PopupPadding;
  static Width = ModalWidth;
  static defaultProps = {
    open: false,
    padding: Modal.Padding.l,
    width: Modal.Width.s,
    closeOnEscape: false,
    transformOrigin: {
      horizontal: 'center',
      vertical: 'top',
    },
  };

  private handleKeydown = (event: KeyboardEvent) => {
    if (this.props.closeOnEscape && this.props.handleClose && event.keyCode === 27) {
      this.props.handleClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  private handleOutsideClick = (handleClose?: () => void, e: React.MouseEvent<HTMLDivElement>) => {
    const {target} = e;
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
      transformOrigin,
      testId,
      ...elemProps
    } = this.props;
    return (
      open && (
        <Container onClick={e => this.handleOutsideClick(handleClose, e)} {...elemProps}>
          <FocusTrap focusTrapOptions={{clickOutsideDeactivates: true}}>
            <Popup
              popupRef={this.modalRef}
              width={width}
              heading={heading}
              handleClose={handleClose}
              padding={padding}
              transformOrigin={transformOrigin}
              data-testid={testId}
            >
              <FocusFirstFocusable containerRef={this.modalRef} />
              {this.props.children}
            </Popup>
          </FocusTrap>
        </Container>
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
  const buttonRef = React.useRef<HTMLButtonElement>() as React.RefObject<HTMLButtonElement>; // cast to keep buttonRef happy

  return {
    targetProps: {
      onClick() {
        setOpen(true);
      },
      buttonRef,
    },
    closeModal() {
      setOpen(false);
    },
    modalProps: {
      open,
      handleClose() {
        setOpen(false);
        if (buttonRef.current) {
          buttonRef.current.focus();
        }
      },
    },
  };
}
