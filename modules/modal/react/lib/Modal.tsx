import * as React from 'react';
import {PopupPadding} from '@workday/canvas-kit-react-popup';
import ModalContent, {ModalContentProps} from './ModalContent';

export enum ModalWidth {
  s = '440px',
  m = '800px',
}

export interface ModalProps extends ModalContentProps {
  open: boolean;
}

const Modal = ({
  open,
  shouldUsePortal = false,
  ...modalContentProps
}: ModalProps): JSX.Element | null => {
  if (process.env.NODE_ENV !== 'production') {
    React.useEffect(() => {
      if (shouldUsePortal === false) {
        console.warn(
          `Deprecation: @workday/canvas-kit-react Modal::shouldUsePortal should be set to 'true'. This fix is for accessibility, but may visually break your application if zIndex is used on a parent element to the Modal instead of the Modal component directly. Please set this boolean and fix any visual breakages. This flag will be removed in v4`
        );
      }
    }, []);
  }
  return open ? <ModalContent shouldUsePortal={shouldUsePortal} {...modalContentProps} /> : null;
};

Modal.Padding = PopupPadding;
Modal.Width = ModalWidth;

Modal.defaultProps = {
  open: false,
  padding: Modal.Padding.l,
  width: Modal.Width.s,
  closeOnEscape: true,
};

export default Modal;

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
