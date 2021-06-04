import * as React from 'react';
import ModalContent, {ModalContentProps} from './ModalContent';

export enum ModalWidth {
  s = '440px',
  m = '800px',
}

export interface ModalProps extends Omit<ModalContentProps, 'width' | 'container'> {
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
  width = ModalWidth.s,
  container,
  ...modalContentProps
}: ModalProps): JSX.Element | null =>
  // Only render if on the client and `open` is `true`
  open && typeof window !== 'undefined' ? (
    <ModalContent container={container} width={width} {...modalContentProps} />
  ) : null;

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
 *       <SecondaryButton {...targetProps}>Delete Item</SecondaryButton>
 *       <Modal heading='Delete Item' {...modalProps}>
 *         Are you sure?
 *         <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
 *       </Modal>
 *     </>
 *   )
 * }
 */
export function useModal() {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  return {
    targetProps: {
      ref,
      onClick() {
        setOpen(true);
      },
    },
    closeModal() {
      setOpen(false);
    },
    modalProps: {
      targetRef: ref,
      open,
      handleClose() {
        setOpen(false);
      },
    },
  };
}
