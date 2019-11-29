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

const Modal = ({open, ...modalContentProps}: ModalProps): JSX.Element | null =>
  open ? <ModalContent {...modalContentProps} /> : null;

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
