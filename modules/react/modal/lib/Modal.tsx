import * as React from 'react';
import {PopupPadding, usePopupModel, usePopupTargetButton} from '@workday/canvas-kit-react/popup';
import ModalContent, {ModalContentProps} from './ModalContent';

export enum ModalWidth {
  s = '440px',
  m = '800px',
}

export interface ModalProps extends Omit<ModalContentProps, 'padding' | 'width' | 'container'> {
  padding?: PopupPadding;
  width?: ModalWidth;
  container?: HTMLElement;
}

const Modal = ({
  model,
  padding = PopupPadding.l,
  width = ModalWidth.s,
  container,
  ...modalContentProps
}: ModalProps): JSX.Element | null =>
  // Only render if on the client and `open` is `true`
  model.state.visible && typeof window !== 'undefined' ? (
    <ModalContent
      model={model}
      container={container}
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
  const model = usePopupModel();
  const targetProps = usePopupTargetButton(model, {}, null);

  return {
    targetProps,
    closeModal: model.events.hide,
    modalProps: {
      open: model.state.visible,
      handleClose: model.events.hide,
      model,
    },
  };
}
