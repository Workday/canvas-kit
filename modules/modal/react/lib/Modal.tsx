import * as React from 'react';
import {PopupPadding} from '@workday/canvas-kit-react-popup';
import ModalContent, {ModalContentProps} from './ModalContent';

export enum ModalWidth {
  s = '440px',
  m = '800px',
}

export interface ModalProps extends Omit<ModalContentProps, 'padding' | 'width' | 'container'> {
  padding?: PopupPadding;
  width?: ModalWidth;
  container?: HTMLElement;
  /**
   * If true, set the Modal to the open state.
   * @default false
   */
  open: boolean;
}

const Modal = ({
  open = false,
  padding = PopupPadding.l,
  width = ModalWidth.s,
  container,
  ...modalContentProps
}: ModalProps): JSX.Element | null =>
  // Only render if on the client and `open` is `true`
  open && typeof window !== 'undefined' ? (
    <ModalContent
      container={container || document.body}
      padding={padding}
      width={width}
      {...modalContentProps}
    />
  ) : null;

Modal.Padding = PopupPadding;
Modal.Width = ModalWidth;

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
